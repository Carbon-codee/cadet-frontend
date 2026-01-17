import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosConfig';
import { FaSearch, FaMapMarkerAlt, FaShip, FaMoneyBillWave, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import './InternshipsPage.css';

const InternshipsPage = () => {
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filtreleme state'leri
    const [searchTerm, setSearchTerm] = useState('');
    const [shipTypeFilter, setShipTypeFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState(''); // Şirket filtresi

    // Gerçekçi gemi tipleri (Bu listeyi istediğin gibi genişletebilirsin)
    const realisticShipTypes = [
        'Konteyner',
        'Kimyasal Tanker',
        'Petrol Tankeri',
        'LPG/LNG Tankeri',
        'Dökme Yük',
        'Genel Kargo',
        'Ro-Ro',
        'Yolcu Gemisi'
    ];

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                // Backend'den populate edilmiş ilanları çek
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
        return (
            // 1. Arama Çubuğu: İlan başlığı veya şirket adı içinde arama
            (internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                internship.company?.name.toLowerCase().includes(searchTerm.toLowerCase())) &&

            // 2. Gemi Tipi Filtresi
            (shipTypeFilter === '' || internship.shipType === shipTypeFilter) &&

            // 3. Şirket Filtresi
            (companyFilter === '' || internship.company?._id === companyFilter)
        );
    });

    // Filtre için benzersiz şirketleri al (ID ve İsim olarak)
    const uniqueCompanies = internships.reduce((acc, current) => {
        // Eğer bu şirket ID'si daha önce eklenmemişse ekle
        if (current.company?._id && !acc.find(item => item._id === current.company._id)) {
            acc.push({ _id: current.company._id, name: current.company.name });
        }
        return acc;
    }, []);

    if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>İlanlar Yükleniyor...</div>;

    return (
        <div className="internships-page">
            <div className="page-title-section">
                <h1>Staj Fırsatları</h1>
                <p>Kariyer rotanı belirleyecek en güncel ilanları keşfet.</p>
            </div>

            {/* ARAMA VE FİLTRE BÖLÜMÜ (GÜNCELLENDİ) */}
            <div className="search-filter-container">
                <div className="search-input-group">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="İlan başlığı, şirket adı ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Şirket Filtresi */}
                <div className="filter-group">
                    <FaBuilding style={{ color: '#95a5a6', marginRight: '-15px', marginLeft: '5px' }} />
                    <select value={companyFilter} onChange={(e) => setCompanyFilter(e.target.value)}>
                        <option value="">Tüm Şirketler</option>
                        {uniqueCompanies.map(comp => <option key={comp._id} value={comp._id}>{comp.name}</option>)}
                    </select>
                </div>

                {/* Gemi Tipi Filtresi */}
                <div className="filter-group">
                    <FaShip style={{ color: '#95a5a6', marginRight: '-15px', marginLeft: '5px' }} />
                    <select value={shipTypeFilter} onChange={(e) => setShipTypeFilter(e.target.value)}>
                        <option value="">Tüm Gemi Tipleri</option>
                        {realisticShipTypes.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>
            </div>

            {/* İLAN LİSTESİ (AYNI KALDI) */}
            {filteredInternships.length > 0 ? (
                <div className="internships-grid">
                    {filteredInternships.map(internship => (
                        <div key={internship._id} className="internship-card">
                            <div className="card-header">
                                <h3>{internship.title}</h3>
                                <p className="company-name">{internship.company?.name || 'Bilinmeyen Şirket'}</p>
                            </div>
                            <div className="card-body">
                                <div className="info-item"><FaShip className="icon" /> <strong>Gemi Tipi:</strong> {internship.shipType}</div>
                                <div className="info-item"><FaMapMarkerAlt className="icon" /> <strong>Lokasyon:</strong> {internship.location}</div>
                                <div className="info-item"><FaCalendarAlt className="icon" /> <strong>Süre:</strong> {internship.duration}</div>
                            </div>
                            <div className="card-footer">
                                <div className="salary-info"><FaMoneyBillWave /> {internship.salary}$/ay</div>
                                <Link to={`/internships/${internship._id}`} className="details-btn">Detayları Gör</Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={{ textAlign: 'center', color: '#999', padding: '30px' }}>
                    Aradığınız kriterlere uygun ilan bulunamadı.
                </p>
            )}
        </div>
    );
};

export default InternshipsPage;