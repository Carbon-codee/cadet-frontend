import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './AuthPage.css';
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn, FaUser, FaEnvelope, FaLock, FaGraduationCap } from 'react-icons/fa';

const AuthPage = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const [role, setRole] = useState('student');
    const navigate = useNavigate();
    const { login } = useAuth();

    // Giriş Verileri
    const [loginData, setLoginData] = useState({ email: '', password: '' });

    // Kayıt Verileri
    const [registerData, setRegisterData] = useState({
        name: '', email: '', password: '', department: 'Güverte', classYear: '1. Sınıf'
    });

    // --- GİRİŞ YAPMA İŞLEMİ ---
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

    // --- KAYIT OLMA İŞLEMİ ---
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { ...registerData, role };
            await API.post('/auth/register', payload);
            alert("Kayıt başarılı! Giriş yapabilirsiniz.");
            setIsRightPanelActive(false); // Giriş ekranına kaydır
        } catch (error) {
            alert(error.response?.data?.message || 'Kayıt başarısız.');
        }
    };

    return (
        <div className="auth-body">
            <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">

                {/* --- KAYIT OL FORMU (Sign Up) --- */}
                <div className="form-container sign-up-container">
                    <form onSubmit={handleRegisterSubmit}>
                        <h1>Hesap Oluştur</h1>
                        <div className="social-container">
                            <a href="#" className="social"><FaGoogle /></a>
                            <a href="#" className="social"><FaFacebookF /></a>
                            <a href="#" className="social"><FaLinkedinIn /></a>
                        </div>
                        <span>veya e-posta ile kayıt ol</span>

                        {/* Rol Seçimi */}
                        <div className="role-options">
                            <label className={role === 'student' ? 'selected' : ''} onClick={() => setRole('student')}>Öğrenci</label>
                            <label className={role === 'company' ? 'selected' : ''} onClick={() => setRole('company')}>Şirket</label>
                            <label className={role === 'lecturer' ? 'selected' : ''} onClick={() => setRole('lecturer')}>Akademisyen</label>
                        </div>

                        <input type="text" placeholder={role === 'company' ? "Şirket Adı" : "Ad Soyad"} value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} required />
                        <input type="email" placeholder="E-posta" value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} required />
                        <input type="password" placeholder="Şifre" value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} required />

                        {role === 'student' && (
                            <select value={registerData.department} onChange={(e) => setRegisterData({ ...registerData, department: e.target.value })}>
                                <option value="Güverte">Güverte</option>
                                <option value="Makine">Makine</option>
                            </select>
                        )}

                        <button type="submit">KAYIT OL</button>
                    </form>
                </div>

                {/* --- GİRİŞ YAP FORMU (Sign In) --- */}
                <div className="form-container sign-in-container">
                    <form onSubmit={handleLoginSubmit}>
                        <h1>Giriş Yap</h1>
                        <div className="social-container">
                            <a href="#" className="social"><FaGoogle /></a>
                            <a href="#" className="social"><FaFacebookF /></a>
                            <a href="#" className="social"><FaLinkedinIn /></a>
                        </div>
                        <span>hesabınızla giriş yapın</span>
                        <input type="email" placeholder="E-posta" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} required />
                        <input type="password" placeholder="Şifre" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} required />
                        <a href="#" className="forgot-pass">Şifreni mi unuttun?</a>
                        <button type="submit">GİRİŞ YAP</button>
                    </form>
                </div>

                {/* --- KAYDIRMALI OVERLAY KISMI --- */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Tekrar Hoş Geldin!</h1>
                            <p>Kaldığın yerden devam etmek için kişisel bilgilerinle giriş yap.</p>
                            <button className="ghost" onClick={() => setIsRightPanelActive(false)}>Giriş Yap</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Merhaba, Denizci!</h1>
                            <p>Aramıza katılmak ve kariyerine yön vermek için hemen kayıt ol.</p>
                            <button className="ghost" onClick={() => setIsRightPanelActive(true)}>Kayıt Ol</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;