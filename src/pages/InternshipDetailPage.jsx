import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaCheckCircle, FaUserGraduate, FaHeart, FaArrowLeft, FaBriefcase, FaEdit, FaPaperPlane, FaBuilding, FaClock, FaPowerOff } from 'react-icons/fa';
import './InternshipDetailPage.css';

const InternshipDetailPage = () => {
    const { id } = useParams();
    const { userInfo } = useAuth();

    const [internship, setInternship] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasApplied, setHasApplied] = useState(false);
    const [scoutData, setScoutData] = useState(null);

    // Verileri Çek
    const fetchDetails = async () => {
        try {
            const { data } = await API.get(`/internships/${id}`);
            setInternship(data);

            if (userInfo?.role === 'student') {
                const isApplied = data.applicants.some(app => app.user === userInfo._id || app.user._id === userInfo._id);
                setHasApplied(isApplied);
            }

            if (userInfo?.role === 'company') {
                const companyId = data.company._id || data.company;
                if (companyId.toString() === userInfo._id.toString()) {
                    try {
                        const scoutRes = await API.get(`/users/scout/${id}`);
                        setScoutData(scoutRes.data);
                    } catch (err) { console.error(err); }
                }
            }
        } catch (error) { console.error(error); }
        finally { setLoading(false); }
    };

    useEffect(() => { fetchDetails(); }, [id, userInfo]);

    // Yayından Kaldır / Aktif Et
    const toggleStatus = async () => {
        if (!window.confirm(`İlanı ${internship.isActive ? 'yayından kaldırmak' : 'tekrar yayına almak'} istediğinize emin misiniz?`)) return;
        try {
            await API.put(`/internships/${id}/status`);
            fetchDetails(); // Sayfayı yenile
        } catch (error) { alert("İşlem başarısız."); }
    };

    const handleApply = async () => {
        try {
            await API.post(`/internships/${id}/apply`);
            setHasApplied(true);
            alert("Başvuru gönderildi!");
        } catch (error) { alert("Hata oluştu."); }
    };

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;
    if (!internship) return <div style={{ padding: 50, textAlign: 'center' }}>İlan bulunamadı.</div>;

    const isOwner = userInfo?.role === 'company' && (internship.company._id === userInfo._id || internship.company === userInfo._id);
    const companyProfileLink = `/profile/${internship.company._id || internship.company}`;

    // --- SCOUT CARD (Aynı Kaldı) ---
    const ScoutCard = ({ student, isFav }) => (
        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: isFav ? '0 4px 12px rgba(39, 174, 96, 0.15)' : '0 2px 5px rgba(0,0,0,0.05)', borderLeft: isFav ? '5px solid #27ae60' : '5px solid #bdc3c7' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: isFav ? '#27ae60' : '#002B5B', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>{student.name.charAt(0)}</div>
                <div><h4 style={{ margin: 0, color: '#2c3e50', fontSize: '1rem' }}>{student.name} {student.surname} {isFav && <FaHeart style={{ color: '#e74c3c', marginLeft: '5px' }} />}</h4><div style={{ fontSize: '0.8rem', color: '#666' }}><span style={{ marginRight: '10px' }}>⭐ GPA: <strong>{student.gpa}</strong></span><span>🗣️ Dil: <strong>{student.englishLevel}</strong></span></div></div>
            </div>
            <div style={{ textAlign: 'right' }}><div style={{ fontSize: '0.7rem', color: '#999' }}>Skor</div><div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: isFav ? '#27ae60' : '#3498db' }}>{student.successScore} / 100</div><Link to={`/profile/${student._id}`} style={{ fontSize: '0.8rem', textDecoration: 'none', color: '#3498db', fontWeight: '600' }}>İncele →</Link></div>
        </div>
    );

    return (
        <div className="internship-detail-page">
            <Link to={userInfo?.role === 'company' ? "/company/my-internships" : "/internships"} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#555', marginBottom: '20px', fontWeight: '600' }}><FaArrowLeft /> Listeye Dön</Link>

            <div className="detail-container">
                {/* --- HEADER --- */}
                <div className="detail-header" style={{ background: internship.isActive ? 'linear-gradient(135deg, #002B5B 0%, #005A9C 100%)' : '#7f8c8d' }}>
                    <h1>{internship.title}</h1>
                    {/* Şirket Linki */}
                    <Link to={companyProfileLink} style={{ color: 'white', textDecoration: 'underline', opacity: 0.9, fontSize: '1.1rem' }}>
                        <FaBuilding style={{ marginRight: '8px' }} />{internship.company?.name}
                    </Link>

                    {!internship.isActive && <div style={{ background: 'rgba(0,0,0,0.3)', padding: '5px 15px', borderRadius: '20px', marginTop: '10px', display: 'inline-block' }}>🚫 BU İLAN YAYINDAN KALDIRILMIŞTIR</div>}
                </div>

                <div className="detail-content">
                    {/* Tarihler */}
                    <div style={{ marginBottom: '25px', padding: '15px', background: '#fffbf0', borderRadius: '8px', display: 'flex', gap: '30px', fontSize: '0.9rem', color: '#555' }}>
                        <span><FaClock /> Yayınlanma: <strong>{new Date(internship.createdAt).toLocaleDateString('tr-TR')}</strong></span>
                        <span><FaCalendarAlt /> Staj Başlangıç: <strong>{new Date(internship.startDate).toLocaleDateString('tr-TR')}</strong></span>
                    </div>

                    <div className="info-grid">
                        <div className="info-box"><span className="info-label">Gemi Tipi</span><span className="info-value">{internship.shipType}</span></div>
                        <div className="info-box"><span className="info-label">Pozisyon</span><span className="info-value">{internship.location}</span></div>
                        <div className="info-box"><span className="info-label">Maaş</span><span className="info-value">{internship.salary} USD</span></div>
                        <div className="info-box"><span className="info-label">Süre</span><span className="info-value">{internship.duration}</span></div>
                    </div>

                    <h3>İlan Açıklaması</h3>
                    <p className="description-text">{internship.description}</p>
                </div>

                <div className="detail-footer" style={{ padding: '20px 40px', background: '#f8f9fa', borderTop: '1px solid #eee', textAlign: 'right' }}>
                    {/* ÖĞRENCİ BUTONLARI */}
                    {userInfo?.role === 'student' && (
                        !internship.isActive ? (
                            <button disabled style={{ background: '#95a5a6', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'not-allowed' }}>Bu İlan Aktif Değil</button>
                        ) : hasApplied ? (
                            <button disabled style={{ background: '#27ae60', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'default' }}><FaCheckCircle /> Başvuruldu</button>
                        ) : (
                            <button onClick={handleApply} style={{ background: '#3498db', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}><FaPaperPlane /> Hemen Başvur</button>
                        )
                    )}

                    {/* ŞİRKET BUTONLARI */}
                    {isOwner && (
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                            {/* Yayından Kaldır / Al Butonu */}
                            <button onClick={toggleStatus} style={{ background: internship.isActive ? '#e74c3c' : '#27ae60', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <FaPowerOff /> {internship.isActive ? 'Yayından Kaldır' : 'Tekrar Yayınla'}
                            </button>

                            <Link to={`/company/edit-internship/${internship._id}`} style={{ background: '#f39c12', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <FaEdit /> Düzenle
                            </Link>
                        </div>
                    )}
                </div>

                {/* ADAY HAVUZU (Sadece Şirket Görür - İlan Pasif Olsa Bile) */}
                {scoutData && (
                    <div className="scout-section">
                        <h2 className="scout-title"><FaUserGraduate /> Potansiyel Aday Havuzu</h2>
                        <p className="scout-subtitle">Liste otomatik derlenmiştir.</p>
                        {scoutData.favorited.length > 0 && <div style={{ marginBottom: '40px' }}><div className="group-header group-fav">🌟 Hedefleyenler</div>{scoutData.favorited.map(stu => <ScoutCard key={stu._id} student={stu} isFav={true} />)}</div>}
                        {scoutData.others.length > 0 && <div><div className="group-header group-other">📋 Diğer Adaylar</div>{scoutData.others.map(stu => <ScoutCard key={stu._id} student={stu} isFav={false} />)}</div>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InternshipDetailPage;