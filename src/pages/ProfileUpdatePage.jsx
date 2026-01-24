import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './ProfileUpdatePage.css';
import { SHIP_TYPES } from '../constants';

// --- PUAN HESAPLAMA (Öğrenci İçin) ---
const calculateScore = (formData) => {
    let score = 20;
    if (formData.gpa) {
        const gpaVal = parseFloat(formData.gpa);
        if (!isNaN(gpaVal)) score += (gpaVal / 4) * 40;
    }
    const engPoints = { 'A1': 5, 'A2': 10, 'B1': 15, 'B2': 20, 'C1': 25, 'C2': 30 };
    if (formData.englishLevel) score += engPoints[formData.englishLevel] || 0;

    if (formData.socialActivities) {
        let count = 0;
        if (typeof formData.socialActivities === 'string') {
            count = formData.socialActivities.split('\n').filter(s => s.trim() !== '').length;
        } else if (Array.isArray(formData.socialActivities)) {
            count = formData.socialActivities.length;
        }
        score += Math.min(count * 2, 10);
    }
    return Math.min(Math.round(score), 100);
};

// --- ÖĞRENCİ FORMU (AYNI) ---
const StudentUpdateForm = ({ formData, onFormChange, availableCompanies }) => {
    const handleShipTypeToggle = (type) => {
        let currentTypes = formData.preferences?.shipTypes || [];
        if (currentTypes.includes(type)) currentTypes = currentTypes.filter(t => t !== type);
        else currentTypes.push(type);
        onFormChange({ target: { name: 'preferences', value: { ...formData.preferences, shipTypes: currentTypes } } });
    };

    const handleCompanyToggle = (companyId) => {
        let currentTargets = formData.preferences?.targetCompanies || [];
        if (currentTargets.includes(companyId)) currentTargets = currentTargets.filter(id => id !== companyId);
        else currentTargets.push(companyId);
        onFormChange({ target: { name: 'preferences', value: { ...formData.preferences, targetCompanies: currentTargets } } });
    };

    // Transcript helpers
    const handleTranscriptAdd = () => {
        const courseName = document.getElementById('newCourseName').value;
        const grade = document.getElementById('newCourseGrade').value;
        if (courseName && grade) {
            const currentTranscript = formData.transcript || [];
            onFormChange({ target: { name: 'transcript', value: [...currentTranscript, { courseName, grade }] } });
            document.getElementById('newCourseName').value = '';
            document.getElementById('newCourseGrade').value = '';
        }
    };

    const handleTranscriptDelete = (index) => {
        const currentTranscript = [...(formData.transcript || [])];
        currentTranscript.splice(index, 1);
        onFormChange({ target: { name: 'transcript', value: currentTranscript } });
    };

    return (
        <>
            <div className="form-card">
                <h3>Kişisel & Akademik</h3>
                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group"><label>Ad</label><input type="text" name="name" value={formData.name || ''} onChange={onFormChange} /></div>
                    <div className="form-group"><label>Soyad</label><input type="text" name="surname" value={formData.surname || ''} onChange={onFormChange} /></div>
                    <div className="form-group"><label>Sınıf</label><select name="classYear" value={formData.classYear || ''} onChange={onFormChange}><option value="">Seçiniz</option><option>1. Sınıf</option><option>2. Sınıf</option><option>3. Sınıf</option><option>4. Sınıf</option></select></div>
                    <div className="form-group"><label>GPA</label><input type="number" step="0.01" max="4" name="gpa" value={formData.gpa || ''} onChange={onFormChange} /></div>
                    <div className="form-group">
                        <label>Bölüm</label>
                        <select
                            name="department"
                            value={formData.department || ''}
                            onChange={onFormChange}
                            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', background: '#fcfcfc' }}
                        >
                            <option value="">Seçiniz</option>
                            <option value="Deniz Ulaştırma İşletme Mühendisliği">Deniz Ulaştırma İşletme Mühendisliği (Güverte)</option>
                            <option value="Gemi Makineleri İşletme Mühendisliği">Gemi Makineleri İşletme Mühendisliği (Makine)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>İngilizce Seviyesi</label>
                        <select name="englishLevel" value={formData.englishLevel || 'A1'} onChange={onFormChange}>
                            <option value="A1">A1</option><option value="A2">A2</option><option value="B1">B1</option><option value="B2">B2</option><option value="C1">C1</option><option value="C2">C2</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="form-card">
                <h3>Transkript (Ders Notları)</h3>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', alignItems: 'flex-end' }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '0.85rem', marginBottom: '5px', display: 'block' }}>Ders Adı</label>
                        <input type="text" id="newCourseName" placeholder="örn. Seyir I" style={{ width: '100%', padding: '8px', border: '1px solid #e2e8f0', borderRadius: '6px' }} />
                    </div>
                    <div style={{ width: '120px' }}>
                        <label style={{ fontSize: '0.85rem', marginBottom: '5px', display: 'block' }}>Not</label>
                        <select id="newCourseGrade" style={{ width: '100%', padding: '8px', border: '1px solid #e2e8f0', borderRadius: '6px', background: 'white' }}>
                            <option value="">Seçiniz</option>
                            <option value="AA">AA</option>
                            <option value="BA+">BA+</option>
                            <option value="BA">BA</option>
                            <option value="BB+">BB+</option>
                            <option value="BB">BB</option>
                            <option value="CB+">CB+</option>
                            <option value="CB">CB</option>
                            <option value="CC+">CC+</option>
                            <option value="CC">CC</option>
                            <option value="DC+">DC+</option>
                            <option value="DC">DC</option>
                            <option value="DD+">DD+</option>
                            <option value="DD">DD</option>
                            <option value="FF">FF</option>
                            <option value="VF">VF</option>
                        </select>
                    </div>
                    <button type="button" onClick={handleTranscriptAdd} style={{ padding: '9px 15px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                        Ekle
                    </button>
                </div>

                {formData.transcript && formData.transcript.length > 0 ? (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {formData.transcript.map((t, i) => (
                            <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', background: '#f8fafc', marginBottom: '5px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                                <span>{t.courseName} - <strong>{t.grade}</strong></span>
                                <button type="button" onClick={() => handleTranscriptDelete(i)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}>Sil 🗑️</button>
                            </li>
                        ))}
                    </ul>
                ) : <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Henüz ders eklenmemiş.</p>}
            </div>

            <div className="form-card">
                <h3>Aktiviteler & Tercihler</h3>
                <div className="form-group"><label>Sosyal Aktiviteler (Her satıra bir tane)</label><textarea name="socialActivities" rows="3" value={formData.socialActivities || ''} onChange={onFormChange}></textarea></div>
                <div className="form-group"><label>Sertifikalar (Her satıra bir tane)</label><textarea name="documentsText" rows="3" value={formData.documentsText || ''} onChange={onFormChange}></textarea></div>
            </div>
            <div className="form-card">
                <h3>Kariyer Tercihleri</h3>
                <div className="form-group">
                    <label style={{ marginBottom: '10px', display: 'block' }}>Gemi Tipleri</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {SHIP_TYPES.map(type => (
                            <button key={type} type="button" onClick={() => handleShipTypeToggle(type)} style={{ padding: '8px 12px', borderRadius: '20px', border: formData.preferences?.shipTypes?.includes(type) ? '2px solid #3498db' : '1px solid #ddd', background: formData.preferences?.shipTypes?.includes(type) ? '#e3f2fd' : '#fff', cursor: 'pointer' }}>{type}</button>
                        ))}
                    </div>
                </div>
                <div className="form-group">
                    <label style={{ marginBottom: '10px', display: 'block', marginTop: '20px' }}>Hedef Şirketler</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
                        {availableCompanies.map(comp => (
                            <div key={comp._id} onClick={() => handleCompanyToggle(comp._id)} style={{ padding: '10px', border: formData.preferences?.targetCompanies?.includes(comp._id) ? '2px solid #27ae60' : '1px solid #ddd', borderRadius: '8px', background: formData.preferences?.targetCompanies?.includes(comp._id) ? '#e8f5e9' : '#fff', cursor: 'pointer', textAlign: 'center', fontSize: '0.9rem' }}>
                                {formData.preferences?.targetCompanies?.includes(comp._id) && "✅ "} {comp.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

// --- DÜZELTİLEN ŞİRKET FORMU ---
const CompanyUpdateForm = ({ formData, onFormChange }) => {
    // Güvenlik: companyInfo boş gelirse crash olmasın
    const info = formData.companyInfo || {};

    return (
        <div className="form-card">
            <h3>Şirket Bilgileri</h3>
            <div className="form-group"><label>Şirket Adı</label><input type="text" name="name" value={formData.name || ''} onChange={onFormChange} /></div>

            {/* Sektör için güvenli input */}
            <div className="form-group"><label>Sektör</label><input type="text" name="sector" value={info.sector || ''} onChange={onFormChange} /></div>

            <div className="form-group"><label>Web Sitesi</label><input type="text" name="website" value={info.website || ''} onChange={onFormChange} /></div>
            <div className="form-group"><label>Adres</label><textarea name="address" value={info.address || ''} onChange={onFormChange}></textarea></div>
            <div className="form-group"><label>Hakkında</label><textarea name="about" value={info.about || ''} onChange={onFormChange}></textarea></div>
        </div>
    );
};

const LecturerUpdateForm = ({ formData, onFormChange }) => (
    <div className="form-card">
        <h3>Akademik Bilgiler</h3>
        <div className="form-group"><label>Unvan</label><select name="title" value={formData.title || ''} onChange={onFormChange}><option value="">Seçiniz</option><option>Prof. Dr.</option><option>Doç. Dr.</option><option>Dr. Öğr. Üyesi</option></select></div>
        <div className="form-group"><label>Ad Soyad</label><input type="text" name="name" value={formData.name || ''} onChange={onFormChange} /></div>
        <div className="form-group"><label>Bölüm</label><input type="text" name="department" value={formData.department || ''} onChange={onFormChange} /></div>
        <div className="form-group"><label>Ofis</label><input type="text" name="office" value={formData.office || ''} onChange={onFormChange} /></div>
        <div className="form-group"><label>Biyografi</label><textarea name="bio" value={formData.bio || ''} onChange={onFormChange}></textarea></div>
    </div>
);

// --- ANA COMPONENT ---
const ProfileUpdatePage = () => {
    const { userInfo } = useAuth();
    const [formData, setFormData] = useState(null);
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            if (userInfo) {
                try {
                    // API'den en güncel veriyi çek
                    const response = await API.get(`/users/${userInfo._id}`);
                    let data = response.data;

                    // Form manipülasyonları
                    if (Array.isArray(data.socialActivities)) data.socialActivities = data.socialActivities.join('\n');
                    if (Array.isArray(data.documents)) data.documentsText = data.documents.map(d => d.name).join('\n');
                    if (!data.preferences) data.preferences = { shipTypes: [], targetCompanies: [] };

                    // Şirket için companyInfo nesnesini garantiye al
                    if (data.role === 'company') {
                        if (!data.companyInfo) data.companyInfo = { sector: '', website: '', address: '', about: '' };
                        // Eğer backend veriyi root'a (companyInfo dışına) kaydettiyse, onu içeri taşı
                        if (!data.companyInfo.sector && data.sector) data.companyInfo.sector = data.sector;
                    }

                    setFormData(data);

                    if (data.role === 'student') {
                        const res = await API.get('/users/list/companies');
                        setCompanies(res.data);
                    }
                } catch (e) {
                    console.error("Veri yükleme hatası:", e);
                    // Hata olursa mecburen userInfo kullan
                    setFormData(JSON.parse(JSON.stringify(userInfo)));
                } finally {
                    setLoading(false);
                }
            }
        };
        loadData();
    }, [userInfo]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'preferences') {
            setFormData(prev => ({ ...prev, preferences: value }));
        }
        // Şirket bilgileri güncellemesi
        else if (['website', 'address', 'about', 'sector'].includes(name)) {
            setFormData(prev => {
                const currentInfo = prev.companyInfo || {};
                return {
                    ...prev,
                    companyInfo: {
                        ...currentInfo,
                        [name]: value
                    }
                };
            });
        }
        else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let dataToSubmit = { ...formData };

        if (userInfo.role === 'student') {
            // Öğrenci verilerini formatla
            if (typeof dataToSubmit.socialActivities === 'string') {
                dataToSubmit.socialActivities = dataToSubmit.socialActivities.split('\n').filter(l => l.trim() !== '');
            }
            if (dataToSubmit.documentsText) {
                dataToSubmit.documents = dataToSubmit.documentsText.split('\n').filter(l => l.trim() !== '').map(name => ({ name: name.trim(), type: 'Sertifika' }));
                delete dataToSubmit.documentsText;
            }
            dataToSubmit.successScore = calculateScore(formData);
        }

        // --- BACKEND UYUMSUZLUĞU İÇİN GÜVENLİK ---
        // Eğer backend sector'ü companyInfo içinde kabul etmiyorsa diye
        // veriyi hem root'a (eğer şema oradaysa) hem de companyInfo içine koyuyoruz.
        if (userInfo.role === 'company' && dataToSubmit.companyInfo?.sector) {
            dataToSubmit.sector = dataToSubmit.companyInfo.sector;
        }

        console.log("Gönderilen Veri:", dataToSubmit); // F12'den kontrol et

        try {
            const { data } = await API.put('/users/profile', dataToSubmit);

            // LocalStorage güncelle
            const updatedUser = { ...userInfo, ...data };

            // Eğer backend dönüşünde sector eksikse, gönderdiğimiz veriden tamamla (Frontend'de hemen görünsün diye)
            if (userInfo.role === 'company' && dataToSubmit.companyInfo?.sector) {
                if (!updatedUser.companyInfo) updatedUser.companyInfo = {};
                updatedUser.companyInfo.sector = dataToSubmit.companyInfo.sector;
            }

            localStorage.setItem('userInfo', JSON.stringify(updatedUser));

            alert('Profil başarıyla güncellendi!');
            window.location.href = '/profile';
        } catch (error) {
            console.error(error);
            alert('Güncelleme sırasında hata oluştu.');
        }
    };

    if (loading || !formData) return <div style={{ padding: 40 }}>Yükleniyor...</div>;

    return (
        <div className="profile-update-page">
            <div className="page-header"><h1>Profili Düzenle</h1></div>
            <form className="update-form" onSubmit={handleSubmit}>
                {userInfo.role === 'student' && <StudentUpdateForm formData={formData} onFormChange={handleChange} availableCompanies={companies} />}
                {userInfo.role === 'company' && <CompanyUpdateForm formData={formData} onFormChange={handleChange} />}
                {userInfo.role === 'lecturer' && <LecturerUpdateForm formData={formData} onFormChange={handleChange} />}
                <div className="save-button-container"><button type="submit" className="save-button">Değişiklikleri Kaydet</button></div>
            </form>
        </div>
    );
};

export default ProfileUpdatePage;