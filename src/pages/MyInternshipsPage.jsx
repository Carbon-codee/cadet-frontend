import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaEye, FaPlus } from 'react-icons/fa';
import './MyInternshipsPage.css';

const MyInternshipsPage = () => {
    const [myInternships, setMyInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userInfo } = useAuth();

    useEffect(() => {
        const fetchMyInternships = async () => {
            if (!userInfo) return;
            try {
                // Şirketin KENDİ ilanlarını çeken özel rota
                const { data } = await API.get('/internships/company/mine');
                setMyInternships(data);
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

            <div className="internships-grid">
                {myInternships.length > 0 ? (
                    myInternships.map(internship => (
                        <Link
                            to={`/internships/${internship._id}`}
                            key={internship._id}
                            className="internship-card"
                            // Eğer pasifse biraz soluk göster ve kenarlığı değiştir
                            style={{
                                opacity: internship.isActive ? 1 : 0.6,
                                border: internship.isActive ? '1px solid #f0f0f0' : '2px dashed #ccc',
                                background: internship.isActive ? 'white' : '#f9f9f9'
                            }}
                        >
                            <div className="card-badge"
                                style={{
                                    background: internship.isActive ? '#e3f2fd' : '#ffebee',
                                    color: internship.isActive ? '#1976d2' : '#c62828'
                                }}>
                                {internship.isActive ? 'Yayında' : 'Yayından Kaldırıldı'}
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
                                </div>
                            </div>

                            <div className="card-footer">
                                <div className="applicant-count">
                                    👥 <strong>{internship.applicants?.length || 0}</strong> Başvuru
                                </div>
                                <span className="edit-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <FaEye /> Detaylar
                                </span>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="empty-state">
                        <p>Henüz hiç ilan yayınlamadınız.</p>
                        <Link to="/company/create-internship" className="create-btn">İlk İlanını Oluştur</Link>
                    </div>
                )}

                {/* Yeni Ekle Kartı */}
                <Link to="/company/create-internship" className="internship-card add-new-card">
                    <div className="add-icon"><FaPlus /></div>
                    <span>Yeni İlan</span>
                </Link>
            </div>
        </div>
    );
};

export default MyInternshipsPage;