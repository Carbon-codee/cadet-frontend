import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaChalkboardTeacher, FaUserGraduate, FaBuilding, FaChartPie, FaStar } from 'react-icons/fa';
import './LecturerPages.css';

const CircularScore = ({ value, max, color, label }) => {
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const percentage = (value / max) * 100;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    return (
        <div className="circular-chart-wrapper">
            <svg width="80" height="80" viewBox="0 0 80 80" className="circular-chart">
                <circle className="circular-bg" cx="40" cy="40" r={radius} />
                <circle className="circular-stroke" cx="40" cy="40" r={radius} stroke={color} strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} />
            </svg>
            <div className="chart-center-text" style={{ color: color }}>{label}</div>
        </div>
    );
};

const LecturerDashboard = () => {
    const { userInfo } = useAuth();
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // TEK İSTEK İLE HER ŞEY GELİYOR
                const { data } = await API.get('/users/stats/lecturer');
                setStats(data);
            } catch (error) {
                console.error("Hata:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading || !stats) return <div style={{ padding: 50, textAlign: 'center' }}>Akademik veriler yükleniyor...</div>;

    return (
        <div className="lecturer-dashboard-premium">
            <div className="academic-header">
                <h1>Akademik Komuta Merkezi</h1>
                <p>Sayın <strong>{userInfo.name}</strong>, fakülte yerleştirme istatistikleri aşağıdadır.</p>
                <FaChalkboardTeacher className="header-icon-bg" />
            </div>

            <div className="academic-stats-grid">
                <div className="academic-card flex-row-center">
                    <div className="stat-text"><h3>Yerleşen Öğrenci</h3><span className="value">{stats.totalPlaced}</span></div>
                    <div className="stat-icon-box green"><FaUserGraduate /></div>
                </div>
                <div className="academic-card flex-row-center">
                    <div className="stat-text"><h3>Anlaşmalı Şirket</h3><span className="value">{stats.totalCompanies}</span></div>
                    <div className="stat-icon-box blue"><FaBuilding /></div>
                </div>
                <div className="academic-card flex-row-center">
                    <div className="stat-text"><h3>Ortalama GPA</h3><span className="value" style={{ fontSize: '1.8rem', color: '#8e44ad' }}>{stats.globalAvgGpa}</span></div>
                    <CircularScore value={stats.globalAvgGpa} max={4} color="#8e44ad" label="GPA" />
                </div>
                <div className="academic-card flex-row-center">
                    <div className="stat-text"><h3>Ort. İngilizce</h3><span className="value" style={{ fontSize: '1.8rem', color: '#1abc9c' }}>{stats.globalAvgEngLabel}</span></div>
                    <CircularScore value={stats.globalAvgEng} max={6} color="#1abc9c" label="ENG" />
                </div>
            </div>

            <div className="academic-content-grid">
                <div className="analysis-table-container">
                    <div className="section-title"><FaChartPie /> Şirket Bazlı Detaylı Analiz</div>
                    {stats.companyAnalysis.length > 0 ? (
                        <table className="academic-table">
                            <thead><tr><th>ŞİRKET</th><th>TOPLAM ALIM</th><th>BÖLÜM DAĞILIMI</th><th>ORT. GPA</th><th>ORT. DİL</th></tr></thead>
                            <tbody>
                                {stats.companyAnalysis.map((comp, idx) => (
                                    <tr key={idx}>
                                        <td className="company-name">{comp.name}</td>
                                        <td style={{ fontWeight: 'bold' }}>{comp.count}</td>
                                        <td>{comp.deck > 0 && <span className="badge-dept deck">{comp.deck} Gv.</span>} {comp.engine > 0 && <span className="badge-dept engine">{comp.engine} Mk.</span>}</td>
                                        <td><span className="score-pill">{comp.avgGpa}</span></td>
                                        <td style={{ fontWeight: 'bold' }}>{comp.avgEng}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : <p style={{ textAlign: 'center', padding: '20px' }}>Veri yok.</p>}
                </div>

                <div className="distribution-widget">
                    <div className="section-title">Genel Dağılım</div>
                    <div className="dist-item">
                        <div className="dist-header"><span>Güverte / Makine</span><span>{stats.deptSplit.deck} / {stats.deptSplit.engine}</span></div>
                        <div className="progress-track"><div className="progress-fill" style={{ width: stats.totalPlaced > 0 ? `${(stats.deptSplit.deck / stats.totalPlaced) * 100}%` : '0%', background: '#3498db' }}></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LecturerDashboard;