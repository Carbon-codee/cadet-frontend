import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaTrash, FaYoutube, FaFilePdf, FaImage, FaExternalLinkAlt, FaChalkboardTeacher, FaFileAlt, FaUsers } from 'react-icons/fa';
import API from '../../api/axiosConfig';
import { useAuth } from '../../context/AuthContext';
import { getYoutubeEmbedUrl } from '../../utils/youtubeHelper';
import '../LecturerPages.css';

const LecturerResourcePage = () => {
    const { userInfo } = useAuth();
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    // Form State
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [resourceType, setResourceType] = useState('file'); // file veya youtube
    const [file, setFile] = useState(null);
    const [youtubeUrl, setYoutubeUrl] = useState('');

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        try {
            const { data } = await API.get(`/resources/instructor/${userInfo._id}`);
            setResources(data);
        } catch (error) {
            console.error("Kaynaklar yüklenemedi", error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
            alert("Dosya boyutu 5MB'ı geçemez.");
            return;
        }
        setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);

        if (resourceType === 'youtube') {
            formData.append('youtubeUrl', youtubeUrl);
            formData.append('fileType', 'youtube');
        } else {
            if (!file) {
                alert("Lütfen bir dosya seçin.");
                setUploading(false);
                return;
            }
            formData.append('file', file);
        }

        try {
            await API.post('/resources', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert("Kaynak başarıyla eklendi!");
            setTitle('');
            setDescription('');
            setFile(null);
            setYoutubeUrl('');
            fetchResources(); // Listeyi yenile
        } catch (error) {
            console.error("Yükleme hatası:", error);
            alert("Kaynak eklenirken bir hata oluştu.");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Bu kaynağı silmek istediğinize emin misiniz?")) return;
        try {
            await API.delete(`/resources/${id}`);
            setResources(resources.filter(r => r._id !== id));
        } catch (error) {
            console.error("Silme hatası:", error);
            alert("Silinemedi.");
        }
    };

    if (loading) return <div className="dashboard-loading"><div className="spinner"></div></div>;

    return (
        <div className="lecturer-dashboard-layout">
            <aside className="dashboard-sidebar lecturer-sidebar">
                <div className="profile-section">
                    <div className="profile-img-container lecturer-img">
                        {userInfo?.profilePicture && !userInfo.profilePicture.includes('anonymous-avatar-icon') ? (
                            <img
                                src={userInfo.profilePicture}
                                alt={userInfo.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                            />
                        ) : (
                            <span className="profile-initials">
                                {userInfo?.name?.charAt(0) || 'A'}{userInfo?.name?.charAt(1)?.toUpperCase() || ''}
                            </span>
                        )}
                    </div>
                    <h3 className="profile-name headline-font">{userInfo?.name}</h3>
                    <p className="profile-role">Akademisyen Paneli</p>
                    <div className="xp-badge lecturer-badge">
                        <FaChalkboardTeacher className="xp-icon" />
                        <span>Eğitmen</span>
                    </div>
                </div>
                <div className="sidebar-divider"></div>
                <div className="curriculum-section">
                    <div className="section-header-row"><h4 className="section-title">Hızlı Erişim</h4></div>
                    <div className="module-list-scroll">
                        <Link to="/lecturer/upload" className="sidebar-module-item lecturer-item">
                            <div className="module-status-indicator"><FaPlus style={{ color: '#0ea5e9' }} /></div>
                            <div className="module-info"><span className="day-number">İçerik</span><span className="module-topic-truncate">Yeni İçerik Yükle</span></div>
                        </Link>
                        <Link to="/lecturer/resources" className="sidebar-module-item lecturer-item active">
                            <div className="module-status-indicator"><FaFileAlt style={{ color: '#2ecc71' }} /></div>
                            <div className="module-info"><span className="day-number">Materyal</span><span className="module-topic-truncate">Eğitim Materyalleri</span></div>
                        </Link>
                        <Link to="/lecturer/student-status" className="sidebar-module-item lecturer-item">
                            <div className="module-status-indicator"><FaUsers style={{ color: '#8b5cf6' }} /></div>
                            <div className="module-info"><span className="day-number">Takip</span><span className="module-topic-truncate">Öğrenci Durumları</span></div>
                        </Link>
                        <Link to="/lecturer/my-content" className="sidebar-module-item lecturer-item">
                            <div className="module-status-indicator"><FaFileAlt style={{ color: '#f59e0b' }} /></div>
                            <div className="module-info"><span className="day-number">Arşiv</span><span className="module-topic-truncate">İçeriklerim</span></div>
                        </Link>
                    </div>
                </div>
            </aside>

            <main className="dashboard-main lecturer-main">
                <header className="main-header">
                    <div>
                        <h1 className="welcome-title">Eğitim Materyalleri 📚</h1>
                        <p className="welcome-subtitle">Ders kaynaklarını ve videoları buradan yönetin.</p>
                    </div>
                </header>

                <div className="pro-form-container" style={{ marginTop: '20px' }}>
                    <h3>Yeni Kaynak Ekle</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Başlık</label>
                            <input type="text" className="pro-input" value={title} onChange={e => setTitle(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Açıklama</label>
                            <textarea className="pro-textarea" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Tür</label>
                            <select className="pro-select" value={resourceType} onChange={e => setResourceType(e.target.value)}>
                                <option value="file">Dosya (PDF/Resim)</option>
                                <option value="youtube">YouTube Videosu</option>
                            </select>
                        </div>

                        {resourceType === 'file' ? (
                            <div className="form-group">
                                <label>Dosya Seç (Max 5MB)</label>
                                <input type="file" onChange={handleFileChange} accept=".pdf,image/*" className="pro-input" />
                            </div>
                        ) : (
                            <div className="form-group">
                                <label>YouTube Linki</label>
                                <input type="text" className="pro-input" value={youtubeUrl} onChange={e => setYoutubeUrl(e.target.value)} placeholder="https://youtube.com/watch?v=..." />

                                {/* YouTube Preview */}
                                {youtubeUrl && (
                                    <div style={{ marginTop: '15px', padding: '15px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                        <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#64748b' }}>Önizleme:</h4>
                                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                                            <iframe
                                                src={getYoutubeEmbedUrl(youtubeUrl)}
                                                title="YouTube Preview"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        <button type="submit" className="btn-primary" disabled={uploading}>
                            {uploading ? 'Yükleniyor...' : <><FaPlus /> Ekle</>}
                        </button>
                    </form>
                </div>

                <div className="content-list" style={{ marginTop: '30px' }}>
                    <h3>Mevcut Kaynaklar</h3>
                    {resources.length === 0 ? <p>Henüz kaynak eklenmemiş.</p> : (
                        <div className="resource-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                            {resources.map(res => (
                                <div key={res._id} className="premium-card" style={{ padding: '15px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                        <h4 style={{ margin: 0 }}>{res.title}</h4>
                                        <button onClick={() => handleDelete(res._id)} className="btn-icon-small btn-delete"><FaTrash /></button>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>{res.description}</p>

                                    {res.fileType === 'youtube' && (
                                        <div className="video-responsive">
                                            <iframe
                                                width="100%"
                                                height="200"
                                                src={getYoutubeEmbedUrl(res.youtubeUrl)}
                                                title={res.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    )}

                                    {res.fileType === 'pdf' && (
                                        <a href={res.fileUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px' }}>
                                            <FaFilePdf /> PDF'i İncele
                                        </a>
                                    )}

                                    {res.fileType === 'image' && (
                                        <div style={{ marginTop: '10px' }}>
                                            <img src={res.fileUrl} alt={res.title} style={{ width: '100%', borderRadius: '8px' }} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default LecturerResourcePage;
