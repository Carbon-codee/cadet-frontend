import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import './AuthPage.css';
import { FaUser, FaBuilding, FaChalkboardTeacher, FaEnvelope, FaLock, FaUserTag } from 'react-icons/fa';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [role, setRole] = useState('student');
    const navigate = useNavigate();
    const { login } = useAuth();

    // Giriş Formu Verileri
    const [loginData, setLoginData] = useState({ email: '', password: '' });

    // Kayıt Formu Verileri
    const [registerData, setRegisterData] = useState({
        name: '', email: '', password: '', department: 'Güverte', classYear: '1. Sınıf'
    });

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/auth/login', loginData);

            // 1. Kullanıcıyı sisteme tanıt
            login(data);

            // 2. KESİN ÇÖZÜM: Her zaman Ana Sayfaya ('/') git.
            // { replace: true } geçmişi temizler, geri tuşuna basınca tekrar login'e dönmez.
            navigate('/', { replace: true });

        } catch (error) {
            alert(error.response?.data?.message || 'Giriş başarısız.');
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { ...registerData, role };
            await API.post('/auth/register', payload);
            alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
            setIsLogin(true); // Giriş ekranına döndür
        } catch (error) {
            alert(error.response?.data?.message || 'Kayıt başarısız.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                {/* --- HEADER --- */}
                <div className="auth-header">
                    <h2>{isLogin ? 'Tekrar Hoş Geldin!' : 'Hesap Oluştur'}</h2>
                    <p>{isLogin ? 'Kaldığın yerden devam etmek için giriş yap.' : 'Aramıza katılmak için bilgilerini gir.'}</p>

                    {!isLogin && (
                        <div className="role-selector">
                            <button type="button" className={role === 'student' ? 'active' : ''} onClick={() => setRole('student')}><FaUser /> Öğrenci</button>
                            <button type="button" className={role === 'company' ? 'active' : ''} onClick={() => setRole('company')}><FaBuilding /> Şirket</button>
                            <button type="button" className={role === 'lecturer' ? 'active' : ''} onClick={() => setRole('lecturer')}><FaChalkboardTeacher /> Akademisyen</button>
                        </div>
                    )}
                </div>

                {/* --- FORMLAR --- */}
                {isLogin ? (
                    <form onSubmit={handleLoginSubmit}>
                        <div className="input-group">
                            <FaEnvelope className="input-icon" />
                            <input type="email" placeholder="E-posta Adresi" required
                                value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                        </div>
                        <div className="input-group">
                            <FaLock className="input-icon" />
                            <input type="password" placeholder="Şifre" required
                                value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                        </div>
                        <div className="form-footer">
                            <a href="#" className="forgot-password">Şifreni mi unuttun?</a>
                        </div>
                        <button type="submit" className="auth-btn">GİRİŞ YAP</button>
                    </form>
                ) : (
                    <form onSubmit={handleRegisterSubmit}>
                        <div className="input-group">
                            <FaUserTag className="input-icon" />
                            <input type="text" placeholder={role === 'company' ? 'Şirket Adı' : 'Ad Soyad'} required
                                value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <FaEnvelope className="input-icon" />
                            <input type="email" placeholder="E-posta Adresi" required
                                value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <FaLock className="input-icon" />
                            <input type="password" placeholder="Şifre" required
                                value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
                        </div>

                        {/* Öğrenciye Özel Alanlar */}
                        {role === 'student' && (
                            <>
                                <div className="input-group">
                                    <select value={registerData.department} onChange={(e) => setRegisterData({ ...registerData, department: e.target.value })}>
                                        <option value="Deniz Ulaştırma İşletme Mühendisliği">Deniz Ulaştırma (Güverte)</option>
                                        <option value="Gemi Makineleri İşletme Mühendisliği">Gemi Makineleri (Makine)</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <select value={registerData.classYear} onChange={(e) => setRegisterData({ ...registerData, classYear: e.target.value })}>
                                        <option>1. Sınıf</option><option>2. Sınıf</option><option>3. Sınıf</option><option>4. Sınıf</option>
                                    </select>
                                </div>
                            </>
                        )}

                        <button type="submit" className="auth-btn">KAYIT OL</button>
                    </form>
                )}

                {/* --- GEÇİŞ BUTONU --- */}
                <div className="toggle-auth">
                    <p>
                        {isLogin ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}
                        <button type="button" onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
                            {isLogin ? "Kayıt Ol" : "Giriş Yap"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;