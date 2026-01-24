import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa';
import ProfileSidebar from './ProfileSidebar';
import { useAuth } from '../../context/AuthContext';

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

  return null;
};

const Navbar = () => {
  const { userInfo } = useAuth();
  const [isProfileSidebarOpen, setProfileSidebarOpen] = useState(false);

  const toggleProfileSidebar = () => {
    setProfileSidebarOpen(!isProfileSidebarOpen);
  };

  return (
    <>
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">Cadet</Link>

        {userInfo && userInfo.role && (
          <div className="nav-links-pill">
            <NavLink to="/" className="nav-link">Ana Sayfa</NavLink>
            {/* Rol bazlı linkleri buraya çağırıyoruz */}
            <RoleBasedNavLinks role={userInfo.role} />
          </div>
        )}

        <div className="nav-right-section">

          {userInfo ? (
            <FaUserCircle className="profile-icon" onClick={toggleProfileSidebar} />
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