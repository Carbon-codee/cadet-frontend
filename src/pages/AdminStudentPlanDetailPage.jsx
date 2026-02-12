import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import { FaUserGraduate, FaBuilding, FaCheck, FaLock, FaRocket, FaArrowLeft, FaAnchor } from 'react-icons/fa';
import './StudyDashboard.css'; // Reusing the same styles

const AdminStudentPlanDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imgError, setImgError] = useState(false);

    // 60 Days Array
    const daysArray = Array.from({ length: 60 }, (_, i) => i + 1);

    useEffect(() => {
        // Apply dark theme class to body globally
        document.body.classList.add('dark-tech-theme');
        return () => {
            document.body.classList.remove('dark-tech-theme');
        };
    }, []);

    useEffect(() => {
        fetchPlanDetail();
    }, [id]);

    const fetchPlanDetail = async () => {
        try {
            const res = await API.get(`/study-plan/admin/plan/${id}`);
            setPlan(res.data);
        } catch (error) {
            console.error("Plan detayları alınamadı:", error);
            alert("Plan bulunamadı veya yetkiniz yok.");
            navigate('/admin/student-plans');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="dashboard-loading"><div className="loader"></div></div>;
    if (!plan) return null;

    const student = plan.student;

    return (
        <div className="study-dashboard-container" style={{ height: '100vh', overflow: 'hidden' }}>
            {/* SOL PANEL (SIDEBAR - ÖĞRENCİ BİLGİSİ) */}
            <aside className="dashboard-sidebar-panel">
                <button
                    onClick={() => navigate('/admin/student-plans')}
                    style={{
                        background: 'none', border: '1px solid var(--border-tech)',
                        color: 'var(--text-bright)', padding: '10px', borderRadius: '8px',
                        cursor: 'pointer', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'
                    }}
                >
                    <FaArrowLeft /> Geri Dön
                </button>

                <div className="user-welcome-card">
                    <div className="avatar-circle">
                        {student?.profilePicture && !imgError ?
                            <img
                                src={student.profilePicture}
                                alt="Student"
                                onError={(e) => { e.target.onerror = null; setImgError(true); }}
                            /> :
                            <FaUserGraduate />
                        }
                    </div>
                    <h3 style={{ textTransform: 'capitalize' }}>
                        {student?.name || "Öğrenci"} {student?.surname || ""}
                    </h3>
                    <p>
                        {student?.department || "Bölüm Bilinmiyor"}
                    </p>

                    <div className="user-stats-wrapper">
                        {/* XP Compass */}
                        <div className="xp-compass" style={{ '--progress': `${Math.min(((student?.xp || 0) / ((student?.level || 1) * 1000)) * 100, 100)}%` }}>
                            <span className="xp-label">XP</span>
                        </div>

                        <div className="level-info">
                            <h3>SEVİYE {student?.level || 1}</h3>
                            <span style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem', letterSpacing: '1px' }}>
                                {student?.xp || 0} PUAN
                            </span>
                        </div>
                    </div>
                </div>

                <div className="active-plans-section">
                    <h3><FaBuilding /> HEDEF ŞİRKET</h3>
                    <div className="plan-info" style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', border: '1px solid var(--border-tech)' }}>
                        <strong style={{ fontSize: '1.1rem', color: 'var(--text-bright)', display: 'block', marginBottom: '5px' }}>
                            {plan.targetCompany?.name || 'GENEL PROTOKOL'}
                        </strong>
                        <small style={{ color: 'var(--text-dim)' }}>
                            {plan.targetCompany?.sector || 'Denizcilik'} Sektörü
                        </small>
                        <div style={{ marginTop: '10px', fontSize: '0.85rem', color: plan.isActive ? 'var(--neon-green)' : 'var(--text-dim)' }}>
                            DURUM: {plan.isActive ? 'AKTİF' : 'ARŞİVLENMİŞ'}
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 'auto', padding: '20px', textAlign: 'center', opacity: 0.6, fontSize: '0.8rem' }}>
                    <FaAnchor /> ADMIN GÖZLEMCİ MODU
                </div>
            </aside>

            {/* SAĞ PANEL (CONTENT - THE MATRIX VIEW) */}
            <main className="dashboard-content-panel">
                <div className="days-list">
                    {daysArray.map(day => {
                        const module = plan.modules.find(m => m.dayNumber === day);
                        if (!module) return null; // Should confirm logic if module is missing? Usually 60 defined.

                        const isLocked = module.isLocked;
                        const isCompleted = module.isCompleted;

                        return (
                            <div key={day} className="day-row-card" style={{ opacity: isLocked && !isCompleted ? 0.7 : 1 }}>
                                <div className="day-header">
                                    <div className="day-indicator-line"></div>
                                    <h3>{day}. GÜN</h3>
                                    <span style={{ color: 'var(--text-dim)', marginLeft: 'auto', fontFamily: 'var(--font-tech)', fontSize: '0.8rem' }}>
                                        /// {isCompleted ? 'TAMAMLANDI' : isLocked ? 'KİLİTLİ' : 'BEKLİYOR'}
                                    </span>
                                </div>

                                <div className="day-lessons-grid" style={{ gridTemplateColumns: '1fr' }}>
                                    {/* Single Column for detailed view since we focus on 1 plan */}
                                    <div
                                        className={`lesson-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`}
                                        style={{
                                            cursor: 'default',
                                            maxWidth: '100%' // Full width card
                                        }}
                                    >
                                        <div className="card-top">
                                            <span className="plan-badge">
                                                {plan.targetCompany?.name?.substring(0, 15) || 'PLAN'}
                                            </span>
                                            {isCompleted ? <FaCheck className="status-icon check" /> :
                                                isLocked ? <FaLock className="status-icon lock" /> : <FaRocket style={{ color: 'var(--neon-cyan)' }} />}
                                        </div>

                                        <div className="card-title">
                                            {module.topic}
                                        </div>

                                        {isCompleted && (
                                            <div className="completion-watermark">TAMAMLANDI</div>
                                        )}
                                        {isLocked && !isCompleted && (
                                            <div style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                                                <FaLock /> Bu ders henüz açılmamış.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default AdminStudentPlanDetailPage;
