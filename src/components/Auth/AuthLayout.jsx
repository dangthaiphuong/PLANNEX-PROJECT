// src/components/Auth/AuthLayout.jsx

import React from 'react';
// Import CSS để tạo bố cục 2 cột và styling
import '../../styles/Auth.css';

// Component này nhận prop 'children', là nội dung (form) của LoginPage/RegisterPage
const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      {/* Cột 1: Hiển thị Hình ảnh/Giới thiệu */}
      <div className="auth-image-panel left">
        <div className="image-content">
          <h1>PlanNex</h1>
          <p>Quản lý dự án, tối ưu năng suất và theo dõi tiến độ công việc một cách thông minh.</p>
          
          <img 
            src="https://fastwork.vn/fastwork-request/"  
            alt="PlanNex Illustration"
            style={{ width: '100%', height: 'auto', marginTop: '20px', borderRadius: '8px' }}
          />
        </div>
      </div>
      
      {/* Cột 2: Hiển thị Form Đăng ký/Đăng nhập */}
      <div className="auth-image-panel right">
        <div className="auth-form-container">
          {children} {/* Component LoginPage hoặc RegisterPage được hiển thị tại đây */}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;