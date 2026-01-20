import React, { useState } from 'react';
import API from '../api/axiosConfig';

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
        <div style={{ padding: 50, textAlign: 'center' }}>
            <h2>Şifremi Unuttum</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-posta adresinizi girin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: 10, width: 300, marginBottom: 10 }}
                />
                <button type="submit" style={{ padding: 10 }}>Sıfırlama Linki Gönder</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPasswordPage;