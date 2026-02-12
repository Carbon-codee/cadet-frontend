import React, { createContext, useContext, useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import { useAuth } from './AuthContext';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const { user } = useAuth();

    // 1. Önce localStorage kontrol edilir, yoksa sistem tercihi, yoksa 'light'
    const getInitialTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) return storedTheme;

        // Kullanıcının sistem temasını kontrol et
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // Kullanıcı giriş yaptığında (veya login olduğunda) backend tercihini senkronize et
    useEffect(() => {
        if (user && user.themePreference) {
            setTheme(user.themePreference);
        }
    }, [user]);

    // Tema değiştiğinde DOM'a uygula ve kaydet
    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = async () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        // Backend'e kaydet (eğer giriş yapmışsa)
        if (user) {
            try {
                await API.put('/users/profile/theme', { theme: newTheme });
            } catch (error) {
                console.error("Tema tercihi backend'e kaydedilemedi:", error);
            }
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
