import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const KVKKModal = () => {
    const { userInfo, updateUser, logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Eğer kullanıcı yoksa veya zaten onaylıysa modalı gösterme
    if (!userInfo || userInfo.kvkkApproved) return null;

    const handleApprove = async () => {
        setLoading(true);
        setError(null);
        try {
            // Backend'e onay isteği at
            const token = userInfo.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            await axios.post('http://localhost:5000/api/users/approve-kvkk', { version: "1.0.0" }, config);

            // Frontend state'ini güncelle (Modal kapanır)
            updateUser({ kvkkApproved: true });

        } catch (err) {
            console.error("KVKK Onay Hatası:", err);
            setError("Onay işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)', // Koyu arka plan
            zIndex: 9999, // En üstte
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(5px)'
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '40px',
                borderRadius: '12px',
                width: '90%',
                maxWidth: '600px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                position: 'relative'
            }}>
                <h2 style={{
                    marginTop: 0,
                    color: '#1a202c',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #edf2f7',
                    paddingBottom: '15px'
                }}>
                    🔒 KVKK Aydınlatma Metni ve Kullanıcı Sözleşmesi
                </h2>

                <div style={{
                    maxHeight: '300px',
                    overflowY: 'auto',
                    margin: '20px 0',
                    padding: '15px',
                    backgroundColor: '#f7fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#4a5568'
                }}>
                    <p><strong>Değerli Kullanıcımız,</strong></p>
                    <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, Marine Cadet platformuna üye olarak paylaşmış olduğunuz kişisel verileriniz (Ad, Soyad, E-posta, Bölüm, Sınıf vb.);</p>
                    <ul>
                        <li>Platform hizmetlerinin sunulabilmesi,</li>
                        <li>Staj başvurularınızın şirketlere iletilebilmesi,</li>
                        <li>İstatistiksel çalışmaların yapılabilmesi amacıyla</li>
                    </ul>
                    <p>işlenmekte ve saklanmaktadır. Verileriniz, yasal zorunluluklar haricinde ve açık rızanız olmaksızın üçüncü kişilerle paylaşılmayacaktır.</p>
                    <p>Platformumuzu kullanmaya devam ederek, kişisel verilerinizin işlenmesini ve Kullanıcı Sözleşmesi'ni kabul etmiş sayılırsınız.</p>
                </div>

                {error && (
                    <div style={{
                        color: '#c53030',
                        backgroundColor: '#fff5f5',
                        padding: '10px',
                        borderRadius: '6px',
                        marginBottom: '15px',
                        fontSize: '14px'
                    }}>
                        ⚠️ {error}
                    </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                    <button
                        onClick={logout}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#e2e8f0',
                            color: '#4a5568',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '600'
                        }}
                    >
                        Reddet ve Çıkış Yap
                    </button>
                    <button
                        onClick={handleApprove}
                        disabled={loading}
                        style={{
                            padding: '10px 25px',
                            backgroundColor: '#3182ce',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontWeight: '600',
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? 'İşleniyor...' : 'Okudum, Onaylıyorum'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default KVKKModal;
