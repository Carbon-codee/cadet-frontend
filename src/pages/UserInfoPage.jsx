import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Yönlendirme için eklendi
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './UserInfoPage.css';

const UserInfoPage = () => {
    const { userInfo, logout } = useAuth(); // logout fonksiyonunu da aldık
    const navigate = useNavigate(); // Yönlendirme kancası

    // E-posta State'leri
    const [newEmail, setNewEmail] = useState('');

    // Şifre State'leri
    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // E-posta Güncelleme Fonksiyonu
    const handleEmailUpdate = async (e) => {
        e.preventDefault();
        try {
            await API.put('/users/update-email', { newEmail });

            alert("E-posta adresiniz güncellendi. Lütfen yeni adresinizle tekrar giriş yapın.");

            // Oturumu kapat ve giriş sayfasına at
            logout();
            navigate('/');

        } catch (error) {
            alert(error.response?.data?.message || "E-posta güncellenemedi.");
        }
    };

    // Şifre Güncelleme Fonksiyonu
    const handlePasswordUpdate = async (e) => {
        e.preventDefault();

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert("Yeni şifreler birbiriyle uyuşmuyor!");
            return;
        }

        try {
            await API.put('/users/update-password', {
                oldPassword: passwordData.oldPassword,
                newPassword: passwordData.newPassword
            });

            alert("Şifreniz başarıyla değiştirildi. Güvenlik gereği tekrar giriş yapmalısınız.");

            // Oturumu kapat ve giriş sayfasına at
            logout();
            navigate('/');

        } catch (error) {
            alert(error.response?.data?.message || "Şifre değiştirilemedi.");
        }
    };

    return (
        <div className="user-info-page">
            <div className="user-info-container">
                <h1 className="page-title">Kullanıcı Bilgileri</h1>

                {/* E-POSTA DEĞİŞTİRME KARTI */}
                <div className="info-card">
                    <h2>E-posta Adresini Değiştir</h2>

                    <div className="current-info">
                        <label>Mevcut E-posta Adresi</label>
                        <p className="static-email">{userInfo?.email || "Yükleniyor..."}</p>
                    </div>

                    <form onSubmit={handleEmailUpdate}>
                        <div className="form-group">
                            <label>Yeni E-posta Adresi</label>
                            <input
                                type="email"
                                placeholder="yeni.mail@ornek.com"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="action-btn">E-postayı Güncelle</button>
                    </form>
                </div>

                {/* ŞİFRE DEĞİŞTİRME KARTI */}
                <div className="info-card">
                    <h2>Şifreyi Değiştir</h2>
                    <form onSubmit={handlePasswordUpdate}>
                        <div className="form-group">
                            <label>Eski Şifre</label>
                            <input
                                type="password"
                                placeholder="Mevcut şifreniz"
                                value={passwordData.oldPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Yeni Şifre</label>
                            <input
                                type="password"
                                placeholder="Yeni şifreniz"
                                value={passwordData.newPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Yeni Şifre (Tekrar)</label>
                            <input
                                type="password"
                                placeholder="Yeni şifrenizi doğrulayın"
                                value={passwordData.confirmPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                required
                            />
                        </div>
                        <button type="submit" className="action-btn danger-btn">Şifreyi Güncelle</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserInfoPage;