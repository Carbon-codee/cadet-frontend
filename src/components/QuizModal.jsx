import React, { useState } from 'react';
import { FaTimes, FaCheck, FaBookOpen, FaArrowRight } from 'react-icons/fa';
import API from '../api/axiosConfig';
import './QuizModal.css';

const QuizModal = ({ planId, day, onClose, onComplete }) => {
    // Modes: 'lecture' | 'quiz' | 'result'
    const [viewMode, setViewMode] = useState('lecture');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);

    const [isAnswered, setIsAnswered] = useState(false);

    const questions = day.questions;
    const currentQuestion = questions[currentQuestionIndex];

    const startQuiz = () => {
        setViewMode('quiz');
    };

    const handleAnswer = (option) => {
        if (isAnswered) return; // Prevent changing answer
        setAnswers({ ...answers, [currentQuestionIndex]: option });
        setIsAnswered(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsAnswered(false); // Reset for next question
        } else {
            calculateResults();
        }
    };

    const getOptionClass = (option) => {
        if (!isAnswered) return '';
        const safeOption = option ? option.trim() : '';
        const safeCorrect = currentQuestion.correctAnswer ? currentQuestion.correctAnswer.trim() : '';
        const safeAnswer = answers[currentQuestionIndex] ? answers[currentQuestionIndex].trim() : '';

        if (safeOption === safeCorrect) return 'correct';
        if (safeAnswer === safeOption) return 'incorrect';
        return '';
    };

    const calculateResults = async () => {
        let correctCount = 0;
        let correctIds = [];

        questions.forEach((q, index) => {
            const userAnswer = answers[index];
            if (userAnswer && q.correctAnswer && userAnswer.trim() === q.correctAnswer.trim()) {
                correctCount++;
                if (q._id) correctIds.push(q._id);
            }
        });
        setScore(correctCount);

        // API call to save results BEFORE showing result screen
        try {
            const response = await API.post('/study-plan/submit', {
                planId,
                dayNumber: day.dayNumber,
                correctCount,
                correctQuestionIds: correctIds
            });

            // Check if passed
            if (response.data.passed) {
                setViewMode('result');
                // Optionally show unlock time
                if (response.data.nextDayUnlockTime) {
                    const unlockTime = new Date(response.data.nextDayUnlockTime);
                    console.log(`Next day unlocks at: ${unlockTime.toLocaleString('tr-TR')}`);
                }
            } else {
                // Test failed
                alert(response.data.message || 'Test başarısız! Lütfen tekrar deneyin.');
                onClose(); // Close modal to allow retry
            }
        } catch (error) {
            console.error("Error submitting quiz", error);
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
                onClose(); // Close modal on error to allow retry
            } else {
                // Fallback: show result anyway if API error
                setViewMode('result');
            }
        }
    };

    // Helper to render markdown-like simple text
    const renderContent = (text) => {
        if (!text) return <p>İçerik yükleniyor...</p>;
        return text.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <h3 key={i} className="content-heading">{line.replace('## ', '')}</h3>;
            if (line.startsWith('- ')) return <li key={i} className="content-list-item">{line.replace('- ', '')}</li>;
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} className="content-paragraph">{line}</p>;
        });
    };

    const getYoutubeEmbedUrl = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
    };

    const embedUrl = getYoutubeEmbedUrl(day.youtubeUrl);

    return (
        <div className="quiz-modal-overlay">
            <div className="quiz-modal-content">
                <div className="quiz-header">
                    <h2 className="quiz-title">
                        {viewMode === 'lecture' ? 'Konu Anlatımı' : `Gün ${day.dayNumber} - Test`}
                    </h2>
                    <button onClick={onClose} className="close-btn">
                        <FaTimes />
                    </button>
                </div>

                <div className="quiz-body">
                    {viewMode === 'lecture' && (
                        <div className="lecture-container">
                            <div className="lecture-icon-wrapper">
                                <FaBookOpen className="lecture-icon" />
                                <span>Tahmini Okuma Süresi: 5 dk</span>
                            </div>

                            {embedUrl && (
                                <div className="video-wrapper-modal" style={{ marginBottom: "1rem", borderRadius: "8px", overflow: "hidden" }}>
                                    <iframe
                                        width="100%"
                                        height="250"
                                        src={embedUrl}
                                        title="Ders Videosu"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}

                            <div className="lecture-content-scroll">
                                {renderContent(day.lectureContent || "Bu konu için içerik hazırlanmamış.")}
                            </div>

                            <div className="quiz-footer">
                                <button onClick={startQuiz} className="next-btn flex-btn">
                                    Konuyu Çalıştım, Teste Başla <FaArrowRight style={{ marginLeft: '8px' }} />
                                </button>
                            </div>
                        </div>
                    )}

                    {viewMode === 'quiz' && (
                        <>
                            <div className="quiz-progress">
                                <div className="progress-info">
                                    <span>Soru {currentQuestionIndex + 1} / {questions.length}</span>
                                    <span>{Math.round(((currentQuestionIndex) / questions.length) * 100)}% Tamamlandı</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div
                                        className="progress-bar-fill"
                                        style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <h3 className="question-text">
                                {currentQuestion.questionText}
                            </h3>

                            <div className="options-list">
                                {currentQuestion.options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(option)}
                                        className={`option-btn ${getOptionClass(option)} ${answers[currentQuestionIndex] === option ? 'selected' : ''}`}
                                        disabled={isAnswered}
                                    >
                                        <span>{option}</span>
                                        {answers[currentQuestionIndex] === option && <div className="selection-dot"></div>}
                                    </button>
                                ))}
                            </div>

                            <div className="quiz-footer">
                                <button
                                    onClick={nextQuestion}
                                    disabled={!answers[currentQuestionIndex]}
                                    className="next-btn"
                                >
                                    {currentQuestionIndex === questions.length - 1 ? 'Testi Bitir' : 'Sonraki Soru'}
                                </button>
                            </div>
                        </>
                    )}

                    {viewMode === 'result' && (
                        <div className="results-container">
                            <div className="success-icon">
                                <FaCheck />
                            </div>
                            <h3 className="results-title">Tebrikler!</h3>
                            <p className="results-desc">
                                Bugünü tamamladın. {score} doğru cevap verdin.
                            </p>
                            <button
                                onClick={onComplete}
                                className="return-btn"
                            >
                                Dashboard'a Dön
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizModal;
