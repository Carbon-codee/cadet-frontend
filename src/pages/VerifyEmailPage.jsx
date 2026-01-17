import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axiosConfig';

const VerifyEmailPage = () => {
    const { token } = useParams();
    const [status, setStatus] = useState('loading'); // loading, success, error

    useEffect(() => {
        const verifyAccount = async () => {
            try {
                await API.post('/auth/verify-email', { token });
                setStatus('success');
            } catch (error) {
                setStatus('error');
            }
        };
        if (token) verifyAccount();
    }, [token]);

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f4f7fa', textAlign: 'center' }}>
            {status === 'loading' && <h2>Hesabınız doğrulanıyor...</h2>}

            {status === 'success' && (
                <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <h1 style={{ color: '#27ae60', fontSize: '3rem' }}>✔</h1>
                    <h2>Tebrikler!</h2>
                    <p>Hesabınız başarıyla doğrulandı.</p>
                    <Link to="/auth" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 24px', background: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
                        Giriş Yap
                    </Link>
                </div>
            )}

            {status === 'error' && (
                <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <h1 style={{ color: '#e74c3c', fontSize: '3rem' }}>✖</h1>
                    <h2>Hata Oluştu</h2>
                    <p>Doğrulama linki geçersiz veya süresi dolmuş.</p>
                    <Link to="/auth" style={{ color: '#3498db' }}>Giriş Sayfasına Dön</Link>
                </div>
            )}
        </div>
    );
};

export default VerifyEmailPage;