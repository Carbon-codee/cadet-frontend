import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark, FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './LearningDetailPage.css';

const LearningDetailPage = () => {
    const { id } = useParams();
    const { userInfo } = useAuth();

    const [content, setContent] = useState(null);
    const [isSaved, setIsSaved] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        try {
            const allContents = JSON.parse(localStorage.getItem('lecturerContents') || '[]');
            const contentId = parseInt(id, 10);

            const foundContent = allContents.find(item => (item.id || item._id) === contentId);

            if (foundContent) {
                setContent(foundContent);

                if (userInfo && userInfo._id) {
                    const userKey = `savedLearningItems_${userInfo._id}`;
                    const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');
                    if (savedIds.map(i => parseInt(i)).includes(contentId)) {
                        setIsSaved(true);
                    }
                }
            }
        } catch (error) {
            console.error("Hata:", error);
        } finally {
            setLoading(false);
        }
    }, [id, userInfo]);

    const handleSaveToggle = () => {
        if (!userInfo || !userInfo._id) {
            alert("Kaydetmek için giriş yapmalısınız.");
            return;
        }
        const userKey = `savedLearningItems_${userInfo._id}`;
        const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');
        const contentId = parseInt(id, 10);

        let newSavedIds;
        if (isSaved) {
            newSavedIds = savedIds.filter(savedId => parseInt(savedId) !== contentId);
            setIsSaved(false);
        } else {
            savedIds.push(contentId);
            newSavedIds = savedIds;
            setIsSaved(true);
        }
        localStorage.setItem(userKey, JSON.stringify(newSavedIds));
    };

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;
    if (!content) return <div style={{ padding: 50, textAlign: 'center' }}>İçerik bulunamadı.</div>;

    // Eğer eski bir içerikse ve ID kaydedilmemişse varsayılan değer kullan
    const authorName = content.authorName || 'Akademisyen';
    const authorLink = content.authorId ? `/profile/${content.authorId}` : '#';

    return (
        <div className="learning-detail-page">

            <Link to="/learning" className="page-back-link">
                <span><FaArrowLeft /> Listeye Geri Dön</span>
            </Link>

            <div className="detail-container">
                <div className="detail-header">
                    <h1>{content.title}</h1>
                    <div className="meta-info">
                        <span>{content.date}</span>
                        <span>•</span>
                        <span>{content.type}</span>
                        <span>•</span>
                        <span>
                            Yayınlayan:
                            {/* DİNAMİK LİNK */}
                            <Link to={authorLink} className="author-link">
                                {authorName}
                            </Link>
                        </span>
                    </div>
                </div>

                <div className="detail-content">
                    <p>{content.content}</p>
                </div>

                <div className="detail-footer">
                    <button onClick={handleSaveToggle} className={`save-button ${isSaved ? 'saved' : ''}`}>
                        {isSaved ? <><FaBookmark /> Kaydedildi</> : <><FaRegBookmark /> İçeriği Kaydet</>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LearningDetailPage;