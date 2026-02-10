import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import './VerifyEmailPage.css';

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
                    <div className="verify-content success-content">
                        <div className="icon-wrapper success-icon">
                            <FaCheckCircle />
                        </div>
                        <h1 className="verify-title">Tebrikler!</h1>
                        <p className="verify-message">Hesabınız başarıyla doğrulandı.</p>
                        <p className="verify-submessage">Artık platformumuza giriş yapabilir ve tüm özellikleri kullanabilirsiniz.</p>
                        <Link to="/auth" className="verify-button success-button">
                            Giriş Yap
                        </Link>
                    </div>
                );
            case 'error':
                return (
                    <div className="verify-content error-content">
                        <div className="icon-wrapper error-icon">
                            <FaTimesCircle />
                        </div>
                        <h1 className="verify-title">Doğrulama Başarısız</h1>
                        <p className="verify-message">Doğrulama bağlantısı geçersiz veya süresi dolmuş.</p>
                        <p className="verify-submessage">Lütfen tekrar kayıt olun veya yeni bir doğrulama e-postası isteyin.</p>
                        <Link to="/auth" className="verify-button error-button">
                            Giriş Sayfasına Dön
                        </Link>
                    </div>
                );
            default:
                return (
                    <div className="verify-content loading-content">
                        <div className="icon-wrapper loading-icon">
                            <FaSpinner className="spin-animation" />
                        </div>
                        <h1 className="verify-title">Hesabınız Doğrulanıyor...</h1>
                        <p className="verify-message">Lütfen bekleyin, hesabınız doğrulanıyor.</p>
                    </div>
                );
        }
    };

    return (
        <div className="verify-page">
            <div className="verify-card">
                <div className="verify-logo">
                    <img src="/logo.png-modified.png" alt="Marine Cadet Logo" />
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default VerifyEmailPage;