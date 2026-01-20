import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext'; // <-- EKLENDİ
import { FaSearch, FaMapMarkerAlt, FaShip, FaMoneyBillWave, FaCalendarAlt, FaBuilding, FaFilter } from 'react-icons/fa';
import { SHIP_TYPES } from '../constants';
import './InternshipsPage.css';

const InternshipsPage = () => {
    const { userInfo } = useAuth(); // <-- KULLANICI BİLGİSİNİ ALDIK
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filtreleme state'leri
    const [searchTerm, setSearchTerm] = useState('');
    const [shipTypeFilter, setShipTypeFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState('');

    // Yedek Gemi Tipleri (constants.js yoksa diye)
    const shipTypesList = SHIP_TYPES || [
        'Konteyner', 'Kimyasal Tanker', 'Petrol Tankeri', 'LPG/LNG Tankeri',
        'Dökme Yük', 'Genel Kargo', 'Ro-Ro', 'Yolcu Gemisi', 'Offshore'
    ];

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                // Sadece aktif ilanlar gelir (Backend filtresi)
                const { data } = await API.get('/internships');
                setInternships(data);
            } catch (error) {
                console.error("İlanlar yüklenemedi", error);
            } finally {
                setLoading(false);
            }
        };
        fetchInternships();
    }, []);

    // Filtrelenmiş ilanları hesapla
    const filteredInternships = internships.filter(internship => {
        // Güvenlik kontrolleri
        if (!internship || !internship.title) return false;

        // 1. Standart Filtreler
        const titleMatch = internship.title.toLowerCase().includes(searchTerm.toLowerCase());
        const companyMatch = internship.company?.name?.toLowerCase().includes(searchTerm.toLowerCase());
        const typeMatch = shipTypeFilter === '' || internship.shipType === shipTypeFilter;
        const companyFilterMatch = companyFilter === '' || internship.company?._id === companyFilter;

        // 2. BÖLÜM FİLTRESİ (SADECE ÖĞRENCİLER İÇİN)
        let deptMatch = true;
        if (userInfo && userInfo.role === 'student') {
            const userDept = userInfo.department || "";

            // Eğer öğrenci 'Güverte' veya 'Deniz Ulaştırma' bölümündeyse -> Sadece Güverte ilanları
            if (userDept.includes('Güverte') || userDept.includes('Deniz Ulaştırma')) {
                deptMatch = internship.department === 'Güverte';
            }
            // Eğer öğrenci 'Makine' veya 'Gemi Makineleri' bölümündeyse -> Sadece Makine ilanları
            else if (userDept.includes('Makine') || userDept.includes('Gemi Makineleri')) {
                deptMatch = internship.department === 'Makine';
            }
        }

        return (titleMatch || companyMatch) && typeMatch && companyFilterMatch && deptMatch;
    });

    // Benzersiz Şirketleri Al (Dropdown için)
    const uniqueCompanies = internships.reduce((acc, current) => {
        if (current.company?._id && !acc.find(item => item._id === current.company._id)) {
            acc.push({ _id: current.company._id, name: current.company.name });
        }
        return acc;
    }, []);

    if (loading) return <div style={{ padding: 50, textAlign: 'center' }}>İlanlar Yükleniyor...</div>;

    return (
        <div className="internships-page">
            <div className="page-title-section">
                <h1>Staj Fırsatları</h1>
                <p>Kariyer rotanı belirleyecek en güncel ve aktif ilanları keşfet.</p>
                {/* Öğrenciye özel bilgilendirme mesajı */}
                {userInfo?.role === 'student' && (
                    <span style={{ fontSize: '0.85rem', color: '#3498db', marginTop: '5px', display: 'block' }}>
                        * Bölümünüze ({userInfo.department}) uygun ilanlar listelenmektedir.
                    </span>
                )}
            </div>

            {/* ARAMA VE FİLTRE BÖLÜMÜ */}
            <div className="search-filter-container">
                <div className="search-input-group">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="İlan başlığı veya şirket adı ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="filter-group">
                    <FaBuilding style={{ color: '#95a5a6', marginRight: '-25px', marginLeft: '10px', zIndex: 1 }} />
                    <select value={companyFilter} onChange={(e) => setCompanyFilter(e.target.value)} style={{ paddingLeft: '35px' }}>
                        <option value="">Tüm Şirketler</option>
                        {uniqueCompanies.map(comp => <option key={comp._id} value={comp._id}>{comp.name}</option>)}
                    </select>
                </div>

                <div className="filter-group">
                    <FaShip style={{ color: '#95a5a6', marginRight: '-25px', marginLeft: '10px', zIndex: 1 }} />
                    <select value={shipTypeFilter} onChange={(e) => setShipTypeFilter(e.target.value)} style={{ paddingLeft: '35px' }}>
                        <option value="">Tüm Gemi Tipleri</option>
                        {shipTypesList.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>
            </div>

            {/* İLAN SAYISI */}
            <div style={{ marginBottom: '20px', color: '#666', fontSize: '0.9rem' }}>
                Toplam <strong>{filteredInternships.length}</strong> ilan bulundu.
            </div>

            {/* İLAN LİSTESİ */}
            {filteredInternships.length > 0 ? (
                <div className="internships-grid">
                    {filteredInternships.map(internship => (
                        <div key={internship._id} className="internship-card">
                            <div className="card-header">
                                <h3>{internship.title}</h3>
                                <p className="company-name">{internship.company?.name || 'Gizli Şirket'}</p>
                            </div>
                            <div className="card-body">
                                <div className="info-item"><FaShip className="icon" /> <strong>Tip:</strong> {internship.shipType}</div>
                                {/* Lokasyon yerine Pozisyon/Lokasyon verisi */}
                                <div className="info-item"><FaMapMarkerAlt className="icon" /> <strong>Konum:</strong> {internship.location}</div>
                                <div className="info-item"><FaCalendarAlt className="icon" /> <strong>Süre:</strong> {internship.duration}</div>
                            </div>
                            <div className="card-footer">
                                <div className="salary-info"><FaMoneyBillWave /> {internship.salary}$</div>
                                <Link to={`/internships/${internship._id}`} className="details-btn">İncele</Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '50px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <FaFilter style={{ fontSize: '3rem', color: '#ddd', marginBottom: '15px' }} />
                    <h3>İlan Bulunamadı</h3>
                    <p style={{ color: '#7f8c8d' }}>
                        {userInfo?.role === 'student'
                            ? "Bölümünüze ve kriterlerinize uygun aktif bir ilan bulunamadı."
                            : "Aradığınız kriterlere uygun aktif bir staj ilanı şu an mevcut değil."}
                    </p>
                    <button onClick={() => { setSearchTerm(''); setShipTypeFilter(''); setCompanyFilter(''); }} style={{ marginTop: '15px', padding: '10px 20px', background: '#3498db', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Filtreleri Temizle</button>
                </div>
            )}
        </div>
    );
};

export default InternshipsPage;