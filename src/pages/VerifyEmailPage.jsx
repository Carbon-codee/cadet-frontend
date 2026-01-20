import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import './AuthPage.css';
import heroVideo from '../assets/hero-video.mp4';

const VerifyEmailPage = () => {
    const { token } = useParams();
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const verifyAccount = async () => {
            if (!token) { setStatus('error'); return; }
            try {
                await API.post('/auth/verify-email', { token });
                setStatus('success');
            } catch (error) { setStatus('error'); }
        };
        verifyAccount();
    }, [token]);

    const renderContent = () => {
        switch (status) {
            case 'success':
                return (
                    <>
                        <FaCheckCircle style={{ fontSize: '4rem', color: '#4cc9f0', marginBottom: '20px' }} />
                        <h2 className="form-title" style={{ marginBottom: '10px' }}>Tebrikler!</h2>
                        <p style={{ color: '#a8b2d1' }}>Hesabınız başarıyla doğrulandı.</p>
                        <Link to="/auth" className="neon-btn" style={{ textDecoration: 'none', marginTop: '20px', display: 'inline-block', textAlign: 'center' }}>Giriş Yap</Link>
                    </>
                );
            case 'error':
                return (
                    <>
                        <FaTimesCircle style={{ fontSize: '4rem', color: '#e74c3c', marginBottom: '20px' }} />
                        <h2 className="form-title" style={{ marginBottom: '10px' }}>Hata</h2>
                        <p style={{ color: '#a8b2d1' }}>Bağlantı geçersiz veya süresi dolmuş.</p>
                        <Link to="/auth" style={{ color: '#4cc9f0', marginTop: '20px', display: 'block' }}>Giriş Sayfasına Dön</Link>
                    </>
                );
            default:
                return (
                    <>
                        <FaSpinner className="fa-spin" style={{ fontSize: '3rem', color: '#4cc9f0', marginBottom: '20px' }} />
                        <h2 className="form-title">Doğrulanıyor...</h2>
                    </>
                );
        }
    };

    return (
        <div className="auth-wrapper">
            <video className="auth-video-bg" autoPlay loop muted playsInline><source src={heroVideo} type="video/mp4" /></video>
            <div className="auth-overlay"></div>
            <div className="glass-panel" style={{ height: 'auto', minHeight: '400px', maxWidth: '500px', flexDirection: 'column', padding: '40px', justifyContent: 'center', alignItems: 'center' }}>
                {renderContent()}
            </div>
        </div>
    );
};

export default VerifyEmailPage;