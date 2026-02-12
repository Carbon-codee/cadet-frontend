import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';
import { FaArrowLeft } from 'react-icons/fa';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';

// Helper to extract YouTube ID
const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const LessonPreviewPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { theme } = useTheme();
    const [lesson, setLesson] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-tech-theme');
        } else {
            document.body.classList.remove('dark-tech-theme');
        }
        return () => document.body.classList.remove('dark-tech-theme');
    }, [theme]);

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const res = await API.get(`/study-plan/master-lessons/${slug}`);
                setLesson(res.data);
            } catch (error) {
                console.error("Ders yüklenirken hata:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLesson();
    }, [slug]);

    if (loading) return <div style={{ padding: '2rem', color: theme === 'dark' ? '#fff' : '#1e293b', backgroundColor: theme === 'dark' ? '#02040a' : '#f8fafc', minHeight: '100vh', paddingTop: '100px' }}>Yükleniyor...</div>;
    if (!lesson) return <div style={{ padding: '2rem', color: theme === 'dark' ? '#fff' : '#1e293b', backgroundColor: theme === 'dark' ? '#02040a' : '#f8fafc', minHeight: '100vh', paddingTop: '100px' }}>Ders bulunamadı.</div>;

    const videoId = getYouTubeId(lesson.youtubeUrl);

    // Course Schema for Google
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": lesson.displayTopic || lesson.topic,
        "description": (lesson.content || "").substring(0, 150) + "...",
        "provider": {
            "@type": "Organization",
            "name": "Marine Cadet",
            "sameAs": "https://marinecadet.com"
        }
    };

    return (
        <div style={{ backgroundColor: theme === 'dark' ? 'transparent' : '#f8fafc', minHeight: '100vh', color: theme === 'dark' ? '#fff' : '#1e293b', paddingBottom: '3rem', paddingTop: '80px' }}>
            <SEO
                title={`${lesson.displayTopic || lesson.topic} - Denizcilik Eğitimi`}
                description={(lesson.content || "").substring(0, 160)}
                keywords={`denizcilik, eğitim, ders, ${lesson.topic}, marine cadet`}
                jsonLd={courseSchema}
                ogType="article"
            />
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: theme === 'dark' ? '#00f3ff' : '#64748b',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    <FaArrowLeft /> Geri Dön
                </button>

                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: theme === 'dark' ? '#fff' : '#1e293b', marginBottom: '2rem' }}>
                    {lesson.displayTopic || lesson.topic}
                </h1>

                {/* Video Player */}
                {videoId && (
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '1rem', marginBottom: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube Video"
                            allowFullScreen
                        />
                    </div>
                )}

                {/* Content */}
                <div style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                    boxShadow: theme === 'dark' ? '0 10px 40px rgba(0,0,0,0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    backdropFilter: theme === 'dark' ? 'blur(10px)' : 'none'
                }}>
                    <div className="markdown-body" style={{ color: theme === 'dark' ? '#e2e8f0' : '#334155', lineHeight: '1.8' }}>
                        <ReactMarkdown
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex]}
                        >
                            {lesson.content}
                        </ReactMarkdown>
                    </div>
                </div>

                {/* Questions */}
                <div style={{ marginTop: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: theme === 'dark' ? '#fff' : '#1e293b' }}>
                        Soru Havuzu ({lesson.questions?.length || 0})
                    </h2>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {lesson.questions?.map((q, idx) => (
                            <div key={idx} style={{
                                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
                                padding: '1.5rem',
                                borderRadius: '0.8rem',
                                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                                boxShadow: theme === 'dark' ? '0 5px 20px rgba(0,0,0,0.2)' : '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
                                backdropFilter: theme === 'dark' ? 'blur(10px)' : 'none'
                            }}>
                                <div style={{ fontWeight: '600', marginBottom: '0.8rem', fontSize: '1.1rem', color: theme === 'dark' ? '#fff' : '#1e293b' }}>
                                    {idx + 1}. {q.questionText}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', marginBottom: '1rem' }}>
                                    {q.options?.map((opt, oIdx) => (
                                        <div key={oIdx} style={{
                                            padding: '0.5rem 1rem',
                                            borderRadius: '0.5rem',
                                            backgroundColor: opt === q.correctAnswer ? (theme === 'dark' ? 'rgba(10, 255, 10, 0.1)' : '#f0fdf4') : (theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#f8fafc'),
                                            color: opt === q.correctAnswer ? (theme === 'dark' ? '#0aff0a' : '#16a34a') : (theme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : '#64748b'),
                                            border: opt === q.correctAnswer ? (theme === 'dark' ? '1px solid #0aff0a' : '1px solid #86efac') : (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0')
                                        }}>
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : '#94a3b8' }}>
                                    <span>Zorluk: {q.difficulty}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LessonPreviewPage;
