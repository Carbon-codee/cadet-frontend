import React, { useEffect, useState } from 'react';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaInbox, FaPaperPlane, FaUser, FaTrash, FaArrowLeft } from 'react-icons/fa';
import './MessagesPage.css';

const MessagesPage = () => {
    const { userInfo } = useAuth();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('inbox'); // 'inbox' or 'sent'
    const [selectedMessage, setSelectedMessage] = useState(null);

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

    if (loading) return <div className="messages-container">Mesajlar yükleniyor...</div>;

    const inboxMessages = messages.filter(m => m.receiver && m.receiver._id === userInfo._id);
    const sentMessages = messages.filter(m => m.sender && m.sender._id === userInfo._id);
    const displayedMessages = activeTab === 'inbox' ? inboxMessages : sentMessages;

    // --- DETAY GÖRÜNÜMÜ ---
    if (selectedMessage) {
        const isSender = selectedMessage.sender._id === userInfo._id;

        return (
            <div className="message-detail-container">
                <button
                    className="back-button"
                    onClick={() => setSelectedMessage(null)}
                >
                    <FaArrowLeft /> Listeye Dön
                </button>

                <div className="message-detail-card">
                    <div className="detail-header">
                        <h2 className="detail-subject">{selectedMessage.subject}</h2>
                        <div className="detail-meta">
                            <span>
                                {isSender
                                    ? `Kime: ${selectedMessage.receiver?.name} ${selectedMessage.receiver?.surname || ''}`
                                    : `Kimden: ${selectedMessage.sender?.name} ${selectedMessage.sender?.surname || ''}`
                                }
                            </span>
                            <span>{new Date(selectedMessage.createdAt).toLocaleDateString('tr-TR')} {new Date(selectedMessage.createdAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                    </div>

                    <p className="detail-content">
                        {selectedMessage.content}
                    </p>

                    <div className="detail-footer">
                        <button
                            className="delete-btn"
                            onClick={() => handleDelete(selectedMessage._id)}
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
        <div className="messages-container">
            <h1 className="messages-title">
                ✉️ Mesajlarım
            </h1>

            <div className="tabs-container">
                <button
                    className={`tab-button ${activeTab === 'inbox' ? 'active' : ''}`}
                    onClick={() => setActiveTab('inbox')}
                >
                    <FaInbox /> Gelen Kutusu ({inboxMessages.length})
                </button>
                <button
                    className={`tab-button ${activeTab === 'sent' ? 'active' : ''}`}
                    onClick={() => setActiveTab('sent')}
                >
                    <FaPaperPlane /> Giden Kutusu ({sentMessages.length})
                </button>
            </div>

            <div className="messages-list-wrapper">
                {displayedMessages.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center', opacity: 0.5 }}>
                        {activeTab === 'inbox' ? 'Hiç mesajınız yok.' : 'Henüz hiç mesaj göndermediniz.'}
                    </div>
                ) : (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {displayedMessages.map(msg => (
                            <li
                                key={msg._id}
                                onClick={() => setSelectedMessage(msg)}
                                className="message-item"
                            >
                                <div className="message-header">
                                    <h3 className="message-subject">{msg.subject}</h3>
                                    <span className="message-date">
                                        {new Date(msg.createdAt).toLocaleDateString('tr-TR')} {new Date(msg.createdAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                                <div className="message-user-info">
                                    <FaUser />
                                    {activeTab === 'inbox'
                                        ? `Gönderen: ${msg.sender?.name} ${msg.sender?.surname || ''} (${msg.sender?.role})`
                                        : `Alıcı: ${msg.receiver?.name} ${msg.receiver?.surname || ''} (${msg.receiver?.role})`
                                    }
                                </div>
                                <p className="message-preview">
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
