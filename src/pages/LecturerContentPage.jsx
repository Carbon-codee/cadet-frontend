import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFilePdf, FaBullhorn, FaTrash, FaEdit, FaEye, FaPlus, FaTimes } from 'react-icons/fa';
import './LecturerPages.css';

const LecturerContentPage = () => {
    const navigate = useNavigate();

    // Varsayılan Veriler (İlk açılışta boş kalmasın diye)
    const defaultData = [
        { id: 1, title: "2024 Yaz Stajı Başvuru Esasları", type: "Duyuru", date: "16.01.2024", views: 124, targetAudience: "Tüm Öğrenciler", content: "Detaylar..." },
        { id: 2, title: "Staj Defteri Şablonu", type: "Belge", date: "15.01.2024", views: 85, targetAudience: "Staj Yapanlar", content: "Şablon..." },
    ];

    // State'i LocalStorage'dan başlat
    const [contents, setContents] = useState(() => {
        const savedData = localStorage.getItem('lecturerContents');
        return savedData ? JSON.parse(savedData) : defaultData;
    });

    const [filter, setFilter] = useState('Tümü');
    const [selectedContent, setSelectedContent] = useState(null);

    // Her değişiklikte (silme vb.) LocalStorage'ı güncelle
    useEffect(() => {
        localStorage.setItem('lecturerContents', JSON.stringify(contents));
    }, [contents]);

    // SİLME
    const handleDelete = (id) => {
        if (window.confirm("Bu içeriği silmek istediğinize emin misiniz?")) {
            const newContents = contents.filter(item => item.id !== id);
            setContents(newContents);
        }
    };

    // DÜZENLEME
    const handleEdit = (item) => {
        navigate('/lecturer/upload', { state: { editMode: true, item: item } });
    };

    // GÖRÜNTÜLEME
    const handleView = (item) => {
        setSelectedContent(item);
    };

    // Filtreleme
    const filteredContents = filter === 'Tümü'
        ? contents
        : contents.filter(item =>
            filter === 'Belge' ? (item.type === 'Belge' || item.type === 'Ders Notu') : item.type === 'Duyuru'
        );

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

            {/* FİLTRE */}
            <div className="content-filter-bar">
                <div className="filter-group">
                    <button className={`filter-btn ${filter === 'Tümü' ? 'active' : ''}`} onClick={() => setFilter('Tümü')}>Tümü</button>
                    <button className={`filter-btn ${filter === 'Duyuru' ? 'active' : ''}`} onClick={() => setFilter('Duyuru')}>Duyurular</button>
                    <button className={`filter-btn ${filter === 'Belge' ? 'active' : ''}`} onClick={() => setFilter('Belge')}>Belgeler</button>
                </div>
                <div style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>Toplam <strong>{filteredContents.length}</strong> içerik</div>
            </div>

            {/* LİSTE */}
            <div className="content-list">
                {/* Yeni eklenenler üstte gözüksün diye reverse() kullanabiliriz */}
                {[...filteredContents].reverse().map(item => (
                    <div key={item.id} className="manage-card">
                        <div className="mc-left">
                            <div className={`mc-icon-box ${item.type === 'Duyuru' ? 'announcement' : 'doc'}`}>
                                {item.type === 'Duyuru' ? <FaBullhorn /> : <FaFilePdf />}
                            </div>
                            <div className="mc-info">
                                <h3
                                    onClick={() => handleView(item)}
                                    style={{ cursor: 'pointer', textDecoration: 'underline', textDecorationColor: '#ddd' }}
                                >
                                    {item.title}
                                </h3>
                                <div className="mc-meta">
                                    <span>📅 {item.date}</span>
                                    <span>🎯 {item.targetAudience}</span>
                                    <span className="badge warning" style={{ fontWeight: 'normal', background: '#eee', color: '#555' }}>{item.type}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mc-right">
                            <div className="view-stat">
                                <span>{item.views || 0}</span>
                                <small>Görüntülenme</small>
                            </div>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button className="btn-icon-small btn-edit" title="Görüntüle" onClick={() => handleView(item)}>
                                    <FaEye />
                                </button>
                                <button className="btn-icon-small btn-edit" title="Düzenle" onClick={() => handleEdit(item)}>
                                    <FaEdit />
                                </button>
                                <button className="btn-icon-small btn-delete" title="Sil" onClick={() => handleDelete(item.id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {filteredContents.length === 0 && <p style={{ textAlign: 'center', color: '#999', padding: '20px' }}>İçerik bulunamadı.</p>}
            </div>

            {/* DETAY MODALI */}
            {selectedContent && (
                <div className="modal-overlay" onClick={() => setSelectedContent(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{selectedContent.title}</h2>
                            <button className="close-modal-btn" onClick={() => setSelectedContent(null)}><FaTimes /></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-meta-row">
                                <span>📂 {selectedContent.type}</span>
                                <span>🎯 {selectedContent.targetAudience}</span>
                                <span>📅 {selectedContent.date}</span>
                            </div>
                            <h4>İçerik Detayı:</h4>
                            <p style={{ whiteSpace: 'pre-wrap' }}>{selectedContent.content}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LecturerContentPage;