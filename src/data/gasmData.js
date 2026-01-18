

export const lectureData = {
    "Deniz Hukuku": `
        <h3>Deniz Hukukuna Giriş</h3>
        <p>Deniz hukuku, denizlerin kullanımı, gemilerin işletilmesi ve deniz ticaretini düzenleyen hukuk dalıdır.</p>
        <h3>Temel Tanımlar</h3>
        <ul>
            <li><b>Karasuları:</b> Sahil devletinin tam egemenliğe sahip olduğu deniz kuşağıdır.</li>
            <li><b>MEB:</b> Münhasır Ekonomik Bölge.</li>
        </ul>
        <h3>MARPOL 73/78</h3>
        <p>Gemilerden kaynaklanan kirliliğin önlenmesi için en önemli uluslararası sözleşmedir.</p>
    `,
    "Stabilite": `
        <h3>Gemi Stabilitesi</h3>
        <p>Stabilite, geminin dengesi bozulduğunda tekrar eski konumuna gelebilme yeteneğidir.</p>
        <h3>GM Yüksekliği</h3>
        <p>G ile M arasındaki mesafedir. Pozitif GM kararlı denge demektir.</p>
    `,
    "Gemicilik": `<h3>Gemicilik Esasları</h3><p>Halatlar, donanımlar ve bağlama yöntemleri.</p>`,
    "İngilizce": `<h3>SMCP</h3><p>Standart Denizcilik İletişim Kalıpları.</p>`,
    "Seyir": `<h3>Seyir (Navigasyon)</h3><p>Emniyetli rota takibi ve seyir yardımcıları.</p>`,
    "Vardiya Standartları": `<h3>STCW</h3><p>Vardiya tutma standartları ve kuralları.</p>`
};

export const soruHavuzu = {
    "Deniz Hukuku": [],
    "Stabilite": [],
    "Gemicilik": [],
    "İngilizce": [],
    "Seyir": [],
    "Vardiya Standartları": []
};

// Dummy soru oluşturucu
export const generateDummyQuestions = (ders, adet) => {
    let arr = [];
    for (let i = 1; i <= adet; i++) {
        arr.push({
            id: i,
            q: `${ders} için örnek soru ${i} metni buraya gelecek?`,
            options: ["Seçenek A", "Seçenek B", "Seçenek C", "Seçenek D", "Seçenek E"],
            answer: Math.floor(Math.random() * 5)
        });
    }
    return arr;
};

