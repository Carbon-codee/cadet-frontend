import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';

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
            setTimeout(() => navigate('/auth'), 3000); // 3 saniye sonra giriş sayfasına at
        } catch (error) {
            setMessage(error.response?.data?.message || 'Hata oluştu.');
        }
    };

    return (
        <div style={{ padding: 50, textAlign: 'center' }}>
            <h2>Yeni Şifre Belirle</h2>
            <form onSubmit={handleSubmit}>
                <input type="password" placeholder="Yeni Şifre" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: 10, width: 300, marginBottom: 10 }} />
                <input type="password" placeholder="Yeni Şifre Tekrar" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required style={{ padding: 10, width: 300, marginBottom: 10 }} />
                <button type="submit" style={{ padding: 10 }}>Şifreyi Kaydet</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPasswordPage;