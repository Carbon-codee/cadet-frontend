import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import {
    FaCheckCircle, FaUserGraduate, FaHeart, FaArrowLeft, FaBriefcase,
    FaEdit, FaPaperPlane, FaBuilding, FaClock, FaPowerOff, FaStar, FaLanguage, FaCalendarAlt
} from 'react-icons/fa';
import './InternshipDetailPage.css';

const InternshipDetailPage = () => {
    const { id } = useParams();
    const { userInfo } = useAuth();

    const [internship, setInternship] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasApplied, setHasApplied] = useState(false);
    const [scoutData, setScoutData] = useState(null);
    const [companyInternships, setCompanyInternships] = useState([]);
    const [appliedInternships, setAppliedInternships] = useState([]);

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

                    // Fetch company's other active internships
                    try {
                        const companyId = data.company._id || data.company;
                        const allInternshipsRes = await API.get('/internships');
                        const companyJobs = allInternshipsRes.data
                            .filter(job =>
                                job._id !== id &&
                                (job.company._id === companyId || job.company === companyId) &&
                                job.isActive
                            )
                            .slice(0, 5); // Get max 5 recent jobs
                        setCompanyInternships(companyJobs);
                    } catch (err) { console.error(err); }

                    // Fetch student's applied internships
                    try {
                        const myApplicationsRes = await API.get('/users/my-applications');
                        console.log('Applied internships API response:', myApplicationsRes.data);
                        const recentApplied = myApplicationsRes.data
                            .filter(job => job._id !== id)
                            .slice(0, 5); // Get max 5 recent applications
                        setAppliedInternships(recentApplied);
                        console.log('Filtered applied internships:', recentApplied);
                    } catch (err) {
                        console.error('Error fetching applied internships:', err);
                    }
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
        try { await API.post(`/internships/${id}/apply`); setHasApplied(true); alert("Başvuru gönderildi!"); }
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

    // Şirket Profili Linki İçin ID
    const companyProfileId = internship.company._id || internship.company;

    // --- ADAY KARTI ---
    const ScoutCard = ({ student, isFav }) => (
        <div className={`scout-card ${isFav ? 'fav' : 'other'}`}>
            <div className="card-top-row">
                <div className="scout-avatar" style={{ background: isFav ? '#27ae60' : '#3498db', overflow: 'hidden' }}>
                    {student.profilePicture && !student.profilePicture.includes('anonymous-avatar-icon') ? (
                        <img src={student.profilePicture} alt={student.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <span>{student.name.charAt(0)}{student.surname?.charAt(0) || ''}</span>
                    )}
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
                    <div className="score-fill" style={{ width: `${student.successScore}%`, background: isFav ? 'linear-gradient(90deg, #2ecc71, #27ae60)' : 'linear-gradient(90deg, #3498db, #2980b9)' }}></div>
                </div>
            </div>
            <Link to={`/profile/${student._id}`} className={`btn-inspect ${isFav ? 'fav' : 'other'}`}>Profili İncele</Link>
        </div>
    );

    return (
        <div className="internship-detail-page">
            <Link to={isOwner ? "/company/my-internships" : "/internships"} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#555', marginBottom: '20px', fontWeight: '600' }}>
                <FaArrowLeft /> Listeye Dön
            </Link>

            <div className="page-layout">
                {/* SOL SÜTUN */}
                <div className="side-column">
                    {isOwner && (
                        <>
                            <span className="column-title title-left">🌟 HED EFLEYENLER</span>
                            {scoutData?.favorited?.length > 0 ? scoutData.favorited.map(stu => <ScoutCard key={stu._id} student={stu} isFav={true} />) : <p style={{ textAlign: 'center', color: '#999' }}>Yok.</p>}
                        </>
                    )}

                    {userInfo?.role === 'student' && internship && (
                        <>
                            <div className="company-sidebar-card">
                                <div className="company-logo-section">
                                    {internship.company?.profilePicture && !internship.company.profilePicture.includes('anonymous') ? (
                                        <img src={internship.company.profilePicture} alt={internship.company.name} className="company-logo-img" />
                                    ) : (
                                        <div className="company-logo-placeholder">
                                            <FaBuilding />
                                        </div>
                                    )}
                                </div>
                                <h3 className="company-sidebar-name">{internship.company?.name || 'Şirket'}</h3>
                                <Link to={`/profile/${companyProfileId}`} className="view-company-profile-btn">
                                    <FaBuilding /> Şirket Profilini Görüntüle
                                </Link>
                            </div>

                            {companyInternships.length > 0 && (
                                <>
                                    <div className="sidebar-divider"></div>
                                    <h4 className="sidebar-section-title">📋 Diğer İlanlar</h4>
                                    <div className="company-jobs-list">
                                        {companyInternships.map(job => (
                                            <Link to={`/internships/${job._id}`} key={job._id} className="company-job-item">
                                                <div className="job-item-header">
                                                    <span className="job-item-title">{job.title}</span>
                                                    <span className="job-item-badge">{job.shipType}</span>
                                                </div>
                                                <div className="job-item-meta">
                                                    <span>{job.location}</span>
                                                    <span className="job-item-salary">{job.salary}$</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>

                {/* ORTA SÜTUN: İLAN DETAYI */}
                <div className="detail-container">
                    <div className="detail-header">
                        <h1>{internship.title}</h1>

                        {/* --- DÜZELTME 1: ŞİRKET LİNKİ GERİ GELDİ --- */}
                        <Link to={`/profile/${companyProfileId}`} className="company-profile-link">
                            <FaBuilding style={{ marginRight: '8px' }} />
                            {internship.company?.name || 'Şirket Profili'}
                        </Link>
                        {/* ------------------------------------------- */}

                        {!internship.isActive && <div style={{ marginTop: '15px', background: '#c0392b', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.9rem' }}>PASİF İLAN</div>}
                    </div>

                    <div className="detail-content">

                        {/* --- DÜZELTME 2: TARİHLER GERİ GELDİ --- */}
                        <div className="date-info-bar">
                            <span><FaClock /> Yayınlanma: <strong>{new Date(internship.createdAt).toLocaleDateString('tr-TR')}</strong></span>
                            <span><FaCalendarAlt /> Staj Başlangıç: <strong>{new Date(internship.startDate).toLocaleDateString('tr-TR')}</strong></span>
                        </div>
                        {/* -------------------------------------- */}

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

                {/* SAĞ SÜTUN */}
                <div className="side-column">
                    {isOwner && (
                        <>
                            <span className="column-title title-right">📋 DİĞER ADAYLAR</span>
                            {scoutData?.others?.length > 0 ? scoutData.others.map(stu => <ScoutCard key={stu._id} student={stu} isFav={false} />) : <p style={{ textAlign: 'center', color: '#999' }}>Yok.</p>}
                        </>
                    )}

                    {userInfo?.role === 'student' && (
                        <>
                            <h4 className="sidebar-section-title">📌 Son Başvurularım</h4>
                            {appliedInternships.length > 0 ? (
                                <div className="company-jobs-list">
                                    {appliedInternships.map(job => (
                                        <Link to={`/internships/${job._id}`} key={job._id} className="company-job-item applied-job-item">
                                            <div className="job-item-header">
                                                <span className="job-item-title">{job.title}</span>
                                                <span className="job-item-badge applied-badge">{job.shipType}</span>
                                            </div>
                                            <div className="job-item-meta">
                                                <span className="job-company-name">{job.company?.name || 'Şirket'}</span>
                                            </div>
                                            <div className="job-item-meta">
                                                <span>{job.location}</span>
                                                <span className="job-item-salary">{job.salary}$</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '2rem 1rem', background: 'white', borderRadius: '1rem', border: '1px solid #f1f5f9' }}>
                                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Henüz başka ilanlara başvuru yapmadınız.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InternshipDetailPage;