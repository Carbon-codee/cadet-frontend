import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaShip, FaUserFriends, FaGraduationCap, FaBullseye, FaArrowRight, FaLanguage } from 'react-icons/fa';
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

    const [data, setData] = useState({
        totalInternships: 0,
        totalApplicants: 0,
        avgGpa: "0.00",
        avgEngScore: 0,
        avgEngLabel: "-",
        classDistribution: {},
        recentApplicants: [],
        interestedStudents: [],
        interestedCount: 0,
        totalStudentCount: 1
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStats = async () => {
            try {
                // TEK BİR İSTEK İLE HER ŞEYİ ÇEK
                const res = await API.get('/users/stats/company');
                setData(res.data);
            } catch (error) {
                console.error("Dashboard yüklenemedi", error);
            } finally {
                setLoading(false);
            }
        };

        if (userInfo) loadStats();
    }, [userInfo]);

    if (loading) return <div className="dashboard-loading"><div className="spinner"></div></div>;

    return (
        <div className="company-dashboard-premium">
            <div className="premium-header">
                <div className="header-content">
                    <h1>Hoş Geldin, {userInfo.name} 👋</h1>
                    <p>Bugün şirketiniz için harika bir gün! İstatistikleriniz hazır.</p>
                </div>
                <div className="header-decoration"></div>
            </div>

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

                <div className="premium-card flex-center">
                    <div className="circular-info"><h3>Hedef Kitle</h3><p>Sizi favorileyenler</p></div>
                    <CircularChart value={data.interestedCount} max={data.totalStudentCount} color="#e67e22" label="likes" icon={<FaBullseye />} />
                </div>
            </div>

            <div className="premium-content-grid">
                {/* SINIF DAĞILIMI */}
                <div className="premium-card distribution-section">
                    <div className="card-header"><h3>📊 Aday Sınıf Dağılımı</h3></div>
                    <div className="distribution-bars">
                        {[1, 2, 3, 4].map(year => (
                            <div key={year} className="dist-row">
                                <div className="dist-label">
                                    <span className="year-badge">{year}. Sınıf</span>
                                    <span className="count-badge">{data.classDistribution[year] || 0} Aday</span>
                                </div>
                                <div className="dist-track">
                                    <div className="dist-fill" style={{ width: `${data.totalApplicants > 0 ? ((data.classDistribution[year] || 0) / data.totalApplicants) * 100 : 0}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SON BAŞVURANLAR */}
                <div className="premium-card applicants-section">
                    <div className="card-header">
                        <h3>🕒 Son Başvuranlar</h3>
                        <Link to="/company/applicants" className="view-all">Tümünü Gör <FaArrowRight /></Link>
                    </div>
                    <div className="applicant-list">
                        {data.recentApplicants.length > 0 ? (
                            data.recentApplicants.map((app, index) => (
                                <div key={index} className="applicant-row">
                                    <div className="avatar-gradient">{app.name ? app.name.charAt(0) : 'U'}</div>
                                    <div className="app-info"><h4>{app.name} {app.surname}</h4><span>{app.internshipTitle}</span></div>
                                    <Link to={`/profile/${app._id}`} className="btn-mini-profile">Profil</Link>
                                </div>
                            ))
                        ) : <div className="empty-placeholder">Henüz başvuru yok.</div>}
                    </div>
                </div>

                {/* SİZİ HEDEFLEYENLER */}
                <div className="premium-card full-width-section">
                    <div className="card-header"><h3>🎯 Sizinle Çalışmak İsteyen Yıldız Adaylar</h3></div>
                    {data.interestedStudents.length > 0 ? (
                        <div className="stars-grid">
                            {data.interestedStudents.map((stu) => (
                                <div key={stu._id} className="star-card">
                                    <div className="star-badge">GPA: {stu.gpa}</div>
                                    <div className="star-avatar">{stu.name.charAt(0)}</div>
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
    );
};

export default CompanyDashboard;