import React from 'react';
import Navbar from './Navbar';
import AiAssistant from '../AiAssistant';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
    const location = useLocation();

    // Hide assistant only on session page (study-plan/:id/day/:num)
    const isSessionPage = location.pathname.match(/\/study-plan\/.*\/day\/\d+/);

    return (
        <>
            <Navbar />
            {/* Bu div, içeriğin Navbar'ın altına itilmesini sağlar */}
            <div className="content-pusher">
                {children}
            </div>
            {!isSessionPage && <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}><AiAssistant /></div>}
        </>
    );
};

export default MainLayout;