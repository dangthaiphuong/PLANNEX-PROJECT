// src/components/Auth/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthLayout from './AuthLayout'; 

import Logo from '../../assets/images/planex-logo.png'; 
import GoogleIcon from '../../assets/icons/google-icon.png';
import '../../styles/Auth.css'; 


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      console.error("Mật khẩu xác nhận không khớp!");
      return;
    }
    
    // 2. Gọi API đăng ký
    console.log("Đăng ký với dữ liệu:", formData);
  };

  return (
    <AuthLayout>
      <img src={Logo} alt="PlanNex Logo" className="logo" />
      <h2>Đăng kí tài khoản</h2>
      
      <form onSubmit={handleRegister}>
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
          placeholder="Tạo mật khẩu của bạn"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Xác nhận lại mật khẩu"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="tel" 
          name="phone"
          placeholder="Nhập số điện thoại"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        
        <button type="submit" className="primary-button">
          ĐĂNG KÝ
        </button>
      </form>
      
      <button className="google-button">
        <img src={GoogleIcon} alt="Google Icon" />
        Google
      </button>

      <div className="auth-link">
        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
