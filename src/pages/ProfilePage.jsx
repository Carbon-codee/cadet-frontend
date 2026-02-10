import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './ProfilePage.css';
import {
    FaEnvelope, FaGraduationCap, FaChalkboardTeacher,
    FaStar, FaLanguage, FaCertificate, FaUsers, FaFileAlt,
    FaMapMarkerAlt, FaBuilding, FaGlobe, FaUniversity, FaDoorOpen, FaPlus, FaTrash, FaCamera
} from 'react-icons/fa';

// --- AVATAR BİLEŞENİ ---
const AvatarDisplay = ({ profile, isOwnUser, onUpdate, children }) => {
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('profilePicture', file);

        setUploading(true);
        try {
            const { data } = await API.post('/users/upload-avatar', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            onUpdate({ profilePicture: data.profilePicture });
        } catch (error) {
            console.error("Upload failed", error);
            alert("Profil fotoğrafı yüklenemedi.");
        } finally {
            setUploading(false);
        }
    };

    const handleRemove = async () => {
        if (!window.confirm("Profil fotoğrafınızı kaldırmak istediğinize emin misiniz?")) return;

        setUploading(true);
        try {
            const { data } = await API.delete('/users/delete-avatar');
            onUpdate({ profilePicture: data.profilePicture });
        } catch (error) {
            console.error("Delete failed", error);
            alert("Profil fotoğrafı kaldırılamadı.");
        } finally {
            setUploading(false);
        }
    };

    const isDefault = !profile?.profilePicture || profile.profilePicture.includes('anonymous-avatar-icon');

    return (
        <div className="avatar-container" style={{ position: 'relative', width: 'fit-content', margin: '0 auto' }}>
            {!isDefault ? (
                <img
                    src={profile.profilePicture}
                    alt="Profile"
                    className="avatar-box"
                    style={{ objectFit: 'cover', width: '150px', height: '150px' }}
                />
            ) : (
                children
            )}

            {isOwnUser && (
                <>
                    <input
                        type="file"
                        id="avatar-upload"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleFileChange}
                        disabled={uploading}
                    />
                    {!isDefault && (
                        <button
                            onClick={handleRemove}
                            disabled={uploading}
                            style={{
                                position: 'absolute', bottom: '5px', left: '5px', // <-- SAĞDAN SOLA ALINDI
                                background: '#e74c3c', color: 'white',
                                width: '40px', height: '40px', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', border: '3px solid white',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                zIndex: 10,
                                padding: 0
                            }}
                            title="Fotoğrafı Kaldır"
                        >
                            <FaTrash size={14} />
                        </button>
                    )}
                    <label
                        htmlFor="avatar-upload"
                        style={{
                            position: 'absolute', bottom: '5px', right: '5px',
                            background: '#005A9C', color: 'white',
                            width: '40px', height: '40px', borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', border: '3px solid white',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            zIndex: 10
                        }}
                    >
                        {uploading ? <div className="spinner" style={{ width: 15, height: 15, border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div> : <FaCamera size={16} />}
                    </label>
                    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                </>
            )}
        </div>
    );
};

// --- ŞİRKET PROFİL GÖRÜNÜMÜ ---
const CompanyProfile = ({ profile, onUpdate }) => {
    const { userInfo } = useAuth();
    const isOwnProfile = userInfo?._id === profile?._id;

    // Sektör verisini güvenli çekme (Nested veya Root kontrolü)
    const sector = profile?.companyInfo?.sector || profile?.sector || 'Belirtilmemiş';
    const website = profile?.companyInfo?.website || profile?.website || 'Web sitesi belirtilmemiş';
    const address = profile?.companyInfo?.address || profile?.address || 'Adres belirtilmemiş';
    const about = profile?.companyInfo?.about || profile?.about || 'Şirket hakkında bilgi eklenmemiş.';

    return (
        <div className="profile-grid">
            <div className="profile-card profile-header-card">
                <AvatarDisplay profile={profile} isOwnUser={isOwnProfile} onUpdate={onUpdate}>
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
                </AvatarDisplay>
                <div className="header-info">
                    <h1>{profile?.name || 'Şirket Adı Yok'}</h1>
                    <p className="role-badge">Şirket Hesabı 🏢</p>
                    <p><FaGlobe /> <a href={website.startsWith('http') ? website : `https://${website}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{website}</a></p>
                </div>
            </div>
            <div className="profile-card">
                <h3>Şirket Hakkında</h3>
                <p style={{ lineHeight: 1.6, color: '#444' }}>
                    {about}
                </p>
            </div>
            <div className="profile-card">
                <h3>Kurumsal Bilgiler</h3>
                <div className="info-row"><span><FaEnvelope /> E-posta</span><span>{profile?.email || '-'}</span></div>
                {/* DÜZELTME: Sektör burada yukarıdaki değişkenden okunuyor */}
                <div className="info-row"><span><FaBuilding /> Sektör</span><span>{sector}</span></div>
                <div className="info-row"><span><FaMapMarkerAlt /> Merkez</span><span>{address}</span></div>
            </div>
        </div>
    );
};

// --- AKADEMİSYEN PROFİL GÖRÜNÜMÜ ---
const LecturerProfile = ({ profile, onUpdate }) => {
    const { userInfo } = useAuth();
    const isOwnProfile = userInfo?._id === profile?._id;

    return (
        <div className="profile-grid">
            <div className="profile-card profile-header-card">
                <AvatarDisplay profile={profile} isOwnUser={isOwnProfile} onUpdate={onUpdate}>
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
                </AvatarDisplay>
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
};

// --- ÖĞRENCİ PROFİL GÖRÜNÜMÜ ---
import ContactModal from '../components/ContactModal'; // Modal'ı import et

const StudentProfile = ({ profile, onUpdate }) => {
    const { userInfo } = useAuth();
    const [status, setStatus] = useState(profile?.currentStatus || 'Okulda/Tatilde');
    const [showContactModal, setShowContactModal] = useState(false);

    useEffect(() => {
        if (profile?.currentStatus) {
            setStatus(profile.currentStatus);
        }
    }, [profile]);

    const handleStatusChange = async (e) => {
        const newStatus = e.target.value;
        setStatus(newStatus);
        try {
            await API.put('/users/status', { status: newStatus });
            if (userInfo && userInfo._id === profile._id) {
                const currentUser = JSON.parse(localStorage.getItem('userInfo') || '{}');
                currentUser.currentStatus = newStatus;
                localStorage.setItem('userInfo', JSON.stringify(currentUser));
            }
        } catch (err) {
            console.error(err);
            alert("Durum güncellenemedi.");
        }
    };

    const getStatusColor = (s) => {
        if (s === 'Staj Arıyor') return '#27ae60';
        if (s === 'Staj Yapıyor') return '#e67e22';
        return '#95a5a6';
    };

    const isOwnProfile = userInfo?._id === profile?._id;
    const canContact = !isOwnProfile && userInfo && (userInfo.role === 'company' || userInfo.role === 'lecturer');

    return (
        <div className="profile-grid">
            <ContactModal
                isOpen={showContactModal}
                onClose={() => setShowContactModal(false)}
                recipient={profile}
            />

            <div className="profile-card profile-header-card" style={{ position: 'relative' }}>
                {canContact && (
                    <button
                        onClick={() => setShowContactModal(true)}
                        style={{
                            position: 'absolute', top: '20px', right: '20px',
                            background: '#005A9C', color: 'white', border: 'none',
                            padding: '10px 15px', borderRadius: '8px', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', gap: '8px',
                            fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            zIndex: 50
                        }}
                    >
                        <FaEnvelope /> İletişime Geç
                    </button>
                )}

                <AvatarDisplay profile={profile} isOwnUser={isOwnProfile} onUpdate={onUpdate}>
                    <div
                        className="avatar-box"
                        style={{
                            background: '#fff', color: '#005A9C', border: '5px solid #005A9C',
                            fontSize: '4rem', width: '150px', height: '150px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            borderRadius: '50%'
                        }}
                    >
                        {profile?.name ? profile.name.substring(0, 2).toUpperCase() : 'ST'}
                    </div>
                </AvatarDisplay>
                <div className="header-info">
                    <h1>{profile?.name} {profile?.surname}</h1>
                    <p>{profile?.department || ''} {profile?.classYear ? ` - ${profile.classYear}` : ''}</p>

                    <div style={{ margin: '15px 0' }}>
                        {isOwnProfile ? (
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <select
                                    value={status}
                                    onChange={handleStatusChange}
                                    style={{
                                        padding: '10px 35px 10px 15px',
                                        borderRadius: '30px',
                                        border: `2px solid ${getStatusColor(status)}`,
                                        color: getStatusColor(status),
                                        fontWeight: 'bold',
                                        background: 'white',
                                        cursor: 'pointer',
                                        outline: 'none',
                                        fontSize: '0.95rem',
                                        appearance: 'none',
                                        WebkitAppearance: 'none'
                                    }}
                                >
                                    <option value="Staj Arıyor">🟢 Staj Arıyor</option>
                                    <option value="Staj Yapıyor">🟠 Staj Yapıyor</option>
                                    <option value="Okulda/Tatilde">⚪ Okulda/Tatilde</option>
                                </select>
                                <span style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: getStatusColor(status), pointerEvents: 'none' }}>▼</span>
                            </div>
                        ) : (
                            <span style={{
                                padding: '8px 20px', borderRadius: '30px',
                                background: getStatusColor(status), color: 'white', fontWeight: 'bold', fontSize: '0.9rem',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                            }}>
                                {status === 'Staj Arıyor' ? '🟢 Staj Arıyor' : status === 'Staj Yapıyor' ? '🟠 Staj Yapıyor' : '⚪ Okulda/Tatilde'}
                            </span>
                        )}
                    </div>

                    <label style={{ display: 'block', marginTop: '15px', color: '#555', fontSize: '0.9rem' }}>Cadet Başarı Skoru: <strong>{profile?.successScore || 0} / 100</strong></label>
                    <div className="score-bar-container">
                        <div
                            className="score-bar"
                            style={{ width: `${profile?.successScore || 0}%` }}
                        >
                            {profile?.successScore || 0}
                        </div>
                    </div>

                    <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
                        <div style={{ background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)', color: 'white', padding: '10px 20px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 10px rgba(108, 92, 231, 0.3)' }}>
                            <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Toplam XP</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{profile?.xp || 0}</div>
                        </div>
                        <div style={{ background: 'linear-gradient(135deg, #0984e3, #74b9ff)', color: 'white', padding: '10px 20px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 10px rgba(9, 132, 227, 0.3)' }}>
                            <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Seviye</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{profile?.level || 1}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-card">
                <h3>Hakkımda</h3>
                <p style={{ lineHeight: 1.6, color: '#444' }}>{profile?.bio || "Kullanıcı bir biyografi eklememiş."}</p>
            </div>

            <div className="profile-card">
                <h3>Akademik Bilgiler</h3>
                <div className="info-row"><span><FaEnvelope /> E-posta</span><span>{profile?.email}</span></div>
                <div className="info-row"><span><FaGraduationCap /> Bölüm</span><span>{profile?.department || 'Belirtilmemiş'}</span></div>
                <div className="info-row"><span><FaChalkboardTeacher /> Sınıf</span><span>{profile?.classYear || 'Belirtilmemiş'}</span></div>
                <div className="info-row"><span><FaStar /> Not Ortalaması (GPA)</span><span>{profile?.gpa ? `${profile.gpa} / 4.00` : 'Belirtilmemiş'}</span></div>
                <div className="info-row"><span><FaLanguage /> İngilizce Seviyesi</span><span>{profile?.englishLevel || 'Belirtilmemiş'}</span></div>

            </div>

            <div className="profile-card">
                <h3>Transkript (Ders Notları)</h3>

                {profile?.transcript && profile.transcript.length > 0 ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <thead>
                            <tr style={{ background: '#f8f9fa', color: '#666' }}>
                                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Ders Adı</th>
                                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Not</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profile.transcript.map((t, i) => (
                                <tr key={i}>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{t.courseName}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#2c3e50' }}>{t.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : <p style={{ color: '#999' }}>Henüz ders notu girilmemiş.</p>}
            </div>

            <div className="profile-card">
                <h3>Dokümanlar ve Sertifikalar</h3>
                <div className="documents-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>

                    {/* CV Görüntüleme */}
                    {profile?.cvUrl && (
                        <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="document-item" style={{ display: 'flex', alignItems: 'center', padding: '10px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#334155' }}>
                            <div style={{ marginRight: '10px', color: '#e74c3c', fontSize: '1.5rem' }}><FaFileAlt /></div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Özgeçmiş (CV)</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Görüntüle</div>
                            </div>
                        </a>
                    )}

                    {/* Transkript Görüntüleme */}
                    {profile?.transcriptUrl && (
                        <a href={profile.transcriptUrl} target="_blank" rel="noopener noreferrer" className="document-item" style={{ display: 'flex', alignItems: 'center', padding: '10px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#334155' }}>
                            <div style={{ marginRight: '10px', color: '#f1c40f', fontSize: '1.5rem' }}><FaGraduationCap /></div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Transkript</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Görüntüle</div>
                            </div>
                        </a>
                    )}

                    {/* Sertifikalar listesi */}
                    {profile?.certificates && profile.certificates.map((cert, i) => (
                        <a key={i} href={cert.url} target="_blank" rel="noopener noreferrer" className="document-item" style={{ display: 'flex', alignItems: 'center', padding: '10px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#334155' }}>
                            <div style={{ marginRight: '10px', color: '#27ae60', fontSize: '1.5rem' }}><FaCertificate /></div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{cert.name}</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Sertifika</div>
                            </div>
                        </a>
                    ))}

                    {(!profile?.cvUrl && !profile?.transcriptUrl && (!profile?.certificates || profile.certificates.length === 0)) && (
                        <p style={{ color: '#999', gridColumn: '1/-1' }}>Yüklenmiş doküman bulunmuyor.</p>
                    )}
                </div>
            </div>

            <div className="profile-card">
                <h3>Sosyal Aktiviteler & Projeler</h3>
                <ul className="list-group">
                    {(profile?.socialActivities && profile.socialActivities.length > 0) ? (
                        profile.socialActivities.map((activity, index) => (
                            <li key={index} className="list-item"><FaUsers className="list-item-icon" /><span>{activity}</span></li>
                        ))
                    ) : <p style={{ color: '#999' }}>Eklenmiş aktivite bulunmuyor.</p>}
                </ul>
            </div>
        </div>
    );
};

// --- ANA BİLEŞEN ---
const ProfilePage = () => {
    const { id } = useParams();
    const { userInfo, updateUser } = useAuth(); // updateUser eklendi
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            try {
                const targetId = id || userInfo?._id;
                if (!targetId) {
                    setLoading(false);
                    return;
                }
                const { data } = await API.get(`/users/${targetId}`);
                setProfileData(data);
            } catch (err) {
                console.error("Profil yüklenemedi:", err);
                if (!id && userInfo) setProfileData(userInfo);
            } finally {
                setLoading(false);
            }
        };

        if (userInfo || id) fetchProfile();
    }, [id, userInfo]);

    if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Profil Yükleniyor...</div>;
    if (!profileData) return <div style={{ padding: 40, textAlign: 'center' }}>Görüntülenecek profil bulunamadı.</div>;

    const handleProfileUpdate = (updates) => {
        setProfileData(prev => ({ ...prev, ...updates }));

        // Eğer kendi profilimizse (userInfo._id === data._id) context/storage güncelle
        if (userInfo && userInfo._id === profileData._id) {
            updateUser(updates);
        }
    };

    const renderProfile = () => {
        switch (profileData.role) {
            case 'student': return <StudentProfile profile={profileData} onUpdate={handleProfileUpdate} />;
            case 'company': return <CompanyProfile profile={profileData} onUpdate={handleProfileUpdate} />;
            case 'lecturer': return <LecturerProfile profile={profileData} onUpdate={handleProfileUpdate} />;
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