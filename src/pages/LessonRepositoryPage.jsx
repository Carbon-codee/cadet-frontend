import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaBook, FaSearch, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';


const LessonRepositoryPage = () => {
    const [lessons, setLessons] = useState([]);
    const [filteredLessons, setFilteredLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    // Auth context might be used later for role checks, keeping it for now
    const { user } = useAuth();
    const { theme } = useTheme();
    const navigate = useNavigate();

    // Theme-aware styles
    const pageStyle = {
        padding: '2rem',
        backgroundColor: theme === 'dark' ? 'transparent' : '#f8fafc',
        minHeight: '100vh',
        color: theme === 'dark' ? '#fff' : '#1e293b',
        paddingTop: '100px'
    };

    const cardStyle = {
        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
        backdropFilter: theme === 'dark' ? 'blur(10px)' : 'none',
        padding: '1.5rem',
        borderRadius: '1rem',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
        boxShadow: theme === 'dark' ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-tech-theme');
        } else {
            document.body.classList.remove('dark-tech-theme');
        }
        return () => document.body.classList.remove('dark-tech-theme');
    }, [theme]);

    useEffect(() => {
        fetchLessons();
    }, []);

    useEffect(() => {
        if (!search) {
            setFilteredLessons(lessons);
        } else {
            const lowerSearch = search.toLowerCase();
            setFilteredLessons(lessons.filter(l =>
                l.topic.toLowerCase().includes(lowerSearch) ||
                l.displayTopic.toLowerCase().includes(lowerSearch)
            ));
        }
    }, [search, lessons]);

    const fetchLessons = async () => {
        try {
            setLoading(true);
            const res = await API.get('/study-plan/master-lessons');
            setLessons(res.data);
            setFilteredLessons(res.data);
        } catch (error) {
            console.error("Error fetching lessons:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleView = (lesson) => {
        const pathPrefix = window.location.pathname.startsWith('/admin') ? '/admin/lessons' : '/lessons';
        navigate(`${pathPrefix}/${lesson.slug || lesson._id}`);
    };

    if (loading) return <div style={pageStyle}>Yükleniyor...</div>;

    return (
        <div style={pageStyle}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', color: theme === 'dark' ? '#fff' : '#1e293b' }}>
                        <FaBook style={{ color: theme === 'dark' ? '#00f3ff' : '#3b82f6' }} />
                        Eğitim İçerik Havuzu
                    </h1>
                    <span style={{ backgroundColor: theme === 'dark' ? 'rgba(0, 180, 216, 0.2)' : '#3b82f6', color: theme === 'dark' ? '#00f3ff' : '#fff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', border: theme === 'dark' ? '1px solid #00f3ff' : 'none' }}>
                        Toplam {lessons.length} Ders
                    </span>
                </div>

                <div style={{ position: 'relative', marginBottom: '2rem' }}>
                    <FaSearch style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: theme === 'dark' ? '#00f3ff' : '#94a3b8' }} />
                    <input
                        type="text"
                        placeholder="Ders ara (Konu başlığı)..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem 1rem 1rem 3rem',
                            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                            border: theme === 'dark' ? '1px solid rgba(0, 243, 255, 0.2)' : '1px solid #e2e8f0',
                            borderRadius: '0.5rem',
                            color: theme === 'dark' ? '#fff' : '#1e293b',
                            fontSize: '1rem',
                            boxShadow: theme === 'dark' ? '0 0 15px rgba(0, 243, 255, 0.1)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                            outline: 'none'
                        }}
                    />
                </div>

                <div className="lessons-list">
                    {filteredLessons.map((lesson) => (
                        <motion.div
                            key={lesson._id}
                            style={cardStyle}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={() => handleView(lesson)}
                            whileHover={{ scale: 1.01, borderColor: '#3b82f6', cursor: 'pointer' }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: theme === 'dark' ? '#fff' : '#1e293b', marginBottom: '0.5rem' }}>
                                    {lesson.displayTopic || lesson.topic}
                                </h3>
                                <p style={{ color: theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : '#64748b', fontSize: '0.9rem' }}>
                                    Son Güncelleme: {new Date(lesson.lastUpdated).toLocaleDateString('tr-TR')}
                                </p>
                                <div style={{ marginTop: '0.5rem', display: 'flex', gap: '10px' }}>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        backgroundColor: theme === 'dark' ? 'rgba(0, 243, 255, 0.1)' : '#f1f5f9',
                                        padding: '2px 8px',
                                        borderRadius: '4px',
                                        color: theme === 'dark' ? '#00f3ff' : '#475569',
                                        border: theme === 'dark' ? '1px solid rgba(0, 243, 255, 0.2)' : '1px solid #e2e8f0'
                                    }}>
                                        {lesson.questions?.length || 0} Soru
                                    </span>
                                    {lesson.youtubeUrl && (
                                        <span style={{
                                            fontSize: '0.8rem',
                                            backgroundColor: theme === 'dark' ? 'rgba(255, 10, 70, 0.1)' : '#fee2e2',
                                            padding: '2px 8px',
                                            borderRadius: '4px',
                                            color: theme === 'dark' ? '#ff0a46' : '#ef4444',
                                            border: theme === 'dark' ? '1px solid rgba(255, 10, 70, 0.2)' : '1px solid #fecaca'
                                        }}>
                                            YouTube
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleView(lesson);
                                    }}
                                    style={{
                                        padding: '0.8rem',
                                        backgroundColor: '#3b82f6',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        color: 'white',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
                                    }}>
                                    <FaEye color="white" />
                                </button>
                            </div>
                        </motion.div>
                    ))}

                    {filteredLessons.length === 0 && (
                        <div style={{ textAlign: 'center', color: '#64748b', marginTop: '3rem' }}>
                            Aradığınız kriterde ders bulunamadı.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonRepositoryPage;
