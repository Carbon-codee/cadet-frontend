import axios from 'axios';

// --- YENİ YAPI BAŞLANGICI ---

// Canlıdaki Backend adresini buraya YAPIŞTIR
const PROD_URL = 'https://cadet-api.onrender.com/api';

// Geliştirme ortamı için localhost adresi
const DEV_URL = 'http://localhost:5000/api';

// Projenin "production" modunda mı çalıştığını kontrol et
// Vercel'de bu otomatik olarak 'production' olur.
const isProduction = process.env.NODE_ENV === 'production';

// API objesi oluşturmak yerine, doğrudan axios'u export ediyoruz
// ve her istekte doğru adresi kullanmasını sağlıyoruz.
const API = axios.create({
    baseURL: isProduction ? PROD_URL : DEV_URL,
});

// Interceptor (Token ekleme) kısmı aynı kalıyor
API.interceptors.request.use((req) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
        req.headers.Authorization = `Bearer ${JSON.parse(userInfo).token}`;
    }
    return req;
});

console.log("API adresi şu şekilde ayarlandı:", isProduction ? PROD_URL : DEV_URL);

export default API;
// --- YENİ YAPI SONU ---