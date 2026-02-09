import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './KVKKPage.css'; // Stil dosyasını oluşturacağız

const KVKKPage = () => {
    const { userInfo, setUserInfo } = useAuth(); // Kullanıcı bilgisini güncellemek için
    const [isApproved, setIsApproved] = useState(false);
    const [approvalDate, setApprovalDate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        // Sayfa yüklendiğinde kullanıcının güncel durumunu çek
        const checkStatus = async () => {
            try {
                const res = await API.get('/users/profile');
                if (res.data.kvkkApproved) {
                    setIsApproved(true);
                    setApprovalDate(res.data.kvkkApprovalDate);
                }
            } catch (error) {
                console.error("KVKK durumu alınamadı:", error);
            } finally {
                setLoading(false);
            }
        };
        checkStatus();
    }, []);

    const handleApprove = async () => {
        setProcessing(true);
        try {
            const res = await API.post('/users/approve-kvkk', { version: "1.0.0" });
            if (res.data.kvkkApproved) {
                setIsApproved(true);
                setApprovalDate(new Date());
                // Context'i güncelle (Opsiyonel ama iyi olur)
                if (userInfo) {
                    setUserInfo({ ...userInfo, kvkkApproved: true });
                }
                alert("KVKK metnini başarıyla onayladınız.");
            }
        } catch (error) {
            console.error("Onay hatası:", error);
            alert("Bir hata oluştu, lütfen tekrar deneyin.");
        } finally {
            setProcessing(false);
        }
    };

    if (loading) return <div className="kvkk-loading">Yükleniyor...</div>;

    return (
        <div className="kvkk-page-container">
            <div className="kvkk-card">
                <div className="kvkk-header">
                    <h1>Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni</h1>
                    <p className="last-updated">Son Güncelleme: 09.02.2026</p>
                </div>

                <div className="kvkk-content-box">
                    <h3>1. Veri Sorumlusu</h3>
                    <p>
                        Şirketimiz, Marine Cadet, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında; hukuka ve dürüstlük kurallarına uygun bir şekilde işleyebilecek, kaydedebilecek, saklayabilecek, sınıflandırabilecek, güncelleyebilecek ve mevzuatın izin verdiği hallerde üçüncü kişilere açıklayabilecek ve/veya devredebilecektir.
                    </p>

                    <h3>2. Kişisel Verilerin İşlenme Amacı</h3>
                    <p>
                        Kişisel verileriniz; Staj başvurularının değerlendirilmesi, şirketler ile öğrenciler arasında eşleşme sağlanması, akademik başarı takibi, iletişim faaliyetlerinin yürütülmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.
                    </p>

                    <h3>3. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h3>
                    <p>
                        Kişisel verileriniz, platformumuza üyelik işlemleri sırasında elektronik ortamda, doğrudan sizlerden toplanmaktadır. Bu toplama faaliyeti, Kanun’un 5. ve 6. maddelerinde belirtilen “sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla”, “veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması” ve “ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması” hukuki sebeplerine dayanmaktadır.
                    </p>

                    <h3>4. İşlenen Kişisel Verileriniz</h3>

                    <h4>A. Öğrenciler İçin:</h4>
                    <ul>
                        <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, öğrenci numarası.</li>
                        <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası.</li>
                        <li><strong>Eğitim Bilgileri:</strong> Okul, bölüm, sınıf, not ortalaması (GPA), transkript.</li>
                        <li><strong>Mesleki Bilgiler:</strong> CV, sertifikalar, staj geçmişi, yetkinlikler.</li>
                    </ul>

                    <h4>B. Şirket Yetkilileri / Temsilcileri İçin:</h4>
                    <ul>
                        <li><strong>Kimlik Bilgileri:</strong> Ad, soyad (Yetkili kişi).</li>
                        <li><strong>Kurumsal Bilgiler:</strong> Şirket adı, ticari unvan, sektör bilgisi, web sitesi.</li>
                        <li><strong>İletişim Bilgileri:</strong> Kurumsal e-posta adresi, şirket telefonu, şirket adresi.</li>
                        <li><strong>İstihdam Bilgileri:</strong> Açılan staj ilanları, aday değerlendirme notları ve süreç bilgileri.</li>
                    </ul>

                    <h4>C. Akademisyenler İçin:</h4>
                    <ul>
                        <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, akademik unvan.</li>
                        <li><strong>Kurum Bilgileri:</strong> Bağlı bulunulan üniversite, fakülte, bölüm ve ofis bilgileri.</li>
                        <li><strong>İletişim Bilgileri:</strong> Kurumsal e-posta adresi, dahili telefon numarası.</li>
                        <li><strong>Akademik Faaliyetler:</strong> Paylaşılan ders materyalleri, öğrenci takip verileri.</li>
                    </ul>

                    <h3>5. Haklarınız</h3>
                    <p>
                        KVKK’nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme haklarına sahipsiniz.
                    </p>
                </div>

                <div className="kvkk-actions">
                    {isApproved ? (
                        <div className="approval-status approved">
                            <FaCheckCircle className="status-icon" />
                            <div>
                                <h4>Onaylandı</h4>
                                <p>Bu metni <strong>{new Date(approvalDate).toLocaleDateString('tr-TR')}</strong> tarihinde saat <strong>{new Date(approvalDate).toLocaleTimeString('tr-TR')}</strong> itibarıyla onayladınız.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="approval-status pending">
                            <FaExclamationCircle className="status-icon" />
                            <div className="approval-form">
                                <p>Yukarıdaki metni okudum, anladım ve kişisel verilerimin bu kapsamda işlenmesini kabul ediyorum.</p>
                                <button
                                    onClick={handleApprove}
                                    className="btn-approve-kvkk"
                                    disabled={processing}
                                >
                                    {processing ? 'İşleniyor...' : 'Kabul Ediyorum ve Onaylıyorum'}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default KVKKPage;
