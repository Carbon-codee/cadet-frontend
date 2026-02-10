import React, { useState } from 'react';
import API from '../api/axiosConfig';
import { Link } from 'react-router-dom';
import './AuthPage.css';
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
            <div className="auth-card">
                <h2>Şifre Sıfırlama</h2>
                <p>E-posta adresini gir, sana sıfırlama linki gönderelim.</p>

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="E-posta Adresi"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn" style={{ marginTop: '20px' }}>LİNKİ GÖNDER</button>
                </form>

                {message && <p style={{ marginTop: '20px', color: '#00B4D8', fontWeight: 'bold' }}>{message}</p>}

                <div style={{ marginTop: '25px', width: '100%' }}>
                    <Link to="/auth" style={{ color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#00B4D8'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>
                        <FaArrowLeft /> Giriş'e Dön
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;