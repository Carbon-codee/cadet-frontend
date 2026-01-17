import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'; // Yönlendirme ve konum için hook'lar
import { useAuth } from '../context/AuthContext'; // Global state hook'u
import './AuthPage.css';
import { FaUserGraduate, FaBuilding, FaChalkboardTeacher, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const AuthPage = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [selectedRole, setSelectedRole] = useState('student');

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    // Giriş sonrası yönlendirilecek adresi belirle.
    // Eğer başka bir sayfadan yönlendirme ile gelindiyse o sayfayı, değilse ana sayfayı kullan.
    const from = location.state?.from?.pathname || "/";

    // Kayıt formu için state
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        department: '',
        classYear: '',
    });

    // Giriş formu için state
    const [signInData, setSignInData] = useState({
        email: '',
        password: '',
    });

    // Kayıt formu inputlarını yöneten fonksiyon
    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpData(prevState => ({ ...prevState, [name]: value }));
    };

    // Giriş formu inputlarını yöneten fonksiyon
    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInData(prevState => ({ ...prevState, [name]: value }));
    };

    // Kayıt formunu gönderme fonksiyonu
    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        if (signUpData.password !== signUpData.confirmPassword) {
            alert("Şifreler uyuşmuyor!");
            return;
        }
        const { name, email, password, department, classYear } = signUpData;
        try {
            await axios.post('http://localhost:5000/api/auth/register', {
                name, email, password, role: selectedRole, department, classYear,
            });
            alert('Kayıt başarılı! Lütfen giriş yapın.');
            setIsSignUpActive(false); // Kayıt sonrası giriş paneline geç
        } catch (error) {
            alert(`Kayıt Başarısız: ${error.response?.data?.message || 'Bir hata oluştu.'}`);
        }
    };

    // Giriş formunu gönderme fonksiyonu
    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/login', signInData);

            // Context API üzerinden global state'i ve localStorage'ı güncelle
            login(data);

            alert('Giriş başarılı!');

            // Kullanıcıyı en son gitmek istediği sayfaya veya ana sayfaya yönlendir
            navigate(from, { replace: true });

        } catch (error) {
            alert(`Giriş Başarısız: ${error.response?.data?.message || 'Bir hata oluştu.'}`);
        }
    };

    const handleSignUpClick = () => setIsSignUpActive(true);
    const handleSignInClick = () => setIsSignUpActive(false);

    const containerClassName = `auth-container ${isSignUpActive ? 'sign-up-active' : ''}`;

    return (
        <div className="container-auth">
            <div className={containerClassName}>
                {/* KAYIT OLMA FORMU */}
                <div className="form-container sign-up-container">
                    <form className="form-auth" onSubmit={handleSignUpSubmit}>
                        <h1 className="title-auth">Hesap Oluştur</h1>
                        <div className="role-selector">
                            <button type="button" className={`role-button ${selectedRole === 'student' ? 'active' : ''}`} onClick={() => setSelectedRole('student')}><FaUserGraduate /> Öğrenci</button>
                            <button type="button" className={`role-button ${selectedRole === 'company' ? 'active' : ''}`} onClick={() => setSelectedRole('company')}><FaBuilding /> Şirket</button>
                            <button type="button" className={`role-button ${selectedRole === 'lecturer' ? 'active' : ''}`} onClick={() => setSelectedRole('lecturer')}><FaChalkboardTeacher /> Akademisyen</button>
                        </div>
                        <div className="input-container"><FaUser /><input name="name" value={signUpData.name} onChange={handleSignUpChange} className="input-auth" type="text" placeholder="İsim Soyisim" required /></div>
                        <div className="input-container"><FaEnvelope /><input name="email" value={signUpData.email} onChange={handleSignUpChange} className="input-auth" type="email" placeholder={selectedRole === 'company' ? 'Şirket E-postası' : 'Okul E-postası'} required /></div>
                        <div className="input-container"><FaLock /><input name="password" value={signUpData.password} onChange={handleSignUpChange} className="input-auth" type="password" placeholder="Şifre" required /></div>
                        <div className="input-container"><FaLock /><input name="confirmPassword" value={signUpData.confirmPassword} onChange={handleSignUpChange} className="input-auth" type="password" placeholder="Şifre Tekrar" required /></div>
                        {selectedRole === 'student' && (
                            <>
                                <div className="input-container"><FaUserGraduate /><select name="department" value={signUpData.department} onChange={handleSignUpChange} className="select-auth" required><option value="">Bölüm Seçiniz</option><option value="makine">Makine</option><option value="guverte">Güverte</option></select></div>
                                <div className="input-container"><FaUserGraduate /><select name="classYear" value={signUpData.classYear} onChange={handleSignUpChange} className="select-auth" required><option value="">Sınıf Seçiniz</option><option value="1">1. Sınıf</option><option value="2">2. Sınıf</option><option value="3">3. Sınıf</option><option value="4">4. Sınıf</option></select></div>
                            </>
                        )}
                        <button type="submit" className="button-auth" style={{ marginTop: '20px' }}>Kayıt Ol</button>
                    </form>
                </div>

                {/* GİRİŞ YAPMA FORMU */}
                <div className="form-container sign-in-container">
                    <form className="form-auth" onSubmit={handleSignInSubmit}>
                        <h1 className="title-auth">Giriş Yap</h1>
                        <div className="input-container"><FaEnvelope /><input name="email" value={signInData.email} onChange={handleSignInChange} className="input-auth" type="email" placeholder="E-posta" required /></div>
                        <div className="input-container"><FaLock /><input name="password" value={signInData.password} onChange={handleSignInChange} className="input-auth" type="password" placeholder="Şifre" required /></div>
                        <a href="#" style={{ fontSize: '12px', margin: '15px 0' }}>Şifreni mi unuttun?</a>
                        <button type="submit" className="button-auth">Giriş Yap</button>
                    </form>
                </div>

                {/* ANİMASYONLU PANEL */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="title-auth">Tekrar Hoş Geldin!</h1>
                            <p className="paragraph-auth">Kaldığın yerden devam etmek için giriş yap.</p>
                            <button className="button-auth ghost" onClick={handleSignInClick}>Giriş Yap</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="title-auth">Merhaba!</h1>
                            <p className="paragraph-auth">Aramıza katılmak için kişisel bilgilerini gir ve yolculuğuna başla.</p>
                            <button className="button-auth ghost" onClick={handleSignUpClick}>Kayıt Ol</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;