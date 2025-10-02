// src/components/Auth/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthLayout from './AuthLayout'; 

import Logo from '../../assets/images/planex-logo.png'; 
import GoogleIcon from '../../assets/icons/google-icon.png';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 1. Gọi API đăng nhập
    console.log("Đăng nhập với dữ liệu:", formData);

    // Giả lập thành công: Lưu token và chuyển hướng đến dashboard
    navigate('/boards'); 
  };

  return (
    <AuthLayout>
      <img src={Logo} alt="PlanNex Logo" className="logo" />
      <h2>Đăng nhập để tiếp tục</h2>
      
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Nhập email của bạn"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <button type="submit" className="primary-button">
          ĐĂNG NHẬP
        </button>
      </form>
      
      <button className="google-button">
        <img src={GoogleIcon} alt="Google Icon" />
        Google
      </button>

      <div className="auth-link">
        <Link to="/forgot-password">Quên mật khẩu?</Link>
        <br/><br/>
        Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
