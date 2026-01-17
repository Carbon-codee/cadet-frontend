import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { FaUserGraduate, FaInfoCircle, FaCheckCircle, FaTimesCircle, FaClock, FaEye, FaTimes } from 'react-icons/fa';
import './LecturerPages.css';

const LecturerStudentTrackingPage = () => {
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
                        } catch (err) {
                            console.warn("Veri çekme hatası:", err);
                        }
                    }
                }
                setStudentsData(Object.values(studentMap));
            } catch (error) {
                console.error("Hata:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudentData();
    }, []);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Onaylandı': return <span className="badge success" style={{ background: '#d4edda', color: '#155724' }}>Onaylandı <FaCheckCircle /></span>;
            case 'Reddedildi': return <span className="badge danger" style={{ background: '#f8d7da', color: '#721c24' }}>Reddedildi <FaTimesCircle /></span>;
            default: return <span className="badge warning" style={{ background: '#fff3cd', color: '#856404' }}>Beklemede <FaClock /></span>;
        }
    };

    if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Öğrenci verileri derleniyor...</div>;

    return (
        <div className="lecturer-page">
            <div className="page-header">
                <div>
                    <h1>Öğrenci Staj Durumları</h1>
                    <p>Öğrencilerin başvuru süreçlerini ve sonuçlarını buradan takip edebilirsiniz.</p>
                </div>
            </div>
            <div className="content-card">
                {studentsData.length > 0 ? (
                    <table className="modern-table">
                        <thead>
                            <tr><th>ÖĞRENCİ</th><th>BÖLÜM / SINIF</th><th>BAŞVURU SAYISI</th><th>GENEL DURUM</th><th>İŞLEMLER</th></tr>
                        </thead>
                        <tbody>
                            {studentsData.map((data) => {
                                const hasApproval = data.applications.some(app => app.status === 'Onaylandı');
                                return (
                                    <tr key={data.info._id} className="company-row">
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div className="avatar-circle" style={{ width: 35, height: 35, fontSize: '0.9rem' }}>{data.info.name.charAt(0)}</div>
                                                <div style={{ fontWeight: '600', color: '#2c3e50' }}>{data.info.name} {data.info.surname}</div>
                                            </div>
                                        </td>
                                        <td>{data.info.department} <span style={{ color: '#999', fontSize: '0.85rem' }}>({data.info.classYear})</span></td>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold' }}>{data.applications.length}</td>
                                        <td>
                                            {hasApproval ? (
                                                <span style={{ color: '#27ae60', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}><FaCheckCircle /> Yerleşti</span>
                                            ) : (
                                                <span style={{ color: '#e67e22', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}><FaClock /> Süreçte</span>
                                            )}
                                        </td>
                                        <td><button className="action-card-btn" style={{ padding: '6px 12px', fontSize: '0.85rem', width: 'auto', display: 'inline-block' }} onClick={() => setSelectedStudent(data)}><FaEye /> İncele</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <p style={{ textAlign: 'center', padding: '30px', color: '#999' }}>Henüz başvuru yapmış öğrenci bulunmuyor.</p>
                )}
            </div>

            {/* DETAY MODALI (POPUP) */}
            {selectedStudent && (
                <div className="modal-overlay" onClick={() => setSelectedStudent(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px' }}>
                        <div className="modal-header">
                            <h2>{selectedStudent.info.name} {selectedStudent.info.surname}</h2>
                            <button className="close-modal-btn" onClick={() => setSelectedStudent(null)}><FaTimes /></button>
                        </div>
                        <div className="modal-body">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8f9fa', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                                <div>
                                    <p><strong>Bölüm:</strong> {selectedStudent.info.department}</p>
                                    <p><strong>Sınıf:</strong> {selectedStudent.info.classYear}</p>
                                    <p><strong>GPA:</strong> {selectedStudent.info.gpa}</p>
                                    <p><strong>Email:</strong> {selectedStudent.info.email}</p>
                                </div>

                                {/* --- DEĞİŞTİRİLEN KISIM BURASI --- */}
                                <Link to={`/profile/${selectedStudent.info._id}`} className="submit-button" style={{ width: 'auto', padding: '8px 16px', fontSize: '0.9rem', textDecoration: 'none' }}>
                                    <FaUserGraduate /> Tam Profili Gör
                                </Link>
                                {/* --- DEĞİŞİKLİK BİTTİ --- */}

                            </div>
                            <h4>Başvuru Geçmişi</h4>
                            <table className="modern-table" style={{ marginTop: '10px' }}>
                                <thead><tr><th>ŞİRKET</th><th>İLAN</th><th>DURUM</th></tr></thead>
                                <tbody>
                                    {selectedStudent.applications.map((app, idx) => (
                                        <tr key={idx}>
                                            <td style={{ fontWeight: 'bold' }}>{app.companyName}</td>
                                            <td>{app.internshipTitle}</td>
                                            <td>{getStatusBadge(app.status)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LecturerStudentTrackingPage;