export const mockCompanies = [
    { id: 1, name: "Ark-Denizcilik", logo: "https://placehold.co/100x50/002B5B/FFFFFF?text=ARK" },
    { id: 2, name: "MSC-Shipping", logo: "https://placehold.co/100x50/005A9C/FFFFFF?text=MSC" },
    { id: 3, name: "Turkon-Line", logo: "https://placehold.co/100x50/ef4444/FFFFFF?text=Turkon" },
    { id: 4, name: "Maersk-Line", logo: "https://placehold.co/100x50/3b82f6/FFFFFF?text=Maersk" },
    { id: 5, name: "Bora-Shipping", logo: "https://placehold.co/100x50/16a34a/FFFFFF?text=Bora" },
    { id: 6, name: "Yasa-Denizcilik", logo: "https://placehold.co/100x50/6b7280/FFFFFF?text=YASA" },
    { id: 7, name: "CMA-CGM", logo: "https://placehold.co/100x50/ef4444/FFFFFF?text=CMA+CGM" },
];

export const mockInternships = [
    { id: 1, title: "Güverte Stajyeri (Uzak Yol)", company: "Ark-Denizcilik", salary: 750, shipType: "Konteyner", department: "Güverte" },
    { id: 2, title: "Makine Stajyeri (Tanker)", company: "Yasa-Denizcilik", salary: 800, shipType: "Tanker", department: "Makine" },
    { id: 3, title: "Uzak Yol Stajyeri", company: "MSC-Shipping", salary: 850, shipType: "Konteyner", department: "Güverte" },
    { id: 4, title: "Dökme Yük Gemisi Stajyeri", company: "Bora-Shipping", salary: 700, shipType: "Dökme Yük", department: "Makine" },
    { id: 5, title: "Kimyasal Tanker Stajyeri", company: "Yasa-Denizcilik", salary: 900, shipType: "Tanker", department: "Güverte" },
    { id: 6, title: "Gemi Makine Mühendisliği Stajı", company: "Maersk-Line", salary: 950, shipType: "Konteyner", department: "Makine" },
];

// BAŞVURULAN İLANLAR İÇİN YENİ VERİ
export const mockAppliedInternships = [
    { id: 101, title: "Kimyasal Tanker Stajyeri", company: "Yasa-Denizcilik", status: "İnceleniyor" },
    { id: 102, title: "Uzak Yol Stajyeri", company: "MSC-Shipping", status: "Onaylandı" },
    { id: 103, title: "Konteyner Gemisi Makine Stajı", company: "Ark-Denizcilik", status: "Reddedildi" },
];

// YENİ: Öğrenme Sayfası için sahte veri
export const mockLearningMaterials = [
    { id: 201, title: "Denizcilikte Acil Durum Prosedürleri", type: "PDF", uploader: "Prof. Dr. Ahmet Yılmaz", description: "Gemilerde karşılaşılabilecek acil durumlara müdahale ve yönetim kılavuzu." },
    { id: 202, title: "Elektronik Harita (ECDIS) Kullanımı", type: "Video", uploader: "Kapt. Can Tezcan", description: "ECDIS sistemlerinin temel ve ileri düzey kullanımı hakkında pratik bir video eğitimi." },
    { id: 203, title: "Gemi Stabilitesi ve Denge Hesaplamaları", type: "Slayt", uploader: "Doç. Dr. Elif Kara", description: "Yükleme ve tahliye operasyonlarında stabilite hesaplamaları üzerine detaylı sunum." },
    { id: 204, title: "MARPOL Kuralları ve Uygulamaları", type: "PDF", uploader: "Prof. Dr. Ahmet Yılmaz", description: "Deniz kirliliğini önlemeye yönelik uluslararası MARPOL sözleşmesinin tüm ekleri." },
    { id: 205, title: "Radar Plotlama Teknikleri", type: "Video", uploader: "Kapt. Can Tezcan", description: "Çatışmayı önleme amacıyla radar üzerinde manuel plotlama nasıl yapılır?" },
    { id: 206, title: "Dizel Motorları Bakım ve Onarımı", type: "Slayt", uploader: "Müh. Selim Öztürk", description: "Gemi ana ve yardımcı makinelerinin periyodik bakım ve sorun giderme adımları." },
    { id: 207, title: "COLREG '72 - Denizde Çatışmayı Önleme Tüzüğü", type: "PDF", uploader: "Doç. Dr. Elif Kara", description: "Uluslararası denizlerde güvenli seyir için tüm kurallar ve istisnalar." },
];

// YENİ: Öğrenme Sayfası Konu Başlıkları
export const mockTopics = [
    { id: 1, name: "Seyir" },
    { id: 2, name: "COLREG" },
    { id: 3, name: "MARPOL" },
    { id: 4, name: "Gemi Stabilitesi" },
    { id: 5, name: "Denizde Güvenlik" },
    { id: 6, name: "Makine Operasyonları" },
    { id: 7, name: "Yük İşlemleri" },
];

// YENİ: Kayıtlı Öğrenme Materyalleri
export const mockSavedLearnings = [
    { id: 202, title: "Elektronik Harita (ECDIS) Kullanımı" },
    { id: 205, title: "Radar Plotlama Teknikleri" },
];

// YENİ: Profil Sayfası için sahte öğrenci verisi
export const mockStudentProfile = {
    name: "Şaban Gezer",
    email: "saban.gezer@itu.edu.tr",
    avatar: "https://placehold.co/150x150/002B5B/FFFFFF?text=SG", // Placeholder profil fotoğrafı
    department: "Güverte",
    classYear: "3. Sınıf",
    gpa: 3.45,
    englishLevel: "C1 - Advanced",
    successScore: 88,
    bio: "Denizciliğe tutkuyla bağlı, hedefleri olan bir öğrenciyim. Uzak yol stajı yaparak kendimi global arenada kanıtlamak ve kariyerimde emin adımlarla ilerlemek istiyorum.",
    socialActivities: [
        "İTÜ Yelken Kulübü - Yarış Takımı Üyesi",
        "Deniz Temiz Derneği (TURMEPA) - Gönüllü",
        "Erasmus+ Öğrenci Değişim Programı - İspanya",
    ],
    documents: [
        { id: 1, name: "CV_Saban_Gezer.pdf", type: "CV" },
        { id: 2, name: "STCW_Belgesi.pdf", type: "Sertifika" },
        { id: 3, name: "IELTS_Sonuc.pdf", type: "Sertifika" },
    ],
};
