import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './CompanyApplicationsHub.css'; // YENİ CSS DOSYASI BAĞLANDI

const CompanyApplicationsHub = () => {
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userInfo } = useAuth();

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const { data } = await API.get('/internships');
                const myInternships = data.filter(item => item.company?._id === userInfo._id);
                setInternships(myInternships);
            } catch (error) {
                console.error("İlanlar çekilemedi", error);
            } finally {
                setLoading(false);
            }
        };

        if (userInfo) {
            fetchInternships();
        }
    }, [userInfo]);

    if (loading) return <div style={{ padding: "20px", textAlign: "center" }}>Yükleniyor...</div>;

    return (
        <div className="applications-hub-page">
            <div className="hub-header">
                <div>
                    <h1>Gelen Başvurular</h1>
                    <p>Hangi ilana gelen adayları incelemek istiyorsunuz?</p>
                </div>
            </div>

            <div className="hub-list">
                {internships.length > 0 ? (
                    internships.map(internship => (
                        <div key={internship._id} className="hub-card">
                            <div className="hub-info">
                                <h3>{internship.title}</h3>
                                <div className="hub-meta">
                                    <span>📅 {new Date(internship.startDate || Date.now()).toLocaleDateString()}</span>
                                    <span>
                                        👤 <strong>{internship.applicants.length}</strong> Aday Başvurdu
                                    </span>
                                </div>
                            </div>
                            <div className="hub-actions">
                                <Link to={`/company/applicants/${internship._id}`} className="review-btn">
                                    Adayları İncele →
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-hub">
                        <h3>Henüz aktif bir ilanınız yok.</h3>
                        <p>Başvuru alabilmek için önce ilan oluşturmalısınız.</p>
                        <Link to="/company/create-internship" style={{ color: '#2ecc71', fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>
                            İlan Oluştur
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompanyApplicationsHub;