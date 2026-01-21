import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCloudUploadAlt, FaPaperPlane, FaHeading, FaSave, FaTrash } from 'react-icons/fa';
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

    // --- DÜZELTİLEN KISIM BURASI ---
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditMode) {
                // Simülasyonu kaldırdık, gerçek API isteği atıyoruz:
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
        <div className="lecturer-page">
            <div className="page-header">
                <div>
                    <h1>{isEditMode ? 'İçeriği Düzenle' : 'İçerik Yönetim Merkezi'}</h1>
                    <p>{isEditMode ? 'Mevcut içeriği güncelleyin.' : 'Duyuru, ders notu veya staj belgesi paylaşın.'}</p>
                </div>
            </div>

            <div className="pro-form-container">
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
        </div>
    );
};

export default LecturerUploadPage;