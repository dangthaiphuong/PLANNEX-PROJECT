// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import RegisterPage from './components/Auth/RegisterPage'; 
import LoginPage from './components/Auth/LoginPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BoardPage from './pages/BoardPage';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Tạm thời đặt trang Đăng ký là trang chủ */}
        <Route path="/" element={<Home />} /> 
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/boards" element={<BoardPage />} /> 
      </Routes>
    </Router>
  );
};

export default AppRouter;
