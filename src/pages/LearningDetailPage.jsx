import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark, FaArrowLeft, FaDownload, FaFileAlt, FaVideo, FaFilePdf, FaBookOpen } from 'react-icons/fa';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './LearningDetailPage.css';

const LearningDetailPage = () => {
    const { id } = useParams();
    const { userInfo } = useAuth();

    const [content, setContent] = useState(null);
    const [instructorPosts, setInstructorPosts] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                // 1. İçeriği API'den çek
                const { data } = await API.get(`/content/${id}`);
                setContent(data);

                // 2. Hocanın diğer paylaşımlarını çek
                if (data.author?._id) {
                    const allContentRes = await API.get('/content');
                    const instructorContent = allContentRes.data
                        .filter(item => item.author?._id === data.author._id)
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .slice(0, 10); // Son 10 paylaşım
                    setInstructorPosts(instructorContent);
                }

                // 3. Kaydedilme durumunu kontrol et
                if (userInfo && userInfo._id) {
                    const userKey = `savedLearningItems_${userInfo._id}`;
                    const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');
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
            newSavedIds = savedIds.filter(savedId => savedId !== id);
            setIsSaved(false);
        } else {
            newSavedIds = [...savedIds, id];
            setIsSaved(true);
        }
        localStorage.setItem(userKey, JSON.stringify(newSavedIds));
    };

    const getContentIcon = (type) => {
        if (type === 'Video') return <FaVideo className="post-icon video" />;
        if (type === 'Belge' || type === 'Ders Notu') return <FaFilePdf className="post-icon pdf" />;
        if (type === 'Duyuru') return <FaBookOpen className="post-icon note" />;
        return <FaFileAlt className="post-icon" />;
    };

    // YouTube URL'lerini metinden çıkar ve embed URL'ye çevir
    const extractYoutubeUrl = (text) => {
        if (!text) return null;
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = text.match(youtubeRegex);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}`;
        }
        return null;
    };

    // İçerikten YouTube linklerini temizle
    const removeYoutubeUrls = (text) => {
        if (!text) return '';
        return text.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/g, '').trim();
    };

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;
    if (!content) return <div style={{ padding: 50, textAlign: 'center' }}>İçerik bulunamadı.</div>;

    const authorName = content.author?.name ? `${content.author.title || ''} ${content.author.name}` : 'Akademisyen';
    const authorLink = content.author?._id ? `/profile/${content.author._id}` : '#';
    const backLink = userInfo?.role === 'lecturer' ? '/lecturer/my-content' : '/learning';
    const backText = userInfo?.role === 'lecturer' ? 'İçeriklerime Geri Dön' : 'İçeriklere Geri Dön';

    // YouTube URL'yi bul (hem isResource hem de normal içerik için)
    const embedUrl = content.youtubeUrl || extractYoutubeUrl(content.content);
    const cleanedContent = embedUrl ? removeYoutubeUrls(content.content) : content.content;

    return (
        <div className="learning-detail-layout">
            {/* LEFT SIDEBAR - Instructor Info */}
            <aside className="instructor-sidebar">
                <Link to={backLink} className="sidebar-back-link">
                    <FaArrowLeft /> {backText}
                </Link>

                <div className="instructor-profile">
                    <div className="instructor-avatar">
                        {content.author?.profilePicture && !content.author.profilePicture.includes('anonymous') ? (
                            <img
                                src={content.author.profilePicture}
                                alt={authorName}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            <span className="avatar-initials">
                                {content.author?.name?.charAt(0) || 'A'}
                            </span>
                        )}
                    </div>
                    <h3 className="instructor-name">{authorName}</h3>
                    <p className="instructor-role">Akademisyen</p>
                    {content.author?.department && (
                        <p className="instructor-dept">{content.author.department}</p>
                    )}
                    <Link to={authorLink} className="view-profile-btn">
                        Profili Görüntüle
                    </Link>
                </div>

                <div className="sidebar-divider"></div>

                <div className="recent-posts-section">
                    <h4 className="section-title">Son Paylaşımlar</h4>
                    <div className="posts-list">
                        {instructorPosts.length > 0 ? (
                            instructorPosts.map(post => (
                                <Link
                                    to={`/learning/${post._id}`}
                                    key={post._id}
                                    className={`post-item ${post._id === id ? 'active' : ''}`}
                                >
                                    {getContentIcon(post.type)}
                                    <div className="post-info">
                                        <span className="post-title">{post.title}</span>
                                        <span className="post-date">
                                            {new Date(post.createdAt).toLocaleDateString('tr-TR', {
                                                day: 'numeric',
                                                month: 'short'
                                            })}
                                        </span>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="no-posts">Başka paylaşım yok</p>
                        )}
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="content-main">
                <div className="content-header">
                    <h1>{content.title}</h1>
                    <div className="content-meta">
                        <span className="meta-badge">{content.type}</span>
                        <span className="meta-divider">•</span>
                        <span>{new Date(content.createdAt).toLocaleDateString('tr-TR')}</span>
                    </div>
                </div>

                <div className="content-body">
                    {/* YouTube Video Embedding - ÖNCE VİDEO GÖSTER */}
                    {embedUrl && (
                        <div className="media-section" style={{ marginTop: 0, marginBottom: 30 }}>
                            <div className="video-container">
                                <iframe
                                    src={embedUrl}
                                    title={content.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {/* Metin İçerik */}
                    {cleanedContent && <p style={{ whiteSpace: 'pre-wrap' }}>{cleanedContent}</p>}

                    {/* PDF File from Resources */}
                    {content.isResource && content.fileType === 'pdf' && content.fileUrl && (
                        <div className="media-section">
                            <h3 className="media-title">📄 PDF Döküman</h3>
                            <div className="pdf-card">
                                <FaFileAlt className="pdf-icon" />
                                <div className="pdf-info">
                                    <h4>{content.title}</h4>
                                    <span>PDF Döküman</span>
                                </div>
                                <a href={content.fileUrl} target="_blank" rel="noopener noreferrer" className="download-btn">
                                    <FaDownload /> İndir / Görüntüle
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Base64 File from Content */}
                    {content.fileData && content.fileName && (
                        <div className="media-section">
                            <h3 className="media-title">📎 Ekli Dosya</h3>
                            <div className="file-card">
                                <FaFileAlt className="file-icon" />
                                <div className="file-info">
                                    <h4>{content.fileName}</h4>
                                    <span>Ekli Dosya</span>
                                </div>
                                <a href={content.fileData} download={content.fileName} className="download-btn">
                                    <FaDownload /> İndir
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Save Button (Students Only) */}
                {userInfo?.role === 'student' && (
                    <div className="content-footer">
                        <button onClick={handleSaveToggle} className={`save-btn ${isSaved ? 'saved' : ''}`}>
                            {isSaved ? <><FaBookmark /> Kaydedildi</> : <><FaRegBookmark /> İçeriği Kaydet</>}
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default LearningDetailPage;