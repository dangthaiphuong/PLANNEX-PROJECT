import React from 'react';

const BoardHeader = () => {

    // --- STYLES BOARD HEADER ---
    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 20px', 
        backgroundColor: '#4F6457',
        color: 'white',
        height: '40px',
        

        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 101, 
    };
    
    const headerButtonStyle = {
        padding: '6px 10px',
        fontSize: '14px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        fontWeight: 'normal',
        marginLeft: '8px',
    };

    return (
        <header style={headerStyle}>
            {/* Phần Trái: Logo, Bảng, Tìm kiếm */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="/boards" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginRight: '20px', cursor: 'pointer', textDecoration: 'none' }}>
                    PlanNex
                </a>
                
                <button style={headerButtonStyle}>
                    Bảng
                </button>
                
                <input 
                    type="text" 
                    placeholder="Tìm kiếm" 
                    style={{ ...headerButtonStyle, backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '180px', marginLeft: '10px'}} 
                />
            </div>

            {/* Phần Phải: Tạo mới, Icons, Avatar */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                
                <button style={{ ...headerButtonStyle, backgroundColor: 'white', color: '#1d212b', fontWeight: 'bold' }}>
                    Tạo mới
                </button>
                
                <div style={headerButtonStyle}>🔔</div> 
                
                {/* Avatar Người dùng (Giả định) */}
                <div style={{ marginLeft: '10px', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#a6c5e2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold' }}>
                    T
                </div>
            </div>
        </header>
    );
};

export default BoardHeader;