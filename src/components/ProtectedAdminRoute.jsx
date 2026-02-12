import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedAdminRoute = ({ children }) => {
    const { userInfo, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) return <div>Yükleniyor...</div>;

    if (!userInfo || userInfo.role !== 'admin') {
        // Redirect to homepage or displaying unauthorized message
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedAdminRoute;
