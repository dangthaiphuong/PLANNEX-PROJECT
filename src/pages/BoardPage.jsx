import React from 'react';
import MainSidebar from '../components/Layout/MainSidebar'; 
import BoardHeader from '../components/Board/BoardHeader';

const BoardPage = () => {

    const workspaces = [
        { id: 1, name: "CÁC KHÔNG GIAN LÀM VIỆC CỦA BẠN", boards: [] },
        { id: 2, name: "CÁC KHÔNG GIAN LÀM VIỆC KHÁCH", boards: [
            { id: 201, title: "Cap1", initial: "C" },
        ] },
    ];
    
    const recentlyViewedBoard = { title: "CAPSTONE1", initial: "C" };
    
    // --- STYLES DÀN TRANG CHUNG ---
    const pageContainerStyle = {
        backgroundColor: '#f4f5f7',
        minHeight: '100vh', 
    };

    const mainContentStyle = {
        // Bù trừ cho Header (40px) và Sidebar (280px)
        marginTop: '40px', 
        marginLeft: '280px',
        
        padding: '30px 40px',
        overflowY: 'auto'
    };
    
    // --- STYLES NỘI DUNG --- (Giữ nguyên màu xanh lục bảo của bạn #4F6457)
    const topBarStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' };
    const searchInputStyle = { padding: '8px 15px', fontSize: '15px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' };
    const createButtonStyle = { padding: '10px 15px', fontSize: '15px', fontWeight: 'bold', backgroundColor: '#4F6457', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' };
    const boardGridStyle = { display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '15px' };
    const boardItemStyle = { width: '240px', height: '100px', borderRadius: '5px', backgroundColor: '#4F6457', color: 'white', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' };
    const boardHeaderStyle = { fontSize: '16px', fontWeight: 'bold', color: '#7a877fff', marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #dfe1e6', paddingBottom: '5px' };
    const boardIconStyle = { width: '30px', height: '30px', borderRadius: '3px', backgroundColor: '#ebecf0', color: '#4F6457', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px', marginRight: '10px' };
    const linkStyle = { fontSize: '14px', color: '#4F6457', textDecoration: 'underline', cursor: 'pointer' };


    return (
        // Dùng Fragment để render Header cố định
        <>
            <BoardHeader /> 
            
            <div style={pageContainerStyle}>
                
                {/* Sidebar (Fixed) */}
                <MainSidebar /> 

                {/* NỘI DUNG CHÍNH (Cuộn được, đã bù trừ margin) */}
                <main style={mainContentStyle}>

                    {/* Đã xem gần đây */}
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={boardHeaderStyle}>Đã xem gần đây</h3>
                        <div style={boardGridStyle}>
                            <div style={boardItemStyle}>{recentlyViewedBoard.title}</div>
                        </div>
                    </div>
                    
                    {/* Lặp qua các Không gian làm việc */}
                    {workspaces.map((workspace) => (
                        <div key={workspace.id} style={{ marginBottom: '40px' }}>
                            <h3 style={boardHeaderStyle}>{workspace.name}</h3>
                            <div style={boardGridStyle}>
                                {workspace.boards.length > 0 ? (
                                    workspace.boards.map((board) => (
                                        <div key={board.id} style={boardItemStyle}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={boardIconStyle}>{board.initial}</div>
                                                <span>{board.title}</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p style={{ color: '#7a877fff', fontSize: '14px' }}>
                                        Bạn không phải là thành viên của bất kỳ không gian làm việc nào. 
                                        <span style={linkStyle}> Tạo không gian làm việc</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                    
                    {/* Nút Xem thêm */}
                    <button 
                        style={{ ...createButtonStyle, backgroundColor: '#ebecf0', color: '#5e6c84', padding: '8px 15px', fontWeight: 'normal', marginTop: '20px' }}
                    >
                        Xem tất cả các bảng đã đóng
                    </button>

                </main>
            </div>
        </>
    );
};

export default BoardPage;