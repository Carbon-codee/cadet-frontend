import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark, FaArrowLeft, FaDownload, FaFileAlt } from 'react-icons/fa';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './LearningDetailPage.css';

const LearningDetailPage = () => {
    const { id } = useParams(); // MongoDB ID'si (String)
    const { userInfo } = useAuth();

    const [content, setContent] = useState(null);
    const [isSaved, setIsSaved] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                // 1. İçeriği API'den çek
                const { data } = await API.get(`/content/${id}`);
                setContent(data);

                // 2. Kaydedilme durumunu kontrol et (Sadece öğrenciler için anlamlı ama kod kalabilir)
                if (userInfo && userInfo._id) {
                    const userKey = `savedLearningItems_${userInfo._id}`;
                    const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');

                    // ID String olduğu için direkt includes çalışır
                    if (savedIds.includes(id)) {
                        setIsSaved(true);
                    }
                }
            } catch (error) {
                console.error("İçerik bulunamadı", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchContent();
    }, [id, userInfo]);

    const handleSaveToggle = () => {
        if (!userInfo) return alert("Giriş yapmalısınız.");

        const userKey = `savedLearningItems_${userInfo._id}`;
        const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');

        let newSavedIds;
        if (isSaved) {
            // Listeden çıkar
            newSavedIds = savedIds.filter(savedId => savedId !== id);
            setIsSaved(false);
        } else {
            // Listeye ekle
            newSavedIds = [...savedIds, id];
            setIsSaved(true);
        }
        localStorage.setItem(userKey, JSON.stringify(newSavedIds));
    };

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;
    if (!content) return <div style={{ padding: 50, textAlign: 'center' }}>İçerik bulunamadı.</div>;

    const authorName = content.author?.name ? `${content.author.title || ''} ${content.author.name}` : 'Akademisyen';
    const authorLink = content.author?._id ? `/profile/${content.author._id}` : '#';

    // --- DÜZELTME 1: Geri Dönüş Linki Mantığı ---
    // Eğer Hoca ise -> 'İçeriklerim' sayfasına dönsün
    // Eğer Öğrenciyse -> 'Learning' (Akademik Panel) sayfasına dönsün
    const backLink = userInfo?.role === 'lecturer' ? '/lecturer/my-content' : '/learning';
    const backText = userInfo?.role === 'lecturer' ? 'İçeriklerime Geri Dön' : 'Listeye Geri Dön';

    return (
        <div className="learning-detail-page">
            {/* Dinamik Geri Butonu */}
            <Link to={backLink} className="page-back-link">
                <span><FaArrowLeft /> {backText}</span>
            </Link>

            <div className="detail-container">
                <div className="detail-header">
                    <h1>{content.title}</h1>
                    <div className="meta-info">
                        <span>{new Date(content.createdAt).toLocaleDateString('tr-TR')}</span>
                        <span>•</span>
                        <span>{content.type}</span>
                        <span>•</span>
                        <span>
                            Yayınlayan: <Link to={authorLink} className="author-link">{authorName}</Link>
                        </span>
                    </div>
                </div>

                <div className="detail-content">
                    <p style={{ whiteSpace: 'pre-wrap' }}>{content.content}</p>

                    {content.fileData && content.fileName && (
                        <div className="file-download-section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <FaFileAlt style={{ fontSize: '2rem', color: '#3498db' }} />
                                <div>
                                    <h4 style={{ margin: 0, color: '#2c3e50' }}>{content.fileName}</h4>
                                    <span style={{ fontSize: '0.8rem', color: '#7f8c8d' }}>Ekli Dosya</span>
                                </div>
                            </div>
                            <a href={content.fileData} download={content.fileName} className="save-button" style={{ textDecoration: 'none', backgroundColor: '#3498db', color: 'white', border: 'none' }}>
                                <FaDownload /> İndir
                            </a>
                        </div>
                    )}
                </div>

                {/* --- DÜZELTME 2: Kaydet Butonu Sadece Öğrenciler İçin --- */}
                {userInfo?.role === 'student' && (
                    <div className="detail-footer">
                        <button onClick={handleSaveToggle} className={`save-button ${isSaved ? 'saved' : ''}`}>
                            {isSaved ? <><FaBookmark /> Kaydedildi</> : <><FaRegBookmark /> İçeriği Kaydet</>}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LearningDetailPage;