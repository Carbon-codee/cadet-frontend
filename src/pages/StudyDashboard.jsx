import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaPlus, FaRocket, FaLock, FaCheck, FaArchive, FaBuilding, FaUserGraduate, FaInfoCircle, FaEye, FaTimes, FaAnchor, FaCalendarAlt, FaPlusCircle } from 'react-icons/fa';
import './StudyDashboard.css';

const StudyDashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [plans, setPlans] = useState([]);
    const [archivedPlans, setArchivedPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [creating, setCreating] = useState(false);

    // Modal State for Plan Details
    const [previewPlan, setPreviewPlan] = useState(null);

    const [profileData, setProfileData] = useState(null);
    const [imgError, setImgError] = useState(false);

    // 60 Days
    const daysArray = Array.from({ length: 60 }, (_, i) => i + 1);

    useEffect(() => {
        // Apply dark theme class to body globally
        document.body.classList.add('dark-tech-theme');
        return () => {
            document.body.classList.remove('dark-tech-theme');
        };
    }, []);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);

            // 0. Fetch Fresh Profile Data
            try {
                const userRes = await API.get('/users/profile');
                setProfileData(userRes.data);
            } catch (e) {
                console.warn("Profile fetch failed", e);
            }

            // 1. Fetch Active Plans
            const planRes = await API.get('/study-plan');
            let fetchedPlans = [];
            if (Array.isArray(planRes.data)) {
                fetchedPlans = planRes.data;
            } else if (planRes.data) {
                fetchedPlans = [planRes.data];
            }
            // Sort by creation date (newest first)
            fetchedPlans.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setPlans(fetchedPlans);

            // 2. Fetch Archived Plans
            try {
                const historyRes = await API.get('/study-plan/history');
                const historyData = Array.isArray(historyRes.data) ? historyRes.data : [];
                setArchivedPlans(historyData);
            } catch (e) {
                console.warn("History fetch failed", e);
            }

            // 3. Fetch Companies
            // Ensure endpoint matches backend route: /api/users/list/companies
            const companyRes = await API.get('/users/list/companies');
            setCompanies(companyRes.data);

        } catch (error) {
            console.error("Dashboard error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreatePlan = async () => {
        if (!selectedCompany) return alert("Lütfen bir şirket seçin.");

        try {
            setCreating(true);
            const res = await API.post('/study-plan/create', { targetCompanyId: selectedCompany });

            if (res.data.needsPlan === true) {
                alert(res.data.message); // "Already exists" message
            } else {
                alert('Plan oluşturuldu! Matrisinize eklendi.');
                fetchDashboardData();
                setSelectedCompany('');
            }
        } catch (error) {
            alert(error.response?.data?.message || 'Plan oluşturulamadı.');
        } finally {
            setCreating(false);
        }
    };

    const handleArchivePlan = async (planId) => {
        if (!window.confirm("Bu planı arşivlemek istediğinize emin misiniz?")) return;
        try {
            await API.put('/study-plan/archive', { planId }); // Backend needs to support planId in body or param
            alert("Plan arşivlendi.");
            fetchDashboardData();
        } catch (error) {
            alert("Arşivleme başarısız: " + (error.response?.data?.message || error.message));
        }
    };

    const handleLessonNavigation = (plan, module) => {
        if (module.isLocked && !module.isCompleted) return;
        // Fallback to dayNumber if slug is missing
        const lessonIdentifier = module.slug || module.dayNumber;
        navigate(`/study-plan/${plan.slug || plan._id}/${lessonIdentifier}`);
    };

    const getPlanColor = (index) => {
        const colors = ['#2563eb', '#7c3aed', '#db2777']; // Blue, Violet, Pink
        return colors[index % colors.length];
    };

    if (loading) return <div className="dashboard-loading"><div className="loader"></div></div>;

    const currentUser = profileData || user;

    return (
        <div className="study-dashboard-container">
            {/* SOL PANEL (SIDEBAR - KAPTAN KÖŞKÜ) */}
            <aside className="dashboard-sidebar-panel">
                <div className="user-welcome-card">
                    <div className="avatar-circle">
                        {currentUser?.profilePicture && !imgError ?
                            <img
                                src={currentUser.profilePicture}
                                alt="Profile"
                                onError={(e) => { e.target.onerror = null; setImgError(true); }}
                            /> :
                            <FaUserGraduate />
                        }
                    </div>
                    <h3 style={{ textTransform: 'capitalize' }}>
                        {currentUser?.name || "Gemi Adamı"} {currentUser?.surname || ""}
                    </h3>
                    <p>
                        {currentUser?.department || "Cadet Platformu Üyesi"}
                    </p>

                    <div className="user-stats-wrapper">
                        {/* XP Compass */}
                        <div className="xp-compass" style={{ '--progress': `${Math.min(((currentUser?.xp || 0) / ((currentUser?.level || 1) * 1000)) * 100, 100)}%` }}>
                            <span className="xp-label">XP</span>
                        </div>

                        <div className="level-info">
                            <h3>SEVİYE {currentUser?.level || 1}</h3>
                            <span style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem', letterSpacing: '1px' }}>
                                {currentUser?.xp || 0} PUAN
                            </span>
                        </div>
                    </div>
                </div>

                {/* AKTİF PLANLAR LİSTESİ */}
                {plans.length > 0 && (
                    <div className="active-plans-section">
                        <h3><FaRocket /> SİSTEM MODÜLLERİ</h3>
                        <ul className="active-plans-list">
                            {plans.map((p, idx) => (
                                <li key={p._id}>
                                    <div className="plan-info">
                                        <strong>{p.targetCompany?.name || 'GENEL PROTOKOL'}</strong>
                                        <small>DURUM: %{Math.round((p.modules.filter(m => m.isCompleted).length / 60) * 100)} EŞİTLENDİ</small>
                                    </div>
                                    <div className="plan-actions">
                                        <button onClick={() => setPreviewPlan(p)} title="İncele">
                                            <FaEye />
                                        </button>
                                        <button
                                            onClick={() => handleArchivePlan(p._id)}
                                            title="Arşivle"
                                            className="archive-btn"
                                            disabled={loading}
                                        >
                                            <FaArchive />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="create-plan-section">
                    <h2>YENİ HEDEF BAŞLAT</h2>

                    <div className="target-selection">
                        <div className="select-wrapper">
                            <select
                                value={selectedCompany}
                                onChange={(e) => setSelectedCompany(e.target.value)}
                                disabled={plans.length >= 3}
                            >
                                <option value="">ŞİRKET SEÇİNİZ...</option>
                                {companies.map(c => (
                                    <option key={c._id} value={c._id}>{c.name.toUpperCase()}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        className="create-btn"
                        onClick={handleCreatePlan}
                        disabled={!selectedCompany || creating || plans.length >= 3}
                    >
                        {creating ? 'BAŞLATILIYOR...' : 'PROTOKOLÜ BAŞLAT'}
                    </button>
                </div>

                {archivedPlans.length > 0 && (
                    <div className="archived-section">
                        <h3><FaArchive /> ARŞİV KAYITLARI</h3>
                        <ul className="archived-list">
                            {archivedPlans.map(p => (
                                <li key={p._id}>
                                    <span>{p.targetCompany?.name}</span>
                                    <small>{new Date(p.updatedAt).toLocaleDateString()}</small>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </aside>

            {/* SAĞ PANEL (CONTENT - THE MATRIX) */}
            <main className="dashboard-content-panel">
                <div className="days-list">
                    {daysArray.map(day => (
                        <div key={day} className="day-row-card">
                            <div className="day-header">
                                <div className="day-indicator-line"></div>
                                <h3>{day}. GÜN</h3>
                                <span style={{ color: 'var(--text-dim)', marginLeft: 'auto', fontFamily: 'var(--font-tech)', fontSize: '0.8rem' }}>
                                    /// BÖLÜM {Math.ceil(day / 10)}
                                </span>
                            </div>

                            <div className="day-lessons-grid">
                                {[0, 1, 2].map(slotIndex => {
                                    const plan = plans[slotIndex];
                                    if (!plan) {
                                        return (
                                            <div key={`empty-${day}-${slotIndex}`} className="lesson-card empty-slot">
                                                <span>[ SLOT MÜSAİT ]</span>
                                            </div>
                                        );
                                    }

                                    const module = plan.modules?.find(m => m.dayNumber === day);
                                    if (!module) return <div key={`err-${plan._id}-${day}`} className="lesson-card empty-slot">GÜÇ DOSYASI EKSİK</div>;

                                    const isLocked = module.isLocked;
                                    const isCompleted = module.isCompleted;
                                    // Use plan logo if available, or a generic placeholder URL (or leave blank)
                                    // We can use a generated placeholder service or static asset
                                    const logoUrl = plan.targetCompany?.logo || '';

                                    return (
                                        <div
                                            key={module._id}
                                            className={`lesson-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`}
                                            onClick={() => handleLessonNavigation(plan, module)}
                                            style={{ '--bg-logo': `url(${logoUrl})` }}
                                        >
                                            <div className="card-top">
                                                <span className="plan-badge">
                                                    {plan.targetCompany?.name?.substring(0, 10) || 'GENEL'}
                                                </span>
                                                {isCompleted ? <FaCheck className="status-icon check" /> :
                                                    isLocked ? <FaLock className="status-icon lock" /> : <FaRocket style={{ color: 'var(--neon-cyan)' }} />}
                                            </div>

                                            <div className="card-title">
                                                {module.topic}
                                            </div>

                                            {isCompleted && <div className="completion-watermark">TAMAMLANDI</div>}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* PLAN DETAY MODALI (Previous structure kept) */}
            {previewPlan && (
                <div className="plan-detail-modal-overlay" onClick={() => setPreviewPlan(null)}>
                    <div className="plan-detail-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{previewPlan.targetCompany?.name || 'Genel Plan'} - 60 Günlük Müfredat</h2>
                            <button className="close-modal-btn" onClick={() => setPreviewPlan(null)}><FaTimes /></button>
                        </div>
                        <div className="modal-body">
                            <div className="curriculum-list">
                                {previewPlan.modules.sort((a, b) => a.dayNumber - b.dayNumber).map(module => (
                                    <div
                                        key={module._id}
                                        className={`curriculum-item ${module.isCompleted ? 'completed' : ''} ${module.isLocked ? 'locked' : ''}`}
                                        onClick={() => {
                                            if (!module.isLocked || module.isCompleted) {
                                                handleLessonNavigation(previewPlan, module);
                                                setPreviewPlan(null);
                                            }
                                        }}
                                    >
                                        <div className="day-badge">Gün {module.dayNumber}</div>
                                        <div className="topic-text">{module.topic}</div>
                                        <div className="status-indicator">
                                            {module.isCompleted ? <FaCheck /> : module.isLocked ? <FaLock /> : <FaRocket />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudyDashboard;
