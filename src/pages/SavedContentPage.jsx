import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaVideo, FaBookOpen, FaTrash, FaEye, FaArrowRight } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './SavedContentPage.css';

const SavedContentPage = () => {
    const { userInfo } = useAuth();
    const [savedList, setSavedList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userInfo && userInfo._id) {
            try {
                // 1. Tüm içerikleri çek (Bunlar ortak)
                const allContent = JSON.parse(localStorage.getItem('lecturerContents') || '[]');

                // 2. KULLANICIYA ÖZEL kayıtlı ID'leri çek
                // ÖNEMLİ: Anahtar ismi 'savedLearningItems_' + userID formatında
                const userKey = `savedLearningItems_${userInfo._id}`;
                const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');

                // 3. ID'leri eşleşen içerikleri filtrele
                // (Güvenlik: item ve item.id kontrolü yapıyoruz)
                // savedIds içindeki ID'ler sayı olduğu için parseInt ile garantiye alıyoruz
                const filtered = allContent.filter(item =>
                    item && item.id && savedIds.includes(parseInt(item.id))
                );

                setSavedList(filtered);
            } catch (error) {
                console.error("Kaydedilenler yüklenirken hata:", error);
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, [userInfo]);

    // Listeden Kaldırma Fonksiyonu
    const handleRemove = (id) => {
        if (!userInfo) return;

        const userKey = `savedLearningItems_${userInfo._id}`;
        const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');

        // ID'yi listeden çıkar
        const newIds = savedIds.filter(savedId => savedId !== id);

        // LocalStorage'ı güncelle
        localStorage.setItem(userKey, JSON.stringify(newIds));

        // Ekrandaki listeyi anında güncelle
        setSavedList(prev => prev.filter(item => item.id !== id));
    };

    const getContentIcon = (type) => {
        if (type === 'Belge' || type === 'Ders Notu') return <div className="content-icon pdf"><FaFilePdf /></div>;
        if (type === 'Duyuru') return <div className="content-icon note"><FaBookOpen /></div>;
        return <div className="content-icon video"><FaVideo /></div>;
    };

    if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Yükleniyor...</div>;

    return (
        <div className="saved-page-container">
            <div className="page-header">
                <h1>Kaydedilen Materyaller</h1>
                <p>Daha sonra okumak üzere işaretlediğiniz tüm içerikler.</p>
            </div>

            {savedList.length > 0 ? (
                <div className="saved-grid">
                    {savedList.map(item => (
                        <div key={item.id} className="saved-card">
                            <div className="card-left">
                                {getContentIcon(item.type)}
                                <div className="card-info">
                                    <h3>{item.title}</h3>
                                    <div className="card-meta">
                                        <span>📅 {item.date}</span>
                                        <span className="badge-category">{item.type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-actions">
                                <Link to={`/learning/${item.id}`} className="btn-view">
                                    <FaEye /> İncele
                                </Link>
                                <button onClick={() => handleRemove(item.id)} className="btn-remove" title="Listeden Kaldır">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <div className="empty-icon">📂</div>
                    <h3>Listeniz Boş</h3>
                    <p>Henüz hiçbir materyali kaydetmediniz.</p>
                    <Link to="/learning" className="go-learning-btn">
                        Öğrenme Merkezine Git <FaArrowRight />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SavedContentPage;