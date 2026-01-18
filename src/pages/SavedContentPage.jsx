import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaVideo, FaBookOpen, FaTrash, FaEye, FaArrowRight } from 'react-icons/fa';
import API from '../api/axiosConfig'; // API kullanacağız
import { useAuth } from '../context/AuthContext';
import './SavedContentPage.css';

const SavedContentPage = () => {
    const { userInfo } = useAuth();
    const [savedList, setSavedList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSavedContent = async () => {
            if (userInfo && userInfo._id) {
                try {
                    // 1. Veritabanındaki TÜM içerikleri çek
                    const { data } = await API.get('/content');

                    // 2. Kullanıcının kaydettiği ID'leri LocalStorage'dan al
                    const userKey = `savedLearningItems_${userInfo._id}`;
                    const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');

                    // 3. Eşleşenleri Filtrele (ID'leri String olarak karşılaştır)
                    // MongoDB ID'si '_id' olarak gelir.
                    const filtered = data.filter(item => savedIds.includes(item._id));

                    setSavedList(filtered);
                } catch (error) {
                    console.error("Kaydedilenler yüklenirken hata:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchSavedContent();
    }, [userInfo]);

    // Listeden Kaldırma
    const handleRemove = (id) => {
        if (!userInfo) return;

        const userKey = `savedLearningItems_${userInfo._id}`;
        const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');

        // ID'yi çıkar (String karşılaştırması)
        const newIds = savedIds.filter(savedId => savedId !== id);

        localStorage.setItem(userKey, JSON.stringify(newIds));
        setSavedList(prev => prev.filter(item => item._id !== id));
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
                        <div key={item._id} className="saved-card">
                            <div className="card-left">
                                {getContentIcon(item.type)}
                                <div className="card-info">
                                    <h3>{item.title}</h3>
                                    <div className="card-meta">
                                        <span>📅 {new Date(item.createdAt).toLocaleDateString('tr-TR')}</span>
                                        <span className="badge-category">{item.type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-actions">
                                <Link to={`/learning/${item._id}`} className="btn-view">
                                    <FaEye /> İncele
                                </Link>
                                <button onClick={() => handleRemove(item._id)} className="btn-remove" title="Listeden Kaldır">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📂</div>
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