import React, { useState } from 'react';
import API from '../api/axiosConfig';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';

const ContactModal = ({ recipient, isOpen, onClose }) => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await API.post('/messages', {
                receiverId: recipient._id,
                subject,
                content
            });
            alert('Mesajınız gönderildi.');
            setSubject('');
            setContent('');
            onClose();
        } catch (error) {
            console.error(error);
            alert('Mesaj gönderilirken bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000
        }}>
            <div style={{
                background: 'white', padding: '30px', borderRadius: '15px', width: '90%', maxWidth: '500px',
                position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
                <button
                    onClick={onClose}
                    style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#888' }}
                >
                    <FaTimes />
                </button>

                <h2 style={{ color: '#005A9C', marginBottom: '20px' }}>✉️ İletişime Geç</h2>
                <p style={{ marginBottom: '20px', color: '#666' }}>
                    <strong>Alıcı:</strong> {recipient.name} {recipient.surname}
                </p>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#444' }}>Konu</label>
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            placeholder="Mesajınızın konusu..."
                            style={{
                                width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#444' }}>Mesaj</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            rows="5"
                            placeholder="Mesajınızı buraya yazın..."
                            style={{
                                width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem',
                                resize: 'vertical'
                            }}
                        ></textarea>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#e0e0e0', color: '#333',
                                marginRight: '10px', cursor: 'pointer', fontWeight: 'bold'
                            }}
                        >
                            İptal
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#005A9C', color: 'white',
                                cursor: 'pointer', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px'
                            }}
                        >
                            {loading ? 'Gönderiliyor...' : <><FaPaperPlane /> Gönder</>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
