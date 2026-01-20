import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaCheckCircle, FaUserGraduate, FaHeart, FaArrowLeft, FaBriefcase } from 'react-icons/fa';
import './InternshipDetailPage.css';

const InternshipDetailPage = () => {
    const { id } = useParams();
    const { userInfo } = useAuth();
    const [internship, setInternship] = useState(null);
    const [loading, setLoading] = useState(true);
    const [scoutData, setScoutData] = useState(null); // Başlangıç null

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                // 1. İlan Detayını Çek
                const { data } = await API.get(`/internships/${id}`);
                setInternship(data);

                // 2. Eğer Şirketse ve İlan Sahibi ise Adayları Çek
                if (userInfo && userInfo.role === 'company') {
                    // ID Kontrolü (Güvenli)
                    const companyIdFromAd = data.company._id || data.company;

                    if (companyIdFromAd.toString() === userInfo._id.toString()) {
                        console.log("Şirket sahibi doğrulandı, adaylar çekiliyor...");
                        try {
                            const scoutRes = await API.get(`/users/scout/${id}`);
                            console.log("Gelen Adaylar:", scoutRes.data);
                            setScoutData(scoutRes.data);
                        } catch (err) {
                            console.error("Scout API Hatası:", err);
                        }
                    } else {
                        console.log("Bu ilan sizin değil, aday önerisi gösterilmiyor.");
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

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;
    if (!internship) return <div style={{ padding: 50, textAlign: 'center' }}>İlan bulunamadı.</div>;

    // --- ADAY KARTI ---
    const ScoutCard = ({ student, isFav }) => (
        <div style={{
            background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #eee',
            marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            boxShadow: isFav ? '0 4px 15px rgba(39, 174, 96, 0.1)' : '0 2px 5px rgba(0,0,0,0.03)',
            borderLeft: isFav ? '5px solid #27ae60' : '5px solid #bdc3c7'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: isFav ? '#27ae60' : '#002B5B', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem'
                }}>
                    {student.name.charAt(0)}
                </div>
                <div>
                    <h4 style={{ margin: 0, color: '#2c3e50', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
                        {student.name} {student.surname}
                        {isFav && <FaHeart style={{ color: '#e74c3c', fontSize: '0.9rem' }} title="Şirketinizi Favorilemiş" />}
                    </h4>
                    <span style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>{student.department} - {student.classYear}</span>
                    <div style={{ fontSize: '0.85rem', marginTop: '5px', color: '#555' }}>
                        <span style={{ marginRight: '15px' }}>⭐ GPA: <strong>{student.gpa}</strong></span>
                        <span>🗣️ Dil: <strong>{student.englishLevel}</strong></span>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: '#999', marginBottom: '4px' }}>Cadet Skoru</div>
                <div style={{ width: '120px', height: '8px', background: '#eee', borderRadius: '5px', overflow: 'hidden', marginBottom: '8px', marginLeft: 'auto' }}>
                    <div style={{ width: `${student.successScore}%`, height: '100%', background: isFav ? '#27ae60' : '#3498db' }}></div>
                </div>
                <div style={{ fontWeight: 'bold', fontSize: '1rem', color: isFav ? '#27ae60' : '#3498db' }}>{student.successScore} / 100</div>

                <Link to={`/profile/${student._id}`} style={{
                    display: 'inline-block', marginTop: '8px', fontSize: '0.85rem',
                    textDecoration: 'none', color: '#555', fontWeight: '600', border: '1px solid #ddd', padding: '5px 10px', borderRadius: '20px'
                }}>Profili İncele</Link>
            </div>
        </div>
    );

    return (
        <div className="internship-detail-page">
            <Link to="/company/my-internships" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#555', marginBottom: '20px', fontWeight: '600' }}>
                <FaArrowLeft /> İlanlarıma Dön
            </Link>

            <div className="detail-container">
                <div className="detail-header">
                    <h1>{internship.title}</h1>
                    <p style={{ color: 'white', opacity: 0.8 }}>{internship.company.name}</p>
                </div>

                <div className="detail-content">
                    <p><strong>Gemi Tipi:</strong> {internship.shipType}</p>
                    <p><strong>Lokasyon:</strong> {internship.location}</p>
                    <p><strong>Maaş:</strong> {internship.salary} USD</p>
                    <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #eee' }} />
                    <h3>İlan Açıklaması</h3>
                    <p>{internship.description}</p>
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