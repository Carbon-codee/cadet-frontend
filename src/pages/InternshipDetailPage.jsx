import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaCheckCircle, FaBuilding, FaShip, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaUserGraduate, FaStar, FaHeart } from 'react-icons/fa';
import './InternshipDetailPage.css';

const InternshipDetailPage = () => {
    const { id } = useParams();
    const { userInfo } = useAuth();
    const [internship, setInternship] = useState(null);
    const [loading, setLoading] = useState(true);
    const [applyStatus, setApplyStatus] = useState(null);

    // YENİ: Önerilen Adaylar
    const [scoutData, setScoutData] = useState({ favorited: [], others: [] });

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const { data } = await API.get(`/internships/${id}`);
                setInternship(data);

                // Eğer öğrenciyse başvuru durumunu kontrol et
                if (userInfo && userInfo.role === 'student') {
                    // (Mevcut başvuru kontrol kodları buraya...)
                }

                // --- YENİ: EĞER ŞİRKETSE VE İLAN SAHİBİYSE ADAY ÖNER ---
                if (userInfo && userInfo.role === 'company' && data.company._id === userInfo._id) {
                    const scoutRes = await API.get(`/users/scout/${id}`);
                    setScoutData(scoutRes.data);
                }

            } catch (error) {
                console.error("Hata", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [id, userInfo]);

    const handleApply = async () => { /* ... (Başvuru kodu aynı) ... */ };

    if (loading) return <div>Yükleniyor...</div>;
    if (!internship) return <div>İlan bulunamadı.</div>;

    // --- ADAY KARTI BİLEŞENİ (YENİ) ---
    const ScoutCard = ({ student, isFav }) => (
        <div style={{
            background: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #eee',
            marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            boxShadow: isFav ? '0 4px 12px rgba(39, 174, 96, 0.15)' : '0 2px 5px rgba(0,0,0,0.05)',
            borderLeft: isFav ? '5px solid #27ae60' : '5px solid #bdc3c7'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: isFav ? '#27ae60' : '#002B5B', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem'
                }}>
                    {student.name.charAt(0)}
                </div>
                <div>
                    <h4 style={{ margin: 0, color: '#2c3e50', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {student.name} {student.surname}
                        {isFav && <FaHeart style={{ color: '#e74c3c', fontSize: '0.8rem' }} title="Şirketinizi Favorilemiş" />}
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: '#7f8c8d' }}>{student.department} - {student.classYear}</span>
                    <div style={{ fontSize: '0.8rem', marginTop: '3px' }}>
                        <span style={{ marginRight: '10px' }}>⭐ GPA: <strong>{student.gpa}</strong></span>
                        <span>🗣️ Dil: <strong>{student.englishLevel}</strong></span>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'right' }}>
                {/* SKOR BARI */}
                <div style={{ fontSize: '0.75rem', color: '#555', marginBottom: '2px' }}>Cadet Skoru</div>
                <div style={{ width: '100px', height: '10px', background: '#eee', borderRadius: '5px', overflow: 'hidden', marginBottom: '5px' }}>
                    <div style={{ width: `${student.successScore}%`, height: '100%', background: isFav ? '#27ae60' : '#3498db' }}></div>
                </div>
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{student.successScore} / 100</div>

                <Link to={`/profile/${student._id}`} style={{
                    display: 'inline-block', marginTop: '5px', fontSize: '0.8rem',
                    textDecoration: 'none', color: isFav ? '#27ae60' : '#3498db', fontWeight: 'bold'
                }}>Profili İncele →</Link>
            </div>
        </div>
    );

    return (
        <div className="internship-detail-page">
            <div className="detail-container">
                {/* ... (MEVCUT İLAN DETAYLARI BURADA) ... */}
                <div className="detail-header">
                    <h1>{internship.title}</h1>
                    {/* ... */}
                </div>

                {/* ... (İÇERİK VE BAŞVUR BUTONU) ... */}

                {/* --- YENİ BÖLÜM: AKILLI ADAY ÖNERİLERİ (SADECE ŞİRKET GÖRÜR) --- */}
                {userInfo?.role === 'company' && internship.company._id === userInfo._id && (
                    <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '2px dashed #eee' }}>
                        <h2 style={{ color: '#002B5B', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FaUserGraduate /> Potansiyel Aday Havuzu
                        </h2>
                        <p style={{ color: '#666', marginBottom: '20px' }}>
                            Aşağıdaki öğrenciler <strong>"Staj Arıyor"</strong> modunda ve bu ilandaki gemi tipini tercih etmişlerdir.
                        </p>

                        {/* 1. SİZİ FAVORİLEYENLER */}
                        {scoutData.favorited.length > 0 && (
                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: '#27ae60', marginBottom: '10px' }}>🌟 Şirketinizi Favorileyen Yıldız Adaylar</h4>
                                {scoutData.favorited.map(stu => <ScoutCard key={stu._id} student={stu} isFav={true} />)}
                            </div>
                        )}

                        {/* 2. DİĞER UYGUN ADAYLAR */}
                        {scoutData.others.length > 0 && (
                            <div>
                                <h4 style={{ color: '#3498db', marginBottom: '10px' }}>📋 Diğer Uygun Adaylar</h4>
                                {scoutData.others.map(stu => <ScoutCard key={stu._id} student={stu} isFav={false} />)}
                            </div>
                        )}

                        {scoutData.favorited.length === 0 && scoutData.others.length === 0 && (
                            <p style={{ fontStyle: 'italic', color: '#999' }}>Şu an kriterlere uygun, staj arayan öğrenci bulunamadı.</p>
                        )}
                    </div>
                )}
                {/* ------------------------------------------------------------- */}

            </div>
        </div>
    );
};

export default InternshipDetailPage;