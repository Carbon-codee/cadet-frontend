import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    FaBookmark, FaRegBookmark, FaArrowLeft, FaDownload,
    FaFileAlt, FaVideo, FaFilePdf, FaBookOpen, FaClock,
    FaCalendarDay, FaTag, FaShareAlt, FaPlay, FaUserGraduate
} from 'react-icons/fa';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './LearningDetailPage.css';

const LearningDetailPage = () => {
    const { slug } = useParams();
    const { userInfo } = useAuth();

    const [content, setContent] = useState(null);
    const [instructorPosts, setInstructorPosts] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const { data } = await API.get(`/content/${slug}`);
                setContent(data);

                if (data.author?._id) {
                    const allContentRes = await API.get('/content');
                    const instructorContent = allContentRes.data
                        .filter(item => item.author?._id === data.author._id)
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .slice(0, 10);
                    setInstructorPosts(instructorContent);
                }

                if (userInfo && userInfo._id) {
                    const userKey = `savedLearningItems_${userInfo._id}`;
                    const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');
                    if (savedIds.includes(data._id)) {
                        setIsSaved(true);
                    }
                }
            } catch (error) {
                console.error("İçerik bulunamadı", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchContent();
    }, [slug, userInfo]);

    const handleSaveToggle = () => {
        if (!userInfo) return alert("Giriş yapmalısınız.");
        if (!content) return;
        const userKey = `savedLearningItems_${userInfo._id}`;
        const savedIds = JSON.parse(localStorage.getItem(userKey) || '[]');
        const contentId = content._id;
        let newSavedIds;
        if (isSaved) {
            newSavedIds = savedIds.filter(savedId => savedId !== contentId);
            setIsSaved(false);
        } else {
            newSavedIds = [...savedIds, contentId];
            setIsSaved(true);
        }
        localStorage.setItem(userKey, JSON.stringify(newSavedIds));
    };

    const getContentIcon = (type) => {
        if (type === 'Video') return <FaVideo className="post-type-icon video" />;
        if (type === 'Belge' || type === 'Ders Notu') return <FaFilePdf className="post-type-icon pdf" />;
        if (type === 'Duyuru') return <FaBookOpen className="post-type-icon note" />;
        return <FaFileAlt className="post-type-icon" />;
    };

    // YouTube URL utilities
    const extractYoutubeUrl = (text) => {
        if (!text) return null;
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = text.match(youtubeRegex);
        return match && match[1] ? `https://www.youtube.com/embed/${match[1]}` : null;
    };

    const removeYoutubeUrls = (text) => {
        if (!text) return '';
        return text.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/g, '').trim();
    };

    if (loading) return <div className="loading-state">Seyir Defteri Yükleniyor...</div>;
    if (!content) return <div className="error-state">Rotada içerik bulunamadı.</div>;

    const authorName = content.author?.name ? `${content.author.title || ''} ${content.author.name}` : 'Akademisyen';
    const authorLink = content.author?._id ? `/profile/${content.author._id}` : '#';
    const backLink = userInfo?.role === 'lecturer' ? '/lecturer/my-content' : '/learning';

    const embedUrl = content.youtubeUrl || extractYoutubeUrl(content.content);
    const cleanedContent = embedUrl ? removeYoutubeUrls(content.content) : content.content;

    return (
        <div className="learning-detail-layout">
            {/* SIDEBAR NAVIGATION - CAPTAIN'S LOG */}
            <aside className="instructor-sidebar">
                <Link to={backLink} className="sidebar-back-link">
                    <FaArrowLeft /> Geri Dön
                </Link>

                <div className="instructor-profile-card">
                    <div className="instructor-avatar-frame">
                        {content.author?.profilePicture && !content.author.profilePicture.includes('anonymous') ? (
                            <img src={content.author.profilePicture} alt={authorName} />
                        ) : (
                            <span className="avatar-initials">{content.author?.name?.charAt(0) || 'A'}</span>
                        )}
                        <div className="status-indicator"></div>
                    </div>
                    <Link to={authorLink} className="instructor-info">
                        <h3 className="instructor-name">{authorName}</h3>
                        <p className="instructor-title">
                            {content.author?.department || 'Denizcilik Fakültesi'}
                        </p>
                    </Link>
                    <Link to={authorLink} className="ghost-profile-btn">
                        Profili İncele
                    </Link>
                </div>

                <div className="sidebar-playlist">
                    <h4 className="playlist-header">
                        <FaVideo className="header-icon" /> EĞİTMENİN ROTASI
                    </h4>
                    <div className="playlist-items">
                        {instructorPosts.length > 0 ? (
                            instructorPosts.map(post => (
                                <Link
                                    to={`/learning/${post.slug || post._id}`}
                                    key={post._id}
                                    className={`playlist-item ${post._id === content._id ? 'playing' : ''}`}
                                >
                                    <div className="item-icon-wrapper">
                                        {post._id === content._id ? <FaPlay className="pulse-anim" /> : getContentIcon(post.type)}
                                    </div>
                                    <div className="item-details">
                                        <span className="item-title">{post.title}</span>
                                        <span className="item-meta">{new Date(post.createdAt).toLocaleDateString('tr-TR')}</span>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="no-posts">Başka kayıt bulunamadı.</p>
                        )}
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT AREA - THE BRIDGE */}
            <main className="content-main">
                {/* HERO SECTION */}
                <header className="content-hero">
                    <div className="hero-badges">
                        <span className="badge category-badge"><FaTag /> {content.type}</span>
                        <span className="badge date-badge"><FaCalendarDay /> {new Date(content.createdAt).toLocaleDateString('tr-TR')}</span>
                        {/* Dummy duration info for UI completeness */}
                        <span className="badge duration-badge"><FaClock /> 15 DK OKUMA</span>
                    </div>
                    <h1 className="hero-title">{content.title}</h1>
                    <div className="hero-actions">
                        {userInfo?.role === 'student' && (
                            <button onClick={handleSaveToggle} className={`action-btn ${isSaved ? 'saved' : ''}`}>
                                {isSaved ? <FaBookmark /> : <FaRegBookmark />}
                                {isSaved ? 'Kaydedildi' : 'Listeme Ekle'}
                            </button>
                        )}
                    </div>
                </header>

                {/* VISUAL & TEXT CONTENT */}
                <div className="content-body-wrapper">
                    {/* VIDEO PLAYER FRAME */}
                    {embedUrl && (
                        <div className="cinema-frame">
                            <div className="frame-header">
                                <span className="rec-dot"></span> <span className="frame-title">VİDEO DERS</span>
                            </div>
                            <div className="video-viewport">
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

                    {/* MARKDOWN / TEXT CONTENT */}
                    <div className="text-content typography-pro">
                        {cleanedContent && <p>{cleanedContent}</p>}
                    </div>

                    {/* RESOURCES SECTION (ActionBar Style) */}
                    {(content.fileUrl || content.fileData) && (
                        <div className="resources-bar">
                            <h3><FaFileAlt /> Kaynak Dosyalar</h3>
                            <div className="resource-actions">
                                {content.fileUrl && (
                                    <a href={content.fileUrl} target="_blank" rel="noopener noreferrer" className="resource-btn pdf">
                                        <FaFilePdf /> PDF İndir
                                    </a>
                                )}
                                {content.fileData && (
                                    <a href={content.fileData} download={content.fileName} className="resource-btn file">
                                        <FaDownload /> {content.fileName || 'Dosyayı İndir'}
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default LearningDetailPage;