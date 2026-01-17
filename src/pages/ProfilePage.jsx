import React, { useState, useEffect } from 'react'; // Bu satırı tamamen silip tekrar yaz.
import { useParams } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './ProfilePage.css';
import {
    FaUser, FaEnvelope, FaGraduationCap, FaChalkboardTeacher,
    FaStar, FaLanguage, FaFilePdf, FaCertificate, FaUsers,
    FaMapMarkerAlt, FaBuilding, FaGlobe, FaUniversity, FaDoorOpen
} from 'react-icons/fa';

// --- ŞİRKET PROFİL GÖRÜNÜMÜ ---
const CompanyProfile = ({ profile }) => (
    <div className="profile-grid">
        <div className="profile-card profile-header-card">
            <div className="avatar-container">
                <div
                    className="avatar-box"
                    style={{
                        background: '#fff', color: '#ef4444', border: '5px solid #ef4444',
                        fontSize: '4rem', width: '150px', height: '150px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderRadius: '50%'
                    }}
                >
                    {profile?.name ? profile.name.charAt(0).toUpperCase() : 'C'}
                </div>
            </div>
            <div className="header-info">
                <h1>{profile?.name || 'Şirket Adı Yok'}</h1>
                <p className="role-badge">Şirket Hesabı 🏢</p>
                <p><FaGlobe /> {profile?.companyInfo?.website || 'Web sitesi belirtilmemiş'}</p>
            </div>
        </div>
        <div className="profile-card">
            <h3>Şirket Hakkında</h3>
            <p style={{ lineHeight: 1.6, color: '#444' }}>
                {profile?.companyInfo?.about || 'Şirket hakkında bilgi eklenmemiş.'}
            </p>
        </div>
        <div className="profile-card">
            <h3>Kurumsal Bilgiler</h3>
            <div className="info-row"><span><FaEnvelope /> E-posta</span><span>{profile?.email || '-'}</span></div>
            <div className="info-row"><span><FaBuilding /> Sektör</span><span>{profile?.companyInfo?.sector || 'Belirtilmemiş'}</span></div>
            <div className="info-row"><span><FaMapMarkerAlt /> Merkez</span><span>{profile?.companyInfo?.address || 'Adres belirtilmemiş'}</span></div>
        </div>
    </div>
);

// --- AKADEMİSYEN PROFİL GÖRÜNÜMÜ ---
const LecturerProfile = ({ profile }) => (
    <div className="profile-grid">
        <div className="profile-card profile-header-card">
            <div className="avatar-container">
                <div
                    className="avatar-box"
                    style={{
                        background: '#fff', color: '#27ae60', border: '5px solid #27ae60',
                        fontSize: '4rem', width: '150px', height: '150px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderRadius: '50%'
                    }}
                >
                    {(profile && profile.name) ? profile.name.split(' ').map(n => n[0]).join('') : 'A'}
                </div>
            </div>
            <div className="header-info">
                <h1>
                    <span style={{ fontSize: '0.8em', color: '#27ae60', marginRight: '10px' }}>
                        {profile?.title}
                    </span>
                    {profile?.name} {profile?.surname}
                </h1>
                <p className="role-badge" style={{ background: '#e8f8f5', color: '#27ae60' }}>Akademisyen 🎓</p>
                <p>{profile?.department ? `${profile.department} Bölümü` : 'Denizcilik Fakültesi'}</p>
            </div>
        </div>
        <div className="profile-card">
            <h3>Biyografi</h3>
            <p style={{ lineHeight: 1.6, color: '#444' }}>{profile?.bio || "Henüz bir biyografi eklenmemiş."}</p>
        </div>
        <div className="profile-card">
            <h3>Akademik & İletişim Bilgileri</h3>
            <div className="info-row"><span><FaChalkboardTeacher /> Unvan</span><span>{profile?.title || 'Belirtilmemiş'}</span></div>
            <div className="info-row"><span><FaGraduationCap /> Branş</span><span>{profile?.department || 'Belirtilmemiş'}</span></div>
            <div className="info-row"><span><FaUniversity /> Kurum</span><span>İTÜ Denizcilik Fakültesi</span></div>
            <div className="info-row"><span><FaDoorOpen /> Ofis</span><span>{profile?.office || 'Belirtilmemiş'}</span></div>
            <div className="info-row"><span><FaEnvelope /> E-posta</span><span>{profile?.email || '-'}</span></div>
        </div>
    </div>
);

