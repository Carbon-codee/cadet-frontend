import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig'; // API importu
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';

const VerifyEmailPage = () => {
    const { token } = useParams();
    const [status, setStatus] = useState('loading'); // loading, success, error

    useEffect(() => {
        const verifyAccount = async () => {
            if (!token) {
                setStatus('error');
                return;
            }
            try {
                // Backend'e token'ı gönder
                await API.post('/auth/verify-email', { token });
                setStatus('success');
            } catch (error) {
                console.error("Doğrulama hatası:", error);
                setStatus('error');
            }
        };
        verifyAccount();
    }, [token]);

    const renderContent = () => {
        switch (status) {
            case 'success':
                return (
                    <>
                        <FaCheckCircle style={{ fontSize: '4rem', color: '#27ae60', marginBottom: '20px' }} />
                        <h2 style={{ color: '#2c3e50', fontSize: '1.8rem' }}>Tebrikler!</h2>
                        <p style={{ color: '#555', fontSize: '1.1rem', margin: '10px 0 20px 0' }}>Hesabınız başarıyla doğrulandı.</p>
                        <Link to="/auth" style={{ padding: '12px 30px', background: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
                            Giriş Sayfasına Git
                        </Link>
                    </>
                );
            case 'error':
                return (
                    <>
                        <FaTimesCircle style={{ fontSize: '4rem', color: '#e74c3c', marginBottom: '20px' }} />
                        <h2 style={{ color: '#2c3e50', fontSize: '1.8rem' }}>Hata Oluştu</h2>
                        <p style={{ color: '#555', fontSize: '1.1rem', margin: '10px 0 20px 0' }}>Doğrulama linki geçersiz veya süresi dolmuş.</p>
                        <Link to="/auth" style={{ color: '#3498db', fontWeight: 'bold' }}>Tekrar Dene</Link>
                    </>
                );
            default: // 'loading' durumu
                return (
                    <>
                        <FaSpinner className="fa-spin" style={{ fontSize: '3rem', color: '#3498db', marginBottom: '20px' }} />
                        <h2 style={{ color: '#2c3e50', fontSize: '1.8rem' }}>Doğrulanıyor...</h2>
                        <p style={{ color: '#555', fontSize: '1.1rem' }}>Lütfen bekleyin...</p>
                    </>
                );
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#f4f7fa',
            padding: '20px'
        }}>
            <div style={{
                background: 'white',
                padding: '50px',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                textAlign: 'center',
                maxWidth: '500px',
                width: '100%'
            }}>
                {renderContent()}
            </div>
        </div>
    );
};

export default VerifyEmailPage;