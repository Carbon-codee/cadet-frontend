import React, { useState, useEffect } from 'react';
import { FaCheck, FaLock, FaRocket } from 'react-icons/fa';

const LessonCard = ({ plan, module, isLocked, isCompleted, onUnlock, onClick }) => {
    const [timeLeft, setTimeLeft] = useState(null);

    // Timer Effect for Auto-Unlock
    useEffect(() => {
        if (module.lockReason === "TIME_LOCKED" && module.unlockDate) {
            const unlockTime = new Date(module.unlockDate).getTime();

            const checkTime = () => {
                const now = new Date().getTime();
                const distance = unlockTime - now;

                if (distance <= 0) {
                    // Time is up!
                    if (onUnlock) onUnlock();
                } else {
                    setTimeLeft(distance);
                }
            };

            // Check immediately
            checkTime();

            // Set interval
            const timer = setInterval(checkTime, 1000 * 60); // Check every minute to start

            // If less than 1 hour, check every second for precision
            // But for performance, let's just stick to 1 minute or 10 seconds?
            // User requested "Counter finishes", implying a visible counter.
            // Our tooltip is dynamic. Let's precise update.
            const preciseTimer = setInterval(checkTime, 1000);

            return () => {
                clearInterval(timer);
                clearInterval(preciseTimer);
            };
        }
    }, [module, onUnlock]);

    // Format Time for Tooltip
    const getFormattedTimeLeft = () => {
        if (!timeLeft) return "Hesaplanıyor...";
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        return `${hours}s ${minutes}dk ${seconds}sn`;
    };

    return (
        <div
            className={`lesson-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`}
            onClick={onClick}
            style={{ '--bg-logo': `url(${plan.targetCompany?.logo || ''})` }}
        >
            {/* TOOLTIP FOR LOCKED STATE */}
            {isLocked && (
                <div className="locked-tooltip">
                    <div className="tooltip-content">
                        <FaLock className="lock-icon" />
                        {module.lockReason === "PREV_INCOMPLETE" ? (
                            <span>Önce bir önceki günün görevlerini tamamlamalısın.</span>
                        ) : module.lockReason === "TIME_LOCKED" && module.unlockDate ? (
                            <div>
                                <strong>Dinlenme Modu! 🛑</strong>
                                <p>Bu ders {new Date(module.unlockDate).toLocaleString('tr-TR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })} itibariyle erişime açılacaktır.</p>
                                <small>
                                    (Kalan Süre: {getFormattedTimeLeft()})
                                </small>
                            </div>
                        ) : (
                            <span>Bu ders şu an kilitli.</span>
                        )}
                    </div>
                </div>
            )}

            <div className="card-inner">
                <div className="card-top">
                    <span className="plan-badge">
                        {plan.targetCompany?.name?.substring(0, 10) || 'GENEL'}
                    </span>
                    {isCompleted ? <FaCheck className="status-icon check" /> :
                        isLocked ? <FaLock className="status-icon lock" /> : <FaRocket style={{ color: 'var(--neon-cyan)' }} />}
                </div>

                <div className="card-title">
                    {module.topic}
                </div>

                {isCompleted && <div className="completion-watermark">TAMAMLANDI</div>}
            </div>
        </div>
    );
};

export default LessonCard;
