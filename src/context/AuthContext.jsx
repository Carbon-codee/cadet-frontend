import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // YENİ STATE

    useEffect(() => {
        try {
            const storedUserInfo = localStorage.getItem('userInfo');
            if (storedUserInfo) {
                setUserInfo(JSON.parse(storedUserInfo));
            }
        } catch (error) {
            console.error("localStorage okunurken hata:", error);
            // Hata durumunda da yüklemeyi bitir
        } finally {
            setIsLoading(false); // Kontrol bitti, yükleniyor durumu false
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('userInfo', JSON.stringify(userData));
        setUserInfo(userData);
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('ai_chat_history');
        setUserInfo(null);
    };

    return (
        // isLoading'i de value'ya ekle
        <AuthContext.Provider value={{ userInfo, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};