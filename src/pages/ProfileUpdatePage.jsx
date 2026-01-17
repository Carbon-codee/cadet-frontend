import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

// --- FORMLAR (AYNI) ---
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

    return (
        <>
            <div className="form-card">
                <h3>Kişisel & Akademik</h3>
                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group"><label>Ad</label><input type="text" name="name" value={formData.name || ''} onChange={onFormChange} /></div>
                    <div className="form-group"><label>Soyad</label><input type="text" name="surname" value={formData.surname || ''} onChange={onFormChange} /></div>
                    <div className="form-group"><label>Sınıf</label><select name="classYear" value={formData.classYear || ''} onChange={onFormChange}><option value="">Seçiniz</option><option>1. Sınıf</option><option>2. Sınıf</option><option>3. Sınıf</option><option>4. Sınıf</option></select></div>
                    <div className="form-group"><label>GPA</label><input type="number" step="0.01" max="4" name="gpa" value={formData.gpa || ''} onChange={onFormChange} /></div>
                    <div className="form-group"><label>Bölüm</label><input type="text" name="department" value={formData.department || ''} onChange={onFormChange} /></div>
                    <div className="form-group">
                        <label>İngilizce Seviyesi</label>
                        <select name="englishLevel" value={formData.englishLevel || 'A1'} onChange={onFormChange}>
                            <option value="A1">A1</option><option value="A2">A2</option><option value="B1">B1</option><option value="B2">B2</option><option value="C1">C1</option><option value="C2">C2</option>
                        </select>
                    </div>
                </div>
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

const CompanyUpdateForm = ({ formData, onFormChange }) => (
    <div className="form-card">
        <h3>Şirket Bilgileri</h3>
        <div className="form-group"><label>Şirket Adı</label><input type="text" name="name" value={formData.name || ''} onChange={onFormChange} /></div>
        <div className="form-group"><label>Sektör</label><input type="text" name="sector" value={formData.companyInfo?.sector || ''} onChange={onFormChange} /></div>
        <div className="form-group"><label>Web Sitesi</label><input type="text" name="website" value={formData.companyInfo?.website || ''} onChange={onFormChange} /></div>
        <div className="form-group"><label>Adres</label><textarea name="address" value={formData.companyInfo?.address || ''} onChange={onFormChange}></textarea></div>
        <div className="form-group"><label>Hakkında</label><textarea name="about" value={formData.companyInfo?.about || ''} onChange={onFormChange}></textarea></div>
    </div>
);

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

const ProfileUpdatePage = () => {
    const { userInfo } = useAuth();
    const [formData, setFormData] = useState(null);
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            if (userInfo) {
                let data = JSON.parse(JSON.stringify(userInfo));
                if (Array.isArray(data.socialActivities)) data.socialActivities = data.socialActivities.join('\n');
                if (Array.isArray(data.documents)) data.documentsText = data.documents.map(d => d.name).join('\n');
                if (!data.preferences) data.preferences = { shipTypes: [], targetCompanies: [] };
                if (userInfo.role === 'company' && !data.companyInfo) data.companyInfo = {};
                setFormData(data);

                if (userInfo.role === 'student') {
                    try {
                        const res = await API.get('/users/list/companies');
                        setCompanies(res.data);
                    } catch (e) { console.error(e); }
                }
                setLoading(false);
            }
        };
        loadData();
    }, [userInfo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'preferences') {
            setFormData(prev => ({ ...prev, preferences: value }));
        } else if (['website', 'address', 'about', 'sector'].includes(name)) {
            setFormData(prev => ({ ...prev, companyInfo: { ...prev.companyInfo, [name]: value } }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let dataToSubmit = { ...formData };

        if (userInfo.role === 'student') {
            if (typeof dataToSubmit.socialActivities === 'string') {
                dataToSubmit.socialActivities = dataToSubmit.socialActivities.split('\n').filter(l => l.trim() !== '');
            }
            if (dataToSubmit.documentsText) {
                dataToSubmit.documents = dataToSubmit.documentsText.split('\n').filter(l => l.trim() !== '').map(name => ({ name: name.trim(), type: 'Sertifika' }));
                delete dataToSubmit.documentsText;
            }
            dataToSubmit.successScore = calculateScore(formData);
        }

        try {
            const { data } = await API.put('/users/profile', dataToSubmit);

            // --- KRİTİK DÜZELTME BURADA ---
            // Backend'den gelen 'data'da token YOKTUR.
            // Bu yüzden mevcut token'ı koruyarak birleştiriyoruz.
            const updatedUser = { ...userInfo, ...data };
            localStorage.setItem('userInfo', JSON.stringify(updatedUser));
            // ------------------------------

            alert('Profil başarıyla güncellendi!');
            window.location.href = '/profile';
        } catch (error) {
            alert('Hata oluştu.');
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