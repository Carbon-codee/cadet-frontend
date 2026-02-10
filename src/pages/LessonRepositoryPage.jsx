import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaBook, FaSearch, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Simple styling here, can move to CSS file later
// Light theme styling
const pageStyle = {
    padding: '2rem',
    backgroundColor: '#f8fafc', // Light background
    minHeight: '100vh',
    color: '#1e293b', // Dark text
    paddingTop: '100px'
};

const cardStyle = {
    backgroundColor: '#ffffff', // White card
    padding: '1.5rem',
    borderRadius: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #e2e8f0', // Light border
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)' // Soft shadow
};

const LessonRepositoryPage = () => {
    const [lessons, setLessons] = useState([]);
    const [filteredLessons, setFilteredLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    // Auth context might be used later for role checks, keeping it for now
    const { user } = useAuth();
    const navigate = useNavigate();

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
        navigate(`/admin/lessons/${lesson._id}`);
    };

    if (loading) return <div style={pageStyle}>Yükleniyor...</div>;

    return (
        <div style={pageStyle}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        <FaBook style={{ marginRight: '10px' }} />
                        Eğitim İçerik Havuzu
                    </h1>
                    <span style={{ backgroundColor: '#3b82f6', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                        Toplam {lessons.length} Ders
                    </span>
                </div>

                <div style={{ position: 'relative', marginBottom: '2rem' }}>
                    <FaSearch style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input
                        type="text"
                        placeholder="Ders ara (Konu başlığı)..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem 1rem 1rem 3rem',
                            backgroundColor: '#ffffff',
                            border: '1px solid #e2e8f0',
                            borderRadius: '0.5rem',
                            color: '#1e293b',
                            fontSize: '1rem',
                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
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
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                                    {lesson.displayTopic || lesson.topic}
                                </h3>
                                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                                    Son Güncelleme: {new Date(lesson.lastUpdated).toLocaleDateString('tr-TR')}
                                </p>
                                <div style={{ marginTop: '0.5rem', display: 'flex', gap: '10px' }}>
                                    <span style={{ fontSize: '0.8rem', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', color: '#475569', border: '1px solid #e2e8f0' }}>
                                        {lesson.questions?.length || 0} Soru
                                    </span>
                                    {lesson.youtubeUrl && (
                                        <span style={{ fontSize: '0.8rem', backgroundColor: '#fee2e2', padding: '2px 8px', borderRadius: '4px', color: '#ef4444', border: '1px solid #fecaca' }}>
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
