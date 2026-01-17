import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCloudUploadAlt, FaPaperPlane, FaHeading, FaSave, FaTrash } from 'react-icons/fa';
import './LecturerPages.css';
import { useAuth } from '../context/AuthContext';


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
        fileData: '' // Dosyanın Base64 verisi burada tutulacak
    });

    useEffect(() => {
        if (location.state && location.state.editMode && location.state.item) {
            setIsEditMode(true);
            const item = location.state.item;
            setEditingId(item.id);
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

    // Dosyayı Base64 formatına çeviren yardımcı fonksiyon
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
            // Boyut Kontrolü (LocalStorage sınırı için Max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert("Dosya boyutu çok büyük! Lütfen 2MB'dan küçük bir dosya seçin.");
                return;
            }

            try {
                const base64 = await convertToBase64(file);
                setFormData(prev => ({
                    ...prev,
                    fileName: file.name,
                    fileData: base64
                }));
            } catch (error) {
                console.error("Dosya okuma hatası", error);
                alert("Dosya yüklenirken bir sorun oluştu.");
            }
        }
    };

    const removeFile = () => {
        setFormData(prev => ({ ...prev, fileName: '', fileData: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingData = JSON.parse(localStorage.getItem('lecturerContents') || '[]');

        if (isEditMode) {
            const updatedData = existingData.map(item => {
                if (item.id === editingId) {
                    return { ...item, ...formData };
                }
                return item;
            });
            localStorage.setItem('lecturerContents', JSON.stringify(updatedData));
            alert("İçerik başarıyla güncellendi!");
        } else {
            const newItem = {
                id: Date.now(),
                ...formData,
                date: new Date().toLocaleDateString('tr-TR'),
                views: 0,
                authorId: userInfo._id, // Hocanın ID'si
                authorName: userInfo.name // Hocanın Adı
            };
            existingData.push(newItem);
            localStorage.setItem('lecturerContents', JSON.stringify(existingData));
            alert("İçerik ve dosya başarıyla paylaşıldı!");
        }

        navigate('/lecturer/my-content');
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
                                placeholder="Örn: 2026 Yaz Stajı Bilgilendirmesi"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-grid-row">
                        <div className="form-group">
                            <label>İçerik Türü</label>
                            <select
                                className="pro-select"
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            >
                                <option value="Duyuru">📢 Duyuru</option>
                                <option value="Belge">📄 Belge / PDF</option>
                                <option value="Ders Notu">📚 Ders Notu</option>
                            </select>
                        </div>

                        {/* --- YENİ DETAYLI HEDEF KİTLE LİSTESİ --- */}
                        <div className="form-group">
                            <label>Hedef Kitle</label>
                            <select
                                className="pro-select"
                                value={formData.targetAudience}
                                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                            >
                                <option value="Tüm Öğrenciler">Tüm Öğrenciler</option>
                                <optgroup label="Güverte Bölümü">
                                    <option value="Güverte - 1. Sınıf">Güverte - 1. Sınıf</option>
                                    <option value="Güverte - 2. Sınıf">Güverte - 2. Sınıf</option>
                                    <option value="Güverte - 3. Sınıf">Güverte - 3. Sınıf</option>
                                    <option value="Güverte - 4. Sınıf">Güverte - 4. Sınıf</option>
                                </optgroup>
                                <optgroup label="Makine Bölümü">
                                    <option value="Makine - 1. Sınıf">Makine - 1. Sınıf</option>
                                    <option value="Makine - 2. Sınıf">Makine - 2. Sınıf</option>
                                    <option value="Makine - 3. Sınıf">Makine - 3. Sınıf</option>
                                    <option value="Makine - 4. Sınıf">Makine - 4. Sınıf</option>
                                </optgroup>
                                <optgroup label="Diğer">
                                    <option value="Staj Yapanlar">Aktif Staj Yapanlar</option>
                                    <option value="Mezunlar">Mezun Durumundakiler</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Dosya Ekle {formData.fileName && <span style={{ color: 'green' }}>(Yüklü)</span>}</label>

                        {!formData.fileName ? (
                            <div className="file-upload-area" onClick={() => document.getElementById('fileInput').click()}>
                                <FaCloudUploadAlt className="upload-icon" />
                                <div className="file-info">
                                    <p>Dosyayı buraya sürükleyin veya seçmek için tıklayın</p>
                                    <p style={{ fontSize: '0.8rem', color: '#999' }}>PDF, DOCX, JPG (Maks 2MB)</p>
                                </div>
                                <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileChange} accept=".pdf,.doc,.docx,.jpg,.png" />
                            </div>
                        ) : (
                            <div className="file-name-display" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '15px', background: '#e3f2fd', borderRadius: '8px' }}>
                                <span>📎 {formData.fileName}</span>
                                <button type="button" onClick={removeFile} style={{ border: 'none', background: 'transparent', color: 'red', cursor: 'pointer' }}>
                                    <FaTrash /> Kaldır
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Açıklama / Metin</label>
                        <textarea
                            className="pro-textarea"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            required
                        ></textarea>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-secondary" onClick={() => navigate('/lecturer/my-content')}>
                            İptal
                        </button>
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