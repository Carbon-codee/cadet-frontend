import axios from 'axios';

// Temel API adresini burada tanımla
const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Request Interceptor: Her istek gönderilmeden önce çalışacak fonksiyon
API.interceptors.request.use((req) => {
    // localStorage'da userInfo varsa, token'ı al
    const userInfo = localStorage.getItem('userInfo');

    if (userInfo) {
        // İsteğin headers.Authorization kısmına token'ı 'Bearer' formatında ekle
        req.headers.Authorization = `Bearer ${JSON.parse(userInfo).token}`;
    }

    return req; // Değiştirilmiş isteği geri döndür
});

export default API;