import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import './AuthPage.css';
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
            <div className="auth-card">
                <h2>Yeni Şifre Belirle</h2>
                <p>Lütfen hesabınız için yeni bir şifre belirleyin.</p>

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Yeni Şifre"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Yeni Şifre Tekrar"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn" style={{ marginTop: '20px' }}>ŞİFREYİ KAYDET</button>
                </form>

                {message && <p style={{ marginTop: '20px', color: '#00B4D8', fontWeight: 'bold' }}>{message}</p>}
            </div>
        </div>
    );
};

export default ResetPasswordPage;