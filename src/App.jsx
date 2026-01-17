import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout ve Sayfa Component'lerini import et
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import InternshipsPage from './pages/InternshipsPage';
import InternshipDetailPage from './pages/InternshipDetailPage';
import ProfilePage from './pages/ProfilePage';
import ProfileUpdatePage from './pages/ProfileUpdatePage';
import MyApplicationsPage from './pages/MyApplicationsPage';
import SavedContentPage from './pages/SavedContentPage';
import UserInfoPage from './pages/UserInfoPage';
import CreateInternshipPage from './pages/CreateInternshipPage';
import ApplicantsPage from './pages/ApplicantsPage';
import MyInternshipsPage from './pages/MyInternshipsPage';
import CompanyApplicationsHub from './pages/CompanyApplicationsHub';
import CompanyDashboard from './pages/CompanyDashboard';
import LecturerUploadPage from './pages/LecturerUploadPage';
import LecturerDashboard from './pages/LecturerDashboard';
import LecturerContentPage from './pages/LecturerContentPage';
import LecturerStudentTrackingPage from './pages/LecturerStudentTrackingPage';
import LearningPage from './pages/LearningPage';
import LearningDetailPage from './pages/LearningDetailPage'; // BU IMPORT'U EKLE
import TestPage from './pages/TestPage';
import VerifyEmailPage from './pages/VerifyEmailPage';


function App() {
  return (
    <Router>
      <main>
        <Routes>
          {/* Public Rotalar */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/learning/:id" element={<ProtectedRoute><MainLayout><LearningDetailPage /></MainLayout></ProtectedRoute>} />
          {/* Korumalı Rotalar */}
          <Route path="/internships" element={<ProtectedRoute><MainLayout><InternshipsPage /></MainLayout></ProtectedRoute>} />
          <Route path="/internships/:id" element={<ProtectedRoute><MainLayout><InternshipDetailPage /></MainLayout></ProtectedRoute>} />

          <Route path="/learning" element={<ProtectedRoute><MainLayout><LearningPage /></MainLayout></ProtectedRoute>} />
          <Route path="/learning/:id" element={<ProtectedRoute><MainLayout><LearningPage /></MainLayout></ProtectedRoute>} />

          <Route path="/profile" element={<ProtectedRoute><MainLayout><ProfilePage /></MainLayout></ProtectedRoute>} />
          <Route path="/profile/:id" element={<ProtectedRoute><MainLayout><ProfilePage /></MainLayout></ProtectedRoute>} />
          <Route path="/profile/update" element={<ProtectedRoute><MainLayout><ProfileUpdatePage /></MainLayout></ProtectedRoute>} />

          <Route path="/my-applications" element={<ProtectedRoute><MainLayout><MyApplicationsPage /></MainLayout></ProtectedRoute>} />
          <Route path="/saved-content" element={<ProtectedRoute><MainLayout><SavedContentPage /></MainLayout></ProtectedRoute>} />
          <Route path="/user-info" element={<ProtectedRoute><MainLayout><UserInfoPage /></MainLayout></ProtectedRoute>} />

          {/* Şirket Rotaları */}
          <Route path="/company/create-internship" element={<ProtectedRoute><MainLayout><CreateInternshipPage /></MainLayout></ProtectedRoute>} />
          {/* YENİ EKLENEN ROTA: Dashboard'daki "Başvuruları İncele" butonu buraya gelecek */}
          <Route path="/company/applicants" element={<ProtectedRoute><MainLayout><CompanyApplicationsHub /></MainLayout></ProtectedRoute>} />
          {/* YENİ EKLENECEK SATIR: Düzenleme Rotası */}
          <Route path="/company/edit-internship/:id" element={<ProtectedRoute><MainLayout><CreateInternshipPage /></MainLayout></ProtectedRoute>} />
          {/* Öğrenci Rotaları altına ekleyebilirsin */}
          <Route path="/learning/:id" element={<ProtectedRoute><MainLayout><LearningDetailPage /></MainLayout></ProtectedRoute>} />
          <Route path="/company/my-internships" element={<ProtectedRoute><MainLayout><MyInternshipsPage /></MainLayout></ProtectedRoute>} />
          <Route path="/company/applicants/:id" element={<ProtectedRoute><MainLayout><ApplicantsPage /></MainLayout></ProtectedRoute>} />
          <Route path="/learning/:id" element={<ProtectedRoute><MainLayout><LearningDetailPage /></MainLayout></ProtectedRoute>} />

          {/* YENİ DASHBOARD ROTASI */}
          <Route path="/company/dashboard" element={<ProtectedRoute><MainLayout><CompanyDashboard /></MainLayout></ProtectedRoute>} />
          <Route path="/lecturer/upload" element={<ProtectedRoute><MainLayout><LecturerUploadPage /></MainLayout></ProtectedRoute>} />
          <Route path="/lecturer/dashboard" element={<ProtectedRoute><MainLayout><LecturerDashboard /></MainLayout></ProtectedRoute>} />
          <Route path="/lecturer/student-status" element={<ProtectedRoute><MainLayout><LecturerStudentTrackingPage /></MainLayout></ProtectedRoute>} />
          <Route path="/lecturer/my-content" element={<ProtectedRoute><MainLayout><LecturerContentPage /></MainLayout></ProtectedRoute>} />
          <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
          {/* Rotaların herhangi bir yerine ekle */}
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;