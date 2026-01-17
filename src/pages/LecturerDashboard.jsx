import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaChalkboardTeacher, FaUserGraduate, FaBuilding, FaChartPie, FaStar, FaLanguage } from 'react-icons/fa';
import './LecturerPages.css'; // Yeni CSS

// --- YUVARLAK GRAFİK BİLEŞENİ ---
const CircularScore = ({ value, max, color, label }) => {
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const percentage = (value / max) * 100;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="circular-chart-wrapper">
            <svg width="80" height="80" viewBox="0 0 80 80" className="circular-chart">
                <circle className="circular-bg" cx="40" cy="40" r={radius} />
                <circle
                    className="circular-stroke"
                    cx="40" cy="40" r={radius}
                    stroke={color}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>
            <div className="chart-center-text" style={{ color: color }}>{label}</div>
        </div>
    );
};

const LecturerDashboard = () => {
    const { userInfo } = useAuth();
    const [loading, setLoading] = useState(true);

    // DETAYLI İSTATİSTİKLER
    const [stats, setStats] = useState({
        totalPlaced: 0,
        totalCompanies: 0,
        globalAvgGpa: 0,
        globalAvgEng: 0, // 1-6 arası sayısal
        globalAvgEngLabel: '-',
        companyAnalysis: [], // Tablo verisi
        deptSplit: { deck: 0, engine: 0 }
    });

    // İngilizce Çevirici
    const engLevels = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };
    const engLevelNames = ["-", "A1", "A2", "B1", "B2", "C1", "C2"];

    useEffect(() => {
        const fetchAnalysis = async () => {
            try {
                const { data: allInternships } = await API.get('/internships');

                let placedCount = 0;
                let globalGpaSum = 0;
                let globalEngSum = 0;
                let globalEngCount = 0;
                let companyMap = {};
                let deckTotal = 0;
                let engineTotal = 0;

                for (const internship of allInternships) {
                    if (!internship._id) continue;

                    try {
                        const detailRes = await API.get(`/internships/${internship._id}/applicants`);
                        const applicants = detailRes.data || [];

                        // Sadece ONAYLANAN (Yerleşen) öğrencileri al
                        const accepted = applicants.filter(app => app.status === 'Onaylandı');

                        accepted.forEach(app => {
                            const student = app.user;
                            if (!student) return;

                            placedCount++;
                            const companyName = internship.company?.name || "Bilinmeyen";

                            // Şirket haritasını başlat
                            if (!companyMap[companyName]) {
                                companyMap[companyName] = {
                                    name: companyName,
                                    count: 0,
                                    deck: 0,
                                    engine: 0,
                                    gpaSum: 0,
                                    engSum: 0,
                                    engCount: 0
                                };
                            }

                            // Şirket bazlı veriler
                            companyMap[companyName].count++;

                            // Bölüm
                            const dept = (student.department || "").toLowerCase();
                            if (dept.includes('güverte') || dept.includes('deck')) {
                                companyMap[companyName].deck++;
                                deckTotal++;
                            } else {
                                companyMap[companyName].engine++;
                                engineTotal++;
                            }

                            // GPA
                            let gpaVal = parseFloat(String(student.gpa || 0).replace(',', '.'));
                            if (!isNaN(gpaVal)) {
                                companyMap[companyName].gpaSum += gpaVal;
                                globalGpaSum += gpaVal;
                            }

                            // İngilizce
                            if (student.englishLevel && engLevels[student.englishLevel]) {
                                const score = engLevels[student.englishLevel];
                                companyMap[companyName].engSum += score;
                                companyMap[companyName].engCount++;
                                globalEngSum += score;
                                globalEngCount++;
                            }
                        });

                    } catch (e) { console.warn("Veri çekme hatası", e); }
                }

                // Şirket Analizini Sonuçlandır
                const analysis = Object.values(companyMap).map(c => ({
                    name: c.name,
                    count: c.count,
                    deck: c.deck,
                    engine: c.engine,
                    avgGpa: c.count > 0 ? (c.gpaSum / c.count).toFixed(2) : "0.00",
                    avgEng: c.engCount > 0 ? engLevelNames[Math.round(c.engSum / c.engCount)] : "-"
                }));

                // Global Ortalamalar
                const finalGpa = placedCount > 0 ? (globalGpaSum / placedCount).toFixed(2) : "0.00";
                const finalEngScore = globalEngCount > 0 ? Math.round(globalEngSum / globalEngCount) : 0;

                setStats({
                    totalPlaced: placedCount,
                    totalCompanies: Object.keys(companyMap).length,
                    globalAvgGpa: finalGpa,
                    globalAvgEng: finalEngScore,
                    globalAvgEngLabel: engLevelNames[finalEngScore] || "-",
                    companyAnalysis: analysis,
                    deptSplit: { deck: deckTotal, engine: engineTotal }
                });

            } catch (error) {
                console.error("Dashboard hatası:", error);
            } finally {
                setLoading(false);
            }
        };

        if (userInfo) fetchAnalysis();
    }, [userInfo]);

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Akademik veriler yükleniyor...</div>;

    return (
        <div className="lecturer-dashboard-premium">
            {/* HEADER */}
            <div className="academic-header">
                <h1>Akademik Komuta Merkezi</h1>
                <p>Sayın <strong>{userInfo.name}</strong>, fakülte yerleştirme istatistikleri ve detaylı şirket analiz raporu aşağıdadır.</p>
                <FaChalkboardTeacher className="header-icon-bg" />
            </div>

            {/* İSTATİSTİK KARTLARI (4'LÜ) */}
            <div className="academic-stats-grid">

                {/* 1. Yerleşen Öğrenci */}
                <div className="academic-card flex-row-center">
                    <div className="stat-text">
                        <h3>Yerleşen Öğrenci</h3>
                        <span className="value">{stats.totalPlaced}</span>
                    </div>
                    <div className="stat-icon-box green"><FaUserGraduate /></div>
                </div>

                {/* 2. Anlaşmalı Şirket */}
                <div className="academic-card flex-row-center">
                    <div className="stat-text">
                        <h3>Anlaşmalı Şirket</h3>
                        <span className="value">{stats.totalCompanies}</span>
                    </div>
                    <div className="stat-icon-box blue"><FaBuilding /></div>
                </div>

                {/* 3. Ortalama GPA */}
                <div className="academic-card flex-row-center">
                    <div className="stat-text">
                        <h3>Ortalama GPA</h3>
                        <span className="value" style={{ fontSize: '1.8rem', color: '#8e44ad' }}>{stats.globalAvgGpa}</span>
                    </div>
                    <CircularScore value={stats.globalAvgGpa} max={4} color="#8e44ad" label="GPA" />
                </div>

                {/* 4. Ortalama İngilizce */}
                <div className="academic-card flex-row-center">
                    <div className="stat-text">
                        <h3>Ort. İngilizce</h3>
                        <span className="value" style={{ fontSize: '1.8rem', color: '#1abc9c' }}>{stats.globalAvgEngLabel}</span>
                    </div>
                    <CircularScore value={stats.globalAvgEng} max={6} color="#1abc9c" label="ENG" />
                </div>
            </div>

            {/* ORTA BÖLÜM: DETAYLI TABLO VE GRAFİKLER */}
            <div className="academic-content-grid">

                {/* SOL: DETAYLI ŞİRKET TABLOSU */}
                <div className="analysis-table-container">
                    <div className="section-title"><FaChartPie /> Şirket Bazlı Detaylı Analiz</div>

                    {stats.companyAnalysis.length > 0 ? (
                        <table className="academic-table">
                            <thead>
                                <tr>
                                    <th>ŞİRKET</th>
                                    <th>TOPLAM ALIM</th>
                                    <th>BÖLÜM DAĞILIMI</th>
                                    <th>ORT. GPA</th>
                                    <th>ORT. DİL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.companyAnalysis.map((comp, idx) => (
                                    <tr key={idx}>
                                        <td className="company-name">{comp.name}</td>
                                        <td style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{comp.count}</td>
                                        <td>
                                            {comp.deck > 0 && <span className="badge-dept deck">{comp.deck} Güverte</span>}
                                            {comp.engine > 0 && <span className="badge-dept engine">{comp.engine} Makine</span>}
                                        </td>
                                        <td><span className="score-pill">{comp.avgGpa}</span></td>
                                        <td style={{ fontWeight: 'bold', color: '#34495e' }}>{comp.avgEng}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p style={{ textAlign: 'center', color: '#999', padding: '20px' }}>Henüz yerleşme verisi oluşmadı.</p>
                    )}
                </div>

                {/* SAĞ: GENEL DAĞILIMLAR */}
                <div className="distribution-widget">
                    <div className="section-title">Genel Dağılım</div>

                    {/* Bölüm Dağılımı Barı */}
                    <div className="dist-item">
                        <div className="dist-header">
                            <span>Güverte / Makine</span>
                            <span>{stats.deptSplit.deck} / {stats.deptSplit.engine}</span>
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{
                                    width: stats.totalPlaced > 0 ? `${(stats.deptSplit.deck / stats.totalPlaced) * 100}%` : '0%',
                                    background: '#3498db'
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Hızlı Bilgi Notları */}
                    <div style={{ marginTop: '30px', background: '#fff8e1', padding: '15px', borderRadius: '10px', fontSize: '0.9rem', color: '#8d6e63' }}>
                        <strong style={{ display: 'block', marginBottom: '5px' }}><FaStar /> Akademik Not:</strong>
                        Yerleşen öğrencilerin ortalama GPA'sı <strong>{stats.globalAvgGpa}</strong> seviyesindedir.
                        İngilizce seviyesi ise ortalama <strong>{stats.globalAvgEngLabel}</strong> düzeyindedir.
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LecturerDashboard;