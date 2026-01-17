import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './MyInternshipsPage.css';

const MyInternshipsPage = () => {
    const [myInternships, setMyInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userInfo } = useAuth();

    useEffect(() => {
        const fetchMyInternships = async () => {
            if (!userInfo) return;
            try {
                const { data } = await API.get('/internships');
                const filtered = data.filter(internship => internship.company?._id === userInfo._id);
                setMyInternships(filtered);
            } catch (err) {
                console.error("İlanlar yüklenemedi", err);
            } finally {
                setLoading(false);
            }
        };
        fetchMyInternships();
    }, [userInfo]);

    if (loading) return <div className="loading-container">Yükleniyor...</div>;

    return (
        <div className="my-internships-page">
            <div className="page-header">
                <div>
                    <h1>İlan Vitrini</h1>
                    <p>Yayınladığınız ilanları buradan yönetin ve güncelleyin.</p>
                </div>
                <Link to="/company/create-internship" className="create-btn">
                    + Yeni İlan Oluştur
                </Link>
            </div>

            {/* DEĞİŞİKLİK BURADA: scroll-container yerine direkt grid yapısı */}
            {myInternships.length > 0 ? (
                <div className="internships-grid">
                    {myInternships.map(internship => (
                        <Link
                            to={`/company/edit-internship/${internship._id}`}
                            key={internship._id}
                            className="internship-card"
                        >
                            <div className="card-badge">
                                {internship.department}
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">{internship.title}</h3>

                                <div className="card-details">
                                    <div className="detail-item">
                                        <span className="icon">🚢</span>
                                        <span>{internship.shipType}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="icon">📍</span>
                                        <span>{internship.location}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="icon">💵</span>
                                        <span>{internship.salary} $</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="icon">📅</span>
                                        <span>{internship.duration}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer">
                                <div className="applicant-count">
                                    👥 <strong>{internship.applicants.length}</strong> Başvuru
                                </div>
                                <span className="edit-link">Düzenle →</span>
                            </div>
                        </Link>
                    ))}

                    {/* Listenin sonuna "Yeni Ekle" kartı */}
                    <Link to="/company/create-internship" className="internship-card add-new-card">
                        <div className="add-icon">+</div>
                        <span>Yeni İlan</span>
                    </Link>
                </div>
            ) : (
                <div className="empty-state">
                    <p>Henüz hiç ilan yayınlamadınız.</p>
                    <Link to="/company/create-internship" className="create-btn">İlk İlanını Oluştur</Link>
                </div>
            )}
        </div>
    );
};

export default MyInternshipsPage;