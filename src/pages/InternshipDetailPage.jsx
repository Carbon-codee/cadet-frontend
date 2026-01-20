import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import {
    FaCheckCircle, FaUserGraduate, FaHeart, FaArrowLeft, FaBriefcase, FaEdit,
    FaPaperPlane, FaStar, FaLanguage
} from 'react-icons/fa';
import './InternshipDetailPage.css';

const InternshipDetailPage = () => {
    const { id } = useParams();
    const { userInfo } = useAuth();

    const [internship, setInternship] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasApplied, setHasApplied] = useState(false);
    const [scoutData, setScoutData] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const { data } = await API.get(`/internships/${id}`);
                setInternship(data);

                // --- ÖĞRENCİ İSE ---
                if (userInfo?.role === 'student') {
                    const isApplied = data.applicants.some(app =>
                        (app.user === userInfo._id) || (app.user._id === userInfo._id)
                    );
                    setHasApplied(isApplied);
                }

                // --- ŞİRKET İSE ---
                if (userInfo?.role === 'company') {
                    const companyId = data.company._id || data.company;
                    if (companyId.toString() === userInfo._id.toString()) {
                        try {
                            const scoutRes = await API.get(`/users/scout/${id}`);
                            setScoutData(scoutRes.data);
                        } catch (err) { console.error("Scout error", err); }
                    }
                }

            } catch (error) {
                console.error("Hata", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [id, userInfo]);

    const handleApply = async () => {
        try {
            await API.post(`/internships/${id}/apply`);
            setHasApplied(true);
            alert("Başvurunuz başarıyla gönderildi!");
        } catch (error) {
            alert("Başvuru hatası.");
        }
    };

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;
    if (!internship) return <div style={{ padding: 50, textAlign: 'center' }}>İlan bulunamadı.</div>;

    // --- YENİLENMİŞ ADAY KARTI ---
    const ScoutCard = ({ student, isFav }) => (
        <div className={`scout-card ${isFav ? 'fav' : 'other'}`}>
            <div className="scout-left">
                {/* Avatar */}
                <div className={`scout-avatar ${isFav ? 'fav' : 'other'}`}>
                    {student.name.charAt(0)}
                </div>

                <div className="scout-info">
                    <h4>
                        {student.name} {student.surname}
                        {isFav && <FaHeart style={{ color: '#e74c3c', fontSize: '1rem' }} title="Sizi Favorilemiş" />}
                    </h4>
                    <p className="dept-info">{student.department} - {student.classYear}</p>

                    {/* Rozetler */}
                    <div className="badges-row">
                        <span className="info-badge badge-gpa">
                            <FaStar /> GPA: {student.gpa}
                        </span>
                        <span className="info-badge badge-eng">
                            <FaLanguage /> Dil: {student.englishLevel}
                        </span>
                    </div>
                </div>
            </div>

            <div className="scout-right">
                <span className="score-label">Cadet Skoru</span>

                {/* Skor Barı */}
                <div className="score-track">
                    <div
                        className="score-fill"
                        style={{
                            width: `${student.successScore || 0}%`,
                            background: isFav ? '#27ae60' : '#3498db'
                        }}
                    ></div>
                </div>

                <div className="score-text" style={{ color: isFav ? '#27ae60' : '#3498db' }}>
                    {student.successScore} / 100
                </div>

                <Link to={`/profile/${student._id}`} className={`btn-inspect ${isFav ? 'fav' : 'other'}`}>
                    Profili İncele →
                </Link>
            </div>
        </div>
    );

    return (
        <div className="internship-detail-page">
            <Link to={userInfo?.role === 'company' ? "/company/my-internships" : "/internships"}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#555', marginBottom: '20px', fontWeight: '600' }}>
                <FaArrowLeft /> {userInfo?.role === 'company' ? "İlanlarıma Dön" : "İlanlara Dön"}
            </Link>

            <div className="detail-container">
                {/* HEADER */}
                <div className="detail-header">
                    <h1>{internship.title}</h1>
                    <p>{internship.company?.name}</p>
                </div>

                {/* İLAN DETAYLARI */}
                <div className="detail-content">
                    <div className="info-grid">
                        <div className="info-box"><span className="info-label">Gemi Tipi</span><span className="info-value">{internship.shipType}</span></div>
                        <div className="info-box"><span className="info-label">Lokasyon</span><span className="info-value">{internship.location}</span></div>
                        <div className="info-box"><span className="info-label">Maaş</span><span className="info-value">{internship.salary} USD</span></div>
                        <div className="info-box"><span className="info-label">Süre</span><span className="info-value">{internship.duration}</span></div>
                    </div>

                    <h3>İlan Açıklaması</h3>
                    <p className="description-text">{internship.description}</p>
                </div>

                {/* BUTONLAR */}
                <div className="detail-footer" style={{ padding: '20px 40px', background: '#f8f9fa', borderTop: '1px solid #eee', textAlign: 'right' }}>
                    {userInfo?.role === 'student' && (
                        hasApplied ? (
                            <button disabled style={{ background: '#27ae60', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'default', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <FaCheckCircle /> Başvuruldu
                            </button>
                        ) : (
                            <button onClick={handleApply} style={{ background: '#3498db', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <FaPaperPlane /> Hemen Başvur
                            </button>
                        )
                    )}
                    {userInfo?.role === 'company' && internship.company._id === userInfo._id && (
                        <Link to={`/company/edit-internship/${internship._id}`} style={{ background: '#f39c12', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <FaEdit /> İlanı Düzenle
                        </Link>
                    )}
                </div>

                {/* --- ADAY HAVUZU (SADECE ŞİRKET) --- */}
                {scoutData && (
                    <div className="scout-section">
                        <h2 className="scout-title"><FaUserGraduate /> Akıllı Aday Eşleştirme</h2>
                        <p className="scout-subtitle">
                            Bu liste, <strong>"{internship.shipType}"</strong> gemi tipinde staj arayan öğrencilerden otomatik olarak derlenmiştir.
                        </p>

                        {/* 1. SİZİ FAVORİLEYENLER */}
                        {scoutData.favorited.length > 0 && (
                            <div style={{ marginBottom: '40px' }}>
                                <div className="group-header group-fav">🌟 Şirketinizi Hedefleyen Yıldız Adaylar</div>
                                {scoutData.favorited.map(stu => <ScoutCard key={stu._id} student={stu} isFav={true} />)}
                            </div>
                        )}

                        {/* 2. DİĞERLERİ */}
                        {scoutData.others.length > 0 && (
                            <div>
                                <div className="group-header group-other">📋 Diğer Uygun Adaylar</div>
                                {scoutData.others.map(stu => <ScoutCard key={stu._id} student={stu} isFav={false} />)}
                            </div>
                        )}

                        {/* BOŞSA */}
                        {scoutData.favorited.length === 0 && scoutData.others.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '30px', border: '2px dashed #ddd', borderRadius: '10px', color: '#999' }}>
                                <FaBriefcase style={{ fontSize: '2rem', marginBottom: '10px', opacity: 0.5 }} />
                                <p>Şu an "{internship.shipType}" için <strong>Staj Arıyor</strong> modunda olan uygun bir öğrenci bulunamadı.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InternshipDetailPage;