import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './AuthPage.css';
const heroVideo = '/hero-video.mp4';
import { FaUser, FaBuilding, FaChalkboardTeacher, FaEnvelope, FaLock, FaUserTag, FaAnchor } from 'react-icons/fa';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [role, setRole] = useState('student');
    const navigate = useNavigate();
    const { login } = useAuth();

    // Form Verileri
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/auth/login', loginData);
            login(data);
            navigate('/', { replace: true });
        } catch (error) {
            alert(error.response?.data?.message || 'Giriş başarısız.');
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) return alert("Şifreler uyuşmuyor!");
        try {
            const { confirmPassword, ...dataToSend } = registerData;
            await API.post('/auth/register', { ...dataToSend, role });
            alert("Kayıt başarılı! Giriş yapabilirsiniz.");
            setIsLogin(true);
        } catch (error) {
            alert(error.response?.data?.message || 'Kayıt başarısız.');
        }
    };

    return (
        <div className="auth-wrapper">
            {/* Arkaplan Videosu */}
            <video className="auth-video-bg" autoPlay loop muted playsInline>
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="auth-overlay"></div>

            {/* CAM PANEL */}
            <div className="glass-panel">

                {/* SOL TARAF: GÖRSEL ALAN */}
                <div className="auth-visual-side">
                    <FaAnchor style={{ fontSize: '4rem', color: '#4cc9f0', marginBottom: '20px' }} />
                    <div className="visual-content">
                        <h2>{isLogin ? 'Tekrar Hoş Geldin!' : 'Aramıza Katıl'}</h2>
                        <p>
                            {isLogin
                                ? 'Denizcilik kariyerine kaldığın yerden devam et. Rota oluşturuldu, dümen sende.'
                                : 'Geleceğin kaptanları ve mühendisleri burada buluşuyor. Kariyerine ilk adımı at.'}
                        </p>
                    </div>
                </div>

                {/* SAĞ TARAF: FORM ALANI */}
                <div className="auth-form-side">
                    <h2 className="form-title">{isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}</h2>

                    {/* Rol Seçici (Sadece Kayıtta) */}
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

                    {/* --- GİRİŞ FORMU --- */}
                    {isLogin ? (
                        <form onSubmit={handleLoginSubmit}>
                            <div className="modern-input-group">
                                <FaEnvelope className="input-icon" />
                                <input type="email" placeholder="E-posta Adresi" required
                                    value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                            </div>
                            <div className="modern-input-group">
                                <FaLock className="input-icon" />
                                <input type="password" placeholder="Şifre" required
                                    value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                            </div>
                            <button type="submit" className="neon-btn">GİRİŞ YAP</button>
                        </form>
                    ) : (
                        /* --- KAYIT FORMU --- */
                        <form onSubmit={handleRegisterSubmit}>
                            <div className="modern-input-group">
                                <FaUserTag className="input-icon" />
                                <input type="text" placeholder={role === 'company' ? 'Şirket Adı' : 'Ad Soyad'} required
                                    value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} />
                            </div>
                            <div className="modern-input-group">
                                <FaEnvelope className="input-icon" />
                                <input type="email" placeholder="E-posta Adresi" required
                                    value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
                            </div>
                            <div className="modern-input-group">
                                <FaLock className="input-icon" />
                                <input type="password" placeholder="Şifre" required
                                    value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
                            </div>
                            <div className="modern-input-group">
                                <FaLock className="input-icon" />
                                <input type="password" placeholder="Şifre Tekrar" required
                                    value={registerData.confirmPassword} onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })} />
                            </div>
                            <button type="submit" className="neon-btn">KAYIT OL</button>
                        </form>
                    )}

                    <div className="toggle-text">
                        {isLogin ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}
                        <span onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? "Hemen Kayıt Ol" : "Giriş Yap"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;