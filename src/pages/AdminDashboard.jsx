import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaBuilding, FaChalkboardTeacher, FaBriefcase, FaFileSignature, FaCheckCircle, FaTimesCircle, FaClock, FaCopy, FaEnvelope, FaPaperPlane, FaTimes, FaBook, FaClipboardList } from 'react-icons/fa';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalStudents: 0,
        totalCompanies: 0,
        totalLecturers: 0,
        totalInternships: 0,
        totalApplications: 0,
        totalPlacements: 0
    });
    const [pendingUsers, setPendingUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [activeTab, setActiveTab] = useState('pending'); // 'pending', 'students', 'companies', 'lecturers'
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);

    // Email Modal State
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [emailSubject, setEmailSubject] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [sendingEmail, setSendingEmail] = useState(false);

    const { userInfo } = useAuth();
    const navigate = useNavigate();
    const { theme } = useTheme();

    useEffect(() => {
        // Apply dark theme class to body globally ONLY if dark mode is active
        if (theme === 'dark') {
            document.body.classList.add('dark-tech-theme');
        } else {
            document.body.classList.remove('dark-tech-theme');
        }

        return () => {
            document.body.classList.remove('dark-tech-theme');
        };
    }, [theme]);

    useEffect(() => {
        if (!userInfo || userInfo.role !== 'admin') {
            navigate('/');
            return;
        }
        fetchData();
    }, [userInfo, navigate]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const statsRes = await API.get('/admin/stats');
            setStats(statsRes.data);

            const pendingRes = await API.get('/admin/pending-users');
            setPendingUsers(pendingRes.data);

            const usersRes = await API.get('/admin/users');
            setAllUsers(usersRes.data);

        } catch (error) {
            console.error("Veri çekme hatası:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (e, id) => {
        e.stopPropagation();
        if (!window.confirm("Bu kullanıcıyı onaylamak istediğinize emin misiniz?")) return;
        try {
            setProcessing(true);
            await API.post(`/admin/approve-user/${id}`);
            alert("Kullanıcı onaylandı.");
            fetchData();
        } catch (error) {
            alert("Hata: " + (error.response?.data?.message || error.message));
        } finally {
            setProcessing(false);
        }
    };

    const handleReject = async (e, id) => {
        e.stopPropagation();
        if (!window.confirm("Bu kullanıcıyı REDDETMEK ve SİLMEK istediğinize emin misiniz?")) return;
        try {
            setProcessing(true);
            await API.post(`/admin/reject-user/${id}`);
            alert("Kullanıcı silindi.");
            fetchData();
        } catch (error) {
            alert("Hata: " + (error.response?.data?.message || error.message));
        } finally {
            setProcessing(false);
        }
    };

    const handleRowClick = (id) => {
        navigate(`/profile/${id}`);
    };

    const copyBarcode = (e, barcode) => {
        e.stopPropagation();
        navigator.clipboard.writeText(barcode);
        alert(`Barkod kopyalandı: ${barcode}`);
    };

    const openEmailModal = (e, user) => {
        e.stopPropagation();
        setSelectedUser(user);
        setShowEmailModal(true);
        setEmailSubject('Marine Cadet Bilgilendirme');
        setEmailMessage('');
    };

    const handleSendEmail = async (e) => {
        e.preventDefault();
        setSendingEmail(true);
        try {
            await API.post('/admin/send-custom-email', {
                userId: selectedUser._id,
                subject: emailSubject,
                message: emailMessage
            });
            alert("E-posta başarıyla gönderildi.");
            setShowEmailModal(false);
            setEmailMessage('');
        } catch (error) {
            alert("Hata: " + (error.response?.data?.message || error.message));
        } finally {
            setSendingEmail(false);
        }
    };

    const StatCard = ({ title, value, icon, color }) => (
        <div style={{
            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#fff',
            backdropFilter: theme === 'dark' ? 'blur(12px)' : 'none',
            padding: '20px',
            borderRadius: '15px',
            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            minWidth: '200px',
            flex: 1,
            boxShadow: theme === 'dark' ? '0 8px 32px rgba(0, 0, 0, 0.3)' : '0 4px 6px rgba(0,0,0,0.05)'
        }}>
            <div style={{
                backgroundColor: color,
                padding: '15px',
                borderRadius: '12px',
                color: 'white',
                fontSize: '1.5rem',
                marginRight: '15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: `0 0 20px ${color}44`
            }}>
                {icon}
            </div>
            <div>
                <h3 style={{ margin: 0, color: theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : '#718096', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</h3>
                <p style={{ margin: '5px 0 0 0', fontSize: '1.8rem', fontWeight: 'bold', color: theme === 'dark' ? '#fff' : '#2d3748', textShadow: theme === 'dark' ? '0 0 10px rgba(255,255,255,0.2)' : 'none' }}>{value}</p>
            </div>
        </div>
    );

    const UserTable = ({ users, showActions = false }) => (
        <div style={{
            overflowX: 'auto',
            background: theme === 'dark' ? 'rgba(10, 15, 30, 0.7)' : '#fff',
            backdropFilter: theme === 'dark' ? 'blur(10px)' : 'none',
            borderRadius: '16px',
            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
            boxShadow: theme === 'dark' ? '0 10px 40px rgba(0,0,0,0.4)' : '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #edf2f7', textAlign: 'left', color: theme === 'dark' ? '#00B4D8' : '#4a5568', backgroundColor: theme === 'dark' ? 'transparent' : '#edf2f7' }}>
                        <th style={{ padding: '18px 20px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Ad Soyad / Firma Adı</th>
                        <th style={{ padding: '18px 20px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>E-posta</th>
                        <th style={{ padding: '18px 20px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Rol</th>
                        <th style={{ padding: '18px 20px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Detay (Bölüm/Sektör)</th>
                        <th style={{ padding: '18px 20px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Durum</th>
                        <th style={{ padding: '18px 20px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr><td colSpan={6} style={{ padding: '20px', textAlign: 'center', color: '#a0aec0' }}>Kayıt bulunamadı.</td></tr>
                    ) : (
                        users.map(user => (
                            <tr
                                key={user._id}
                                onClick={() => handleRowClick(user._id)}
                                style={{
                                    borderBottom: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid #e2e8f0',
                                    transition: 'background-color 0.2s',
                                    cursor: 'pointer',
                                    color: theme === 'dark' ? '#e2e8f0' : '#4a5568'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#f7fafc'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                <td style={{ padding: '18px 20px' }}>
                                    <div style={{ fontWeight: '600', color: theme === 'dark' ? '#fff' : '#2d3748' }}>{user.name} {user.surname}</div>
                                    {/* BARKOD ALANI - YENİ YERİ */}
                                    {user.role === 'student' && user.studentBarcode && (
                                        <div
                                            title="Kopyalamak için tıklayın"
                                            onClick={(e) => copyBarcode(e, user.studentBarcode)}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '5px',
                                                marginTop: '5px',
                                                padding: '2px 8px',
                                                backgroundColor: '#805ad5', // Belirgin Mor Renk
                                                color: 'white',
                                                borderRadius: '12px',
                                                fontSize: '0.75rem',
                                                cursor: 'copy',
                                                fontWeight: 'bold',
                                                boxShadow: '0 2px 4px rgba(128, 90, 213, 0.3)'
                                            }}
                                        >
                                            <FaCopy size={10} /> {user.studentBarcode}
                                        </div>
                                    )}
                                </td>
                                <td style={{ padding: '15px', color: '#718096' }}>{user.email}</td>
                                <td style={{ padding: '15px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        backgroundColor: user.role === 'student' ? '#ebf8ff' : user.role === 'company' ? '#f0fff4' : '#fffaf0',
                                        color: user.role === 'student' ? '#3182ce' : user.role === 'company' ? '#38a169' : '#dd6b20',
                                        fontWeight: 'bold'
                                    }}>
                                        {user.role === 'student' ? 'Öğrenci' : user.role === 'company' ? 'Şirket' : user.role === 'lecturer' ? 'Akademisyen' : 'Admin'}
                                    </span>
                                </td>
                                <td style={{ padding: '15px' }}>
                                    {user.department && <>{user.department} / {user.classYear}</>}
                                    {user.companyInfo?.sector && <>{user.companyInfo.sector}</>}
                                    {user.title && <>{user.title}</>}
                                </td>
                                <td style={{ padding: '15px' }}>
                                    {user.isApproved ? (
                                        <span style={{ color: '#38a169', display: 'flex', alignItems: 'center', gap: '5px' }}><FaCheckCircle /> Onaylı</span>
                                    ) : (
                                        <span style={{ color: '#e53e3e', display: 'flex', alignItems: 'center', gap: '5px' }}><FaTimesCircle /> Onaysız</span>
                                    )}
                                </td>
                                <td style={{ padding: '15px', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                        {/* MAİL GÖNDERME BUTONU */}
                                        <button
                                            onClick={(e) => openEmailModal(e, user)}
                                            title="Mail Gönder"
                                            style={{
                                                padding: '8px',
                                                backgroundColor: '#4299e1',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                                            }}>
                                            <FaEnvelope />
                                        </button>

                                        {showActions && !user.isApproved && (
                                            <>
                                                <button onClick={(e) => handleApprove(e, user._id)} title="Onayla" style={{ padding: '8px', backgroundColor: '#38a169', color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaCheckCircle /></button>
                                                <button onClick={(e) => handleReject(e, user._id)} title="Reddet" style={{ padding: '8px', backgroundColor: '#e53e3e', color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaTimesCircle /></button>
                                            </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );

    if (loading) return <div style={{ padding: '50px', textAlign: 'center', fontSize: '1.2rem', color: '#4a5568' }}>Veriler Yükleniyor...</div>;

    const filteredUsers = activeTab === 'pending' ? pendingUsers : allUsers.filter(u => u.role === activeTab);

    return (
        <div style={{ padding: '40px', background: 'transparent', minHeight: '100vh', position: 'relative', color: theme === 'dark' ? '#fff' : 'var(--text-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ background: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#fff', padding: '10px', borderRadius: '50%', border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0' }}>
                        <img src="/logo.png-modified.png" alt="Marine Cadet Logo" style={{ height: '50px', width: 'auto' }} />
                    </div>
                    <div>
                        <h1 style={{ color: theme === 'dark' ? '#fff' : '#1e293b', margin: 0, fontWeight: '900', fontSize: '2rem', letterSpacing: '-0.5px' }}>Admin Kontrol Paneli</h1>
                        <p style={{ color: theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : '#718096', margin: 0, fontSize: '0.9rem' }}>Sistem yönetim ve kullanıcı yetkilendirme merkezi</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        onClick={() => navigate('/admin/lessons')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#1E293B',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                    >
                        <FaBook /> Ders Havuzu
                    </button>
                    <button
                        onClick={() => navigate('/admin/student-plans')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            boxShadow: '0 4px 6px rgba(59,130,246,0.3)'
                        }}
                    >
                        <FaClipboardList /> Öğrenci Planları
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <StatCard title="Toplam Öğrenci" value={stats.totalStudents} icon={<FaUserGraduate />} color="#3182ce" />
                <StatCard title="Toplam Şirket" value={stats.totalCompanies} icon={<FaBuilding />} color="#38a169" />
                <StatCard title="Akademisyen" value={stats.totalLecturers} icon={<FaChalkboardTeacher />} color="#dd6b20" />
                <StatCard title="Aktif İlanlar" value={stats.totalInternships} icon={<FaBriefcase />} color="#805ad5" />
                <StatCard title="Toplam Başvuru" value={stats.totalApplications} icon={<FaFileSignature />} color="#d53f8c" />
                <StatCard title="Yerleşen Öğrenci" value={stats.totalPlacements} icon={<FaCheckCircle />} color="#319795" />
            </div>

            <div style={{ marginBottom: '30px', borderBottom: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0', display: 'flex', gap: '30px' }}>
                {[
                    { key: 'pending', label: 'Onay Bekleyenler', icon: <FaClock /> },
                    { key: 'student', label: 'Tüm Öğrenciler', icon: <FaUserGraduate /> },
                    { key: 'company', label: 'Şirketler', icon: <FaBuilding /> },
                    { key: 'lecturer', label: 'Akademisyenler', icon: <FaChalkboardTeacher /> }
                ].map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        style={{
                            padding: '12px 10px',
                            border: 'none',
                            background: 'none',
                            borderBottom: activeTab === tab.key ? '3px solid #00B4D8' : '3px solid transparent',
                            color: activeTab === tab.key ? '#00B4D8' : theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : '#718096',
                            fontWeight: activeTab === tab.key ? '700' : '500',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '0.95rem',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        {tab.icon} {tab.label}
                        {tab.key === 'pending' && pendingUsers.length > 0 && (
                            <span style={{ backgroundColor: '#e53e3e', color: 'white', borderRadius: '50%', padding: '2px 8px', fontSize: '0.8rem' }}>
                                {pendingUsers.length}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            <UserTable users={filteredUsers} showActions={activeTab === 'pending'} />

            {showEmailModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
                    <div style={{ backgroundColor: theme === 'dark' ? '#131922' : '#fff', border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', padding: '30px', borderRadius: '20px', width: '500px', maxWidth: '90%', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                            <h3 style={{ margin: 0, color: theme === 'dark' ? '#fff' : '#2d3748', fontSize: '1.2rem' }}>Mesaj Gönder: {selectedUser?.name}</h3>
                            <button onClick={() => setShowEmailModal(false)} style={{ background: 'rgba(229, 62, 62, 0.1)', width: '30px', height: '30px', border: 'none', borderRadius: '50%', cursor: 'pointer', color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaTimes /></button>
                        </div>
                        <form onSubmit={handleSendEmail}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: theme === 'dark' ? 'rgba(255,255,255,0.6)' : '#718096', fontSize: '0.85rem' }}>Konu</label>
                                <input
                                    type="text"
                                    required
                                    value={emailSubject}
                                    onChange={(e) => setEmailSubject(e.target.value)}
                                    style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #cbd5e0', background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#fff', color: theme === 'dark' ? '#fff' : '#2d3748' }}
                                />
                            </div>
                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: theme === 'dark' ? 'rgba(255,255,255,0.6)' : '#718096', fontSize: '0.85rem' }}>Mesaj</label>
                                <textarea
                                    required
                                    value={emailMessage}
                                    onChange={(e) => setEmailMessage(e.target.value)}
                                    rows="6"
                                    style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #cbd5e0', background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#fff', color: theme === 'dark' ? '#fff' : '#2d3748', resize: 'vertical' }}
                                ></textarea>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                <button type="button" onClick={() => setShowEmailModal(false)} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#e2e8f0', color: '#4a5568', cursor: 'pointer' }}>İptal</button>
                                <button type="submit" disabled={sendingEmail} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#00B4D8', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    {sendingEmail ? 'Gönderiliyor...' : <><FaPaperPlane /> Gönder</>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
