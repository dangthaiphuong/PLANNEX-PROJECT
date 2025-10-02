import React from 'react';

const MainSidebar = () => {
    
    const sidebarItems = [
        { name: 'Bảng', icon: '🗓️', active: true, href: '/boards' },
        { name: 'Trang chủ', icon: '🏠', active: false, href: '/home' },
    ];
    
    // --- STYLES SIDEBAR ---
    const sidebarStyle = {
        width: '280px', 
        backgroundColor: 'white',
        borderRight: '1px solid #dfe1e6',

        // Cố định vị trí ngay dưới Header
        position: 'fixed', 
        top: '40px', 
        left: 0,
        height: 'calc(100vh - 40px)', 
        zIndex: 100, 
        overflowY: 'auto', // Đảm bảo Sidebar cuộn nếu nội dung quá dài
    };

    const itemStyle = (active) => ({
        padding: '8px 12px',
        fontSize: '14px',
        color: '#1c1c1cff', 
        // Màu nền Trello cho mục active: xanh nhạt (#e4f0f6)
        backgroundColor: active ? '#e4f0f6' : 'transparent', 
        borderRadius: '3px',
        margin: '2px 8px', // Thêm margin để nó không chạm lề
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none', 
    });
    
    // Style cho phần "Tạo không gian làm việc"
    const sectionTitleStyle = {
        fontSize: '11px',
        fontWeight: 'bold',
        color: '#5e6c84',
        padding: '0 16px',
        marginTop: '20px',
        marginBottom: '5px',
        textTransform: 'uppercase',
    };
    

    return (
        <div style={sidebarStyle}>
            {/* Thanh trên cùng (Bảng & Trang chủ) */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0' }}>
                {sidebarItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href} style={itemStyle(item.active)}>
                            <span style={{ marginRight: '10px' }}>{item.icon}</span>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
            
            {/* Phần Không gian làm việc */}
            <div style={{ padding: '0 0 10px 0', borderTop: '1px solid #dfe1e6', margin: '0 8px' }}>
                <div style={sectionTitleStyle}>
                    Không gian làm việc
                </div>
                {/* Dòng Tạo mới */}
                <a href="#" style={{ ...itemStyle(false), fontWeight: 'normal', color: '#1c1c1c' }}>
                    + Tạo không gian làm việc
                </a>
            </div>
            
            {/* Bạn có thể thêm các WorkspaceItem ở đây nếu cần */}
        </div>
    );
};

export default MainSidebar;