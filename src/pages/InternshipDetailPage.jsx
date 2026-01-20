import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaCheckCircle, FaUserGraduate, FaHeart, FaArrowLeft, FaBriefcase, FaEdit, FaPaperPlane } from 'react-icons/fa';
import './InternshipDetailPage.css';

const InternshipDetailPage = () => {
    const { id } = useParams();
    const { userInfo } = useAuth();

    const [internship, setInternship] = useState(null);
    const [loading, setLoading] = useState(true);

    // Öğrenci için State
    const [hasApplied, setHasApplied] = useState(false);

    // Şirket için State
    const [scoutData, setScoutData] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                // 1. İlan Detayını Çek
                const { data } = await API.get(`/internships/${id}`);
                setInternship(data);

                // --- SENARYO A: ÖĞRENCİ İSE ---
                if (userInfo && userInfo.role === 'student') {
                    // Başvuru kontrolü
                    const isApplied = data.applicants.some(app =>
                        (app.user === userInfo._id) || (app.user._id === userInfo._id)
                    );
                    setHasApplied(isApplied);
                }

                // --- SENARYO B: ŞİRKET VE İLAN SAHİBİ İSE ---
                if (userInfo && userInfo.role === 'company') {
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

    // Başvuru Fonksiyonu
    const handleApply = async () => {
        try {
            await API.post(`/internships/${id}/apply`);
            setHasApplied(true);
            alert("Başvurunuz başarıyla gönderildi!");
        } catch (error) {
            alert(error.response?.data?.message || "Başvuru sırasında hata oluştu.");
        }
    };

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;
    if (!internship) return <div style={{ padding: 50, textAlign: 'center' }}>İlan bulunamadı.</div>;

    // --- ADAY KARTI BİLEŞENİ ---
    const ScoutCard = ({ student, isFav }) => (
        <div style={{
            background: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #eee',
            marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            boxShadow: isFav ? '0 4px 12px rgba(39, 174, 96, 0.15)' : '0 2px 5px rgba(0,0,0,0.05)',
            borderLeft: isFav ? '5px solid #27ae60' : '5px solid #bdc3c7'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{
                    width: '45px', height: '45px', borderRadius: '50%',
                    background: isFav ? '#27ae60' : '#002B5B', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem'
                }}>
                    {student.name.charAt(0)}
                </div>
                <div>
                    <h4 style={{ margin: 0, color: '#2c3e50', fontSize: '1rem' }}>
                        {student.name} {student.surname}
                        {isFav && <FaHeart style={{ color: '#e74c3c', marginLeft: '5px' }} title="Sizi Favorilemiş" />}
                    </h4>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>
                        <span style={{ marginRight: '10px' }}>⭐ GPA: <strong>{student.gpa}</strong></span>
                        <span>🗣️ Dil: <strong>{student.englishLevel}</strong></span>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.7rem', color: '#999' }}>Skor</div>
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: isFav ? '#27ae60' : '#3498db' }}>
                    {student.successScore} / 100
                </div>
                <Link to={`/profile/${student._id}`} style={{ fontSize: '0.8rem', textDecoration: 'none', color: '#3498db', fontWeight: '600' }}>
                    İncele →
                </Link>
            </div>
        </div>
    );

    return (
        <div className="internship-detail-page">
            {/* Geri Dön Linki */}
            <Link to={userInfo?.role === 'company' ? "/company/my-internships" : "/internships"}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#555', marginBottom: '20px', fontWeight: '600' }}>
                <FaArrowLeft /> {userInfo?.role === 'company' ? "İlanlarıma Dön" : "İlanlara Dön"}
            </Link>

            <div className="detail-container">
                <div className="detail-header">
                    <h1>{internship.title}</h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>{internship.company?.name || 'Şirket'}</p>
                </div>

                <div className="detail-content">
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px', fontSize: '0.95rem', color: '#555' }}>
                        <span>🚢 <strong>Gemi:</strong> {internship.shipType}</span>
                        <span>📍 <strong>Lokasyon:</strong> {internship.location}</span>
                        <span>💰 <strong>Maaş:</strong> {internship.salary} USD</span>
                        <span>📅 <strong>Süre:</strong> {internship.duration}</span>
                    </div>
                    <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '20px 0' }} />
                    <h3>İlan Açıklaması</h3>
                    <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{internship.description}</p>
                </div>

                {/* --- AKSİYON ALANI (Rol Bazlı) --- */}
                <div className="detail-footer" style={{ padding: '20px 40px', background: '#f8f9fa', borderTop: '1px solid #eee', textAlign: 'right' }}>

                    {/* ÖĞRENCİ İSE: BAŞVUR BUTONU */}
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

                    {/* ŞİRKET İSE: DÜZENLE BUTONU */}
                    {userInfo?.role === 'company' && internship.company._id === userInfo._id && (
                        <Link to={`/company/edit-internship/${internship._id}`} style={{ background: '#f39c12', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <FaEdit /> İlanı Düzenle
                        </Link>
                    )}
                </div>

                {/* --- POTANSİYEL ADAY HAVUZU (SADECE ŞİRKET SAHİBİ GÖRÜR) --- */}
                {scoutData && (
                    <div style={{ padding: '40px', background: '#fafbfc', borderTop: '1px solid #eee' }}>
                        <h2 style={{ color: '#002B5B', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FaUserGraduate /> Potansiyel Aday Havuzu
                        </h2>
                        <p style={{ color: '#666', marginBottom: '30px', fontSize: '0.95rem' }}>
                            Bu liste, <strong>"{internship.shipType}"</strong> gemi tipinde staj arayan ve sistemimizdeki kriterlere uyan öğrencilerden otomatik oluşturulmuştur.
                        </p>

                        {/* 1. SİZİ FAVORİLEYENLER */}
                        {scoutData.favorited.length > 0 && (
                            <div style={{ marginBottom: '40px' }}>
                                <h4 style={{ color: '#27ae60', marginBottom: '15px', borderBottom: '2px solid #27ae60', display: 'inline-block', paddingBottom: '5px' }}>
                                    🌟 Şirketinizi Hedefleyen Adaylar
                                </h4>
                                {scoutData.favorited.map(stu => <ScoutCard key={stu._id} student={stu} isFav={true} />)}
                            </div>
                        )}

                        {/* 2. DİĞER UYGUN ADAYLAR */}
                        {scoutData.others.length > 0 && (
                            <div>
                                <h4 style={{ color: '#3498db', marginBottom: '15px', borderBottom: '2px solid #3498db', display: 'inline-block', paddingBottom: '5px' }}>
                                    📋 Diğer Uygun Adaylar
                                </h4>
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