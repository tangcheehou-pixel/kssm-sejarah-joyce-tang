import React, { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { JOYCE_SLUG } from './services/db';
import { StudentPortalPage } from './pages/StudentPortalPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AdminNewStudentPage } from './pages/AdminNewStudentPage';

const PathnameToHashBridge: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const p = window.location.pathname;
    if (!window.location.hash || window.location.hash === '#/') {
      const portalIdx = p.indexOf('/portal/');
      const adminNewIdx = p.indexOf('/admin/students/new');
      const adminIdx = p.indexOf('/admin');
      if (portalIdx >= 0) {
        navigate(p.slice(portalIdx), { replace: true });
      } else if (adminNewIdx >= 0) {
        navigate('/admin/students/new', { replace: true });
      } else if (adminIdx >= 0) {
        navigate('/admin', { replace: true });
      }
    }
  }, [navigate]);
  return null;
};

export const App: React.FC = () => {
  return (
    <HashRouter>
      <PathnameToHashBridge />
      <Routes>
        <Route path="/" element={<Navigate to={`/portal/${JOYCE_SLUG}`} replace />} />
        <Route path="/portal/:studentSlug" element={<StudentPortalPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/students/new" element={<AdminNewStudentPage />} />
        <Route path="*" element={<Navigate to={`/portal/${JOYCE_SLUG}`} replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
