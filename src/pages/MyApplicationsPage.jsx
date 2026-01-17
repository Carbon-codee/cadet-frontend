import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { FaCheckCircle, FaTimesCircle, FaClock, FaHourglassHalf } from 'react-icons/fa';
import './MyApplicationsPage.css'; // Stil dosyası aşağıda

const MyApplicationsPage = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                // Yeni oluşturduğumuz backend rotasına istek atıyoruz
                const { data } = await API.get('/users/my-applications');
                setApplications(data);
            } catch (err) {
                console.error("Başvurular yüklenirken hata oluştu:", err);
                setError("Başvurularınız yüklenirken bir hata oluştu.");
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    // Duruma göre ikon ve renk döndüren fonksiyon
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Onaylandı': return <span className="status-badge approved"><FaCheckCircle /> Onaylandı</span>;
            case 'Reddedildi': return <span className="status-badge rejected"><FaTimesCircle /> Reddedildi</span>;
            case 'İnceleniyor': return <span className="status-badge reviewing"><FaHourglassHalf /> İnceleniyor</span>;
            default: return <span className="status-badge pending"><FaClock /> Beklemede</span>;
        }
    };

    if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Yükleniyor...</div>;

    return (
        <div className="my-applications-page">
            <div className="page-header">
                <h1>Başvurularım</h1>
                <p>Yaptığınız staj başvurularının güncel durumunu buradan takip edebilirsiniz.</p>
            </div>

            {error ? (
                <p className="error-message">{error}</p>
            ) : applications.length > 0 ? (
                <div className="applications-list">
                    {applications.map(app => (
                        // Bazen internship silinmiş olabilir, bu yüzden kontrol ekliyoruz
                        app.internship ? (
                            <div key={app._id} className="application-card">
                                <div className="card-main">
                                    <h3>{app.internship.title}</h3>
                                    <p className="company-name">{app.internship.company?.name || 'Bilinmeyen Şirket'}</p>
                                </div>
                                <div className="card-status">
                                    {getStatusBadge(app.status)}
                                </div>
                                <div className="card-action">
                                    <Link to={`/internships/${app.internship._id}`} className="view-details-btn">
                                        İlanı Gör
                                    </Link>
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <h3>Henüz hiç başvuru yapmadınız.</h3>
                    <p>Kariyerinize ilk adımı atmak için ilanları incelemeye başlayın.</p>
                    <Link to="/internships" className="find-internships-btn">İlanları Keşfet</Link>
                </div>
            )}
        </div>
    );
};

export default MyApplicationsPage;