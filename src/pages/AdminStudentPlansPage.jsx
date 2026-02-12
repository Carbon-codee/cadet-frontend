import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import { FaTrash, FaUser, FaBuilding, FaCalendar, FaChartLine } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const AdminStudentPlansPage = () => {
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
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    // ... (useEffect and fetchPlans remain same)
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-tech-theme');
        } else {
            document.body.classList.remove('dark-tech-theme');
        }
        return () => document.body.classList.remove('dark-tech-theme');
    }, [theme]);

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const res = await API.get('/study-plan/admin/all-plans');
            setPlans(res.data);
        } catch (error) {
            console.error("Planlar yüklenemedi:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (planId) => {
        if (!window.confirm("Bu öğrenci planını silmek istediğinize emin misiniz? Bu işlem geri alınamaz.")) return;

        try {
            await API.delete(`/study-plan/admin/plan/${planId}`);
            setPlans(plans.filter(p => p._id !== planId));
        } catch (error) {
            alert("Silme işlemi başarısız.");
            console.error(error);
        }
    };

    if (loading) return <div style={pageStyle}>Yükleniyor...</div>;

    return (
        <div style={pageStyle}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px', color: theme === 'dark' ? '#fff' : '#1e293b' }}>
                    <FaChartLine style={{ color: theme === 'dark' ? '#00f3ff' : '#3b82f6' }} /> Öğrenci Çalışma Planları
                    <span style={{ fontSize: '1rem', backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#e2e8f0', color: theme === 'dark' ? '#00f3ff' : '#1e293b', padding: '0.2rem 0.8rem', borderRadius: '20px', marginLeft: 'auto' }}>
                        Toplam: {plans.length}
                    </span>
                </h1>

                {plans.length === 0 ? (
                    <div style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>Henüz oluşturulmuş bir öğrenci planı yok.</div>
                ) : (
                    <div className="plans-list">
                        <AnimatePresence>
                            {plans.map(plan => (
                                <motion.div
                                    key={plan._id}
                                    style={{ ...cardStyle, cursor: 'pointer' }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    whileHover={{ scale: 1.01, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                                    onClick={() => navigate(`/admin/student-plans/${plan._id}`)}
                                    layout
                                >
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: theme === 'dark' ? '#fff' : '#1e293b' }}>
                                                {plan.student?.name} {plan.student?.surname}
                                            </h3>
                                            <span style={{ fontSize: '0.8rem', color: theme === 'dark' ? '#00f3ff' : '#64748b', backgroundColor: theme === 'dark' ? 'rgba(0, 243, 255, 0.1)' : '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>
                                                {plan.student?.email}
                                            </span>
                                        </div>

                                        <div style={{ display: 'flex', gap: '20px', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : '#64748b', fontSize: '0.9rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                <FaBuilding style={{ color: theme === 'dark' ? '#00f3ff' : '#64748b' }} /> {plan.targetCompany?.name || 'Şirket Yok'}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                <FaCalendar style={{ color: theme === 'dark' ? '#00f3ff' : '#64748b' }} /> {new Date(plan.createdAt).toLocaleDateString('tr-TR')}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: plan.isActive ? '#16a34a' : (theme === 'dark' ? '#475569' : '#94a3b8') }}>
                                                Status: {plan.isActive ? 'Aktif' : 'Arşiv'}
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(plan._id);
                                        }}
                                        style={{
                                            backgroundColor: '#fee2e2',
                                            color: '#ef4444',
                                            border: '1px solid #fecaca',
                                            padding: '0.8rem',
                                            borderRadius: '0.5rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.2s',
                                            zIndex: 10
                                        }}
                                        title="Planı Sil"
                                    >
                                        <FaTrash />
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminStudentPlansPage;
