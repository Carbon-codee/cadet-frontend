import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { FaCheck, FaTimes, FaSearch, FaEnvelope, FaStar, FaArrowLeft } from 'react-icons/fa';
import './ApplicantsPage.css'; // CSS dosyasını oluşturacağız

const ApplicantsPage = () => {
    const { id } = useParams();
    const [applicants, setApplicants] = useState([]);
    const [internshipTitle, setInternshipTitle] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // İlan başlığını almak için
                const intRes = await API.get(`/internships/${id}`);
                setInternshipTitle(intRes.data.title);

                // Başvuruları almak için
                const appRes = await API.get(`/internships/${id}/applicants`);
                setApplicants(appRes.data);
            } catch (error) {
                console.error("Hata", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    // Statü Güncelleme (Onayla / Reddet)
    const handleStatus = async (applicantId, newStatus) => {
        try {
            await API.put(`/internships/${id}/applicants/${applicantId}`, { status: newStatus });

            // Listeyi güncelle (Sayfayı yenilemeden)
            setApplicants(prev => prev.map(app =>
                app.user._id === applicantId ? { ...app, status: newStatus } : app
            ));
        } catch (error) {
            alert("İşlem başarısız.");
        }
    };

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;

    return (
        <div className="applicants-page">
            <div className="applicants-container">
                <div className="page-header">
                    <Link to="/company/my-internships" className="back-link"><FaArrowLeft /> İlanlara Dön</Link>
                    <h1>"{internshipTitle}" Başvuruları</h1>
                    <p>Toplam {applicants.length} aday başvurdu.</p>
                </div>

                {applicants.length > 0 ? (
                    <div className="applicants-table-wrapper">
                        <table className="applicants-table">
                            <thead>
                                <tr>
                                    <th>Aday</th>
                                    <th>Bölüm / Sınıf</th>
                                    <th>Akademik</th>
                                    <th>Skor</th>
                                    <th>Durum</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applicants.map((app) => (
                                    <tr key={app._id} className={app.status === 'Onaylandı' ? 'row-approved' : ''}>
                                        <td>
                                            <div className="candidate-profile">
                                                <div className="candidate-avatar">{app.user.name.charAt(0)}</div>
                                                <div>
                                                    <div className="candidate-name">{app.user.name} {app.user.surname}</div>
                                                    <div className="candidate-email">{app.user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="dept-text">{app.user.department}</div>
                                            <div className="class-text">{app.user.classYear}</div>
                                        </td>
                                        <td>
                                            <div className="academic-stats">
                                                <span>⭐ GPA: <strong>{app.user.gpa}</strong></span>
                                                <span>🗣️ Dil: <strong>{app.user.englishLevel}</strong></span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="score-badge">{app.user.successScore}</div>
                                        </td>
                                        <td>
                                            <span className={`status-pill ${app.status.toLowerCase()}`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                <Link to={`/profile/${app.user._id}`} className="btn-view" title="Profili Gör"><FaSearch /></Link>

                                                {app.status !== 'Onaylandı' && (
                                                    <button onClick={() => handleStatus(app.user._id, 'Onaylandı')} className="btn-approve" title="Onayla"><FaCheck /></button>
                                                )}

                                                {app.status !== 'Reddedildi' && (
                                                    <button onClick={() => handleStatus(app.user._id, 'Reddedildi')} className="btn-reject" title="Reddet"><FaTimes /></button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="empty-state">
                        <h3>Henüz başvuru yok.</h3>
                        <p>İlanınızı öne çıkararak daha fazla adaya ulaşabilirsiniz.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplicantsPage;