import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { FaFilePdf, FaVideo, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './LearningPage.css';

const LearningPage = () => {
    const { userInfo } = useAuth();

    const [allContent, setAllContent] = useState([]);
    const [savedItems, setSavedItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const [activeCategory, setActiveCategory] = useState('Tümü');
    const [selectedInstructor, setSelectedInstructor] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await API.get('/content');
                setAllContent(data);

                // Fetch saved items
                if (userInfo && userInfo._id) {
                    const userKey = `savedLearningItems_${userInfo._id}`;
                    const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');
                    const userSavedItems = data.filter(item => savedIds.includes(item._id));
                    setSavedItems(userSavedItems);
                }
            } catch (e) {
                console.error("Veri çekme hatası:", e);
                setAllContent([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [userInfo]);

    // Get unique instructors who have shared content
    const instructors = useMemo(() => {
        if (!Array.isArray(allContent)) return [];

        const instructorMap = new Map();
        allContent.forEach(item => {
            if (item.author && item.author._id) {
                if (!instructorMap.has(item.author._id)) {
                    instructorMap.set(item.author._id, {
                        ...item.author,
                        contentCount: 1
                    });
                } else {
                    const existing = instructorMap.get(item.author._id);
                    existing.contentCount += 1;
                }
            }
        });

        return Array.from(instructorMap.values()).sort((a, b) =>
            b.contentCount - a.contentCount
        );
    }, [allContent]);

    // Filter content
    const filteredContent = useMemo(() => {
        if (!Array.isArray(allContent)) return [];

        const filtered = allContent.filter(item => {
            const categoryMatch = activeCategory === 'Tümü' ||
                (activeCategory === 'PDF' && (item.type === 'Belge' || item.type === 'Ders Notu')) ||
                (activeCategory === 'Video' && item.type === 'Video') ||
                (activeCategory === 'Duyuru' && item.type === 'Duyuru');

            const instructorMatch = !selectedInstructor ||
                item.author?._id === selectedInstructor;

            return categoryMatch && instructorMatch;
        });

        // Sort by date (newest first)
        return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }, [activeCategory, selectedInstructor, allContent]);

    const getContentIcon = (type) => {
        if (type === 'Belge' || type === 'Ders Notu') return <div className="content-icon pdf"><FaFilePdf /></div>;
        if (type === 'Duyuru') return <div className="content-icon note"><FaBookOpen /></div>;
        if (type === 'Video') return <div className="content-icon video"><FaVideo /></div>;
        return <div className="content-icon video"><FaVideo /></div>;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    if (loading) return <div className="dashboard-loading"><div className="spinner"></div></div>;

    return (
        <div className="learning-dashboard-layout">
            {/* LEFT SIDEBAR */}
            <aside className="dashboard-sidebar">
                {/* Categories */}
                <div className="curriculum-section">
                    <h4 className="section-title">Kategoriler</h4>
                    <div className="module-list-scroll">
                        <div
                            className={`sidebar-module-item ${activeCategory === 'Tümü' ? 'active' : ''}`}
                            onClick={() => { setActiveCategory('Tümü'); setSelectedInstructor(null); }}
                        >
                            <div className="module-info">
                                <span className="module-topic-truncate">📚 Tümü</span>
                            </div>
                        </div>
                        <div
                            className={`sidebar-module-item ${activeCategory === 'Video' ? 'active' : ''}`}
                            onClick={() => { setActiveCategory('Video'); setSelectedInstructor(null); }}
                        >
                            <div className="module-info">
                                <span className="module-topic-truncate">📹 Videolar</span>
                            </div>
                        </div>
                        <div
                            className={`sidebar-module-item ${activeCategory === 'PDF' ? 'active' : ''}`}
                            onClick={() => { setActiveCategory('PDF'); setSelectedInstructor(null); }}
                        >
                            <div className="module-info">
                                <span className="module-topic-truncate">📄 PDF & Belgeler</span>
                            </div>
                        </div>
                        <div
                            className={`sidebar-module-item ${activeCategory === 'Duyuru' ? 'active' : ''}`}
                            onClick={() => { setActiveCategory('Duyuru'); setSelectedInstructor(null); }}
                        >
                            <div className="module-info">
                                <span className="module-topic-truncate">📢 Duyurular</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-divider"></div>

                {/* Instructors */}
                <div className="curriculum-section">
                    <h4 className="section-title">Paylaşan Hocalar</h4>
                    <div className="module-list-scroll">
                        {instructors.map(instructor => (
                            <div
                                key={instructor._id}
                                className={`sidebar-module-item instructor-item ${selectedInstructor === instructor._id ? 'active' : ''}`}
                                onClick={() => setSelectedInstructor(selectedInstructor === instructor._id ? null : instructor._id)}
                            >
                                <div className="instructor-avatar-small">
                                    {instructor.profilePicture && !instructor.profilePicture.includes('anonymous') ? (
                                        <img src={instructor.profilePicture} alt={instructor.name} />
                                    ) : (
                                        <span>{instructor.name?.charAt(0) || 'A'}</span>
                                    )}
                                </div>
                                <div className="module-info">
                                    <span className="module-topic-truncate">{instructor.name}</span>
                                    <span className="day-number">{instructor.contentCount} içerik</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="dashboard-main">
                <header className="main-header">
                    <div>
                        <h1 className="welcome-title">
                            Öğrenme Materyalleri 📚
                        </h1>
                        <p className="welcome-subtitle">
                            {selectedInstructor
                                ? `${instructors.find(i => i._id === selectedInstructor)?.name} tarafından paylaşılan içerikler`
                                : `Tüm akademisyenler tarafından paylaşılan ${filteredContent.length} içerik`
                            }
                        </p>
                    </div>
                </header>

                <div className="content-grid">
                    {filteredContent.length > 0 ? (
                        filteredContent.map(item => (
                            <div key={item._id} className="learning-content-card">
                                <div className="card-header-row">
                                    {getContentIcon(item.type)}
                                    <div className="card-meta">
                                        <span className="content-type-badge">{item.type}</span>
                                        <span className="content-date">{formatDate(item.createdAt)}</span>
                                    </div>
                                </div>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-description">
                                    {(item.content || '').substring(0, 120)}...
                                </p>
                                <div className="card-footer">
                                    <div className="author-info">
                                        <div className="author-avatar-tiny">
                                            {item.author?.profilePicture && !item.author.profilePicture.includes('anonymous') ? (
                                                <img src={item.author.profilePicture} alt={item.author.name} />
                                            ) : (
                                                <span>{item.author?.name?.charAt(0) || 'A'}</span>
                                            )}
                                        </div>
                                        <span className="author-name">{item.author?.name || 'Akademisyen'}</span>
                                    </div>
                                    <Link to={`/learning/${item._id}`} className="view-btn-modern">
                                        Görüntüle →
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-placeholder-large">
                            <FaBookOpen style={{ fontSize: '3rem', color: '#e2e8f0', marginBottom: '1rem' }} />
                            <h3>İçerik Bulunamadı</h3>
                            <p>Bu kriterlere uygun içerik bulunmuyor.</p>
                        </div>
                    )}
                </div>
            </main>

            {/* RIGHT SIDEBAR */}
            <aside className="dashboard-sidebar right-sidebar">
                <div className="curriculum-section">
                    <h4 className="section-title">Kaydedilenler ({savedItems.length})</h4>
                    <div className="module-list-scroll">
                        {savedItems.length > 0 ? (
                            savedItems.map(item => (
                                <Link
                                    to={`/learning/${item._id}`}
                                    key={item._id}
                                    className="sidebar-module-item saved-item"
                                >
                                    <div className="module-info">
                                        <span className="day-number">{item.type}</span>
                                        <span className="module-topic-truncate">{item.title}</span>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="no-plan-text">Henüz kaydedilmiş içerik yok.</p>
                        )}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default LearningPage;