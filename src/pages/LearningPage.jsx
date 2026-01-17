import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaVideo, FaBookOpen } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './LearningPage.css';

const LearningPage = () => {
    const { userInfo } = useAuth();

    const [allContent, setAllContent] = useState([]);
    const [savedItems, setSavedItems] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('Tümü');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        try {
            // 1. İçerikleri Oku
            const rawContent = localStorage.getItem('lecturerContents');
            let parsedContent = JSON.parse(rawContent || '[]');

            // Veri yoksa demo veri ekle
            if (parsedContent.length === 0) {
                const demoData = [
                    { id: 101, title: "Denizcilikte Acil Durumlar", type: "Ders Notu", content: "...", date: "17.01.2026", targetAudience: "Tüm" },
                    { id: 102, title: "2026 Yaz Stajı", type: "Duyuru", content: "...", date: "16.01.2026", targetAudience: "Tüm" }
                ];
                parsedContent = demoData;
                localStorage.setItem('lecturerContents', JSON.stringify(demoData));
            }

            setAllContent(parsedContent);

            // 2. KAYDEDİLENLERİ ÇEK VE EŞLEŞTİR (DÜZELTİLEN KISIM)
            if (userInfo && userInfo._id) {
                const userKey = `savedLearningItems_${userInfo._id}`;
                const savedIdsRaw = JSON.parse(localStorage.getItem(userKey) || '[]');

                // Hepsini sayıya çevir
                const savedIds = savedIdsRaw.map(id => parseInt(id));

                // Eşleşenleri bul (ID'leri sayıya çevirerek kıyasla)
                const userSavedItems = parsedContent.filter(item => {
                    const itemId = parseInt(item.id || item._id);
                    return savedIds.includes(itemId);
                });

                setSavedItems(userSavedItems);
            } else {
                setSavedItems([]);
            }

        } catch (e) {
            console.error("Hata:", e);
        } finally {
            setLoading(false);
        }
    }, [userInfo]);

    // Filtreleme
    const filteredContent = useMemo(() => {
        return allContent.filter(item => {
            const categoryMatch = activeCategory === 'Tümü' ||
                (activeCategory === 'PDF' && (item.type === 'Belge' || item.type === 'Ders Notu')) ||
                (activeCategory === 'Duyuru' && item.type === 'Duyuru');
            const searchMatch = item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase());
            return categoryMatch && searchMatch;
        });
    }, [searchTerm, activeCategory, allContent]);

    const getContentIcon = (type) => {
        if (type === 'Belge' || type === 'Ders Notu') return <div className="content-icon pdf"><FaFilePdf /></div>;
        if (type === 'Duyuru') return <div className="content-icon note"><FaBookOpen /></div>;
        return <div className="content-icon video"><FaVideo /></div>;
    };

    if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Yükleniyor...</div>;

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
                            <div key={item.id} className="content-card">
                                {getContentIcon(item.type)}
                                <div className="content-details">
                                    <h4>{item.title}</h4>
                                    <p>{item.content ? `${item.content.substring(0, 100)}...` : ''}</p>
                                    <div className="author">Yükleyen: Akademisyen</div>
                                </div>
                                <Link to={`/learning/${item.id}`} className="view-button">Görüntüle</Link>
                            </div>
                        ))
                    ) : <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>İçerik bulunamadı.</div>}
                </div>
            </main>

            <aside className="right-sidebar">
                <h3>Kaydedilenler ({savedItems.length})</h3>
                {savedItems.length > 0 ? (
                    <ul className="category-list" style={{ gap: '5px', display: 'flex', flexDirection: 'column' }}>
                        {[...savedItems].reverse().map(item => (
                            <Link to={`/learning/${item.id}`} key={item.id} className="category-item" style={{ textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
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