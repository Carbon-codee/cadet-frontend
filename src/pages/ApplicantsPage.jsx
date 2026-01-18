import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../axiosConfig';
import './ApplicantsPage.css';

const ApplicantsPage = () => {
    const { id } = useParams(); // URL'den İlan ID'sini al
    const [applicants, setApplicants] = useState([]);
    const [internshipTitle, setInternshipTitle] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. İlan detayını al (Başlık için)
                const internshipRes = await API.get(`/internships/${id}`);
                setInternshipTitle(internshipRes.data.title);

                // 2. Başvuranları al
                const applicantsRes = await API.get(`/internships/${id}/applicants`);
                setApplicants(applicantsRes.data);
            } catch (error) {
                console.error("Veriler yüklenemedi", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    // Statü Güncelleme Fonksiyonu
    const handleStatusUpdate = async (applicantId, newStatus) => {
        // Kullanıcıya anlık tepki vermek için UI'ı hemen güncelleyelim (Optimistic Update)
        const originalApplicants = [...applicants];

        // Önce state'i güncelle
        setApplicants(prev => prev.map(app =>
            app.user._id === applicantId ? { ...app, status: newStatus } : app
        ));

        try {
            // Backend'e isteği at
            await API.put(`/internships/${id}/applicants/${applicantId}`, { status: newStatus });
            // Başarılı olursa hiçbir şey yapmaya gerek yok, zaten güncelledik.
        } catch (error) {
            console.error("Statü güncellenemedi", error);
            alert("Bir hata oluştu, değişiklik geri alınıyor.");
            // Hata olursa eski haline döndür
            setApplicants(originalApplicants);
        }
    };

    // Statüye göre renk ve metin döndüren yardımcı fonksiyon
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Onaylandı': return <span className="badge success">Onaylandı ✅</span>;
            case 'Reddedildi': return <span className="badge danger">Reddedildi ❌</span>;
            case 'İnceleniyor': return <span className="badge warning">İnceleniyor ⏳</span>;
            default: return <span className="badge neutral">Beklemede</span>;
        }
    };

    if (loading) return <div className="loading-container">Adaylar yükleniyor...</div>;

    return (
        <div className="applicants-page">
            <div className="header-section">
                <Link to="/company/applicants" className="back-link">← Listeye Dön</Link>
                <h1>"{internshipTitle}" Başvuruları</h1>
                <p>Toplam {applicants.length} aday başvurdu.</p>
            </div>

            <div className="applicants-container">
                {applicants.length > 0 ? (
                    <table className="modern-table">
                        <thead>
                            <tr>
                                <th>Aday Bilgisi</th>
                                <th>Bölüm / Sınıf</th>
                                <th>GPA</th>
                                <th>Mevcut Durum</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicants.map((app) => (
                                <tr key={app.user._id}>
                                    <td>
                                        <div className="user-profile-cell">
                                            <div className="avatar-small">
                                                {app.user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="user-name">{app.user.name} {app.user.surname}</div>
                                                <div className="user-email">{app.user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dept-info">
                                            <span>{app.user.department}</span>
                                            <span className="class-badge">{app.user.classYear}</span>
                                        </div>
                                    </td>
                                    <td style={{ fontWeight: 'bold', color: '#2c3e50' }}>{app.user.gpa || "-"}</td>
                                    <td>
                                        {getStatusBadge(app.status)}
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            {/* Duruma göre butonları göster/gizle */}
                                            {app.status !== 'Onaylandı' && (
                                                <button
                                                    onClick={() => handleStatusUpdate(app.user._id, 'Onaylandı')}
                                                    className="btn-icon btn-approve"
                                                    title="Onayla">
                                                    ✔
                                                </button>
                                            )}

                                            {app.status !== 'Reddedildi' && (
                                                <button
                                                    onClick={() => handleStatusUpdate(app.user._id, 'Reddedildi')}
                                                    className="btn-icon btn-reject"
                                                    title="Reddet">
                                                    ✖
                                                </button>
                                            )}

                                            {app.status === 'Beklemede' && (
                                                <button
                                                    onClick={() => handleStatusUpdate(app.user._id, 'İnceleniyor')}
                                                    className="btn-icon btn-review"
                                                    title="İncelemeye Al">
                                                    👀
                                                </button>
                                            )}

                                            {/* Profil Butonu */}
                                            <Link to={`/profile/${app.user._id}`} className="btn-view-profile">
                                                Profili Gör
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="empty-state">
                        <h3>Henüz başvuru yok.</h3>
                        <p>İlanınızı öne çıkarmayı deneyebilirsiniz.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplicantsPage;