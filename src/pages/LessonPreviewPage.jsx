import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';
import { FaArrowLeft } from 'react-icons/fa';

// Helper to extract YouTube ID
const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const LessonPreviewPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [lesson, setLesson] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const res = await API.get(`/study-plan/master-lessons/${id}`);
                setLesson(res.data);
            } catch (error) {
                console.error("Ders yüklenirken hata:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLesson();
    }, [id]);

    if (loading) return <div style={{ padding: '2rem', color: '#1e293b', backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '100px' }}>Yükleniyor...</div>;
    if (!lesson) return <div style={{ padding: '2rem', color: '#1e293b', backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '100px' }}>Ders bulunamadı.</div>;

    const videoId = getYouTubeId(lesson.youtubeUrl);

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b', paddingBottom: '3rem', paddingTop: '80px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#64748b',
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

                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '2rem' }}>
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
                <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                    <div className="markdown-body" style={{ color: '#334155', lineHeight: '1.8' }}>
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
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e293b' }}>
                        Soru Havuzu ({lesson.questions?.length || 0})
                    </h2>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {lesson.questions?.map((q, idx) => (
                            <div key={idx} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.8rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
                                <div style={{ fontWeight: '600', marginBottom: '0.8rem', fontSize: '1.1rem', color: '#1e293b' }}>
                                    {idx + 1}. {q.questionText}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', marginBottom: '1rem' }}>
                                    {q.options?.map((opt, oIdx) => (
                                        <div key={oIdx} style={{
                                            padding: '0.5rem 1rem',
                                            borderRadius: '0.5rem',
                                            backgroundColor: opt === q.correctAnswer ? '#f0fdf4' : '#f8fafc',
                                            color: opt === q.correctAnswer ? '#16a34a' : '#64748b',
                                            border: opt === q.correctAnswer ? '1px solid #86efac' : '1px solid #e2e8f0'
                                        }}>
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#94a3b8' }}>
                                    <span>Zorluk: {q.difficulty}</span>
                                    {/* <span>Türü: {q.type}</span> */}
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
