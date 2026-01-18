import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { soruHavuzu, lectureData } from '../data/gasmData'; // Veriyi buradan çekiyoruz
import './GasmPage.css';

const GasmPage = () => {
    // State'ler
    const [activeScreen, setActiveScreen] = useState('start'); // start, pre-start, quiz, study, lecture, result
    const [currentSubject, setCurrentSubject] = useState('');

    // Quiz Modu
    const [testQuestions, setTestQuestions] = useState([]);
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState(3600);
    const [timerActive, setTimerActive] = useState(false);

    // Çalışma Modu
    const [studyQuestions, setStudyQuestions] = useState([]);
    const [currentStudyIndex, setCurrentStudyIndex] = useState(0);
    const [studyAnswerState, setStudyAnswerState] = useState(null); // null, correct, wrong

    const charMap = ["A", "B", "C", "D", "E"];

    // Zamanlayıcı
    useEffect(() => {
        let interval = null;
        if (timerActive && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining(prev => prev - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            finishTest();
        }
        return () => clearInterval(interval);
    }, [timerActive, timeRemaining]);

    // Format Timer (00:00)
    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // --- NAVIGASYON ---
    const handleSubjectSelect = (subject) => {
        setCurrentSubject(subject);
        setActiveScreen('pre-start');
    };

    // --- SINAV MODU FONKSİYONLARI ---
    const startActualQuiz = () => {
        const all = soruHavuzu[currentSubject] || [];
        if (all.length === 0) return alert("Soru bulunamadı!");

        // Rastgele 20 soru seç
        const shuffled = [...all].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 20);

        setTestQuestions(selected);
        setUserAnswers(new Array(20).fill(null));
        setCurrentQIndex(0);
        setTimeRemaining(3600);
        setTimerActive(true);
        setActiveScreen('quiz');
    };

    const handleAnswerClick = (optionIndex) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQIndex] = optionIndex;
        setUserAnswers(newAnswers);
    };

    const finishTest = () => {
        setTimerActive(false);
        setActiveScreen('result');
    };

    // --- ÇALIŞMA MODU FONKSİYONLARI ---
    const openStudyMode = () => {
        const all = soruHavuzu[currentSubject] || [];
        if (all.length === 0) return alert("Soru bulunamadı!");

        setStudyQuestions(all);
        setCurrentStudyIndex(0);
        setStudyAnswerState(null); // Cevabı sıfırla
        setActiveScreen('study');
    };

    const handleStudyAnswer = (idx) => {
        if (studyAnswerState !== null) return; // Zaten cevaplandıysa dur
        const correct = studyQuestions[currentStudyIndex].answer;
        setStudyAnswerState(idx === correct ? 'correct' : 'wrong');
    };

    const nextStudyQuestion = () => {
        if (currentStudyIndex < studyQuestions.length - 1) {
            setCurrentStudyIndex(prev => prev + 1);
            setStudyAnswerState(null);
        }
    };

    // --- RENDER ---
    return (
        <div className="gasm-wrapper">
            {/* Navigasyon */}
            <div className="subject-menu">
                <Link to="/learning" style={{ textDecoration: 'none', color: '#555', fontWeight: 'bold', marginRight: '20px' }}>← Geri Dön</Link>
                {Object.keys(soruHavuzu).map(sub => (
                    <button
                        key={sub}
                        className={`subject-btn ${currentSubject === sub ? 'active' : ''}`}
                        onClick={() => handleSubjectSelect(sub)}
                    >
                        {sub}
                    </button>
                ))}
            </div>

            <div className="gasm-container">

                {/* 1. START EKRANI */}
                {activeScreen === 'start' && (
                    <div className="hero-section">
                        <span className="hero-icon">🚢</span>
                        <h1 className="hero-title">GASM Sınav Hazırlık</h1>
                        <p>Denizcilik sınavlarına (GOSS) hazırlık için testler, çalışma modları ve notlar.</p>

                        <div className="features-grid">
                            <div className="feature-card"><h3>⏱️ Sınav Modu</h3><p>20 soruluk deneme sınavı.</p></div>
                            <div className="feature-card"><h3>📖 Soru Bankası</h3><p>Tüm soruları gör ve çalış.</p></div>
                            <div className="feature-card"><h3>📚 Ders Notları</h3><p>Konu özetleri.</p></div>
                        </div>
                        <p style={{ textAlign: 'center', color: '#008080' }}>Başlamak için yukarıdan bir ders seçin ☝️</p>
                    </div>
                )}

                {/* 2. DERS SEÇİM EKRANI */}
                {activeScreen === 'pre-start' && (
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{currentSubject}</h2>
                        <div className="mode-selection">
                            <button className="big-btn" onClick={startActualQuiz}><span>⏱️</span> Sınavı Başlat</button>
                            <button className="big-btn study-btn" onClick={openStudyMode}><span>📖</span> Çalışma Modu</button>
                            <button className="big-btn lecture-btn" onClick={() => setActiveScreen('lecture')}><span>📚</span> Ders Notları</button>
                        </div>
                    </div>
                )}

                {/* 3. QUIZ EKRANI */}
                {activeScreen === 'quiz' && (
                    <div>
                        <div className="timer-container">
                            <small>KALAN SÜRE</small>
                            <span id="timer-text">{formatTime(timeRemaining)}</span>
                            <small>Soru {currentQIndex + 1} / 20</small>
                        </div>
                        <div className="question-text">{testQuestions[currentQIndex].q}</div>
                        <div className="options-grid">
                            {testQuestions[currentQIndex].options.map((opt, idx) => (
                                <div
                                    key={idx}
                                    className={`option-btn ${userAnswers[currentQIndex] === idx ? 'selected' : ''}`}
                                    onClick={() => handleAnswerClick(idx)}
                                >
                                    <span className="opt-char">{charMap[idx]}</span> {opt}
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                            <button className="subject-btn" onClick={() => currentQIndex > 0 && setCurrentQIndex(prev => prev - 1)}>Önceki</button>
                            {currentQIndex === 19 ? (
                                <button className="big-btn finish-btn" onClick={finishTest} style={{ width: 'auto' }}>SINAVI BİTİR</button>
                            ) : (
                                <button className="big-btn" onClick={() => setCurrentQIndex(prev => prev + 1)} style={{ width: 'auto' }}>Sonraki</button>
                            )}
                        </div>
                    </div>
                )}

                {/* 4. ÇALIŞMA MODU EKRANI */}
                {activeScreen === 'study' && (
                    <div>
                        <div style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold', color: '#008080' }}>
                            Soru {currentStudyIndex + 1} / {studyQuestions.length}
                        </div>
                        <div className="scrollable-content">
                            <div className="question-text">{studyQuestions[currentStudyIndex].q}</div>
                            <div className="options-grid">
                                {studyQuestions[currentStudyIndex].options.map((opt, idx) => {
                                    let btnClass = "option-btn";
                                    if (studyAnswerState) {
                                        if (idx === studyQuestions[currentStudyIndex].answer) btnClass += " study-correct";
                                        else if (studyAnswerState === 'wrong' && idx !== studyQuestions[currentStudyIndex].answer) btnClass += " study-wrong";
                                    }
                                    return (
                                        <div key={idx} className={btnClass} onClick={() => handleStudyAnswer(idx)}>
                                            <span className="opt-char">{charMap[idx]}</span> {opt}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button className="subject-btn" onClick={() => setActiveScreen('pre-start')}>Çıkış</button>
                            <button className="big-btn" onClick={nextStudyQuestion} style={{ width: 'auto' }}>Sonraki</button>
                        </div>
                    </div>
                )}

                {/* 5. DERS NOTLARI */}
                {activeScreen === 'lecture' && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                            <h3>{currentSubject} Notları</h3>
                            <button className="subject-btn" onClick={() => setActiveScreen('pre-start')}>Kapat</button>
                        </div>
                        <div
                            className="scrollable-content"
                            dangerouslySetInnerHTML={{ __html: lectureData[currentSubject] || "<p>İçerik yok.</p>" }}
                        ></div>
                    </div>
                )}

                {/* 6. SONUÇ EKRANI */}
                {activeScreen === 'result' && (
                    <div style={{ textAlign: 'center' }}>
                        <h2>Sınav Bitti</h2>
                        <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#008080', margin: '20px 0' }}>
                            {testQuestions.filter((q, i) => userAnswers[i] === q.answer).length} / 20
                        </div>
                        <div className="scrollable-content" style={{ textAlign: 'left' }}>
                            {testQuestions.map((q, i) => (
                                <div key={i} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #eee', borderRadius: '10px' }}>
                                    <strong>Soru {i + 1}:</strong> {q.q} <br />
                                    <span style={{ color: userAnswers[i] === q.answer ? 'green' : 'red' }}>
                                        Sizin Cevabınız: {userAnswers[i] !== null ? charMap[userAnswers[i]] : 'Boş'}
                                        {userAnswers[i] === q.answer ? ' (Doğru)' : ` - Doğru: ${charMap[q.answer]}`}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button className="big-btn" onClick={() => setActiveScreen('start')}>Ana Menüye Dön</button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default GasmPage;