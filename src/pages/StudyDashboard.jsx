import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import { FaLock, FaUnlock, FaStar, FaBrain, FaChartLine } from 'react-icons/fa';
import QuizModal from '../components/QuizModal';
import AiAssistant from '../components/AiAssistant';
import './StudyDashboard.css'; // Import the CSS file

const StudyDashboard = () => {
    const [loading, setLoading] = useState(true);
    const [plan, setPlan] = useState(null);
    const [user, setUser] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [targetCompanies, setTargetCompanies] = useState([]);
    const [message, setMessage] = useState('');
    const [activeDay, setActiveDay] = useState(null);
    const [viewingArchived, setViewingArchived] = useState(false);

    // Fetch user info and current plan on mount
    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        try {
            // 1. Get User Profile for Target Companies
            const userRes = await API.get('/users/profile');
            setUser(userRes.data);

            if (userRes.data.preferences?.targetCompanies) {
                setTargetCompanies(userRes.data.preferences.targetCompanies);
            }

            // 2. Check for existing active plan
            try {
                const planRes = await API.get('/study-plan');
                setPlan(planRes.data);
            } catch (err) {
                setPlan(null);
            }

        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreatePlan = async () => {
        if (!selectedCompany) {
            setMessage('Lütfen bir hedef şirket seçin.');
            return;
        }
        try {
            setLoading(true);
            const res = await API.post('/study-plan/check',
                { targetCompanyId: selectedCompany }
            );

            if (res.data.needsPlan) {
                fetchInitialData();
            } else {
                setMessage(res.data.message);
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    };

    const handleDayClick = (day) => {
        if (day.isLocked) return;
        if (day.isCompleted) return; // Or allow review?

        // Navigate to dedicated session page
        window.location.href = `/study-plan/${plan._id}/day/${day.dayNumber}`;
        // Using navigate hook would be better but window.location works for now or I can add useNavigate
    };

    const handleArchivePlan = async () => {
        if (window.confirm("Mevcut planınız kaydedilecek ve yeni bir şirket seçimi yapmanız için yönlendirileceksiniz. Onaylıyor musunuz?")) {
            try {
                setLoading(true);
                await API.put('/study-plan/archive');
                setPlan(null); // Clear local plan to show selector
                fetchInitialData();
            } catch (error) {
                setMessage("Plan arşivlenirken hata oluştu.");
            } finally {
                setLoading(false);
            }
        }
    };

    const handleViewHistory = (archivedPlan) => {
        setPlan(archivedPlan);
        setViewingArchived(true);
        window.scrollTo(0, 0);
    };

    const handleBackToCurrent = () => {
        setViewingArchived(false);
        setLoading(true); // Show loading briefly
        fetchInitialData();
    };

    if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}>Yükleniyor...</div>;

    return (
        <div className="study-dashboard">
            <div className="dashboard-container">
                <header className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 className="dashboard-title">
                            {viewingArchived ? 'Geçmiş Plan İncelemesi' : 'Kişisel Gelişim'}
                        </h1>
                        <p className="dashboard-subtitle">
                            {viewingArchived ? 'Bu plan salt okunur moddadır.' : 'Hedeflerinizdeki şirkete girmek için eksiklerinizi tamamlayın.'}
                        </p>
                    </div>
                    <div>
                        {viewingArchived ? (
                            <button onClick={handleBackToCurrent} className="change-plan-btn" style={{ borderColor: '#3b82f6', color: '#2563eb', background: '#eff6ff' }}>
                                Güncel Plana Dön
                            </button>
                        ) : (
                            <button onClick={handleArchivePlan} className="change-plan-btn">
                                Hedef Değiştir / Yeni Plan
                            </button>
                        )}
                    </div>
                </header>

                {message && (
                    <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.75rem' }}>
                        {message}
                    </div>
                )}

                {!plan ? (
                    <div className="create-plan-card">
                        <div className="brain-icon-container">
                            <FaBrain className="brain-icon" />
                        </div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>
                            Kişiselleştirilmiş Çalışma Programı Oluştur
                        </h2>
                        <p style={{ color: '#64748b', marginBottom: '2rem', maxWidth: '40rem', margin: '0 auto 2rem' }}>
                            GPA ve İngilizce seviyeniz, hedeflediğiniz şirketin standartlarına göre analiz edilecek ve gerekirse size özel 60 günlük bir program hazırlanacaktır.
                        </p>

                        <div className="create-plan-form">
                            <label style={{ display: 'block', textAlign: 'left', fontSize: '0.875rem', fontWeight: '500', color: '#334155', marginBottom: '0.5rem' }}>
                                Hedef Şirket Seçin
                            </label>
                            <select
                                value={selectedCompany}
                                onChange={(e) => setSelectedCompany(e.target.value)}
                                className="company-select"
                            >
                                <option value="">Şirket Seçiniz...</option>
                                {targetCompanies.length > 0 ? targetCompanies.map(comp => (
                                    <option key={comp._id || comp} value={comp._id || comp}>
                                        {comp.name || 'Şirket ' + (comp._id || comp)}
                                    </option>
                                )) : <option disabled>Listenizde şirket yok (Profilinizden ekleyin)</option>}
                            </select>

                            <button
                                onClick={handleCreatePlan}
                                className="create-btn"
                            >
                                Analiz Et ve Plan Oluştur
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        {/* ... Existing Dashboard Content ... */}
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-icon orange">
                                    <FaStar />
                                </div>
                                <div>
                                    <p className="stat-label">Toplam XP</p>
                                    <p className="stat-value">{user?.xp || 0} XP</p>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon green">
                                    <FaChartLine />
                                </div>
                                <div>
                                    <p className="stat-label">İlerleme</p>
                                    <p className="stat-value">
                                        {Math.round((plan.modules.filter(m => m.isCompleted).length / plan.modules.length) * 100)}%
                                    </p>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon purple">
                                    <FaBrain />
                                </div>
                                <div>
                                    <p className="stat-label">Kalan Gün</p>
                                    <p className="stat-value">
                                        {plan.modules.filter(m => !m.isCompleted).length}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modules Grid */}
                        <div className="modules-grid">
                            {plan.modules.map((module) => (
                                <div
                                    key={module._id}
                                    onClick={() => handleDayClick(module)}
                                    className={`module-card ${module.isCompleted ? 'completed' : ''} ${module.isLocked ? 'locked' : ''}`}
                                >
                                    <div className="module-header">
                                        <span className="day-badge">
                                            Gün {module.dayNumber}
                                        </span>
                                        {module.isCompleted ? (
                                            <FaStar style={{ color: '#eab308' }} /> // yellow-500
                                        ) : module.isLocked ? (
                                            <FaLock style={{ color: '#94a3b8' }} /> // slate-400
                                        ) : (
                                            <FaUnlock style={{ color: '#3b82f6' }} /> // blue-500
                                        )}
                                    </div>

                                    <h3 className="module-title">
                                        {module.topic}
                                    </h3>

                                    {module.isLocked && module.unlockDate && (
                                        <p className="unlock-date">
                                            Açılacağı tarih: {new Date(module.unlockDate).toLocaleDateString()}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* YENİ EKLENEN KISIM: Plan Geçmişi */}
                {!viewingArchived && <HistorySection onSelectPlan={handleViewHistory} />}

                {/* NOTE: Global AI Assistant is added via Context or Layout mostly, but kept here if local */}
            </div>
        </div>
    );
};

const HistorySection = ({ onSelectPlan }) => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                setLoading(true);
                const res = await API.get('/study-plan/history');
                setHistory(res.data);
            } catch (err) {
                console.error("Geçmiş planlar yüklenemedi", err);
            } finally {
                setLoading(false);
            }
        };
        fetchHistory();
    }, []);

    if (loading) return null;
    if (history.length === 0) return null;

    return (
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#64748b', marginBottom: '1rem' }}>
                Geçmiş Çalışma Programlarım
            </h3>
            <div className="modules-grid">
                {history.map(plan => (
                    <div
                        key={plan._id}
                        onClick={() => onSelectPlan(plan)}
                        style={{
                            background: 'white', padding: '1.5rem', borderRadius: '1rem',
                            border: '1px solid #e2e8f0', opacity: 0.8, cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.opacity = '1'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.opacity = '0.8'; }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: 'bold', color: '#475569' }}>
                                {plan.targetCompany?.name || 'Şirket Bilinmiyor'}
                            </span>
                            <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                {new Date(plan.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                            Tamamlanan: %{Math.round((plan.modules.filter(m => m.isCompleted).length / plan.modules.length) * 100)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudyDashboard;
