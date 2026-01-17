import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig'; // API importu
import { FaFilePdf, FaVideo, FaBookOpen } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './LearningPage.css';

const LearningPage = () => {
    const { userInfo } = useAuth();

    const [allContent, setAllContent] = useState([]);
    const [savedItems, setSavedItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('Tümü');

    // --- EN ÖNEMLİ DEĞİŞİKLİK BURADA ---
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // 1. İÇERİKLERİ VERİTABANINDAN ÇEK
                const { data } = await API.get('/content'); // Artık /api yazmıyoruz
                setAllContent(data);

                // 2. KİŞİYE ÖZEL KAYITLARI ÇEK (Bu hâlâ localStorage'da)
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

    const filteredContent = useMemo(() => {
        return allContent.filter(item => {
            const categoryMatch = activeCategory === 'Tümü' ||
                (activeCategory === 'PDF' && (item.type === 'Belge' || item.type === 'Ders Notu')) ||
                (activeCategory === 'Duyuru' && item.type === 'Duyuru');
            const searchMatch = (item.title || '').toLowerCase().includes(searchTerm.toLowerCase());
            return categoryMatch && searchMatch;
        });
    }, [searchTerm, activeCategory, allContent]);

    const getContentIcon = (type) => {
        if (type === 'Belge' || type === 'Ders Notu') return <div className="content-icon pdf"><FaFilePdf /></div>;
        if (type === 'Duyuru') return <div className="content-icon note"><FaBookOpen /></div>;
        return <div className="content-icon video"><FaVideo /></div>;
    };

    if (loading) return <div style={{ padding: 40, textAlign: 'center', color: '#666' }}>Yükleniyor...</div>;

    return (
        <div className="learning-page-container">
            <aside className="left-sidebar">
                <h3>Materyal Ara</h3>
                <div className="search-box"><input type="text" placeholder="Konu, başlık..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /></div>
                <h3>Kategoriler</h3>
                <ul className="category-list">
                    <li className={`category-item ${activeCategory === 'Tümü' ? 'active' : ''}`} onClick={() => setActiveCategory('Tümü')}>Tümü</li>
                    <li className={`category-item ${activeCategory === 'PDF' ? 'active' : ''}`} onClick={() => setActiveCategory('PDF')}>PDF & Belgeler</li>
                    <li className={`category-item ${activeCategory === 'Duyuru' ? 'active' : ''}`} onClick={() => setActiveCategory('Duyuru')}>Duyurular</li>
                </ul>
            </aside>

            <main className="main-content">
                <div className="content-list">
                    {filteredContent.length > 0 ? (
                        [...filteredContent].reverse().map(item => (
                            <div key={item._id} className="content-card">
                                {getContentIcon(item.type)}
                                <div className="content-details">
                                    <h4>{item.title}</h4>
                                    <p>{`${(item.content || '').substring(0, 100)}...`}</p>
                                    <div className="author">Yükleyen: {item.author?.name || 'Akademisyen'}</div>
                                </div>
                                <Link to={`/learning/${item._id}`} className="view-button">
                                    Görüntüle
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', color: '#999', padding: '40px', background: 'white', borderRadius: '12px' }}>
                            Henüz paylaşılmış bir içerik bulunmuyor.
                        </div>
                    )}
                </div>
            </main>

            <aside className="right-sidebar">
                <h3>Kaydedilenler ({savedItems.length})</h3>
                {savedItems.length > 0 ? (
                    <ul className="category-list">
                        {[...savedItems].reverse().map(item => (
                            <Link to={`/learning/${item._id}`} key={item._id} className="category-item" style={{ textDecoration: 'none' }}>
                                {item.title}
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>Henüz kaydedilmiş bir içerik yok.</p>
                )}
            </aside>
        </div>
    );
};

export default LearningPage;