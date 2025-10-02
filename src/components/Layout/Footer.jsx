import React from 'react';
// import './Footer.css'; // File CSS cho Footer

const Footer = () => {
    // Style cơ bản để mô phỏng giao diện
    const footerStyle = {
        backgroundColor: '#4F6457', // Màu xanh đậm/xanh rêu từ ảnh
        color: 'white',
        padding: '30px 50px 10px 50px',
    };

    const topSectionStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '20px',
        borderBottom: '1px solid #555',
    };

    const linkColumnStyle = {
        flex: 1,
        minWidth: '200px',
    };

    const linkItemStyle = {
        marginBottom: '10px',
    };

    const bottomSectionStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '15px',
        fontSize: '14px',
    };

    const linkFooterStyle = {
        color: 'white',
        textDecoration: 'none',
        marginLeft: '20px'
    }

    return (
        <footer style={footerStyle}>
            {/* Phần trên: Các liên kết */}
            <div style={topSectionStyle}>
                <div style={linkColumnStyle}>
                    <p style={{fontWeight: 'bold', marginBottom: '15px'}}>PlanNex</p>
                    <p style={linkItemStyle}>Công nghệ nền tảng</p>
                </div>
                <div style={linkColumnStyle}>
                    <p style={{fontWeight: 'bold', marginBottom: '15px'}}>Việc làm</p>
                    <p style={linkItemStyle}>Tìm hiểu về vai trò chưa ai đảm nhiệm trong PlanNex</p>
                </div>
                <div style={linkColumnStyle}>
                    <p style={{fontWeight: 'bold', marginBottom: '15px'}}>Ứng dụng</p>
                    <p style={linkItemStyle}>Tải xuống ứng dụng PlanNex cho máy tính</p>
                </div>
                <div style={linkColumnStyle}>
                    <p style={{fontWeight: 'bold', marginBottom: '15px'}}>Liên hệ với chúng tôi</p>
                    <p style={linkItemStyle}>Bạn cần giúp đỡ? Hãy liên hệ để tối có thể giúp bạn</p>
                </div>
            </div>

            {/* Phần dưới: Ngôn ngữ, Chính sách, Thuật ngữ */}
            <div style={bottomSectionStyle}>
                <div>
                    <span>🌐 Tiếng Việt</span>
                </div>
                <div>
                    <a href="#" style={linkFooterStyle}>Chính sách riêng tư</a>
                    <a href="#" style={linkFooterStyle}>Thuật ngữ</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;