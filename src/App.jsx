import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout ve Koruma
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Sayfalar
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import LearningPage from './pages/LearningPage';
import LearningDetailPage from './pages/LearningDetailPage';
import ProfilePage from './pages/ProfilePage';
import ProfileUpdatePage from './pages/ProfileUpdatePage';
import UserInfoPage from './pages/UserInfoPage';
import MyInternshipsPage from './pages/MyInternshipsPage';
import CreateInternshipPage from './pages/CreateInternshipPage';
import ApplicantsPage from './pages/ApplicantsPage';
import InternshipDetailPage from './pages/InternshipDetailPage';
import LecturerDashboard from './pages/LecturerDashboard';
import LecturerContentPage from './pages/LecturerContentPage';
import LecturerUploadPage from './pages/LecturerUploadPage';
import LecturerStudentTrackingPage from './pages/LecturerStudentTrackingPage';
import GasmPage from './pages/GasmPage';
import SavedContentPage from './pages/SavedContentPage';
import MyApplicationsPage from './pages/MyApplicationsPage';
import InternshipsPage from './pages/InternshipsPage';
import CompanyDashboard from './pages/CompanyDashboard';
import CompanyApplicationsHub from './pages/CompanyApplicationsHub'; // BU IMPORT EKSİKTİ

function App() {
  return (
    <Router>
      <Routes>
        {/* =========================================
           1. HERKESE AÇIK (PUBLIC) ROTALAR
           ========================================= */}
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/verify-email/:token" element={<VerifyEmailPage />} />

        {/* =========================================
           2. KORUMALI (PRIVATE) ROTALAR
           ========================================= */}

        {/* Profil ve Hesap Ayarları */}
        <Route path="/profile" element={<ProtectedRoute><MainLayout><ProfilePage /></MainLayout></ProtectedRoute>} />
        <Route path="/profile/:id" element={<ProtectedRoute><MainLayout><ProfilePage /></MainLayout></ProtectedRoute>} />
        <Route path="/profile/update" element={<ProtectedRoute><MainLayout><ProfileUpdatePage /></MainLayout></ProtectedRoute>} />
        <Route path="/user-info" element={<ProtectedRoute><MainLayout><UserInfoPage /></MainLayout></ProtectedRoute>} />

        {/* Öğrenci Bölümü */}
        <Route path="/internships" element={<ProtectedRoute><MainLayout><InternshipsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/internships/:id" element={<ProtectedRoute><MainLayout><InternshipDetailPage /></MainLayout></ProtectedRoute>} />
        <Route path="/my-applications" element={<ProtectedRoute><MainLayout><MyApplicationsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/learning" element={<ProtectedRoute><MainLayout><LearningPage /></MainLayout></ProtectedRoute>} />
        <Route path="/learning/:id" element={<ProtectedRoute><MainLayout><LearningDetailPage /></MainLayout></ProtectedRoute>} />
        <Route path="/saved-content" element={<ProtectedRoute><MainLayout><SavedContentPage /></MainLayout></ProtectedRoute>} />
        <Route path="/gasm" element={<ProtectedRoute><MainLayout><GasmPage /></MainLayout></ProtectedRoute>} />

        {/* Şirket Bölümü */}
        <Route path="/company/dashboard" element={<ProtectedRoute><MainLayout><CompanyDashboard /></MainLayout></ProtectedRoute>} />
        <Route path="/company/my-internships" element={<ProtectedRoute><MainLayout><MyInternshipsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/company/create-internship" element={<ProtectedRoute><MainLayout><CreateInternshipPage /></MainLayout></ProtectedRoute>} />
        <Route path="/company/edit-internship/:id" element={<ProtectedRoute><MainLayout><CreateInternshipPage /></MainLayout></ProtectedRoute>} />

        {/* ADAYLAR BÖLÜMÜ (DÜZELTİLEN KISIM BURASI) */}
        <Route path="/company/applicants" element={<ProtectedRoute><MainLayout><CompanyApplicationsHub /></MainLayout></ProtectedRoute>} />
        <Route path="/company/applicants/:id" element={<ProtectedRoute><MainLayout><ApplicantsPage /></MainLayout></ProtectedRoute>} />

        {/* Akademisyen Bölümü */}
        <Route path="/lecturer/dashboard" element={<ProtectedRoute><MainLayout><LecturerDashboard /></MainLayout></ProtectedRoute>} />
        <Route path="/lecturer/my-content" element={<ProtectedRoute><MainLayout><LecturerContentPage /></MainLayout></ProtectedRoute>} />
        <Route path="/lecturer/upload" element={<ProtectedRoute><MainLayout><LecturerUploadPage /></MainLayout></ProtectedRoute>} />
        <Route path="/lecturer/student-status" element={<ProtectedRoute><MainLayout><LecturerStudentTrackingPage /></MainLayout></ProtectedRoute>} />

      </Routes>
    </Router>
  );
}

export default App;