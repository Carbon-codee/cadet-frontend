import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { FaUserGraduate, FaCheckCircle, FaClock, FaEye, FaTimes } from 'react-icons/fa';
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

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Öğrenci verileri derleniyor...</div>;

    return (
        <div className="lecturer-page">
            <div className="page-header">
                <div>
                    <h1>Öğrenci Staj Durumları</h1>
                    <p>Öğrencilerin başvuru süreçlerini buradan takip edebilirsiniz.</p>
                </div>
            </div>

            <div className="tracking-table-wrapper">
                {studentsData.length > 0 ? (
                    <table className="modern-table">
                        <thead>
                            <tr><th>ÖĞRENCİ</th><th>BÖLÜM / SINIF</th><th>BAŞVURU</th><th>GENEL DURUM</th><th>İŞLEM</th></tr>
                        </thead>
                        <tbody>
                            {studentsData.map((data) => {
                                const hasApproval = data.applications.some(app => app.status === 'Onaylandı');
                                return (
                                    <tr key={data.info._id}>
                                        <td>
                                            <div className="student-cell">
                                                <div className="student-avatar">{data.info.name.charAt(0)}</div>
                                                <span className="student-name">{data.info.name} {data.info.surname}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ fontWeight: '500' }}>{data.info.department}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#868e96' }}>{data.info.classYear}</div>
                                        </td>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#495057' }}>
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
                    <p style={{ textAlign: 'center', padding: '40px', color: '#999' }}>Henüz başvuru yapmış öğrenci bulunmuyor.</p>
                )}
            </div>

            {/* YENİLENMİŞ POPUP */}
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

                            <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', color: '#002B5B' }}>Başvuru Geçmişi</h4>
                            <table className="history-table">
                                <thead><tr><th>ŞİRKET</th><th>İLAN</th><th>DURUM</th></tr></thead>
                                <tbody>
                                    {selectedStudent.applications.map((app, idx) => (
                                        <tr key={idx}>
                                            <td style={{ fontWeight: 'bold' }}>{app.companyName}</td>
                                            <td>{app.internshipTitle}</td>
                                            <td>
                                                <span style={{
                                                    color: app.status === 'Onaylandı' ? '#27ae60' :
                                                        app.status === 'Reddedildi' ? '#c0392b' : '#f39c12',
                                                    fontWeight: 'bold', fontSize: '0.85rem'
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
        </div>
    );
};

export default LecturerStudentTrackingPage;