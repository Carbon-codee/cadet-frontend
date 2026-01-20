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
    const [hasApplied, setHasApplied] = useState(false);
    const [scoutData, setScoutData] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                // 1. İlan Detayını Çek
                const { data } = await API.get(`/internships/${id}`);
                setInternship(data);

                // --- TEŞHİS LOGLARI (F12 -> Console'da Bunları Ara) ---
                console.log("------------------------------------------------");
                console.log("📢 TEŞHİS BAŞLADI");
                console.log("👤 Giriş Yapan Kullanıcı:", userInfo);
                console.log("📄 İlan Detayı:", data);

                if (userInfo) {
                    // Şirket Kontrolü
                    if (userInfo.role === 'company') {
                        console.log("✅ Rol: Şirket");

                        // ID Karşılaştırması için temizlik
                        // data.company bazen tüm obje gelir, bazen sadece ID string gelir.
                        const adCompanyId = typeof data.company === 'object' ? data.company._id : data.company;
                        const myId = userInfo._id;

                        console.log(`🔍 ID Karşılaştırması:`);
                        console.log(`   İlan Sahibi ID: ${adCompanyId}`);
                        console.log(`   Benim ID:       ${myId}`);
                        console.log(`   Eşit mi?:       ${String(adCompanyId) === String(myId)}`);

                        if (String(adCompanyId) === String(myId)) {
                            console.log("🚀 Eşleşme Başarılı! Adaylar getiriliyor...");

                            try {
                                const scoutRes = await API.get(`/users/scout/${id}`);
                                console.log("📦 Backend'den Gelen Aday Verisi:", scoutRes.data);
                                setScoutData(scoutRes.data);
                            } catch (err) {
                                console.error("❌ Scout API Hatası:", err);
                            }
                        } else {
                            console.warn("⚠️ BU İLAN SİZİN DEĞİL. O YÜZDEN ADAYLARI GÖREMİYORSUNUZ.");
                        }
                    } else {
                        console.log("ℹ️ Rol Şirket Değil:", userInfo.role);
                    }
                } else {
                    console.log("❌ Kullanıcı Giriş Yapmamış");
                }
                console.log("------------------------------------------------");

                // Öğrenci Başvuru Kontrolü
                if (userInfo && userInfo.role === 'student') {
                    const isApplied = data.applicants.some(app =>
                        (app.user === userInfo._id) || (app.user._id === userInfo._id)
                    );
                    setHasApplied(isApplied);
                }

            } catch (error) {
                console.error("Genel Hata:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [id, userInfo]);

    const handleApply = async () => { /* ... Başvuru aynı ... */ };

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;
    if (!internship) return <div style={{ padding: 50, textAlign: 'center' }}>İlan bulunamadı.</div>;

    // --- SCOUT KARTI (Aynı) ---
    const ScoutCard = ({ student, isFav }) => (
        <div style={{ border: '1px solid #eee', padding: '15px', margin: '10px 0', borderRadius: '10px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: isFav ? '5px solid #27ae60' : '5px solid #bdc3c7' }}>
            <div>
                <h4 style={{ margin: 0, color: '#2c3e50' }}>{student.name} {student.surname} {isFav && '❤️'}</h4>
                <small>{student.department} | GPA: {student.gpa}</small>
            </div>
            <Link to={`/profile/${student._id}`} style={{ color: '#3498db', fontWeight: 'bold' }}>İncele</Link>
        </div>
    );

    return (
        <div className="internship-detail-page">
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
                    <p><strong>Gemi Tipi:</strong> {internship.shipType}</p>
                    <p><strong>Lokasyon:</strong> {internship.location}</p>
                    <p>{internship.description}</p>
                </div>

                <div className="detail-footer" style={{ padding: '20px', textAlign: 'right', background: '#f9f9f9' }}>
                    {userInfo?.role === 'student' && (
                        hasApplied ? <button disabled>Başvuruldu</button> : <button onClick={handleApply}>Başvur</button>
                    )}
                </div>

                {/* --- POTANSİYEL ADAY HAVUZU --- */}
                {/* Şirket Sahibi İse Göster */}
                {userInfo?.role === 'company' && String(internship.company._id || internship.company) === String(userInfo._id) && (
                    <div style={{ padding: '30px', borderTop: '1px solid #eee' }}>
                        <h2 style={{ color: '#002B5B', marginBottom: '20px' }}><FaUserGraduate /> Potansiyel Aday Havuzu</h2>

                        {/* Veri Var mı Kontrolü */}
                        {scoutData ? (
                            <>
                                {scoutData.favorited.length > 0 && (
                                    <>
                                        <h4 style={{ color: '#27ae60' }}>🌟 Şirketinizi Favorileyenler</h4>
                                        {scoutData.favorited.map(stu => <ScoutCard key={stu._id} student={stu} isFav={true} />)}
                                    </>
                                )}
                                {scoutData.others.length > 0 && (
                                    <>
                                        <h4 style={{ color: '#3498db', marginTop: '20px' }}>📋 Diğer Uygun Adaylar</h4>
                                        {scoutData.others.map(stu => <ScoutCard key={stu._id} student={stu} isFav={false} />)}
                                    </>
                                )}
                                {scoutData.favorited.length === 0 && scoutData.others.length === 0 && (
                                    <p style={{ color: '#999' }}>Kriterlere uygun aday bulunamadı.</p>
                                )}
                            </>
                        ) : (
                            <p>Aday verisi yükleniyor veya boş...</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InternshipDetailPage;