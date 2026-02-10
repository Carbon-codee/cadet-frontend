import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaBookOpen, FaLightbulb, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown'; // Markdown renderer
import remarkMath from 'remark-math'; // Math syntax support
import rehypeKatex from 'rehype-katex'; // KaTeX rendering
import remarkGfm from 'remark-gfm'; // Tables and GFM support
import mermaid from 'mermaid'; // Diagram support
import API from '../api/axiosConfig';
import './StudySessionPage.css';

import { useAuth } from '../context/AuthContext'; // Import useAuth

const StudySessionPage = () => {
    const { planId, dayNumber } = useParams();
    const navigate = useNavigate();
    const { updateUser } = useAuth(); // Get updateUser

    const [loading, setLoading] = useState(true);
    const [moduleData, setModuleData] = useState(null);
    const [mode, setMode] = useState('lecture'); // 'lecture' | 'quiz' | 'result'

    // Quiz State
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [earnedXp, setEarnedXp] = useState(0); // Track earned XP for display

    useEffect(() => {
        fetchContent();
    }, [planId, dayNumber]);

    const fetchContent = async () => {
        try {
            setLoading(true);
            const res = await API.get(`/study-plan/${planId}/day/${dayNumber}`);

            // Check if module is locked
            if (res.data.isLocked && res.data.unlockDate) {
                const unlockTime = new Date(res.data.unlockDate);
                const now = new Date();

                if (unlockTime > now) {
                    const timeRemaining = Math.ceil((unlockTime - now) / (1000 * 60 * 60));
                    alert(`Bu ders henüz kilitli! Yaklaşık ${timeRemaining} saat sonra açılacak.\n\nKilit Açılma Zamanı: ${unlockTime.toLocaleString('tr-TR')}`);
                    navigate('/study-plan');
                    return;
                }
            }

            setModuleData(res.data);

            // If completed, maybe show result directly or allow review? 
            // For now, let's just load lecture normally.
        } catch (error) {
            console.error("Content load error", error);
            if (error.response?.status === 403) {
                alert('Bu derse erişim yetkiniz yok.');
                navigate('/study-plan');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleStartQuiz = () => {
        setMode('quiz');
        window.scrollTo(0, 0);
    };

    const handleAnswer = (option) => {
        if (isAnswered) return;
        setAnswers({ ...answers, [currentQuestionIndex]: option });
        setIsAnswered(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < moduleData.questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setIsAnswered(false);
        } else {
            finishQuiz();
        }
    };

    const getYoutubeEmbedUrl = (url) => {
        if (!url) return null;
        // Updated regex to handle more youtube URL variations including watch?v=
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
    };

    const finishQuiz = async () => {
        // Calculate score
        let correct = 0;
        let correctIds = [];

        moduleData.questions.forEach((q, idx) => {
            const userAns = answers[idx]?.trim();
            const correctAns = q.correctAnswer?.trim();
            if (userAns && correctAns && userAns === correctAns) {
                correct++;
                if (q._id) correctIds.push(q._id);
            }
        });
        setScore(correct);
        setMode('result');

        // Save to backend
        try {
            const res = await API.post('/study-plan/submit', {
                planId,
                dayNumber: parseInt(dayNumber),
                correctCount: correct,
                correctQuestionIds: correctIds // Send Detailed Results for Dynamic XP
            });

            // Update local state for display if needed
            if (res.data.gainedXp) {
                setEarnedXp(res.data.gainedXp);
            }

            // CRITICAL: Update Global Auth Context
            // This ensures ProfilePage and Dashboard Sidebar show updated XP immediately
            if (res.data.totalXp) {
                updateUser({ xp: res.data.totalXp });
            }

        } catch (error) {
            console.error("Submit error", error);
        }
    };

    const getOptionClass = (option) => {
        if (!isAnswered) return '';
        const currentQ = moduleData.questions[currentQuestionIndex];
        const safeOption = option.trim();
        const safeCorrect = currentQ.correctAnswer.trim();
        const safeAnswer = answers[currentQuestionIndex]?.trim();

        if (safeOption === safeCorrect) return 'correct';
        if (safeAnswer === safeOption) return 'incorrect';
        return '';
    };

    // Initialize Mermaid
    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            fontFamily: 'Inter, sans-serif'
        });
    }, []);

    const Mermaid = ({ chart }) => {
        const [svg, setSvg] = useState('');

        useEffect(() => {
            const renderChart = async () => {
                try {
                    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                    const { svg } = await mermaid.render(id, chart);
                    setSvg(svg);
                } catch (error) {
                    console.error('Mermaid render error:', error);
                    setSvg('<p style="color:red">Grafik oluşturulamadı</p>');
                }
            };
            if (chart) renderChart();
        }, [chart]);

        return <div className="mermaid" dangerouslySetInnerHTML={{ __html: svg }} />;
    };

    // Rendering Helpers - Using ReactMarkdown for LaTeX Support & Mermaid
    const renderLectureContent = () => {
        if (!moduleData?.lectureContent) return <p>İçerik yükleniyor...</p>;

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="markdown-body"
            >
                <ReactMarkdown
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            if (!inline && match && match[1] === 'mermaid') {
                                return <Mermaid chart={String(children).replace(/\n$/, '')} />;
                            }
                            return !inline && match ? (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    }}
                >
                    {moduleData.lectureContent}
                </ReactMarkdown>
            </motion.div>
        );
    };

    if (loading) return <div className="loading-screen">Ders İçeriği Hazırlanıyor...<br /><span style={{ fontSize: '0.9rem', color: '#aaa' }}>Yapay zeka notlarınızı derliyor</span></div>;
    if (!moduleData) return <div className="error-screen">İçerik bulunamadı.</div>;

    const embedUrl = getYoutubeEmbedUrl(moduleData.youtubeUrl);

    return (
        <div className="study-session-page">
            <nav className="session-nav">
                <button onClick={() => navigate('/study-plan')} className="back-btn">
                    <FaArrowLeft /> Dashboard'a Dön
                </button>
                <div className="session-title">
                    Gün {dayNumber}: {moduleData.topic}
                </div>
                <div className="session-progress">
                    {mode === 'quiz' ? `Soru ${currentQuestionIndex + 1} / ${moduleData.questions.length}` : 'Konu Anlatımı'}
                </div>
            </nav>

            <main className="session-content">
                <AnimatePresence mode="wait">
                    {mode === 'lecture' && (
                        <motion.div
                            key="lecture"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="lecture-wrapper"
                        >
                            <div className="lecture-header">
                                <FaBookOpen className="icon-lg" />
                                <h1>Bugünün Konusu</h1>
                                <p>Aşağıdaki notları dikkatlice okuyun ve hazır hissettiğinizde teste geçin.</p>
                            </div>

                            {/* YouTube Integration */}
                            {embedUrl && (
                                <div className="video-container" style={{ marginBottom: "1rem", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src={embedUrl}
                                        title="Ders Videosu"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}



                            <div className="markdown-content">
                                {renderLectureContent()}
                            </div>

                            {/* Conditional Button based on completion status */}
                            {!moduleData.isCompleted ? (
                                <button onClick={handleStartQuiz} className="start-quiz-btn">
                                    <FaLightbulb /> Teste Başla
                                </button>
                            ) : (
                                <div className="completed-notice" style={{
                                    marginTop: '2rem', padding: '1rem', background: '#ecfdf5',
                                    border: '1px solid #10b981', borderRadius: '12px', color: '#047857',
                                    fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                                }}>
                                    <FaCheckCircle /> Bu modülü başarıyla tamamladınız.
                                </div>
                            )}
                        </motion.div>
                    )}

                    {mode === 'quiz' && (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="quiz-wrapper"
                        >
                            <div className="quiz-question-card">
                                <h2>Soru {currentQuestionIndex + 1}</h2>
                                <p className="question-text">{moduleData.questions[currentQuestionIndex].questionText}</p>

                                <div className="options-grid">
                                    {moduleData.questions[currentQuestionIndex].options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(opt)}
                                            className={`quiz-option ${getOptionClass(opt)} ${answers[currentQuestionIndex] === opt ? 'selected' : ''}`}
                                            disabled={isAnswered}
                                        >
                                            <span className="opt-letter">{['A', 'B', 'C', 'D'][idx]}</span>
                                            {opt}
                                            {getOptionClass(opt) === 'correct' && <FaCheckCircle className="status-icon" />}
                                            {getOptionClass(opt) === 'incorrect' && <FaTimesCircle className="status-icon" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="quiz-controls">
                                <button
                                    onClick={handleNextQuestion}
                                    className="next-q-btn"
                                    disabled={!isAnswered}
                                >
                                    {currentQuestionIndex < moduleData.questions.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {mode === 'result' && (
                        <motion.div
                            key="result"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="result-wrapper"
                        >
                            <div className="result-card">
                                <FaCheckCircle className="result-icon success" />
                                <h1>Tebrikler!</h1>
                                <p>Bugünün eğitimini tamamladınız.</p>

                                <div className="score-box">
                                    <span className="score-val">{score}</span>
                                    <span className="score-total">/ {moduleData.questions.length}</span>
                                </div>

                                <p className="xp-gain">+{score * 5} XP Kazandınız</p>

                                <button onClick={() => navigate('/study-plan')} className="finish-btn">
                                    Çalışma Programına Dön
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default StudySessionPage;
