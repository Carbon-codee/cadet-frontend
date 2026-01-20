import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './AuthPage.css';
const heroVideo = '/hero-video.mp4'; // Direkt public klasöründen al
import { FaUser, FaBuilding, FaChalkboardTeacher, FaEnvelope, FaLock, FaUserTag, FaAnchor, FaShip } from 'react-icons/fa';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [role, setRole] = useState('student');
    const navigate = useNavigate();
    const { login } = useAuth();

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/auth/login', loginData);
            login(data);
            navigate('/', { replace: true });
        } catch (error) { alert(error.response?.data?.message || 'Giriş başarısız.'); }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) return alert("Şifreler uyuşmuyor!");
        try {
            const { confirmPassword, ...dataToSend } = registerData;
            await API.post('/auth/register', { ...dataToSend, role });
            alert("Kayıt başarılı! Giriş yapılıyor...");
            setIsLogin(true);
        } catch (error) { alert(error.response?.data?.message || 'Kayıt başarısız.'); }
    };

    return (
        <div className="auth-wrapper">
            {/* ARKAPLAN VİDEO */}
            <video className="auth-video-bg" autoPlay loop muted playsInline>
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="auth-overlay"></div>

            {/* ANA PANEL */}
            <div className="glass-panel">

                {/* SOL TARAF (GÖRSEL) */}
                <div className="auth-visual-side">
                    <div className="visual-circle vc-1"></div>
                    <div className="visual-circle vc-2"></div>

                    <FaAnchor style={{ fontSize: '4rem', color: '#64ffda', marginBottom: '20px', filter: 'drop-shadow(0 0 10px rgba(100,255,218,0.5))' }} />

                    <div className="visual-content">
                        <h2>{isLogin ? 'Rotanı Çiz' : 'Mürettebata Katıl'}</h2>
                        <p>
                            {isLogin
                                ? 'Denizcilik dünyasının en prestijli platformuna tekrar hoş geldin.'
                                : 'Kariyerine yön vermek ve sektörün liderleriyle buluşmak için ilk adımı at.'}
                        </p>
                    </div>
                </div>

                {/* SAĞ TARAF (FORM) */}
                <div className="auth-form-side">
                    <h2 className="form-title">{isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}</h2>

                    {!isLogin && (
                        <div className="role-tabs">
                            <button type="button" className={`role-tab ${role === 'student' ? 'active' : ''}`} onClick={() => setRole('student')}>
                                <FaUser /> Öğrenci
                            </button>
                            <button type="button" className={`role-tab ${role === 'company' ? 'active' : ''}`} onClick={() => setRole('company')}>
                                <FaBuilding /> Şirket
                            </button>
                            <button type="button" className={`role-tab ${role === 'lecturer' ? 'active' : ''}`} onClick={() => setRole('lecturer')}>
                                <FaChalkboardTeacher /> Hoca
                            </button>
                        </div>
                    )}

                    {isLogin ? (
                        <form onSubmit={handleLoginSubmit}>
                            <div className="modern-input-group">
                                <input type="email" placeholder="E-posta Adresi" required value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                                <FaEnvelope className="input-icon" />
                            </div>
                            <div className="modern-input-group">
                                <input type="password" placeholder="Şifre" required value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                                <FaLock className="input-icon" />
                            </div>
                            <button type="submit" className="neon-btn">GİRİŞ YAP</button>
                        </form>
                    ) : (
                        <form onSubmit={handleRegisterSubmit}>
                            <div className="modern-input-group">
                                <input type="text" placeholder={role === 'company' ? 'Şirket Adı' : 'Ad Soyad'} required value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} />
                                <FaUserTag className="input-icon" />
                            </div>
                            <div className="modern-input-group">
                                <input type="email" placeholder="E-posta Adresi" required value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
                                <FaEnvelope className="input-icon" />
                            </div>
                            <div className="modern-input-group">
                                <input type="password" placeholder="Şifre" required value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
                                <FaLock className="input-icon" />
                            </div>
                            <div className="modern-input-group">
                                <input type="password" placeholder="Şifre Tekrar" required value={registerData.confirmPassword} onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })} />
                                <FaLock className="input-icon" />
                            </div>
                            <button type="submit" className="neon-btn">KAYIT OL</button>
                        </form>
                    )}

                    <div className="toggle-text">
                        {isLogin ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}
                        <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Hemen Kayıt Ol" : "Giriş Yap"}</span>
                        <Link to="/forgot-password" className="forgot-pass">Şifreni mi unuttun?</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;