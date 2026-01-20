import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import './AuthPage.css';
import heroVideo from '../assets/hero-video.mp4';
import { FaLock } from 'react-icons/fa';

const ResetPasswordPage = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) return setMessage("Şifreler uyuşmuyor!");

        try {
            const { data } = await API.put(`/auth/reset-password/${token}`, { password });
            setMessage(data.message);
            setTimeout(() => navigate('/auth'), 3000);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Hata oluştu.');
        }
    };

    return (
        <div className="auth-wrapper">
            <video className="auth-video-bg" autoPlay loop muted playsInline><source src={heroVideo} type="video/mp4" /></video>
            <div className="auth-overlay"></div>

            <div className="glass-panel" style={{ height: 'auto', minHeight: '400px', maxWidth: '500px', flexDirection: 'column', padding: '40px' }}>
                <h2 className="form-title">Yeni Şifre Belirle</h2>

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className="modern-input-group">
                        <FaLock className="input-icon" />
                        <input type="password" placeholder="Yeni Şifre" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="modern-input-group">
                        <FaLock className="input-icon" />
                        <input type="password" placeholder="Yeni Şifre Tekrar" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="neon-btn">ŞİFREYİ KAYDET</button>
                </form>

                {message && <p style={{ marginTop: '20px', color: '#4cc9f0', textAlign: 'center', fontWeight: 'bold' }}>{message}</p>}
            </div>
        </div>
    );
};

export default ResetPasswordPage;