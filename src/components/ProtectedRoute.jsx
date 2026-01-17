import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { userInfo, isLoading } = useAuth(); // isLoading'i context'ten al
    const location = useLocation();

    // 1. KONTROL: Context hala localStorage'ı kontrol ediyor mu?
    if (isLoading) {
        // Eğer hala kontrol ediyorsa, hiçbir şey render etme (veya bir "Yükleniyor..." ekranı göster)
        // Bu, erken yönlendirmeyi engelleyen en önemli adımdır.
        return <div>Oturum kontrol ediliyor...</div>;
    }

    // 2. KONTROL: Yükleme bitti, şimdi userInfo'yu kontrol et
    if (!userInfo) {
        // Kullanıcı giriş yapmamışsa, yönlendir.
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    // Her iki kontrol de geçilirse, sayfayı göster.
    return children;
};

export default ProtectedRoute;