import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';
import { SHIP_TYPES } from '../constants'; // <-- ORTAK LİSTEYİ İMPORT ETTİK
import './CreateInternshipPage.css';

const CreateInternshipPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        shipType: '', // Başlangıçta boş
        location: '',
        startDate: '',
        duration: '',
        salary: '',
        description: '',
        department: 'Güverte',
    });

    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setIsEditMode(true);
            const fetchInternship = async () => {
                try {
                    setLoading(true);
                    const { data } = await API.get(`/internships/${id}`);

                    let formattedDate = data.startDate ? new Date(data.startDate).toISOString().split('T')[0] : '';

                    setFormData({
                        title: data.title,
                        shipType: data.shipType,
                        location: data.location,
                        startDate: formattedDate,
                        duration: data.duration,
                        salary: data.salary,
                        description: data.description,
                        department: data.department
                    });
                } catch (error) {
                    console.error("İlan detayları alınamadı", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchInternship();
        } else {
            // Yeni ilan oluşturuluyorsa, gemi tipini listenin ilkiyle doldur
            setFormData(prev => ({ ...prev, shipType: SHIP_TYPES[0] }));
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await API.put(`/internships/${id}`, formData);
                alert('İlan başarıyla güncellendi!');
            } else {
                await API.post('/internships', formData);
                alert('İlan başarıyla oluşturuldu!');
            }
            navigate('/company/my-internships');
        } catch (error) {
            alert(`Hata: ${error.response?.data?.message || 'Bir sorun oluştu.'}`);
        }
    };

    if (loading) return <div style={{ padding: "20px", textAlign: "center" }}>Yükleniyor...</div>;

    return (
        <div className="create-internship-page">
            <div className="page-header">
                <h1>{isEditMode ? 'İlanı Düzenle' : 'Yeni Staj İlanı Oluştur'}</h1>
                <p>{isEditMode ? 'İlan bilgilerini güncelleyin.' : 'Doğru adaylara ulaşmak için detayları doldurun.'}</p>
            </div>
            <form className="internship-form" onSubmit={handleSubmit}>
                <div className="form-card">
                    <div className="form-group">
                        <label htmlFor="title">İlan Başlığı</label>
                        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
                    </div>
                    <div className="form-grid">

                        {/* --- DEĞİŞİKLİK BURADA: Input yerine Select --- */}
                        <div className="form-group">
                            <label htmlFor="shipType">Gemi Tipi</label>
                            <select
                                id="shipType"
                                name="shipType"
                                value={formData.shipType}
                                onChange={handleChange}
                                required
                            >
                                {SHIP_TYPES.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        {/* --- DEĞİŞİKLİK BİTTİ --- */}

                        {/* LOKASYON YERİNE POZİSYON (GÜNCELLENDİ) */}
                        <div className="form-group">
                            <label htmlFor="location">Pozisyon</label>
                            <select
                                id="location"
                                name="location" // Backend'de 'location' olarak kayıtlı kalsın, veri kaybı olmasın
                                value={formData.location}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seçiniz</option>
                                <option value="Güverte Stajyeri">Güverte Stajyeri</option>
                                <option value="Makine Stajyeri">Makine Stajyeri</option>
                            </select>
                        </div>
                        <div className="form-group"><label htmlFor="startDate">Başlangıç Tarihi</label><input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required /></div>
                        <div className="form-group"><label htmlFor="duration">Staj Süresi</label><input type="text" id="duration" name="duration" placeholder='Örn: 6 Ay' value={formData.duration} onChange={handleChange} required /></div>
                        <div className="form-group"><label htmlFor="salary">Maaş (USD)</label><input type="number" id="salary" name="salary" placeholder='Örn: 800' value={formData.salary} onChange={handleChange} required /></div>
                        <div className="form-group"><label htmlFor="department">Departman</label><select id="department" name="department" value={formData.department} onChange={handleChange}><option>Güverte</option><option>Makine</option></select></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">İlan Açıklaması</label>
                        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        {isEditMode ? 'Değişiklikleri Kaydet' : 'İlanı Yayınla'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateInternshipPage;