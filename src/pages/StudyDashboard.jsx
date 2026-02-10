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

    if (loading) return <div className="loading-container">Veriler Yükleniyor...</div>;

    const completedCount = plan ? plan.modules.filter(m => m.isCompleted).length : 0;
    const totalCount = plan ? plan.modules.length : 0;
    const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const nextModule = plan ? plan.modules.find(m => !m.isCompleted) : null;

    return (
        <div className="study-dashboard-layout">
            {/* --- SIDEBAR --- */}
            <aside className="dashboard-sidebar">
                <div className="profile-section">
                    <div className="profile-img-container">
                        {user?.profilePicture && !user.profilePicture.includes('anonymous-avatar-icon') ? (
                            <img
                                src={user.profilePicture}
                                alt={user.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                            />
                        ) : (
                            <span className="profile-initials">
                                {user?.name?.charAt(0) || 'U'}{user?.surname?.charAt(0) || ''}
                            </span>
                        )}
                    </div>
                    <h3 className="profile-name">{user?.name} {user?.surname}</h3>
                    <p className="profile-role">{user?.role === 'student' ? 'Öğrenci' : 'Kullanıcı'}</p>

                    <div className="xp-badge">
                        <FaStar className="xp-icon" />
                        <span>{user?.xp || 0} XP</span>
                    </div>
                </div>

                <div className="sidebar-divider"></div>

                <div className="curriculum-section">
                    <h4 className="section-title">Çalışma Programı</h4>
                    {!plan ? (
                        <p className="no-plan-text">Aktif planınız yok.</p>
                    ) : (
                        <div className="module-list-scroll">
                            {plan.modules.map((module) => (
                                <div
                                    key={module._id}
                                    className={`sidebar-module-item ${module.isCompleted ? 'completed' : ''} ${module === nextModule ? 'active' : ''} ${module.isLocked ? 'locked' : ''}`}
                                    onClick={() => handleDayClick(module)}
                                >
                                    <div className="module-status-indicator">
                                        {module.isCompleted ? <FaStar /> : (module.isLocked ? <FaLock /> : <div className="dot" />)}
                                    </div>
                                    <div className="module-info">
                                        <span className="day-number">Gün {module.dayNumber}</span>
                                        <span className="module-topic-truncate">{module.topic}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="dashboard-main">
                <header className="main-header">
                    <div>
                        <h1 className="welcome-title">Hoş Geldin, {user?.name}!</h1>
                        <p className="welcome-subtitle">
                            {plan ? `Hedef: ${plan.targetCompany?.name || 'Belirlenmemiş Şirket'}` : 'Kariyer hedeflerin için bir plan oluştur.'}
                        </p>
                        {viewingArchived && <span className="archive-badge">Geçmiş Plan Modu</span>}
                    </div>
                    <div className="header-actions">
                        {viewingArchived ? (
                            <button onClick={handleBackToCurrent} className="action-btn secondary">
                                Güncel Plana Dön
                            </button>
                        ) : (
                            <button onClick={handleArchivePlan} className="action-btn outline">
                                Planı Değiştir / Arşivle
                            </button>
                        )}
                    </div>
                </header>

                {message && (
                    <div className="dashboard-alert">
                        {message}
                    </div>
                )}

                {!plan ? (
                    <div className="create-plan-container">
                        <div className="create-plan-card">
                            <div className="brain-icon-container">
                                <FaBrain className="brain-icon" />
                            </div>
                            <h2>Kişisel Gelişim Planı Oluştur</h2>
                            <p>Hedeflediğin şirkete girmek için yapay zeka destekli 60 günlük programını hazırla.</p>

                            <div className="create-plan-form">
                                <select
                                    value={selectedCompany}
                                    onChange={(e) => setSelectedCompany(e.target.value)}
                                    className="company-select"
                                >
                                    <option value="">Hedef Şirket Seçiniz...</option>
                                    {targetCompanies.length > 0 ? targetCompanies.map(comp => (
                                        <option key={comp._id || comp} value={comp._id || comp}>
                                            {comp.name || 'Şirket ' + (comp._id || comp)}
                                        </option>
                                    )) : <option disabled>Listenizde şirket yok</option>}
                                </select>
                                <button onClick={handleCreatePlan} className="create-btn">
                                    <FaBrain /> Planı Oluştur
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="dashboard-content-grid">
                        {/* Highlights Row */}
                        <div className="highlights-row">
                            <div className="highlight-card progress-card">
                                <div className="card-header">
                                    <span>Genel İlerleme</span>
                                    <FaChartLine className="card-icon" />
                                </div>
                                <div className="progress-circle-container">
                                    <div className="progress-text">
                                        <span className="percent">%{progress}</span>
                                        <span className="label">Tamamlandı</span>
                                    </div>
                                    <svg className="progress-ring" width="120" height="120">
                                        <circle className="progress-ring__circle-bg" stroke="#e2e8f0" strokeWidth="8" fill="transparent" r="52" cx="60" cy="60" />
                                        <circle
                                            className="progress-ring__circle"
                                            stroke="#3b82f6"
                                            strokeWidth="8"
                                            fill="transparent"
                                            r="52" cx="60" cy="60"
                                            style={{ strokeDasharray: `${2 * Math.PI * 52}`, strokeDashoffset: `${2 * Math.PI * 52 * (1 - progress / 100)}` }}
                                        />
                                    </svg>
                                </div>
                                <div className="stats-mini-row">
                                    <div className="stat-mini">
                                        <span className="val">{completedCount}</span>
                                        <span className="lbl">Tamamlanan</span>
                                    </div>
                                    <div className="stat-mini">
                                        <span className="val">{totalCount - completedCount}</span>
                                        <span className="lbl">Kalan</span>
                                    </div>
                                </div>
                            </div>

                            {nextModule ? (
                                <div className="highlight-card active-module-card">
                                    <div className="active-badge">BUGÜNÜN DERSİ</div>
                                    <h2 className="active-module-title">{nextModule.topic}</h2>
                                    <p className="active-module-day">Gün {nextModule.dayNumber}</p>
                                    <button className="start-lesson-btn" onClick={() => handleDayClick(nextModule)}>
                                        Derse Başla <FaUnlock />
                                    </button>
                                </div>
                            ) : (
                                <div className="highlight-card finished-card">
                                    <div className="trophy-icon">🏆</div>
                                    <h2>Tebrikler!</h2>
                                    <p>Tüm programı tamamladınız.</p>
                                </div>
                            )}
                        </div>

                        {/* Recent Modules / Upcoming (Grid) */}
                        <h3 className="section-header">Program Akışı</h3>
                        <div className="modules-grid-view">
                            {plan.modules.map((module) => (
                                <div
                                    key={module._id}
                                    onClick={() => handleDayClick(module)}
                                    className={`module-card-modern ${module.isCompleted ? 'completed' : ''} ${module === nextModule ? 'current' : ''} ${module.isLocked ? 'locked' : ''}`}
                                >
                                    <div className="card-top">
                                        <span className="day-pill">Gün {module.dayNumber}</span>
                                        {module.isCompleted && <FaStar className="status-icon completed" />}
                                        {module.isLocked && <FaLock className="status-icon locked" />}
                                    </div>
                                    <h4 className="topic-text">{module.topic}</h4>
                                    {module.isLocked && module.unlockDate && (
                                        <div className="unlock-info">{new Date(module.unlockDate).toLocaleDateString()}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Geçmiş Planlar (Sidebar'da da olabilir ama altta kalması daha temiz) */}
                {!viewingArchived && <HistorySection onSelectPlan={handleViewHistory} />}
            </main>
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

    if (loading || history.length === 0) return null;

    return (
        <div className="history-section-container">
            <h3 className="history-title">Geçmiş Çalışma Programlarım</h3>
            <div className="history-grid">
                {history.map(plan => (
                    <div
                        key={plan._id}
                        onClick={() => onSelectPlan(plan)}
                        className="history-card"
                    >
                        <div className="history-header">
                            <span className="company-name">
                                {plan.targetCompany?.name || 'Şirket Bilinmiyor'}
                            </span>
                            <span className="date-tag">
                                {new Date(plan.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="progress-bar-mini">
                            <div className="progress-fill" style={{ width: `${Math.round((plan.modules.filter(m => m.isCompleted).length / plan.modules.length) * 100)}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudyDashboard;
