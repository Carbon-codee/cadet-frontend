import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaDollarSign, FaShip, FaUserGraduate } from 'react-icons/fa';
import './InternshipDetailPage.css';

const InternshipDetailPage = () => {
    const { id } = useParams();
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    const [internship, setInternship] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasApplied, setHasApplied] = useState(false);

    useEffect(() => {
        const fetchInternship = async () => {
            // Token yoksa hiç başlamadan işlemi bitir
            if (!userInfo?.token) {
                setLoading(false);
                // Kullanıcı giriş yapmamışsa ProtectedRoute zaten yönlendirecektir.
                // Ama yine de bir güvenlik katmanı olarak burada durabilir.
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const { data } = await API.get(`/internships/${id}`);
                setInternship(data);

                // Başvuranlar dizisindeki user objesinin ID'sini kontrol et
                const applied = data.applicants.some(app => app.user === userInfo._id);
                if (applied) {
                    setHasApplied(true);
                }
            } catch (err) {
                setError('İlan yüklenirken bir hata oluştu veya ilan bulunamadı.');
                console.error("İlan Detay Hatası:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchInternship();
    }, [id, userInfo]);

    const handleApply = async () => {
        if (!window.confirm("Bu ilana başvurmak istediğinizden emin misiniz?")) {
            return;
        }

        try {
            const { data } = await API.post(`/internships/${id}/apply`);
            alert(data.message);
            setHasApplied(true);
        } catch (error) {
            alert(`Hata: ${error.response?.data?.message || 'Bir sorun oluştu.'}`);
        }
    };

    // --- RENDER KONTROLLERİ ---

    if (loading) {
        return <div className="detail-page-container status-message">Yükleniyor...</div>;
    }

    if (error) {
        return <div className="detail-page-container status-message error">{error}</div>;
    }

    // Eğer bu noktadan sonra internship hala null ise, hata vermeden boş ekran göster.
    // Bu, sayfanın tamamen çökmesini engeller.
    if (!internship) {
        return <div className="detail-page-container status-message">İlan verisi bulunamadı.</div>;
    }

    // --- Veri doluysa güvenli render ---
    return (
        <div className="detail-page-container">
            <Link to="/internships" className="back-link">
                <FaArrowLeft /> İlan Listesine Geri Dön
            </Link>

            <div className="internship-detail-card">
                <div className="detail-header">
                    <h1>{internship.title}</h1>
                    {/* Opsiyonel zincirleme (?.) ile company objesinin varlığını kontrol et */}
                    <Link to={`/profile/${internship.company?._id}`} className="company-link">
                        <p className="company-name">{internship.company?.name || 'Şirket Bilgisi Yok'}</p>
                    </Link>
                </div>

                <div className="details-grid">
                    <div className="detail-item"><FaMapMarkerAlt /><span>{internship.location}</span></div>
                    <div className="detail-item"><FaCalendarAlt /><span>{new Date(internship.startDate).toLocaleDateString('tr-TR')}</span></div>
                    <div className="detail-item"><FaClock /><span>{internship.duration}</span></div>
                    <div className="detail-item"><FaDollarSign /><span>${internship.salary} / Ay</span></div>
                    <div className="detail-item"><FaShip /><span>{internship.shipType}</span></div>
                    <div className="detail-item"><FaUserGraduate /><span>{internship.department}</span></div>
                </div>

                <div className="detail-description">
                    <h3>İlan Açıklaması</h3>
                    <p>{internship.description}</p>
                </div>

                <div className="detail-actions">
                    <button
                        className="apply-button"
                        onClick={handleApply}
                        // userInfo'nun varlığını kontrol et
                        disabled={hasApplied || userInfo?.role !== 'student'}
                    >
                        {hasApplied
                            ? 'Başvuruldu'
                            : (userInfo?.role !== 'student' ? 'Sadece Öğrenciler Başvurabilir' : 'Hemen Başvur')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InternshipDetailPage;