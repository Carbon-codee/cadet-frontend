import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    FaFilePdf, FaBullhorn, FaTrash, FaEdit, FaEye, FaPlus,
    FaChalkboardTeacher, FaUsers, FaFileAlt
} from 'react-icons/fa';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './LecturerPages.css';

const LecturerContentPage = () => {
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    const [contents, setContents] = useState([]);
    const [filter, setFilter] = useState('Tümü');
    const [loading, setLoading] = useState(true);

    // Verileri API'den Çek
    useEffect(() => {
        const fetchMyContents = async () => {
            try {
                const { data } = await API.get('/content');
                // Sadece BU hocanın içeriklerini filtrele
                const myData = data.filter(item => item.author?._id === userInfo._id);
                setContents(myData);
            } catch (error) {
                console.error("İçerikler yüklenemedi", error);
            } finally {
                setLoading(false);
            }
        };

        if (userInfo) fetchMyContents();
    }, [userInfo]);

    const handleDelete = async (id) => {
        if (window.confirm("Bu içeriği silmek istediğinize emin misiniz?")) {
            try {
                await API.delete(`/content/${id}`);
                setContents(contents.filter(item => item._id !== id));
            } catch (error) {
                alert("Silme işlemi başarısız oldu.");
            }
        }
    };

    const handleEdit = (item) => {
        navigate('/lecturer/upload', { state: { editMode: true, item: item } });
    };

    const filteredContents = filter === 'Tümü'
        ? contents
        : contents.filter(item =>
            filter === 'Belge' ? (item.type === 'Belge' || item.type === 'Ders Notu') : item.type === 'Duyuru'
        );

    if (loading) return <div className="dashboard-loading"><div className="spinner"></div></div>;

    return (
        <div className="lecturer-dashboard-layout">
            {/* --- SIDEBAR --- */}
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
                    <div className="section-header-row">
                        <h4 className="section-title">Hızlı Erişim</h4>
                    </div>

                    <div className="module-list-scroll">
                        <Link to="/lecturer/upload" className="sidebar-module-item lecturer-item">
                            <div className="module-status-indicator"><FaPlus style={{ color: '#0ea5e9' }} /></div>
                            <div className="module-info">
                                <span className="day-number">İçerik</span>
                                <span className="module-topic-truncate">Yeni İçerik Yükle</span>
                            </div>
                        </Link>

                        <Link to="/lecturer/student-status" className="sidebar-module-item lecturer-item">
                            <div className="module-status-indicator"><FaUsers style={{ color: '#8b5cf6' }} /></div>
                            <div className="module-info">
                                <span className="day-number">Takip</span>
                                <span className="module-topic-truncate">Öğrenci Durumları</span>
                            </div>
                        </Link>

                        <Link to="/lecturer/my-content" className="sidebar-module-item lecturer-item">
                            <div className="module-status-indicator"><FaFileAlt style={{ color: '#f59e0b' }} /></div>
                            <div className="module-info">
                                <span className="day-number">Arşiv</span>
                                <span className="module-topic-truncate">İçeriklerim</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="dashboard-main lecturer-main">
                <header className="main-header">
                    <div>
                        <h1 className="welcome-title">Yayınlanan İçerikler 📄</h1>
                        <p className="welcome-subtitle">
                            Paylaştığınız tüm duyuru ve belgeleri buradan yönetin.
                        </p>
                    </div>
                    <div className="header-actions">
                        <Link to="/lecturer/upload" className="action-btn secondary">
                            <FaPlus /> Yeni İçerik Ekle
                        </Link>
                    </div>
                </header>

                <div className="content-filter-bar" style={{ marginTop: '20px' }}>
                    <div className="filter-group">
                        <button className={`filter-btn ${filter === 'Tümü' ? 'active' : ''}`} onClick={() => setFilter('Tümü')}>Tümü</button>
                        <button className={`filter-btn ${filter === 'Duyuru' ? 'active' : ''}`} onClick={() => setFilter('Duyuru')}>Duyurular</button>
                        <button className={`filter-btn ${filter === 'Belge' ? 'active' : ''}`} onClick={() => setFilter('Belge')}>Belgeler</button>
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Toplam <strong>{filteredContents.length}</strong> içerik</div>
                </div>

                <div className="content-list">
                    {filteredContents.length > 0 ? (
                        filteredContents.map(item => (
                            <div key={item._id} className="manage-card">
                                <div className="mc-left">
                                    <div className={`mc-icon-box ${item.type === 'Duyuru' ? 'announcement' : 'doc'}`}>
                                        {item.type === 'Duyuru' ? <FaBullhorn /> : <FaFilePdf />}
                                    </div>
                                    <div className="mc-info">
                                        <h3 onClick={() => navigate(`/learning/${item._id}`)}>{item.title}</h3>
                                        <div className="mc-meta">
                                            <span>📅 {new Date(item.createdAt).toLocaleDateString('tr-TR')}</span>
                                            <span>🎯 {item.targetAudience}</span>
                                            <span className="badge warning" style={{ fontWeight: 'normal', background: '#f1f5f9', color: '#64748b' }}>{item.type}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mc-right">
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <Link to={`/learning/${item._id}`} className="btn-icon-small btn-edit" title="Görüntüle">
                                            <FaEye />
                                        </Link>
                                        <button className="btn-icon-small btn-edit" title="Düzenle" onClick={() => handleEdit(item)}>
                                            <FaEdit />
                                        </button>
                                        <button className="btn-icon-small btn-delete" title="Sil" onClick={() => handleDelete(item._id)}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-placeholder">
                            <p>Bu kategoride içerik bulunamadı.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default LecturerContentPage;