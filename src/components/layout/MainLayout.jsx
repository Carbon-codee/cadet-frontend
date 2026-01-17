import React from 'react';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {/* Bu div, içeriğin Navbar'ın altına itilmesini sağlar */}
            <div className="content-pusher">
                {children}
            </div>
        </>
    );
};

export default MainLayout;