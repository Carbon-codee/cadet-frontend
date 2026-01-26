import React, { useEffect, useState } from 'react';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaInbox, FaPaperPlane, FaUser, FaTrash, FaEdit, FaArrowLeft, FaSave, FaTimes } from 'react-icons/fa';

const MessagesPage = () => {
    const { userInfo } = useAuth();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('inbox'); // 'inbox' or 'sent'
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const { data } = await API.get('/messages');
            setMessages(data);
        } catch (error) {
            console.error("Mesajlar alınamadı:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Bu mesajı silmek istediğinize emin misiniz?")) return;
        try {
            await API.delete(`/messages/${id}`);
            setMessages(messages.filter(m => m._id !== id));
            setSelectedMessage(null); // Listeye dön
        } catch (error) {
            alert("Mesaj silinemedi.");
        }
    };

    const handleUpdate = async () => {
        try {
            const { data } = await API.put(`/messages/${selectedMessage._id}`, { content: editContent });
            // Listeyi güncelle
            setMessages(messages.map(m => m._id === selectedMessage._id ? { ...m, content: editContent } : m));
            setSelectedMessage({ ...selectedMessage, content: editContent });
            setIsEditing(false);
            alert("Mesaj güncellendi.");
        } catch (error) {
            alert("Güncelleme başarısız.");
        }
    };

    if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Mesajlar yükleniyor...</div>;

    const inboxMessages = messages.filter(m => m.receiver._id === userInfo._id);
    const sentMessages = messages.filter(m => m.sender._id === userInfo._id);
    const displayedMessages = activeTab === 'inbox' ? inboxMessages : sentMessages;

    // --- DETAY GÖRÜNÜMÜ ---
    if (selectedMessage) {
        const isSender = selectedMessage.sender._id === userInfo._id;

        return (
            <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
                <button
                    onClick={() => { setSelectedMessage(null); setIsEditing(false); }}
                    style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px', fontSize: '1rem' }}
                >
                    <FaArrowLeft /> Listeye Dön
                </button>

                <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                    <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px' }}>
                        <h2 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{selectedMessage.subject}</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', fontSize: '0.9rem' }}>
                            <span>
                                {isSender
                                    ? `Kime: ${selectedMessage.receiver.name} ${selectedMessage.receiver.surname || ''}`
                                    : `Kimden: ${selectedMessage.sender.name} ${selectedMessage.sender.surname || ''}`
                                }
                            </span>
                            <span>{new Date(selectedMessage.createdAt).toLocaleDateString('tr-TR')} {new Date(selectedMessage.createdAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                    </div>

                    {isEditing ? (
                        <div>
                            <textarea
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                style={{ width: '100%', minHeight: '150px', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', fontFamily: 'inherit', marginBottom: '15px' }}
                            />
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    onClick={handleUpdate}
                                    style={{ background: '#27ae60', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                                >
                                    <FaSave /> Kaydet
                                </button>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    style={{ background: '#95a5a6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                                >
                                    <FaTimes /> İptal
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p style={{ lineHeight: '1.6', color: '#444', whiteSpace: 'pre-wrap', fontSize: '1.05rem' }}>
                            {selectedMessage.content}
                        </p>
                    )}

                    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eee', display: 'flex', gap: '15px' }}>
                        {isSender && !isEditing && (
                            <button
                                onClick={() => { setIsEditing(true); setEditContent(selectedMessage.content); }}
                                style={{ background: '#f39c12', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                            >
                                <FaEdit /> Düzenle
                            </button>
                        )}
                        <button
                            onClick={() => handleDelete(selectedMessage._id)}
                            style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                        >
                            <FaTrash /> Sil
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // --- LİSTE GÖRÜNÜMÜ ---
    return (
        <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
            <h1 style={{ marginBottom: '30px', color: '#2c3e50', display: 'flex', alignItems: 'center', gap: '10px' }}>
                ✉️ Mesajlarım
            </h1>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', borderBottom: '1px solid #ddd' }}>
                <button
                    onClick={() => setActiveTab('inbox')}
                    style={{
                        padding: '10px 20px',
                        background: 'none',
                        border: 'none',
                        borderBottom: activeTab === 'inbox' ? '3px solid #005A9C' : '3px solid transparent',
                        color: activeTab === 'inbox' ? '#005A9C' : '#666',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '8px'
                    }}
                >
                    <FaInbox /> Gelen Kutusu ({inboxMessages.length})
                </button>
                <button
                    onClick={() => setActiveTab('sent')}
                    style={{
                        padding: '10px 20px',
                        background: 'none',
                        border: 'none',
                        borderBottom: activeTab === 'sent' ? '3px solid #005A9C' : '3px solid transparent',
                        color: activeTab === 'sent' ? '#005A9C' : '#666',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '8px'
                    }}
                >
                    <FaPaperPlane /> Giden Kutusu ({sentMessages.length})
                </button>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                {displayedMessages.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>
                        {activeTab === 'inbox' ? 'Hiç mesajınız yok.' : 'Henüz hiç mesaj göndermediniz.'}
                    </div>
                ) : (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {displayedMessages.map(msg => (
                            <li
                                key={msg._id}
                                onClick={() => setSelectedMessage(msg)}
                                style={{ borderBottom: '1px solid #eee', padding: '20px', transition: 'background 0.2s', cursor: 'pointer' }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>{msg.subject}</h3>
                                    <span style={{ fontSize: '0.85rem', color: '#999' }}>
                                        {new Date(msg.createdAt).toLocaleDateString('tr-TR')} {new Date(msg.createdAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>
                                    <FaUser />
                                    {activeTab === 'inbox'
                                        ? `Gönderen: ${msg.sender.name} ${msg.sender.surname || ''} (${msg.sender.role})`
                                        : `Alıcı: ${msg.receiver.name} ${msg.receiver.surname || ''} (${msg.receiver.role})`
                                    }
                                </div>
                                <p style={{ margin: 0, color: '#444', lineHeight: '1.5', background: '#f9f9f9', padding: '15px', borderRadius: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {msg.content}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MessagesPage;
