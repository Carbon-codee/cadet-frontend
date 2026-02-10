import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import {
    FaChalkboardTeacher, FaUserGraduate, FaBuilding, FaChartPie, FaStar,
    FaArrowRight, FaBullseye, FaUniversity, FaFileAlt, FaUsers, FaPlus, FaLanguage
} from 'react-icons/fa';
import './LecturerPages.css';
import './CompanyDashboard.css'; // Ortak stiller için (CircularChart vb.)

// Grafik Bileşeni (Aynı)
const CircularChart = ({ value, max, color, label, icon, textOverride }) => {
    const safeMax = max > 0 ? max : 1;
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const percentage = (value / safeMax) * 100;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="circular-chart-wrapper">
            <svg width="100" height="100" viewBox="0 0 100 100" className="circular-chart">
                <defs>
                    <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={color} />
                    </linearGradient>
                </defs>
                <circle className="circular-bg" cx="50" cy="50" r={radius} />
                <circle className="circular-stroke" cx="50" cy="50" r={radius} stroke={`url(#grad-${label})`} strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
            </svg>
            <div className="chart-icon" style={{ color: color }}>{icon}</div>
            <div className="chart-value">
                <span className="big-num" style={textOverride ? { fontSize: '1.2rem' } : {}}>{textOverride || value}</span>
                {!textOverride && <span className="small-label">/ {max}</span>}
            </div>
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

    if (loading || !stats) return <div className="dashboard-loading"><div className="spinner"></div></div>;

    return (
        <div className="lecturer-dashboard-layout">
            {/* --- SIDEBAR --- */}
            <aside className="dashboard-sidebar lecturer-sidebar">
                <div className="profile-section">
                    <div className="profile-img-container lecturer-img">
                        {userInfo?.profilePicture && !userInfo.profilePicture.includes('anonymous-avatar-icon') ? (
                            <img
                                src={userInfo.profilePicture}
                                alt={userInfo.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                            />
                        ) : (
                            <span className="profile-initials">
                                {userInfo?.name?.charAt(0) || 'A'}{userInfo?.name?.charAt(1)?.toUpperCase() || ''}
                            </span>
                        )}
                    </div>
                    <h3 className="profile-name headline-font">{userInfo?.name}</h3>
                    <p className="profile-role">Akademisyen Paneli</p>

                    <div className="xp-badge lecturer-badge">
                        <FaChalkboardTeacher className="xp-icon" />
                        <span>Eğitmen</span>
                    </div>
                </div>

                <div className="sidebar-divider"></div>

                <div className="curriculum-section">
                    <div className="section-header-row">
                        <h4 className="section-title">Hızlı Erişim</h4>
                    </div>

                    <div className="module-list-scroll">
                        <Link to="/lecturer/upload" className="sidebar-module-item lecturer-item">
                            <div className="module-status-indicator"><FaPlus style={{ color: '#0ea5e9' }} /></div>
                            <div className="module-info">
                                <span className="day-number">İçerik</span>
                                <span className="module-topic-truncate">Yeni İçerik Yükle</span>
                            </div>
                        </Link>

                        <Link to="/lecturer/student-status" className="sidebar-module-item lecturer-item">
                            <div className="module-status-indicator"><FaUsers style={{ color: '#8b5cf6' }} /></div>
                            <div className="module-info">
                                <span className="day-number">Takip</span>
                                <span className="module-topic-truncate">Öğrenci Durumları</span>
                            </div>
                        </Link>

                        <Link to="/lecturer/resources" className="sidebar-module-item lecturer-item">
                            <div className="module-status-indicator"><FaFileAlt style={{ color: '#2ecc71' }} /></div>
                            <div className="module-info">
                                <span className="day-number">Materyal</span>
                                <span className="module-topic-truncate">Eğitim Materyalleri</span>
                            </div>
                        </Link>

                        <Link to="/lecturer/my-content" className="sidebar-module-item lecturer-item">
                            <div className="module-status-indicator"><FaFileAlt style={{ color: '#f59e0b' }} /></div>
                            <div className="module-info">
                                <span className="day-number">Arşiv</span>
                                <span className="module-topic-truncate">İçeriklerim</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="dashboard-main lecturer-main">
                <header className="main-header">
                    <div>
                        <h1 className="welcome-title">Akademik Komuta Merkezi 🎓</h1>
                        <p className="welcome-subtitle">
                            Fakülte yerleştirme istatistikleri ve performans analizi.
                        </p>
                    </div>
                    <div className="header-actions">
                        <Link to="/lecturer/upload" className="action-btn secondary">
                            <FaPlus /> İçerik Yükle
                        </Link>
                    </div>
                </header>

                <div className="dashboard-content-grid">

                    {/* ÜST İSTATİSTİK KARTLARI (GRID) */}
                    <div className="premium-stats-grid">
                        <div className="premium-card stat-card-hover">
                            <div className="card-top"><div><h3>Yerleşen Öğrenci</h3><span className="trend positive">Başarılı</span></div><div className="icon-box green"><FaUserGraduate /></div></div>
                            <div className="big-number">{stats.totalPlaced}</div>
                            <div className="progress-mini"><div className="bar" style={{ width: '65%', background: '#27ae60' }}></div></div>
                        </div>

                        <div className="premium-card stat-card-hover">
                            <div className="card-top"><div><h3>Anlaşmalı Şirket</h3><span className="trend positive">Partner</span></div><div className="icon-box blue"><FaBuilding /></div></div>
                            <div className="big-number">{stats.totalCompanies}</div>
                            <div className="progress-mini"><div className="bar" style={{ width: '40%', background: '#3498db' }}></div></div>
                        </div>

                        <div className="premium-card flex-center">
                            <div className="circular-info"><h3>Ortalama GPA</h3><p>Genel Başarı</p></div>
                            <CircularChart value={stats.globalAvgGpa} max={4} color="#8e44ad" label="gpa" icon={<FaUniversity />} />
                        </div>

                        <div className="premium-card flex-center">
                            <div className="circular-info"><h3>İngilizce</h3><p>Ortalama Seviye</p></div>
                            <CircularChart value={stats.globalAvgEng} max={6} color="#1abc9c" label="eng" icon={<FaLanguage />} textOverride={stats.globalAvgEngLabel} />
                        </div>
                    </div>

                    {/* ALT DETAY GRID'İ */}
                    <div className="premium-content-grid lecturer-grid">

                        {/* ŞİRKET ANALİZİ */}
                        <div className="premium-card">
                            <div className="card-header">
                                <h3>📊 Şirket Bazlı Detaylı Analiz</h3>
                            </div>
                            <div className="analysis-table-container-clean">
                                {stats.companyAnalysis.length > 0 ? (
                                    <table className="modern-table" style={{ width: '100%' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: 'left', padding: '10px', color: '#64748b' }}>Şirket</th>
                                                <th style={{ textAlign: 'center', padding: '10px', color: '#64748b' }}>Alım</th>
                                                <th style={{ textAlign: 'left', padding: '10px', color: '#64748b' }}>Bölüm Dağılımı</th>
                                                <th style={{ textAlign: 'center', padding: '10px', color: '#64748b' }}>Ort. GPA</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stats.companyAnalysis.map((comp, idx) => (
                                                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                                    <td style={{ padding: '12px 10px', fontWeight: '600', color: '#334155' }}>{comp.name}</td>
                                                    <td style={{ padding: '12px 10px', textAlign: 'center' }}><span className="status-tag success">{comp.count}</span></td>
                                                    <td style={{ padding: '12px 10px' }}>
                                                        {comp.deck > 0 && <span className="badge-dept deck" style={{ marginRight: 5 }}>{comp.deck} Gv.</span>}
                                                        {comp.engine > 0 && <span className="badge-dept engine">{comp.engine} Mk.</span>}
                                                    </td>
                                                    <td style={{ padding: '12px 10px', textAlign: 'center' }}><span className="score-pill">{comp.avgGpa}</span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p style={{ textAlign: 'center', padding: '20px', color: '#94a3b8' }}>Henüz veri bulunmuyor.</p>
                                )}
                            </div>
                        </div>

                        {/* GENEL DAĞILIM */}
                        <div className="premium-card">
                            <div className="card-header">
                                <h3>📈 Genel Dağılım</h3>
                            </div>
                            <div className="distribution-widget-clean">
                                <div className="dist-item">
                                    <div className="dist-header"><span>Güverte / Makine</span><span>{stats.deptSplit.deck} / {stats.deptSplit.engine}</span></div>
                                    <div className="progress-track"><div className="progress-fill" style={{ width: stats.totalPlaced > 0 ? `${(stats.deptSplit.deck / stats.totalPlaced) * 100}%` : '50%', background: '#3498db' }}></div></div>
                                </div>
                                <div className="dist-info" style={{ marginTop: '20px', fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                                    <p>Toplam <strong>{stats.totalPlaced}</strong> öğrenci staj yeri buldu.</p>
                                    <p>Bu dönemki yerleştirme oranı geçen yıla göre <strong>%12 artış</strong> gösterdi.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default LecturerDashboard;