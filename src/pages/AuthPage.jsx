import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './AuthPage.css';
import { FaUser, FaBuilding, FaChalkboardTeacher, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [role, setRole] = useState('student');
    const navigate = useNavigate();
    const { login } = useAuth();

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirmPassword: '', studentBarcode: '' });

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
            <div className={`auth-container ${!isLogin ? 'right-panel-active' : ''}`}>

                {/* --- KAYIT OL FORMU (SOLDA GİZLİ, SAĞA KAYINCA AÇILIR) --- */}
                <div className="form-container sign-up-container">
                    <form onSubmit={handleRegisterSubmit} className="auth-form">
                        <h2 className="form-header">Hesap Oluştur</h2>

                        <div className="role-selector">
                            <button type="button" className={`role-btn ${role === 'student' ? 'active' : ''}`} onClick={() => setRole('student')}>
                                <FaUser /> Öğrenci
                            </button>
                            <button type="button" className={`role-btn ${role === 'company' ? 'active' : ''}`} onClick={() => setRole('company')}>
                                <FaBuilding /> Şirket
                            </button>
                            <button type="button" className={`role-btn ${role === 'lecturer' ? 'active' : ''}`} onClick={() => setRole('lecturer')}>
                                <FaChalkboardTeacher /> Hoca
                            </button>
                        </div>

                        <div className="input-group">
                            <input type="text" placeholder={role === 'company' ? 'Şirket Adı' : 'Ad Soyad'} required value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} />
                        </div>

                        {role === 'student' && (
                            <div className="input-group">
                                <input type="text" placeholder="E-Devlet Barkod No" required value={registerData.studentBarcode} onChange={(e) => setRegisterData({ ...registerData, studentBarcode: e.target.value })} />
                            </div>
                        )}

                        <div className="input-group">
                            <input type="email" placeholder="E-posta Adresi" required value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Şifre" required value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Şifre Tekrar" required value={registerData.confirmPassword} onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })} />
                        </div>

                        <button type="submit" className="submit-btn">KAYIT OL</button>
                    </form>
                </div>

                {/* --- GİRİŞ YAP FORMU (SAĞDA, SOLA KAYINCA GİZLENİR) --- */}
                <div className="form-container sign-in-container">
                    <form onSubmit={handleLoginSubmit} className="auth-form">
                        <h2 className="form-header">Giriş Yap</h2>

                        <div className="input-group">
                            <input type="email" placeholder="E-posta Adresi" required value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Şifre" required value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                        </div>

                        <div className="form-footer">
                            <Link to="/forgot-password" className="forgot-pass">Şifremi unuttum?</Link>
                        </div>

                        <button type="submit" className="submit-btn">GİRİŞ YAP</button>
                    </form>
                </div>

                {/* ORTA DEĞİŞTİRME BUTONU - Artık Ana Container'ın Parçası */}
                <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? <FaChevronRight /> : <FaChevronLeft />}
                </button>

                {/* --- KAYAN KAPAK (OVERLAY) --- */}
                <div className="overlay-container">
                    <div className="overlay">

                        {/* SOL TARAFTAKI PANEL (Giriş Ekranında Görünür -> Logo ve Metin) */}
                        {/* Normalde "Sign In" container sağda, "Overlay" soldadır. Overlay sağa kayar. 
                            Fakat overlay içinde iki farklı içerik vardır: "Login için" ve "Register için".
                            
                            Overlay Left Panel: Register moduna geçince görünür (Sağda dururken).
                            Overlay Right Panel: Login modunda görünür (Solda dururken).
                        */}

                        <div className="overlay-panel overlay-left">
                            {/* Burası Register Modundayken (Panel Sağda) SOL TARAFTA kalan formu çağırmak için overlayin içindeki içerik DEĞİL.
                                 Overlay Left Panel -> Overlay containerının sol yarısı.
                                 Overlay Right Panel -> Overlay containerının sağ yarısı.
                                 
                                 Sliding Logic:
                                 - Default (Login): Overlay Solda. Overlay Right Panel görünür. (Metin: Join Us / Sign Up) -> Tıklayınca Register Modu.
                                 - Active (Register): Overlay Sağa Kayar. Overlay Left Panel görünür. (Metin: Welcome Back / Sign In) -> Tıklayınca Login Modu.
                             */}

                            {/* REGISTER MODUNDAYKEN GÖRÜNEN PANEL (Overlay Sağda Duruyor, İçerik Solundan Bakıyor) -> "Tekrar Hoşgeldiniz" */}
                            <img src="/logo.png" alt="Marine Cadet Logo" className="auth-logo" />
                            <h2>Tekrar Hoşgeldiniz!</h2>
                            <p>Denizcilik kariyerinize devam etmek için giriş yapın.</p>
                        </div>

                        <div className="overlay-panel overlay-right">
                            {/* LOGIN MODUNDAYKEN GÖRÜNEN PANEL (Overlay Solda Duruyor, İçerik Sağdan Bakıyor) -> "Aramıza Katılın" */}
                            <img src="/logo.png" alt="Marine Cadet Logo" className="auth-logo" />
                            <h2>Aramıza Katılın!</h2>
                            <p>Hemen kayıt olun ve staj fırsatlarını yakalayın.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthPage;