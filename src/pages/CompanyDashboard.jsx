import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaShip, FaUserFriends, FaGraduationCap, FaBullseye, FaArrowRight, FaLanguage } from 'react-icons/fa';
import './CompanyDashboard.css';

// --- YUVARLAK GRAFİK ---
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
                <circle
                    className="circular-stroke"
                    cx="50" cy="50" r={radius}
                    stroke={`url(#grad-${label})`}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>
            <div className="chart-icon" style={{ color: color }}>{icon}</div>
            <div className="chart-value">
                {/* Eğer özel metin (textOverride) varsa onu yaz, yoksa sayıyı yaz */}
                <span className="big-num" style={textOverride ? { fontSize: '1.2rem' } : {}}>{textOverride || value}</span>
                {!textOverride && <span className="small-label">/ {max}</span>}
            </div>
        </div>
    );
};

const CompanyDashboard = () => {
    const { userInfo } = useAuth();
    const [stats, setStats] = useState({
        totalInternships: 0,
        totalApplicants: 0,
        avgGpa: "0.00",
        avgEngScore: 0, // Sayısal ortalama (1-6 arası)
        avgEngLabel: "-", // Metin karşılığı (B1, B2 vb.)
        classDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, other: 0 }
    });
    const [recentApplicants, setRecentApplicants] = useState([]);
    const [interestedStudents, setInterestedStudents] = useState([]);
    const [totalStudents, setTotalStudents] = useState(0);
    const [loading, setLoading] = useState(true);

    // İngilizce Seviye Haritası
    const engLevels = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };
    const engLevelNames = ["-", "A1", "A2", "B1", "B2", "C1", "C2"];

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // 1. Verileri Çek
                const { data: allInternships } = await API.get('/internships');
                const myInternships = allInternships.filter(item => item.company?._id === userInfo._id);

                let totalApps = 0;
                let totalGpaSum = 0;
                let gpaCount = 0;
                let totalEngSum = 0;
                let engCount = 0;
                let classCounts = { 1: 0, 2: 0, 3: 0, 4: 0, other: 0 };
                let allApplicantsList = [];

                const applicantPromises = myInternships.map(internship =>
                    API.get(`/internships/${internship._id}/applicants`)
                        .then(res => ({ title: internship.title, applicants: res.data }))
                        .catch(() => ({ applicants: [] }))
                );

                const results = await Promise.all(applicantPromises);

                results.forEach(item => {
                    totalApps += item.applicants.length;
                    item.applicants.forEach(app => {
                        const student = app.user;
                        if (student) {
                            // GPA Hesapla
                            let gpaVal = parseFloat(String(student.gpa || 0).replace(',', '.'));
                            if (!isNaN(gpaVal) && gpaVal > 0) {
                                totalGpaSum += gpaVal;
                                gpaCount++;
                            }

                            // İngilizce Hesapla
                            if (student.englishLevel && engLevels[student.englishLevel]) {
                                totalEngSum += engLevels[student.englishLevel];
                                engCount++;
                            }

                            // Sınıf Hesapla
                            const match = String(student.classYear).match(/\d+/);
                            if (match) {
                                const year = parseInt(match[0]);
                                if (year >= 1 && year <= 4) classCounts[year]++;
                                else classCounts.other++;
                            }
                            allApplicantsList.push({ ...student, internshipTitle: item.title });
                        }
                    });
                });

                const matchRes = await API.get('/users/company/matches');
                const countRes = await API.get('/users/count/students');

                // İngilizce Ortalamasını Harfe Çevir
                let calculatedEngScore = 0;
                let calculatedEngLabel = "-";

                if (engCount > 0) {
                    calculatedEngScore = totalEngSum / engCount;
                    // En yakın tam sayıya yuvarlayıp listeden karşılığını buluyoruz
                    calculatedEngLabel = engLevelNames[Math.round(calculatedEngScore)] || "-";
                }

                setInterestedStudents(matchRes.data);
                setTotalStudents(countRes.data);

                setStats({
                    totalInternships: myInternships.length,
                    totalApplicants: totalApps,
                    avgGpa: gpaCount > 0 ? (totalGpaSum / gpaCount).toFixed(2) : "0.00",
                    avgEngScore: calculatedEngScore,
                    avgEngLabel: calculatedEngLabel,
                    classDistribution: classCounts
                });

                setRecentApplicants(allApplicantsList.slice(0, 5));

            } catch (error) {
                console.error("Hata:", error);
            } finally {
                setLoading(false);
            }
        };

        if (userInfo) fetchDashboardData();
    }, [userInfo]);

    if (loading) return <div className="dashboard-loading"><div className="spinner"></div></div>;

    return (
        <div className="company-dashboard-premium">
            {/* HERO SECTION */}
            <div className="premium-header">
                <div className="header-content">
                    <h1>Hoş Geldin, {userInfo.name} 👋</h1>
                    <p>Bugün şirketiniz için harika bir gün! İstatistiklerinizi ve adaylarınızı aşağıdan yönetebilirsiniz.</p>
                </div>
                <div className="header-decoration"></div>
            </div>

            {/* İSTATİSTİK KARTLARI */}
            <div className="premium-stats-grid">
                <div className="premium-card stat-card-hover">
                    <div className="card-top">
                        <div><h3>Aktif İlanlar</h3><span className="trend positive">Yayında</span></div>
                        <div className="icon-box blue"><FaShip /></div>
                    </div>
                    <div className="big-number">{stats.totalInternships}</div>
                    <div className="progress-mini"><div className="bar" style={{ width: '70%', background: '#3498db' }}></div></div>
                </div>

                <div className="premium-card stat-card-hover">
                    <div className="card-top">
                        <div><h3>Toplam Başvuru</h3><span className="trend positive">↗ Yükselişte</span></div>
                        <div className="icon-box green"><FaUserFriends /></div>
                    </div>
                    <div className="big-number">{stats.totalApplicants}</div>
                    <div className="progress-mini"><div className="bar" style={{ width: `${Math.min(stats.totalApplicants * 10, 100)}%`, background: '#27ae60' }}></div></div>
                </div>

                {/* GPA KARTI */}
                <div className="premium-card flex-center">
                    <div className="circular-info"><h3>Ortalama GPA</h3><p>Başvuranların akademik başarısı</p></div>
                    <CircularChart
                        value={stats.avgGpa}
                        max={4}
                        color="#8e44ad"
                        label="gpa"
                        icon={<FaGraduationCap />}
                    />
                </div>

                {/* YENİ: İNGİLİZCE KARTI */}
                <div className="premium-card flex-center">
                    <div className="circular-info"><h3>İngilizce</h3><p>Adayların ortalama seviyesi</p></div>
                    <CircularChart
                        value={stats.avgEngScore} // Grafik doluluğu için sayı (örn: 3.5)
                        max={6} // C2 = 6 puan
                        color="#1abc9c" // Turkuaz renk
                        label="eng"
                        icon={<FaLanguage />}
                        textOverride={stats.avgEngLabel} // Ortada "B1" yazacak
                    />
                </div>

                {/* HEDEF KİTLE KARTI */}
                <div className="premium-card flex-center">
                    <div className="circular-info"><h3>Hedef Kitle</h3><p>Sizi favorileyen öğrenciler</p></div>
                    <CircularChart
                        value={interestedStudents.length}
                        max={totalStudents}
                        color="#e67e22"
                        label="likes"
                        icon={<FaBullseye />}
                    />
                </div>
            </div>

            {/* ALT IZGARA */}
            <div className="premium-content-grid">
                {/* SINIF DAĞILIMI */}
                <div className="premium-card distribution-section">
                    <div className="card-header"><h3>📊 Aday Sınıf Dağılımı</h3></div>
                    <div className="distribution-bars">
                        {[1, 2, 3, 4].map(year => (
                            <div key={year} className="dist-row">
                                <div className="dist-label">
                                    <span className="year-badge">{year}. Sınıf</span>
                                    <span className="count-badge">{stats.classDistribution[year]} Aday</span>
                                </div>
                                <div className="dist-track">
                                    <div className="dist-fill" style={{ width: `${stats.totalApplicants > 0 ? (stats.classDistribution[year] / stats.totalApplicants) * 100 : 0}%` }}></div>
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
                        {recentApplicants.length > 0 ? (
                            recentApplicants.map((app, index) => (
                                <div key={index} className="applicant-row">
                                    <div className="avatar-gradient">{app.name ? app.name.charAt(0) : 'U'}</div>
                                    <div className="app-info"><h4>{app.name} {app.surname}</h4><span>{app.internshipTitle}</span></div>
                                    <Link to={`/profile/${app._id}`} className="btn-mini-profile">Profil</Link>
                                </div>
                            ))
                        ) : <div className="empty-placeholder">Henüz başvuru yok.</div>}
                    </div>
                </div>

                {/* YILDIZ ADAYLAR */}
                <div className="premium-card full-width-section">
                    <div className="card-header"><h3>🎯 Sizinle Çalışmak İsteyen Yıldız Adaylar</h3></div>
                    {interestedStudents.length > 0 ? (
                        <div className="stars-grid">
                            {interestedStudents.map((stu) => (
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