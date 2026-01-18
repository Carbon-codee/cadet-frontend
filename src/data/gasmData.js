// src/data/gasmData.js

// 1. Ders Notları (İçi boş şimdilik)
export const lectureData = {
    "Deniz Hukuku": "<h3>İçerik yakında eklenecek...</h3>",
    "Stabilite": "<h3>İçerik yakında eklenecek...</h3>",
    "Gemicilik": "<h3>İçerik yakında eklenecek...</h3>",
    "İngilizce": "<h3>İçerik yakında eklenecek...</h3>",
    "Seyir": "<h3>İçerik yakında eklenecek...</h3>",
    "Vardiya Standartları": "<h3>İçerik yakında eklenecek...</h3>"
};

// 2. Dummy Soru Oluşturucu
export const generateDummyQuestions = (ders, adet) => {
    let arr = [];
    for (let i = 1; i <= adet; i++) {
        arr.push({
            id: i,
            q: `${ders} için örnek soru ${i}?`,
            options: ["A", "B", "C", "D", "E"],
            answer: 0
        });
    }
    return arr;
};

// 3. Soru Havuzu (Otomatik doldurulmuş temiz hali)
export const soruHavuzu = {
    "Deniz Hukuku": generateDummyQuestions("Deniz Hukuku", 10),
    "Stabilite": generateDummyQuestions("Stabilite", 10),
    "Gemicilik": generateDummyQuestions("Gemicilik", 10),
    "İngilizce": generateDummyQuestions("İngilizce", 10),
    "Seyir": generateDummyQuestions("Seyir", 10),
    "Vardiya Standartları": generateDummyQuestions("Vardiya Standartları", 10)
};