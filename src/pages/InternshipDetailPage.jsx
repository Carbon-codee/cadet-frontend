import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaCheckCircle, FaHeart, FaArrowLeft, FaEdit, FaPaperPlane, FaPowerOff, FaStar, FaLanguage } from 'react-icons/fa';
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

                // Öğrenci Kontrolü
                if (userInfo?.role === 'student') {
                    const isApplied = data.applicants.some(app =>
                        (app.user === userInfo._id) || (app.user._id === userInfo._id)
                    );
                    setHasApplied(isApplied);
                }

                // Şirket Kontrolü
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
        fetchDetails();
    }, [id, userInfo]);

    // İşlemler
    const handleApply = async () => {
        try { await API.post(`/internships/${id}/apply`); setHasApplied(true); alert("Başvurunuz gönderildi!"); }
        catch (error) { alert("Hata oluştu."); }
    };

    const toggleStatus = async () => {
        if (!window.confirm("Durumu değiştirmek istediğinize emin misiniz?")) return;
        try { await API.put(`/internships/${id}/status`); window.location.reload(); }
        catch (error) { alert("İşlem başarısız."); }
    };

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;
    if (!internship) return <div style={{ padding: 50, textAlign: 'center' }}>İlan bulunamadı.</div>;

    const isOwner = userInfo?.role === 'company' && (internship.company._id === userInfo._id || internship.company === userInfo._id);

    // --- YENİ ADAY KARTI ---
    const ScoutCard = ({ student, isFav }) => (
        <div className={`scout-card ${isFav ? 'fav' : 'other'}`}>
            <div className="card-top-row">
                <div className="scout-avatar" style={{ background: isFav ? '#27ae60' : '#3498db' }}>
                    {student.name.charAt(0)}
                </div>
                <div>
                    <h4 className="scout-name">{student.name} {student.surname} {isFav && '❤️'}</h4>
                    <span className="scout-dept">{student.department}</span>
                </div>
            </div>

            <div className="badges-container">
                <div className="mini-badge bg-gpa"><FaStar /> GPA: {student.gpa}</div>
                <div className="mini-badge bg-eng"><FaLanguage /> Dil: {student.englishLevel}</div>
                <div className="mini-badge" style={{ background: '#eee', color: '#555' }}>{student.classYear}</div>
            </div>

            <div className="score-section">
                <div className="score-header">
                    <span>Eşleşme Skoru</span>
                    <span>{student.successScore}/100</span>
                </div>
                <div className="score-track">
                    <div
                        className="score-fill"
                        style={{
                            width: `${student.successScore}%`,
                            background: isFav ? 'linear-gradient(90deg, #2ecc71, #27ae60)' : 'linear-gradient(90deg, #3498db, #2980b9)'
                        }}
                    ></div>
                </div>
            </div>

            <Link to={`/profile/${student._id}`} className={`btn-inspect ${isFav ? 'fav' : 'other'}`}>
                Profili İncele
            </Link>
        </div>
    );

    return (
        <div className="internship-detail-page">
            <Link to={isOwner ? "/company/my-internships" : "/internships"} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#555', marginBottom: '20px', fontWeight: '600' }}>
                <FaArrowLeft /> Listeye Dön
            </Link>

            {/* --- 3 SÜTUNLU YAPI --- */}
            <div className="page-layout">

                {/* 1. SOL SÜTUN: FAVORİLEYENLER (Sadece Şirket Görür) */}
                <div className="side-column">
                    {isOwner && (
                        <>
                            <span className="column-title title-left">🌟 HEDEFLEYENLER</span>
                            {scoutData?.favorited?.length > 0 ? (
                                scoutData.favorited.map(stu => <ScoutCard key={stu._id} student={stu} isFav={true} />)
                            ) : (
                                <p style={{ textAlign: 'center', color: '#999', fontStyle: 'italic' }}>Henüz bu kategoride sizi favorileyen aday yok.</p>
                            )}
                        </>
                    )}
                </div>

                {/* 2. ORTA SÜTUN: İLAN DETAYI */}
                <div className="detail-container">
                    <div className="detail-header">
                        <h1>{internship.title}</h1>
                        <p style={{ color: 'rgba(255,255,255,0.8)' }}>{internship.company?.name}</p>
                        {!internship.isActive && <div style={{ marginTop: '10px', background: '#c0392b', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.9rem' }}>PASİF İLAN</div>}
                    </div>

                    <div className="detail-content">
                        <div className="info-grid">
                            <div className="info-box"><span className="info-label">Pozisyon</span><span className="info-value">{internship.location}</span></div>
                            <div className="info-box"><span className="info-label">Gemi Tipi</span><span className="info-value">{internship.shipType}</span></div>
                            <div className="info-box"><span className="info-label">Maaş</span><span className="info-value">{internship.salary} USD</span></div>
                            <div className="info-box"><span className="info-label">Süre</span><span className="info-value">{internship.duration}</span></div>
                        </div>
                        <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '30px 0' }} />
                        <h3>İlan Açıklaması</h3>
                        <p className="description-text">{internship.description}</p>
                    </div>

                    <div className="detail-footer">
                        {userInfo?.role === 'student' && !hasApplied && internship.isActive && (
                            <button onClick={handleApply} style={{ background: '#3498db', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}><FaPaperPlane style={{ marginRight: '8px' }} /> Hemen Başvur</button>
                        )}
                        {userInfo?.role === 'student' && hasApplied && (
                            <button disabled style={{ background: '#27ae60', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold' }}><FaCheckCircle style={{ marginRight: '8px' }} /> Başvuruldu</button>
                        )}

                        {isOwner && (
                            <>
                                <button onClick={toggleStatus} style={{ background: internship.isActive ? '#e74c3c' : '#27ae60', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                                    <FaPowerOff /> {internship.isActive ? 'Yayından Kaldır' : 'Yayına Al'}
                                </button>
                                <Link to={`/company/edit-internship/${internship._id}`} style={{ background: '#f39c12', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <FaEdit /> Düzenle
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* 3. SAĞ SÜTUN: DİĞER ADAYLAR (Sadece Şirket Görür) */}
                <div className="side-column">
                    {isOwner && (
                        <>
                            <span className="column-title title-right">📋 DİĞER ADAYLAR</span>
                            {scoutData?.others?.length > 0 ? (
                                scoutData.others.map(stu => <ScoutCard key={stu._id} student={stu} isFav={false} />)
                            ) : (
                                <p style={{ textAlign: 'center', color: '#999', fontStyle: 'italic' }}>Bu kriterlere uygun başka aday bulunamadı.</p>
                            )}
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};

export default InternshipDetailPage;