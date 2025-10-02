import React from 'react';
// 1. Import useNavigate từ react-router-dom
import { useNavigate } from 'react-router-dom'; 

import Header from '../../src/components/Layout/Header'; 
import Footer from '../../src/components/Layout/Footer'; 
import '../../src/styles/Home.css';

const Home = () => {
  const navigate = useNavigate();


  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  return (
    <div className="home-page">
      {/* Banner hỗ trợ nhỏ trên cùng, dưới Header */}
      <section className="support-banner-top" style={{
        backgroundColor: '#4F6457', 
        color: 'white',
        padding: '10px 50px',
        textAlign: 'center',
        fontSize: '16px'
      }}>
          Hỗ trợ người dùng quản lý công việc một cách hiệu quả và tối ưu
      </section>

      <Header />
      
      {/* Phần Nội dung Chính */}
      <main className="home-main" style={{padding: '0 50px'}}>
        
        {/* Phần 1: Hero Section */}
        <section className="hero-section" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '80px 0',
            gap: '50px'
        }}>
          <div className="hero-content" style={{maxWidth: '50%'}}>
            <h1 style={{fontSize: '40px', fontWeight: 'bold', marginBottom: '15px'}}>
              Ghi lại, sắp xếp và giải quyết
              việc cần làm từ bất cứ đâu.
            </h1>
            <p style={{fontSize: '18px', marginBottom: '30px'}}>
              Là nơi liên kết quản lý dự án PlanNex
            </p>
            {/* 3. Thêm onClick vào nút Đăng ký */}
            <button 
              className="cta-button" 
              style={{
                backgroundColor: '#75B1A9',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '16px'
              }}
              onClick={handleRegisterClick} 
            >
              Đăng kí - hoàn toàn miễn phí
            </button>
            <p className="privacy-text" style={{fontSize: '16px', marginTop: '15px', color: '#666'}}>
              Khi đăng kí tài khoản, tôi thừa nhận <a href="/privacy" style={{color: '#388E3C', textDecoration: 'none'}}>Chính sách quyền riêng tư của PlanNex</a>
            </p>
          </div>
          <div className="hero-image" style={{maxWidth: '50%'}}>
            {/* Hình ảnh minh họa */}
            <img 
              src="https://i0.wp.com/crmviet.vn/wp-content/uploads/2019/09/phan-mem-quan-ly-cong-viec-ca-nhan.png?ssl=1" 
              alt="Minh họa quản lý công việc PlanNex"
              style={{maxWidth: '100%', height: 'auto'}}
            />
          </div>
        </section>

        {/* Phần 2: Thông tin cơ bản về PlanNex */}
        <section className="info-section" style={{
            textAlign: 'center',
            padding: '80px 15%',
            backgroundColor: '#f9f9f9' 
        }}>
          <div className="info-box">
            <p className="subtitle" style={{color: '#4F6457',fontSize: '18px', fontWeight: 'bold', marginBottom: '10px'}}>THÔNG TIN CƠ BẢN VỀ PLANNEX</p>
            <h2 style={{fontSize: '32px', marginBottom: '20px'}}>Công cụ thúc đẩy năng suất của bạn</h2>
            <p style={{fontSize: '20px', lineHeight: '1.6'}}>
              Luôn sắp xếp khoa học và hiệu quả nhờ Hộp thư đến, Bảng và Công cụ lập kế hoạch. Mọi việc cần làm, ý tưởng hay trách nhiệm – dù lớn hay nhỏ – đều có vị trí phù hợp, giúp bạn luôn dẫn đầu trong công việc.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;