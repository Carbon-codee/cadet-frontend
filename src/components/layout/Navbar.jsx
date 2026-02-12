import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';
import ProfileSidebar from './ProfileSidebar';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const RoleBasedNavLinks = ({ role }) => {
  if (role === 'student') {
    return (
      <>
        <NavLink to="/internships" className="nav-link">İlanlar</NavLink>
        <NavLink to="/study-plan" className="nav-link">Kişisel Gelişim</NavLink>
        <NavLink to="/learning" className="nav-link">Öğrenme</NavLink>
        <NavLink to="/profile" className="nav-link">Profilim</NavLink>
      </>
    );
  }

  if (role === 'company') {
    return (
      <>
        <NavLink to="/company/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/company/my-internships" className="nav-link">İlanlarım</NavLink>
        <NavLink to="/company/applicants" className="nav-link">Adaylar</NavLink>
      </>
    );
  }

  // YENİ EKLENEN KISIM: AKADEMİSYEN LİNKLERİ
  if (role === 'lecturer') {
    return (
      <>
        <NavLink to="/lecturer/dashboard" className="nav-link">Akademik Panel</NavLink>
        <NavLink to="/lecturer/my-content" className="nav-link">İçeriklerim</NavLink> {/* YENİ */}
        <NavLink to="/lecturer/upload" className="nav-link">Yeni Paylaşım</NavLink>
      </>
    );
  }

  // YENİ EKLENEN KISIM: ADMIN LİNKLERİ
  if (role === 'admin') {
    return (
      <>
        <NavLink to="/admin/dashboard" className="nav-link">Admin Paneli</NavLink>
      </>
    );
  }

  return null;
};

const Navbar = () => {
  const { userInfo } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isProfileSidebarOpen, setProfileSidebarOpen] = useState(false);

  const toggleProfileSidebar = () => {
    setProfileSidebarOpen(!isProfileSidebarOpen);
  };

  return (
    <>
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Marine Cadet Logo" className="logo-img" />
        </Link>

        {userInfo && userInfo.role && (
          <div className="nav-links-pill">
            <NavLink to="/" className="nav-link">Ana Sayfa</NavLink>
            {/* Rol bazlı linkleri buraya çağırıyoruz */}
            <RoleBasedNavLinks role={userInfo.role} />
            <NavLink to="/messages" className="nav-link">Mesajlar</NavLink>
          </div>
        )}

        <div className="nav-right-section">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Temayı Değiştir">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {userInfo ? (
            <div onClick={toggleProfileSidebar} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              {userInfo.profilePicture && !userInfo.profilePicture.includes('anonymous-avatar-icon') ? (
                <img
                  src={userInfo.profilePicture}
                  alt="Profile"
                  className="nav-profile-img"
                />
              ) : (
                <FaUserCircle className="profile-icon" />
              )}
            </div>
          ) : (
            <Link to="/auth">
              <button className="login-button">Giriş Yap / Kayıt Ol</button>
            </Link>
          )}
        </div>
      </nav>
      {userInfo && <ProfileSidebar isOpen={isProfileSidebarOpen} onClose={toggleProfileSidebar} />}
    </>
  );
};

export default Navbar;