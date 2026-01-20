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
                const { data } = await API.get(`/internships/${id}`);
                setInternship(data);

                if (userInfo?.role === 'student') {
                    const isApplied = data.applicants.some(app =>
                        (app.user === userInfo._id) || (app.user._id === userInfo._id)
                    );
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
        fetchDetails();
    }, [id, userInfo]);

    const handleApply = async () => {
        try {
            await API.post(`/internships/${id}/apply`);
            setHasApplied(true);
            alert("Başvuru gönderildi!");
        } catch (error) { alert("Hata oluştu."); }
    };

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;
    if (!internship) return <div style={{ padding: 50, textAlign: 'center' }}>İlan bulunamadı.</div>;

    const ScoutCard = ({ student, isFav }) => (
        <div style={{
            background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #eee',
            marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)', borderLeft: isFav ? '5px solid #27ae60' : '5px solid #3498db'
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
                    <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>
                        <span style={{ marginRight: '10px' }}>⭐ GPA: <strong>{student.gpa}</strong></span>
                        <span>🗣️ Dil: <strong>{student.englishLevel}</strong></span>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.7rem', color: '#999' }}>Skor</div>
                <div style={{ fontWeight: 'bold', fontSize: '1rem', color: isFav ? '#27ae60' : '#3498db' }}>
                    {student.successScore}
                </div>
                <Link to={`/profile/${student._id}`} style={{ fontSize: '0.8rem', textDecoration: 'none', color: '#555', fontWeight: '600' }}>
                    İncele
                </Link>
            </div>
        </div>
    );

    return (
        <div className="internship-detail-page">
            <Link to={userInfo?.role === 'company' ? "/company/my-internships" : "/internships"}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#555', marginBottom: '20px', fontWeight: '600' }}>
                <FaArrowLeft /> Listeye Dön
            </Link>

            <div className="detail-container">
                <div className="detail-header">
                    <h1>{internship.title}</h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>{internship.company?.name}</p>
                </div>

                <div className="detail-content">
                    <div className="info-grid">
                        <div className="info-box"><span className="info-label">Gemi Tipi</span><span className="info-value">{internship.shipType}</span></div>
                        <div className="info-box"><span className="info-label">Pozisyon</span><span className="info-value">{internship.location}</span></div>
                        <div className="info-box"><span className="info-label">Maaş</span><span className="info-value">{internship.salary} USD</span></div>
                        <div className="info-box"><span className="info-label">Süre</span><span className="info-value">{internship.duration}</span></div>
                    </div>

                    <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '30px 0' }} />
                    <h3>İlan Detayları</h3>
                    <p className="description-text">{internship.description}</p>
                </div>

                <div className="detail-footer" style={{ padding: '20px 40px', background: '#f8f9fa', borderTop: '1px solid #eee', textAlign: 'right' }}>
                    {userInfo?.role === 'student' && (
                        hasApplied ? (
                            <button disabled style={{ background: '#27ae60', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold' }}>Başvuruldu</button>
                        ) : (
                            <button onClick={handleApply} style={{ background: '#3498db', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>Hemen Başvur</button>
                        )
                    )}
                    {userInfo?.role === 'company' && internship.company._id === userInfo._id && (
                        <Link to={`/company/edit-internship/${internship._id}`} style={{ background: '#f39c12', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none' }}>Düzenle</Link>
                    )}
                </div>

                {/* --- YENİ ADAY HAVUZU (IZGARA GÖRÜNÜMÜ) --- */}
                {scoutData && (
                    <div className="scout-section">
                        <h2 className="scout-title"><FaUserGraduate /> Akıllı Aday Eşleştirme</h2>
                        <p className="scout-subtitle">
                            Bu liste, <strong>"{internship.shipType}"</strong> gemi tipinde ve <strong>"{internship.department}"</strong> bölümünde okuyan, staj arayan öğrencilerden derlenmiştir.
                        </p>

                        <div className="scout-grid-layout">
                            {/* SOL SÜTUN: FAVORİLEYENLER */}
                            <div className="scout-column">
                                <h4 style={{ color: '#27ae60', borderColor: '#27ae60' }}>🌟 Şirketinizi Hedefleyenler</h4>
                                {scoutData.favorited.length > 0 ? (
                                    scoutData.favorited.map(stu => <ScoutCard key={stu._id} student={stu} isFav={true} />)
                                ) : (
                                    <p style={{ color: '#999', fontSize: '0.9rem' }}>Bu kategoride sizi favorileyen öğrenci yok.</p>
                                )}
                            </div>

                            {/* SAĞ SÜTUN: DİĞERLERİ */}
                            <div className="scout-column">
                                <h4 style={{ color: '#3498db', borderColor: '#3498db' }}>📋 Diğer Uygun Adaylar</h4>
                                {scoutData.others.length > 0 ? (
                                    scoutData.others.map(stu => <ScoutCard key={stu._id} student={stu} isFav={false} />)
                                ) : (
                                    <p style={{ color: '#999', fontSize: '0.9rem' }}>Başka uygun aday bulunamadı.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InternshipDetailPage;