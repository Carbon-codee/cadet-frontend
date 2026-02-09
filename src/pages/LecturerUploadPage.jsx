import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
    FaCloudUploadAlt, FaPaperPlane, FaHeading, FaSave, FaTrash,
    FaChalkboardTeacher, FaPlus, FaUsers, FaFileAlt
} from 'react-icons/fa';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './LecturerPages.css';

const LecturerUploadPage = () => {
    const { userInfo } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [isEditMode, setIsEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        title: '',
        type: 'Duyuru',
        targetAudience: 'Tüm Öğrenciler',
        content: '',
        fileName: '',
        fileData: ''
    });

    useEffect(() => {
        if (location.state && location.state.editMode && location.state.item) {
            setIsEditMode(true);
            const item = location.state.item;
            setEditingId(item._id);
            setFormData({
                title: item.title,
                type: item.type,
                targetAudience: item.targetAudience,
                content: item.content,
                fileName: item.fileName || '',
                fileData: item.fileData || ''
            });
        }
    }, [location]);

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert("Dosya 2MB'dan büyük olamaz.");
                return;
            }
            try {
                const base64 = await convertToBase64(file);
                setFormData(prev => ({ ...prev, fileName: file.name, fileData: base64 }));
            } catch (error) {
                alert("Dosya yüklenemedi.");
            }
        }
    };

    const removeFile = () => {
        setFormData(prev => ({ ...prev, fileName: '', fileData: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditMode) {
                await API.put(`/content/${editingId}`, formData);
                alert("İçerik başarıyla güncellendi!");
            } else {
                await API.post('/content', formData);
                alert("İçerik başarıyla yayınlandı!");
            }
            navigate('/lecturer/my-content');
        } catch (error) {
            console.error("İçerik kaydetme hatası:", error);
            alert("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
    };

    return (
        <div className="lecturer-dashboard-layout">
            {/* --- SIDEBAR --- */}
            <aside className="dashboard-sidebar lecturer-sidebar">
                <div className="profile-section">
                    <div className="profile-img-container lecturer-img">
                        <span className="profile-initials">
                            {userInfo?.name?.charAt(0) || 'A'}{userInfo?.name?.charAt(1)?.toUpperCase() || ''}
                        </span>
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
                        <h1 className="welcome-title">{isEditMode ? 'İçeriği Düzenle 📝' : 'İçerik Yönetim Merkezi 📤'}</h1>
                        <p className="welcome-subtitle">
                            {isEditMode ? 'Mevcut içeriği güncelleyin ve kaydedin.' : 'Duyuru, ders notu veya staj belgesi paylaşarak öğrencilere ulaşın.'}
                        </p>
                    </div>
                </header>

                <div className="pro-form-container" style={{ marginTop: '20px' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>İçerik Başlığı</label>
                            <div className="input-with-icon">
                                <FaHeading className="input-icon" />
                                <input
                                    type="text"
                                    className="pro-input"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-grid-row">
                            <div className="form-group">
                                <label>İçerik Türü</label>
                                <select className="pro-select" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                                    <option value="Duyuru">📢 Duyuru</option>
                                    <option value="Belge">📄 Belge / PDF</option>
                                    <option value="Ders Notu">📚 Ders Notu</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Hedef Kitle</label>
                                <select className="pro-select" value={formData.targetAudience} onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}>
                                    <option value="Tüm Öğrenciler">Tüm Öğrenciler</option>
                                    <optgroup label="Güverte Bölümü"><option>Güverte - 1. Sınıf</option><option>Güverte - 2. Sınıf</option><option>Güverte - 3. Sınıf</option><option>Güverte - 4. Sınıf</option></optgroup>
                                    <optgroup label="Makine Bölümü"><option>Makine - 1. Sınıf</option><option>Makine - 2. Sınıf</option><option>Makine - 3. Sınıf</option><option>Makine - 4. Sınıf</option></optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Dosya Ekle {formData.fileName && <span style={{ color: 'green' }}>(Yüklü)</span>}</label>
                            {!formData.fileName ? (
                                <div className="file-upload-area" onClick={() => document.getElementById('fileInput').click()}>
                                    <FaCloudUploadAlt className="upload-icon" />
                                    <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                                </div>
                            ) : (
                                <div className="file-name-display" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span>📎 {formData.fileName}</span>
                                    <button type="button" onClick={removeFile} style={{ border: 'none', background: 'transparent', color: 'red' }}><FaTrash /></button>
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Açıklama / Metin</label>
                            <textarea className="pro-textarea" value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} required></textarea>
                        </div>
                        <div className="form-actions">
                            <button type="button" className="btn-secondary" onClick={() => navigate('/lecturer/my-content')}>İptal</button>
                            <button type="submit" className="btn-primary">
                                {isEditMode ? <><FaSave /> Güncelle</> : <><FaPaperPlane /> Yayınla</>}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default LecturerUploadPage;