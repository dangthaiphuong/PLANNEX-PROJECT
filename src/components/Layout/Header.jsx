import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

// Dữ liệu cho Dropdown Tính năng
const simpleFeaturesList = [
    { title: 'Hộp thư đến', href: '#' },
    { title: 'Công cụ lập kế hoạch', href: '#' },
    { title: 'Tự động hóa', href: '#' },
    { title: 'Tích hợp', href: '#' },
];

// DỮ LIỆU MỚI: Dữ liệu cho Dropdown Tài liệu
const simpleResourcesList = [
    { title: 'Hướng dẫn sử dụng', href: '#' },
    { title: 'Câu hỏi thường gặp (FAQ)', href: '#' },
    { title: 'Cộng đồng & Hỗ trợ', href: '#' },
];


const Header = () => {
    // STATE: Quản lý trạng thái mở của Dropdowns
    const [isFeaturesMenuOpen, setIsFeaturesMenuOpen] = useState(false);
    // STATE MỚI: Quản lý trạng thái mở của Dropdown Tài liệu
    const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
    
    const navigate = useNavigate(); 

    const handleRegisterClick = () => {
       
        navigate('/register'); 
    };

    // --- STYLES CHUNG ---
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        backgroundColor: 'white',
        borderBottom: '1px solid #eee',
        position: 'relative', 
        top: 0,
        zIndex: 100
    };

    const navLinkStyle = {
        margin: '0 15px',
        textDecoration: 'none',
        color: '#333',
        fontWeight: 500,
        display: 'block', 
        padding: '10px 0', 
    };

    const navMenuStyle = {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: 0
    }

    const loginButtonStyle = {
        backgroundColor: '#4F6457', 
        color: 'white',
        border: 'none',
        padding: '8px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginLeft: '20px'
    };
    
    const navItemStyle = {
        listStyle: 'none',
        padding: '0 15px',
        position: 'relative',
    };

    // --- STYLES CHO DROPDOWN LIST ---
    const dropdownStyle = {
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: 'white',
        minWidth: '200px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '10px 0',
        listStyle: 'none',
        margin: 0,
        zIndex: 200,
    };
    
    const dropdownItemStyle = {
        padding: '10px 20px',
        fontSize: '15px',
    };
    
    const dropdownLinkStyle = {
        textDecoration: 'none',
        color: '#333',
        display: 'block',
    };
    
    const hoverItemEffect = {
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f4f4f4',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
    };


    return (
        <header style={headerStyle}>
            {/* Logo PlanNex (Trỏ về Home) */}
            <a href="/" style={{ textDecoration: 'none' }} >
                <div 
                    className="logo" 
                    style={{ fontWeight: 'bold', fontSize: '24px', color: '#e9c55cff' }}
                >
                    PlanNex
                </div>
            </a>

            {/* Menu chính */}
            <nav>
                <ul style={navMenuStyle}>
                    <li 
                        style={navItemStyle}
                        onMouseEnter={() => {setIsFeaturesMenuOpen(true); setIsResourcesMenuOpen(false);}} // Mở Feature, đóng Resource
                        onMouseLeave={() => setIsFeaturesMenuOpen(false)}
                    >
                        <a 
                            href="#" 
                            style={{...navLinkStyle, fontWeight: isFeaturesMenuOpen ? 'bold' : 500, color: isFeaturesMenuOpen ? '#4F6457' : '#333' }}
                        >
                            Tính năng
                        </a>
                        
                        {/* HIỂN THỊ DROPDOWN LIST Tính năng */}
                        {isFeaturesMenuOpen && (
                            <ul style={dropdownStyle}>
                                {simpleFeaturesList.map((item, index) => (
                                    <li 
                                        key={index} 
                                        style={dropdownItemStyle}
                                        {...hoverItemEffect}
                                    >
                                        <a href={item.href} style={dropdownLinkStyle}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    
                    {/* MỤC TÀI LIỆU VỚI DROPDOWN LIST */}
                    <li 
                        style={navItemStyle}
                        onMouseEnter={() => {setIsResourcesMenuOpen(true); setIsFeaturesMenuOpen(false);}} // Mở Resource, đóng Feature
                        onMouseLeave={() => setIsResourcesMenuOpen(false)}
                    >
                        <a 
                            href="#" 
                            style={{...navLinkStyle, fontWeight: isResourcesMenuOpen ? 'bold' : 500, color: isResourcesMenuOpen ? '#4F6457' : '#333' }}
                        >
                            Tài liệu
                        </a>
                        
                        {/* HIỂN THỊ DROPDOWN LIST Tài liệu */}
                        {isResourcesMenuOpen && (
                            <ul style={dropdownStyle}>
                                {simpleResourcesList.map((item, index) => (
                                    <li 
                                        key={index} 
                                        style={dropdownItemStyle}
                                        {...hoverItemEffect}
                                    >
                                        <a href={item.href} style={dropdownLinkStyle}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    
                    <li>
                        <button 
                            style={loginButtonStyle}
                            onClick={handleRegisterClick} 
                        >
                            Đăng Nhập
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;