import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import {
    FaShip, FaUserFriends, FaGraduationCap, FaBullseye,
    FaArrowRight, FaLanguage, FaStar, FaBriefcase, FaPlus, FaUsers, FaAnchor, FaCogs
} from 'react-icons/fa';
import './CompanyDashboard.css';

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

const CompanyDashboard = () => {
    const { userInfo } = useAuth();

    // Tab States - Varsayılan: Deck (Güverte)
    const [applicantTab, setApplicantTab] = useState('deck');
    const [distTab, setDistTab] = useState('deck');

    const [data, setData] = useState({
        totalInternships: 0,
        totalApplicants: 0,
        avgGpa: "0.00",
        avgEngScore: 0,
        avgEngLabel: "-",
        // Varsayılan boş objeler (Backend yapısına uygun)
        classDistribution: { deck: {}, engine: {} },
        recentApplicants: { deck: [], engine: [] },
        interestedStudents: [],
        interestedCount: 0,
        totalStudentCount: 1
    });

    const [myInternships, setMyInternships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAllData = async () => {
            try {
                setLoading(true);
                // 1. İstatistikleri çek
                const statsRes = await API.get('/users/stats/company');
                // console.log("Stats Data:", statsRes.data); // Debug için açılabilir
                setData(statsRes.data);

                // 2. İlanları çek (Düzeltilmiş Endpoint)
                try {
                    const internshipsRes = await API.get('/internships/company/mine');
                    setMyInternships(internshipsRes.data);
                } catch (err) {
                    console.warn("İlanlar çekilemedi", err);
                }

            } catch (error) {
                console.error("Dashboard yüklenemedi", error);
            } finally {
                setLoading(false);
            }
        };

        if (userInfo) loadAllData();
    }, [userInfo]);

    if (loading) return <div className="dashboard-loading"><div className="spinner"></div></div>;

    // Tab Render Helper
    const renderTabs = (activeTab, setActiveTab) => (
        <div className="dashboard-tabs">
            <button
                className={`tab-btn ${activeTab === 'deck' ? 'active' : ''}`}
                onClick={() => setActiveTab('deck')}
                title="Güverte Bölümü"
            >
                <FaAnchor /> Güverte
            </button>
            <button
                className={`tab-btn ${activeTab === 'engine' ? 'active' : ''}`}
                onClick={() => setActiveTab('engine')}
                title="Makine Bölümü"
            >
                <FaCogs /> Makine
            </button>
        </div>
    );

    return (
        <div className="company-dashboard-layout">
            {/* --- SIDEBAR --- */}
            <aside className="dashboard-sidebar company-sidebar">
                <div className="profile-section">
                    <div className="profile-img-container company-img">
                        <span className="profile-initials">
                            {userInfo?.name?.charAt(0) || 'C'}{userInfo?.name?.charAt(1)?.toUpperCase() || ''}
                        </span>
                    </div>
                    <h3 className="profile-name">{userInfo?.name}</h3>
                    <p className="profile-role">Kurumsal Hesap</p>

                    <div className="xp-badge company-badge">
                        <FaShip className="xp-icon" />
                        <span>Partner</span>
                    </div>
                </div>

                <div className="sidebar-divider"></div>

                <div className="curriculum-section">
                    <div className="section-header-row">
                        <h4 className="section-title">Yayındaki İlanlar</h4>
                        <Link to="/company/create-internship" className="add-btn-mini" title="Yeni İlan Ekle"><FaPlus /></Link>
                    </div>

                    {myInternships.length === 0 ? (
                        <div className="no-plan-text">
                            <p>Henüz ilanınız yok.</p>
                            <Link to="/company/create-internship">İlk ilanınızı oluşturun</Link>
                        </div>
                    ) : (
                        <div className="module-list-scroll">
                            {myInternships.map((ad) => (
                                <Link to={`/company/applicants?internshipId=${ad._id}`} key={ad._id} className="sidebar-module-item company-item">
                                    <div className="module-status-indicator">
                                        <FaBriefcase style={{ color: '#0ea5e9' }} />
                                    </div>
                                    <div className="module-info">
                                        <span className="day-number">{ad.location || 'Konum'}</span>
                                        <span className="module-topic-truncate">{ad.title}</span>
                                    </div>
                                    {ad.applicants && ad.applicants.length > 0 && <span className="applicant-badge">{ad.applicants.length}</span>}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="dashboard-main">
                <header className="main-header">
                    <div>
                        <h1 className="welcome-title">Hoş Geldin, {userInfo.name} 👋</h1>
                        <p className="welcome-subtitle">
                            Şirket performans özeti ve başvuru analizleri.
                        </p>
                    </div>
                    <div className="header-actions">
                        <Link to="/company/create-internship" className="action-btn secondary">
                            <FaPlus /> Yeni İlan Oluştur
                        </Link>
                    </div>
                </header>

                <div className="dashboard-content-grid">

                    {/* ÜST İSTATİSTİK KARTLARI (GRID) */}
                    <div className="premium-stats-grid">
                        <div className="premium-card stat-card-hover">
                            <div className="card-top"><div><h3>Aktif İlanlar</h3><span className="trend positive">Yayında</span></div><div className="icon-box blue"><FaShip /></div></div>
                            <div className="big-number">{data.totalInternships}</div>
                            <div className="progress-mini"><div className="bar" style={{ width: '70%', background: '#3498db' }}></div></div>
                        </div>

                        <div className="premium-card stat-card-hover">
                            <div className="card-top"><div><h3>Toplam Başvuru</h3><span className="trend positive">↗ Yükselişte</span></div><div className="icon-box green"><FaUserFriends /></div></div>
                            <div className="big-number">{data.totalApplicants}</div>
                            <div className="progress-mini"><div className="bar" style={{ width: `${Math.min(data.totalApplicants * 10, 100)}%`, background: '#27ae60' }}></div></div>
                        </div>

                        <div className="premium-card flex-center">
                            <div className="circular-info"><h3>Ortalama GPA</h3><p>Akademik başarı</p></div>
                            <CircularChart value={data.avgGpa} max={4} color="#8e44ad" label="gpa" icon={<FaGraduationCap />} />
                        </div>

                        <div className="premium-card flex-center">
                            <div className="circular-info"><h3>İngilizce</h3><p>Ortalama seviye</p></div>
                            <CircularChart value={data.avgEngScore} max={6} color="#1abc9c" label="eng" icon={<FaLanguage />} textOverride={data.avgEngLabel} />
                        </div>
                    </div>

                    {/* ALT DETAY GRID'İ */}
                    <div className="premium-content-grid">
                        {/* SON BAŞVURANLAR */}
                        <div className="premium-card applicants-section">
                            <div className="card-header">
                                <h3>🕒 Son Başvuranlar</h3>
                                {renderTabs(applicantTab, setApplicantTab)}
                            </div>
                            <div className="applicant-list">
                                {/* Güvenli Erişim: data.recentApplicants[applicantTab] var mı kontrol et */}
                                {data.recentApplicants &&
                                    data.recentApplicants[applicantTab] &&
                                    data.recentApplicants[applicantTab].length > 0 ? (
                                    data.recentApplicants[applicantTab].map((app, index) => (
                                        <div key={index} className="applicant-row">
                                            <div className="avatar-gradient">{app.name ? app.name.charAt(0) : 'U'}</div>
                                            <div className="app-info"><h4>{app.name} {app.surname}</h4><span>{app.internshipTitle}</span></div>
                                            <Link to={`/profile/${app._id}`} className="btn-mini-profile">Profil</Link>
                                        </div>
                                    ))
                                ) : (
                                    <div className="empty-placeholder">
                                        {applicantTab === 'deck' ? 'Güverte' : 'Makine'} bölümünden henüz başvuru yok.
                                    </div>
                                )}
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                <Link to="/company/applicants" className="view-all" style={{ justifyContent: 'center' }}>Tüm Başvuruları Gör <FaArrowRight /></Link>
                            </div>
                        </div>

                        {/* SINIF DAĞILIMI */}
                        <div className="premium-card distribution-section">
                            <div className="card-header">
                                <h3>📊 Aday Sınıf Dağılımı</h3>
                                {renderTabs(distTab, setDistTab)}
                            </div>
                            <div className="distribution-bars">
                                {[1, 2, 3, 4].map(year => {
                                    // Güvenli Erişim
                                    const distMap = data.classDistribution && data.classDistribution[distTab] ? data.classDistribution[distTab] : {};
                                    const count = distMap[year] || 0;

                                    // Toplam hesaplama (sadece o departman için)
                                    const totalInDept = Object.values(distMap).reduce((a, b) => a + b, 0);

                                    return (
                                        <div key={year} className="dist-row">
                                            <div className="dist-label">
                                                <span className="year-badge">{year}. Sınıf</span>
                                                <span className="count-badge">{count} Aday</span>
                                            </div>
                                            <div className="dist-track">
                                                <div className="dist-fill" style={{ width: `${totalInDept > 0 ? (count / totalInDept) * 100 : 0}%` }}></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* SİZİ HEDEFLEYENLER */}
                        <div className="premium-card full-width-section">
                            <div className="card-header"><h3>🎯 Sizinle Çalışmak İsteyen Yıldız Adaylar</h3></div>
                            {data.interestedStudents && data.interestedStudents.length > 0 ? (
                                <div className="stars-grid">
                                    {data.interestedStudents.map((stu) => (
                                        <div key={stu._id} className="star-card">
                                            <div className="star-badge">GPA: {stu.gpa}</div>
                                            <div className="star-avatar">{stu.name ? stu.name.charAt(0) : 'Ö'}</div>
                                            <h4>{stu.name} {stu.surname}</h4>
                                            <p>{stu.department}</p>
                                            <p className="star-class">{stu.classYear}</p>
                                            <Link to={`/profile/${stu._id}`} className="star-btn">Profili İncele</Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-placeholder-large">
                                    <FaBullseye style={{ fontSize: '3rem', marginBottom: '10px', opacity: '0.3' }} />
                                    <p>Henüz sizi özel olarak hedefleyen bir öğrenci bulunmuyor.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CompanyDashboard;