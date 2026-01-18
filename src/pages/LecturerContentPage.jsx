import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFilePdf, FaBullhorn, FaTrash, FaEdit, FaEye, FaPlus, FaTimes } from 'react-icons/fa';
import API from '../api/axiosConfig'; // API Import
import { useAuth } from '../context/AuthContext';
import './LecturerPages.css';

const LecturerContentPage = () => {
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    const [contents, setContents] = useState([]);
    const [filter, setFilter] = useState('Tümü');
    const [loading, setLoading] = useState(true);

    // Verileri API'den Çek
    useEffect(() => {
        const fetchMyContents = async () => {
            try {
                const { data } = await API.get('/content');
                // Sadece BU hocanın içeriklerini filtrele
                const myData = data.filter(item => item.author?._id === userInfo._id);
                setContents(myData);
            } catch (error) {
                console.error("İçerikler yüklenemedi", error);
            } finally {
                setLoading(false);
            }
        };

        if (userInfo) fetchMyContents();
    }, [userInfo]);

    // Silme İşlemi (API)
    const handleDelete = async (id) => {
        if (window.confirm("Bu içeriği silmek istediğinize emin misiniz?")) {
            try {
                await API.delete(`/content/${id}`);
                setContents(contents.filter(item => item._id !== id)); // Listeden çıkar
            } catch (error) {
                alert("Silme işlemi başarısız oldu.");
            }
        }
    };

    const handleEdit = (item) => {
        // item._id MongoDB ID'sidir
        navigate('/lecturer/upload', { state: { editMode: true, item: item } });
    };

    // Filtreleme
    const filteredContents = filter === 'Tümü'
        ? contents
        : contents.filter(item =>
            filter === 'Belge' ? (item.type === 'Belge' || item.type === 'Ders Notu') : item.type === 'Duyuru'
        );

    if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Yükleniyor...</div>;

    return (
        <div className="lecturer-page">
            <div className="page-header">
                <div>
                    <h1>Yayınlanan İçerikler</h1>
                    <p>Paylaştığınız tüm duyuru ve belgeleri buradan yönetin.</p>
                </div>
                <Link to="/lecturer/upload" className="submit-button" style={{ width: 'auto', textDecoration: 'none' }}>
                    <FaPlus /> Yeni İçerik Ekle
                </Link>
            </div>

            <div className="content-filter-bar">
                <div className="filter-group">
                    <button className={`filter-btn ${filter === 'Tümü' ? 'active' : ''}`} onClick={() => setFilter('Tümü')}>Tümü</button>
                    <button className={`filter-btn ${filter === 'Duyuru' ? 'active' : ''}`} onClick={() => setFilter('Duyuru')}>Duyurular</button>
                    <button className={`filter-btn ${filter === 'Belge' ? 'active' : ''}`} onClick={() => setFilter('Belge')}>Belgeler</button>
                </div>
                <div style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>Toplam <strong>{filteredContents.length}</strong> içerik</div>
            </div>

            <div className="content-list">
                {filteredContents.length > 0 ? (
                    filteredContents.map(item => (
                        <div key={item._id} className="manage-card">
                            <div className="mc-left">
                                <div className={`mc-icon-box ${item.type === 'Duyuru' ? 'announcement' : 'doc'}`}>
                                    {item.type === 'Duyuru' ? <FaBullhorn /> : <FaFilePdf />}
                                </div>
                                <div className="mc-info">
                                    <h3 onClick={() => navigate(`/learning/${item._id}`)}>{item.title}</h3>
                                    <div className="mc-meta">
                                        {/* Tarihi formatla */}
                                        <span>📅 {new Date(item.createdAt).toLocaleDateString('tr-TR')}</span>
                                        <span>🎯 {item.targetAudience}</span>
                                        <span className="badge warning" style={{ fontWeight: 'normal', background: '#eee', color: '#555' }}>{item.type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mc-right">
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <Link to={`/learning/${item._id}`} className="btn-icon-small btn-edit" title="Görüntüle">
                                        <FaEye />
                                    </Link>
                                    <button className="btn-icon-small btn-edit" title="Düzenle" onClick={() => handleEdit(item)}>
                                        <FaEdit />
                                    </button>
                                    <button className="btn-icon-small btn-delete" title="Sil" onClick={() => handleDelete(item._id)}>
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', color: '#999', padding: '30px' }}>Bu kategoride içerik bulunamadı.</p>
                )}
            </div>
        </div>
    );
};

export default LecturerContentPage;