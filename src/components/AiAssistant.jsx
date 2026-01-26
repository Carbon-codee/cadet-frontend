import React, { useState } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import { GiShipWheel } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import './AiAssistant.css';

const AiAssistant = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    // Load from local storage or default
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('ai_chat_history');
        return saved ? JSON.parse(saved) : [
            { role: 'assistant', text: 'Merhaba! Ben Kaptan AI. Rotanızı belirlemenize yardımcı olmaya hazırım. ⚓' }
        ];
    });

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    // Persist messages
    React.useEffect(() => {
        localStorage.setItem('ai_chat_history', JSON.stringify(messages));
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setLoading(true);

        try {
            const res = await API.post('/study-plan/chat', { message: userMsg });
            setMessages(prev => [...prev, { role: 'assistant', text: res.data.reply }]);
        } catch (error) {
            console.error(error);
            let errorMsg = 'Üzgünüm, şu an bağlantı kuramıyorum.';
            if (error.response && error.response.data && error.response.data.message) {
                errorMsg += ` (${error.response.data.message})`;
            }
            setMessages(prev => [...prev, { role: 'assistant', text: errorMsg }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ai-assistant-container">
            {!isOpen && (
                <button className="ai-launcher" onClick={() => setIsOpen(true)}>
                    <GiShipWheel style={{ fontSize: '2.5rem' }} className="rotating-icon" />
                    <span className="notification-badge">1</span>
                </button>
            )}

            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <GiShipWheel style={{ fontSize: '1.8rem' }} />
                            <span>Kaptan AI</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, i) => (
                            <div key={i} className={`message ${msg.role}`}>
                                {msg.text.split(/(\[.*?\]\(.*?\))/g).map((part, idx) => {
                                    // Match [Text](Link)
                                    const match = part.match(/\[(.*?)\]\((.*?)\)/);
                                    if (match) {
                                        return (
                                            <button
                                                key={idx}
                                                className="chat-action-btn"
                                                type="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    const url = match[2].trim();
                                                    console.log("Navigating to:", url);
                                                    if (url.startsWith('/')) {
                                                        navigate(url);
                                                    } else {
                                                        window.open(url, '_blank');
                                                    }
                                                }}
                                            >
                                                {match[1]}
                                            </button>
                                        );
                                    }
                                    return part;
                                })}
                            </div>
                        ))}
                        {loading && <div className="message assistant">Yazıyor...</div>}
                    </div>
                    <form className="chat-input-area" onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Bir soru sor..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit" disabled={loading}>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AiAssistant;
