import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaBookOpen, FaLightbulb, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import API from '../api/axiosConfig';
import './StudySessionPage.css';

const StudySessionPage = () => {
    const { planId, dayNumber } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [moduleData, setModuleData] = useState(null);
    const [mode, setMode] = useState('lecture'); // 'lecture' | 'quiz' | 'result'

    // Quiz State
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetchContent();
    }, [planId, dayNumber]);

    const fetchContent = async () => {
        try {
            setLoading(true);
            const res = await API.get(`/study-plan/${planId}/day/${dayNumber}`);
            setModuleData(res.data);

            // If completed, maybe show result directly or allow review? 
            // For now, let's just load lecture normally.
        } catch (error) {
            console.error("Content load error", error);
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

    const finishQuiz = async () => {
        // Calculate score
        let correct = 0;
        moduleData.questions.forEach((q, idx) => {
            const userAns = answers[idx]?.trim();
            const correctAns = q.correctAnswer?.trim();
            if (userAns && correctAns && userAns === correctAns) {
                correct++;
            }
        });
        setScore(correct);
        setMode('result');

        // Save to backend
        try {
            await API.post('/study-plan/submit', {
                planId,
                dayNumber: parseInt(dayNumber),
                correctCount: correct
            });
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

    // Rendering Helpers
    const renderLectureContent = () => {
        if (!moduleData?.lectureContent) return <p>İçerik yükleniyor...</p>;

        return moduleData.lectureContent.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="session-heading">{line.replace('## ', '')}</motion.h2>;
            if (line.startsWith('### ')) return <motion.h3 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="session-subheading">{line.replace('### ', '')}</motion.h3>;
            if (line.startsWith('- ')) return <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} key={i} className="session-list-item">{line.replace('- ', '')}</motion.li>;
            if (line.startsWith('> ')) return <motion.blockquote initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.05 }} key={i} className="session-quote">{line.replace('> ', '')}</motion.blockquote>;
            if (line.startsWith('**') && line.endsWith('**')) return <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} key={i} className="session-paragraph bold">{line.replace(/\*\*/g, '')}</motion.p>;
            if (line.trim() === '') return <br key={i} />;
            return <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} key={i} className="session-paragraph">{line}</motion.p>;
        });
    };

    if (loading) return <div className="loading-screen">Ders İçeriği Hazırlanıyor...<br /><span style={{ fontSize: '0.9rem', color: '#aaa' }}>Yapay zeka notlarınızı derliyor</span></div>;
    if (!moduleData) return <div className="error-screen">İçerik bulunamadı.</div>;

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

                            <div className="markdown-content">
                                {renderLectureContent()}
                            </div>

                            <button onClick={handleStartQuiz} className="start-quiz-btn">
                                <FaLightbulb /> Teste Başla
                            </button>
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
