import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import {
    FaUserGraduate, FaCheckCircle, FaClock, FaEye, FaTimes,
    FaChalkboardTeacher, FaPlus, FaUsers, FaFileAlt
} from 'react-icons/fa';
import './LecturerPages.css';

const LecturerStudentTrackingPage = () => {
    const { userInfo } = useAuth();
    const [studentsData, setStudentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const { data: allInternships } = await API.get('/internships');
                let studentMap = {};

                if (allInternships && allInternships.length > 0) {
                    for (const internship of allInternships) {
                        if (!internship._id) continue;
                        try {
                            const detailRes = await API.get(`/internships/${internship._id}/applicants`);
                            const applicants = detailRes.data || [];
                            applicants.forEach(app => {
                                const student = app.user;
                                if (!student) return;
                                if (!studentMap[student._id]) {
                                    studentMap[student._id] = { info: student, applications: [] };
                                }
                                studentMap[student._id].applications.push({
                                    companyName: internship.company?.name || "Bilinmeyen",
                                    internshipTitle: internship.title,
                                    status: app.status,
                                    date: app.createdAt
                                });
                            });
                        } catch (err) { console.warn("Veri çekme hatası:", err); }
                    }
                }

                // Objeyi diziye çevir ve İSME GÖRE SIRALA (A-Z)
                const sortedList = Object.values(studentMap).sort((a, b) =>
                    a.info.name.localeCompare(b.info.name)
                );

                setStudentsData(sortedList);

            } catch (error) { console.error("Hata:", error); }
            finally { setLoading(false); }
        };
        fetchStudentData();
    }, []);

    if (loading) return <div className="dashboard-loading"><div className="spinner"></div></div>;

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
                        <h1 className="welcome-title">Öğrenci Staj Durumları 🎓</h1>
                        <p className="welcome-subtitle">
                            Öğrencilerin başvuru süreçlerini ve yerleşme durumlarını buradan takip edebilirsiniz.
                        </p>
                    </div>
                </header>

                <div className="tracking-table-wrapper">
                    {studentsData.length > 0 ? (
                        <table className="modern-table" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{ paddingLeft: '20px' }}>ÖĞRENCİ</th>
                                    <th>BÖLÜM / SINIF</th>
                                    <th style={{ textAlign: 'center' }}>BAŞVURU</th>
                                    <th>GENEL DURUM</th>
                                    <th>İŞLEM</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentsData.map((data) => {
                                    const hasApproval = data.applications.some(app => app.status === 'Onaylandı');
                                    return (
                                        <tr key={data.info._id}>
                                            <td style={{ paddingLeft: '20px' }}>
                                                <div className="student-cell">
                                                    <div className="student-avatar">{data.info.name.charAt(0)}</div>
                                                    <span className="student-name">{data.info.name} {data.info.surname}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{ fontWeight: '500', color: '#334155' }}>{data.info.department}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{data.info.classYear}</div>
                                            </td>
                                            <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#475569' }}>
                                                {data.applications.length}
                                            </td>
                                            <td>
                                                {hasApproval ? (
                                                    <span className="status-tag success"><FaCheckCircle /> Yerleşti</span>
                                                ) : (
                                                    <span className="status-tag warning"><FaClock /> Süreçte</span>
                                                )}
                                            </td>
                                            <td>
                                                <button className="btn-inspect" onClick={() => setSelectedStudent(data)}>
                                                    <FaEye /> İncele
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <div className="empty-placeholder-large">
                            <FaUsers style={{ fontSize: '3rem', color: '#e2e8f0', marginBottom: '1rem' }} />
                            <h3>Henüz Öğrenci Yok</h3>
                            <p>Sisteme kayıtlı veya başvuru yapmış öğrenci bulunmuyor.</p>
                        </div>
                    )}
                </div>

                {/* MODAL */}
                {selectedStudent && (
                    <div className="modal-overlay" onClick={() => setSelectedStudent(null)}>
                        <div className="student-modal" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header-st">
                                <h2>{selectedStudent.info.name} {selectedStudent.info.surname}</h2>
                                <FaTimes className="close-icon-st" onClick={() => setSelectedStudent(null)} size={20} />
                            </div>

                            <div className="modal-body-st">
                                <div className="info-grid-st">
                                    <div className="info-item-st"><label>Bölüm</label><span>{selectedStudent.info.department}</span></div>
                                    <div className="info-item-st"><label>Sınıf</label><span>{selectedStudent.info.classYear}</span></div>
                                    <div className="info-item-st"><label>GPA</label><span>{selectedStudent.info.gpa}</span></div>
                                    <div className="info-item-st"><label>Email</label><span>{selectedStudent.info.email}</span></div>
                                </div>

                                <Link to={`/profile/${selectedStudent.info._id}`} className="submit-button" style={{ width: '100%', justifyContent: 'center', marginBottom: '20px', textDecoration: 'none' }}>
                                    <FaUserGraduate /> Tam Profili Gör
                                </Link>

                                <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', color: '#002B5B', marginBottom: '15px' }}>Başvuru Geçmişi</h4>
                                <table className="history-table">
                                    <thead><tr><th>ŞİRKET</th><th>İLAN</th><th>DURUM</th></tr></thead>
                                    <tbody>
                                        {selectedStudent.applications.map((app, idx) => (
                                            <tr key={idx}>
                                                <td style={{ fontWeight: 'bold', color: '#334155' }}>{app.companyName}</td>
                                                <td style={{ fontSize: '0.9rem', color: '#475569' }}>{app.internshipTitle}</td>
                                                <td>
                                                    <span style={{
                                                        color: app.status === 'Onaylandı' ? '#16a34a' :
                                                            app.status === 'Reddedildi' ? '#dc2626' : '#d97706',
                                                        fontWeight: 'bold', fontSize: '0.8rem',
                                                        background: app.status === 'Onaylandı' ? '#dcfce7' :
                                                            app.status === 'Reddedildi' ? '#fee2e2' : '#fef3c7',
                                                        padding: '2px 8px', borderRadius: '4px'
                                                    }}>
                                                        {app.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default LecturerStudentTrackingPage;