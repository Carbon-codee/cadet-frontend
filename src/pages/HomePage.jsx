import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './HomePage.css';
import heroVideo from '../assets/hero-video.mp4';
import {
    FaUserGraduate, FaShip, FaHandshake, FaChartLine,
    FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaTwitter, FaBuilding,
    FaFileAlt, FaPlusCircle, FaSearch, FaGraduationCap, FaBookmark, FaClipboardList, FaUsers
} from 'react-icons/fa';

const HomePage = () => {
    const { userInfo } = useAuth();
    const [stats, setStats] = useState({ students: 0, matches: 0, companies: 0, rate: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await API.get('/users/public/stats');
                setStats(data);
            } catch (error) { console.error("İstatistik hatası", error); }
        };
        fetchStats();
    }, []);

    // --- ROL BAZLI KARTLAR ---
    const renderUserCards = () => {
        const role = userInfo.role;
        return (
            <div className="home-grid">
                {role === 'lecturer' && (
                    <>
                        <Link to="/lecturer/dashboard" className="glass-card"><div className="icon-box blue"><FaChartLine /></div><h3>Akademik Panel</h3><p>İstatistikleri incele.</p></Link>
                        <Link to="/lecturer/my-content" className="glass-card"><div className="icon-box green"><FaFileAlt /></div><h3>İçerik Yönetimi</h3><p>Duyuru düzenle/sil.</p></Link>
                        <Link to="/lecturer/upload" className="glass-card"><div className="icon-box purple"><FaPlusCircle /></div><h3>Yeni Paylaşım</h3><p>Duyuru/Belge ekle.</p></Link>
                        <Link to="/lecturer/student-status" className="glass-card"><div className="icon-box orange"><FaUsers /></div><h3>Staj Durumu</h3><p>Öğrenci takibi.</p></Link>
                    </>
                )}
                {role === 'company' && (
                    <>
                        <Link to="/company/create-internship" className="glass-card"><div className="icon-box blue"><FaPlusCircle /></div><h3>Yeni İlan</h3><p>İlan oluştur.</p></Link>
                        <Link to="/company/my-internships" className="glass-card"><div className="icon-box green"><FaClipboardList /></div><h3>İlanlarım</h3><p>İlanları yönet.</p></Link>
                        <Link to="/company/applicants" className="glass-card"><div className="icon-box purple"><FaUsers /></div><h3>Adaylar</h3><p>Başvuruları gör.</p></Link>
                        <Link to="/company/dashboard" className="glass-card"><div className="icon-box orange"><FaChartLine /></div><h3>Dashboard</h3><p>İstatistikler.</p></Link>
                    </>
                )}
                {role === 'student' && (
                    <>
                        <Link to="/internships" className="glass-card"><div className="icon-box blue"><FaSearch /></div><h3>Staj Ara</h3><p>İlanlara göz at.</p></Link>
                        <Link to="/my-applications" className="glass-card"><div className="icon-box green"><FaFileAlt /></div><h3>Başvurularım</h3><p>Durumunu takip et.</p></Link>
                        <Link to="/learning" className="glass-card"><div className="icon-box purple"><FaGraduationCap /></div><h3>Öğrenme</h3><p>Ders notları ve belgeler.</p></Link>
                        <Link to="/saved-content" className="glass-card"><div className="icon-box orange"><FaBookmark /></div><h3>Kaydettiklerim</h3><p>Favori içerikler.</p></Link>
                    </>
                )}
                {/* Profil Kartı BURADAN KALDIRILDI */}
            </div>
        );
    };

    return (
        <div className="landing-page">
            <div className="video-wrapper">
                <video className="hero-video" autoPlay loop muted playsInline>
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            <section className="hero-content-section">
                <div className="hero-text-box">
                    {!userInfo ? (
                        <>
                            <h1 className="hero-title">Geleceğin <span className="highlight">Denizcileri</span><br />Rotalarını Burada Çiziyor</h1>
                            <p className="hero-subtitle">
                                Türkiye'nin en prestijli denizcilik şirketleriyle stajyerleri ve akademisyenleri buluşturan ilk ve tek platform.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/auth" className="btn-primary-glow">Kariyerine Yön Ver</Link>
                                <Link to="/auth" className="btn-secondary-glass">Şirket Hesabı Aç</Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="hero-title">Tekrar Hoş Geldin, <br /><span className="highlight">{userInfo.name}</span></h1>
                            <p className="hero-subtitle">Bugün rotanda neler var? İşte hızlı işlemlerin:</p>
                            <div className="logged-in-content">
                                {renderUserCards()}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {!userInfo && (
                <section className="stats-section">
                    <div className="stats-grid">
                        <div className="stat-card"><FaUserGraduate className="stat-icon" /><h3>{stats.students}</h3><p>Öğrenci Kayıtlı</p></div>
                        <div className="stat-card"><FaHandshake className="stat-icon" /><h3>{stats.matches}</h3><p>Staj Eşleşmesi</p></div>
                        <div className="stat-card"><FaBuilding className="stat-icon" /><h3>{stats.companies}</h3><p>Partner Şirket</p></div>
                        <div className="stat-card"><FaChartLine className="stat-icon" /><h3>%{stats.rate}</h3><p>İşe Yerleşme Oranı</p></div>
                    </div>
                </section>
            )}

            <footer className="main-footer">
                <div className="footer-content">
                    <div className="footer-col">
                        <h2>Cadet.</h2>
                        <p>Denizcilik sektörünün dijitalleşen yüzü. Staj süreçlerini modernize ediyor, geleceğin kaptanlarını sektöre kazandırıyoruz.</p>
                    </div>
                    <div className="footer-col">
                        <h3>Hızlı Linkler</h3>
                        <ul>
                            <li><Link to="/">Ana Sayfa</Link></li>
                            {!userInfo && <li><Link to="/auth">Giriş Yap</Link></li>}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>İletişim</h3>
                        <ul>
                            <li><FaMapMarkerAlt /> Tuzla, İstanbul</li>
                            <li><FaEnvelope /> info@cadet.com</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Takip Et</h3>
                        <div className="social-icons">
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"><p>&copy; 2026 Cadet Platform. Tüm hakları saklıdır.</p></div>
            </footer>
        </div>
    );
};

export default HomePage;