// --- ÖĞRENCİ PROFİL GÖRÜNÜMÜ ---
const StudentProfile = ({ profile }) => (
    <div className="profile-grid">
        <div className="profile-card profile-header-card">
            <div className="avatar-container">
                <div
                    className="avatar-box"
                    style={{
                        background: '#fff', color: '#005A9C', border: '5px solid #005A9C',
                        fontSize: '4rem', width: '150px', height: '150px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderRadius: '50%'
                    }}
                >
                    {profile?.name ? profile.name.split(' ').map(n => n[0]).join('') : 'ST'}
                </div>
            </div>
            <div className="header-info">
                <h1>{profile?.name || ''} {profile?.surname || ''}</h1>
                <p>{profile?.department || ''} {profile?.classYear ? ` - ${profile.classYear}` : ''}</p>

                <label>Cadet Başarı Skoru: <strong>{profile?.successScore || 0} / 100</strong></label>
                <div className="score-bar-container">
                    <div className="score-bar" style={{ width: `${profile?.successScore || 0}%` }}>{profile?.successScore || 0}</div>
                </div>
            </div>
        </div>
        <div className="profile-card">
            <h3>Hakkımda</h3>
            <p style={{ lineHeight: 1.6, color: '#444' }}>{profile?.bio || "Kullanıcı bir biyografi eklememiş."}</p>
        </div>
        <div className="profile-card">
            <h3>Akademik Bilgiler</h3>
            <div className="info-row"><span><FaEnvelope /> E-posta</span><span>{profile?.email || '-'}</span></div>
            <div className="info-row"><span><FaGraduationCap /> Bölüm</span><span>{profile?.department || 'Belirtilmemiş'}</span></div>
            <div className="info-row"><span><FaChalkboardTeacher /> Sınıf</span><span>{profile?.classYear || 'Belirtilmemiş'}</span></div>
            <div className="info-row"><span><FaStar /> Not Ortalaması (GPA)</span><span>{profile?.gpa ? `${profile.gpa} / 4.00` : 'Belirtilmemiş'}</span></div>
            <div className="info-row"><span><FaLanguage /> İngilizce Seviyesi</span><span>{profile?.englishLevel || 'Belirtilmemiş'}</span></div>
        </div>
        <div className="profile-card">
            <h3>Dokümanlar ve Sertifikalar</h3>
            <ul className="list-group">
                {(Array.isArray(profile?.documents) && profile.documents.length > 0) ? (
                    profile.documents.map((doc, i) => (
                        <li key={i} className="list-item">
                            {doc.type === 'CV' ? <FaFilePdf className="list-item-icon" /> : <FaCertificate className="list-item-icon" />}
                            <span>{doc.name}</span>
                        </li>
                    ))
                ) : <p style={{ color: '#999' }}>Yüklenmiş doküman bulunmuyor.</p>}
            </ul>
        </div>
        <div className="profile-card">
            <h3>Sosyal Aktiviteler & Projeler</h3>
            <ul className="list-group">
                {(Array.isArray(profile?.socialActivities) && profile.socialActivities.length > 0) ? (
                    profile.socialActivities.map((activity, index) => (
                        <li key={index} className="list-item"><FaUsers className="list-item-icon" /><span>{activity}</span></li>
                    ))
                ) : <p style={{ color: '#999' }}>Eklenmiş aktivite bulunmuyor.</p>}
            </ul>
        </div>
    </div>
);

// --- ANA BİLEŞEN ---
const ProfilePage = () => {
    const { id } = useParams();
    const { userInfo } = useAuth();
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            try {
                let data = null;
                // Eğer URL'de bir ID varsa, o kullanıcının profilini çek.
                if (id) {
                    try {
                        const res = await API.get(`/users/${id}`);
                        data = res.data;
                    } catch (e) {
                        console.warn("API'den kullanıcı çekilemedi, hata:", e);
                    }
                }
                // Eğer URL'de ID yoksa, giriş yapan kullanıcının kendi profilini göster.
                else {
                    data = userInfo;
                }
                setProfileData(data);
            } catch (err) {
                console.error("Profil yüklenemedi:", err);
            } finally {
                setLoading(false);
            }
        };

        // Eğer userInfo henüz gelmediyse beklemeye gerek yok, ID varsa çekebiliriz.
        // Ama en sağlıklısı userInfo'nun varlığını kontrol etmek.
        if (userInfo || id) fetchProfile();

    }, [id, userInfo]);

    if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Profil Yükleniyor...</div>;
    if (!profileData) return <div style={{ padding: 40, textAlign: 'center' }}>Görüntülenecek profil bulunamadı.</div>;

    const renderProfile = () => {
        switch (profileData.role) {
            case 'student': return <StudentProfile profile={profileData} />;
            case 'company': return <CompanyProfile profile={profileData} />;
            case 'lecturer': return <LecturerProfile profile={profileData} />;
            default: return <div>Bu rol için profil görünümü bulunamadı.</div>;
        }
    }

    return (
        <div className="profile-page">
            {renderProfile()}
        </div>
    );
};

export default ProfilePage;