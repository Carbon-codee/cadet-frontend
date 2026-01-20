import React, { useState } from 'react';
import API from '../api/axiosConfig';
import { Link } from 'react-router-dom';
import './AuthPage.css';
// DÜZELTME: Import yerine direkt public yolunu kullanıyoruz
const heroVideo = '/hero-video.mp4';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/auth/forgot-password', { email });
            setMessage(data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Bir hata oluştu.');
        }
    };

    return (
        <div className="auth-wrapper">
            <video className="auth-video-bg" autoPlay loop muted playsInline><source src={heroVideo} type="video/mp4" /></video>
            <div className="auth-overlay"></div>

            <div className="glass-panel" style={{ height: 'auto', minHeight: '400px', maxWidth: '500px', flexDirection: 'column', padding: '40px' }}>
                <h2 className="form-title" style={{ marginBottom: '10px' }}>Şifre Sıfırlama</h2>
                <p style={{ color: '#a8b2d1', textAlign: 'center', marginBottom: '30px' }}>E-posta adresini gir, sana sıfırlama linki gönderelim.</p>

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className="modern-input-group">
                        <FaEnvelope className="input-icon" />
                        <input type="email" placeholder="E-posta Adresi" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <button type="submit" className="neon-btn">LİNKİ GÖNDER</button>
                </form>

                {message && <p style={{ marginTop: '20px', color: '#4cc9f0', textAlign: 'center', fontWeight: 'bold' }}>{message}</p>}

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link to="/auth" style={{ color: '#8892b0', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                        <FaArrowLeft /> Giriş'e Dön
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;