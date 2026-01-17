import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProfileSidebar.css';
import { useAuth } from '../../context/AuthContext';
import {
    FaTimes, FaUser, FaCog, FaSignOutAlt,
    FaUserEdit, FaFileAlt, FaBookmark,
    FaChartLine, FaUsers
} from 'react-icons/fa';

const ProfileSidebar = ({ isOpen, onClose }) => {
    const { userInfo, logout } = useAuth();
    const navigate = useNavigate();

    const handleOverlayClick = () => onClose();
    const handleSidebarClick = (e) => e.stopPropagation();

    const handleLogout = () => {
        logout(); // Token'ı sil
        onClose(); // Menüyü kapat
        navigate('/'); // <-- DEĞİŞİKLİK BURADA: Artık Ana Sayfaya ('/') gidiyor
    };

    const getInitials = (name) => {
        if (!name) return "U";
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    return (
        <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
            <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={handleSidebarClick}>
                <div className="sidebar-header">
                    <h3>Hesabım</h3>
                    <button onClick={onClose} className="close-btn"><FaTimes /></button>
                </div>

                {userInfo && (
                    <div className="sidebar-user-info">
                        <img
                            src={`https://placehold.co/100x100/002B5B/FFFFFF?text=${getInitials(userInfo.name)}`}
                            alt="Profil"
                            className="sidebar-avatar"
                        />
                        <div className="user-details">
                            <h4>{userInfo.name}</h4>
                            <p className="user-sub-info">
                                {userInfo.role === 'company' ? 'Şirket Hesabı' :
                                    userInfo.role === 'lecturer' ? 'Akademisyen' : 'Öğrenci'}
                            </p>
                        </div>
                    </div>
                )}

                <div className="sidebar-content">
                    {/* --- ORTAK LİNKLER --- */}
                    <Link to="/profile" className="sidebar-link" onClick={onClose}>
                        <FaUser /> Profil Bilgilerim
                    </Link>
                    <Link to="/profile/update" className="sidebar-link" onClick={onClose}>
                        <FaUserEdit /> Profili Güncelle
                    </Link>

                    {/* --- ROL BAZLI LİNKLER --- */}
                    {userInfo?.role === 'company' && (
                        <>
                            <Link to="/company/dashboard" className="sidebar-link" onClick={onClose}>
                                <FaChartLine /> Dashboard
                            </Link>
                            <Link to="/company/applicants" className="sidebar-link" onClick={onClose}>
                                <FaUsers /> Adaylar
                            </Link>
                        </>
                    )}

                    {userInfo?.role === 'student' && (
                        <>
                            <Link to="/my-applications" className="sidebar-link" onClick={onClose}>
                                <FaFileAlt /> Başvurularım
                            </Link>
                            <Link to="/saved-content" className="sidebar-link" onClick={onClose}>
                                <FaBookmark /> Kaydettiklerim
                            </Link>
                        </>
                    )}

                    {userInfo?.role === 'lecturer' && (
                        <>
                            <Link to="/lecturer/dashboard" className="sidebar-link" onClick={onClose}>
                                <FaChartLine /> Akademik Panel
                            </Link>
                            <Link to="/lecturer/my-content" className="sidebar-link" onClick={onClose}>
                                <FaFileAlt /> İçeriklerim
                            </Link>
                            <Link to="/lecturer/upload" className="sidebar-link" onClick={onClose}>
                                <FaFileAlt /> Yeni Paylaşım
                            </Link>
                        </>
                    )}

                    <div className="divider"></div>

                    {/* --- HESAP AYARLARI (Şifre/Mail) --- */}
                    <Link to="/user-info" className="sidebar-link" onClick={onClose}>
                        <FaCog /> Şifre ve E-posta Ayarları
                    </Link>

                    <button className="sidebar-link logout-btn" onClick={handleLogout}>
                        <FaSignOutAlt /> Çıkış Yap
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;