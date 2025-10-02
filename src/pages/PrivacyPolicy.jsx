import React, { useState } from 'react'; 
import Header from '../components/Layout/Header'; 
import Footer from '../components/Layout/Footer'; 

// Dữ liệu cho Menu điều hướng bên trái (Giữ nguyên)
const privacySections = [
  { id: 1, title: "Privacy Policy overview" },
  { id: 2, title: "Thông tin chúng tôi thu thập" },
  { id: 3, title: "Cách chúng tôi sử dụng thông tin" },
  { id: 4, title: "Cách chúng tôi tiết lộ thông tin" },
  { id: 5, title: "Cách chúng tôi lưu trữ và bảo mật thông tin" },
  { id: 6, title: "Chúng tôi lưu giữ thông tin bao lâu" },
  { id: 7, title: "Cách truy cập và kiểm soát thông tin của bạn" },
  { id: 8, title: "Chính sách của chúng tôi đối với trẻ em" },
  { id: 9, title: "Thay đổi đối với Chính sách quyền riêng tư của chúng tôi" },
  { id: 10, title: "Liên hệ với chúng tôi" },
];

const PrivacyPolicy = () => {
  const [activeSectionId, setActiveSectionId] = useState(1); 

  // --- STYLE CHUNG: ÁP DỤNG CỠ CHỮ 17PX CHO TẤT CẢ NỘI DUNG ---
  const contentTextStyle = {
    fontSize: '17px', 
    lineHeight: '1.6',
    marginBottom: '20px'
  };

  const listStyle = {
    fontSize: '17px', // Cập nhật cỡ chữ list thành 17px
    lineHeight: '1.6', 
    paddingLeft: '25px', 
    marginBottom: '20px'
  };
  // -----------------------------------------------------------

  return (
    <div className="privacy-policy-page">
      <Header />
      
      {/* Container chính cho nội dung chính sách */}
      <div style={{
          display: 'flex',
          maxWidth: '1200px',
          margin: '40px auto',
          padding: '0 20px',
          gap: '40px'
      }}>
        
        {/* Cột Trái: Menu Điều hướng Chính sách (Giữ nguyên) */}
        <aside style={{
          flexShrink: 0,
          width: '250px',
          paddingTop: '20px',
          borderRight: '1px solid #eee',
          position: 'sticky', 
          top: '20px',        
          height: 'fit-content'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            color: '#333',
            marginBottom: '20px'
          }}>
            Chính sách Quyền riêng tư
          </h3>
          <nav>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
              {privacySections.map((section) => {
                const isActive = section.id === activeSectionId;
                
                return (
                  <li 
                    key={section.id} 
                    style={{ marginBottom: '10px' }}
                  >
                    <a 
                      href={`#section-${section.id}`} 
                      onClick={() => setActiveSectionId(section.id)}
                      style={{ 
                        textDecoration: 'none', 
                        color: isActive ? '#4F6457' : '#666', 
                        fontWeight: isActive ? 'bold' : 'normal', 
                        fontSize: '14px', 
                        display: 'block' 
                      }}
                    >
                      {section.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Cột Phải: Nội dung Chính sách */}
        <main style={{ flexGrow: 1, paddingLeft: '20px' }}>
          
          <h1 style={{ 
            fontSize: '40px', 
            fontWeight: 'bold', 
            color: '#333', 
            marginBottom: '10px' 
          }}>
            Privacy Policy
          </h1>
          
          <p style={{ fontSize: '15px', color: '#4F6457', fontWeight: 'bold', marginBottom: '30px' }}>
            Ngày có hiệu lực: 07/10/2025
          </p>

          {/* SECTION 1: Privacy Policy overview - Dùng contentTextStyle (17px) */}
          <section id="section-1" style={{ marginBottom: '50px' }}>
            <p style={contentTextStyle}>
                Quyền riêng tư của bạn là ưu tiên hàng đầu của PlanNex. Chính sách quyền riêng tư này giải thích cách PlanNex thu thập, sử dụng, 
                chia sẻ và bảo vệ thông tin của bạn khi bạn sử dụng các sản phẩm, dịch vụ và trang web của chúng tôi. Chúng tôi cung cấp nhiều loại sản phẩm, 
                bao gồm các giải pháp đám mây và phần mềm theo dõi tiến độ công việc.
            </p>
            <p style={{ ...contentTextStyle, marginBottom: '40px' }}>
                Chính sách này cũng giải thích các lựa chọn của bạn về cách chúng tôi sử dụng thông tin của bạn và cách bạn có thể truy cập và cập nhật 
                một số thông tin nhất định nếu cần.
            </p>
          </section>

          {/* SECTION 2: Thông tin chúng tôi thu thập - Dùng contentTextStyle (17px) */}
          <section id="section-2" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>
                  2. Thông tin chúng tôi thu thập
              </h2>
              <p style={contentTextStyle}>
                  PlanNex thu thập thông tin cá nhân mà bạn tự nguyện cung cấp cho chúng tôi khi đăng ký tài khoản, thể hiện sự quan tâm 
                  đến việc nhận thông tin từ chúng tôi hoặc khi bạn sử dụng các dịch vụ của chúng tôi. 
              </p>
              <h3 style={{ fontSize: '20px', color: '#4F6457', marginTop: '20px', marginBottom: '10px' }}>
                  2.1. Thông tin bạn cung cấp
              </h3>
              <p style={contentTextStyle}>
                  Thông tin đăng ký và hồ sơ: Tên, địa chỉ email, mật khẩu (được mã hóa) khi bạn tạo tài khoản PlanNex.
              </p>
              <p style={contentTextStyle}>
                  Nội dung người dùng: Dữ liệu bạn tạo khi sử dụng dịch vụ, bao gồm tiêu đề dự án, mô tả nhiệm vụ, tiến độ, ngày tháng và bất kỳ 
                  tệp đính kèm nào bạn tải lên.
              </p>
              <h3 style={{ fontSize: '20px', color: '#4F6457', marginTop: '20px', marginBottom: '10px' }}>
                  2.2. Thông tin chúng tôi thu thập tự động
              </h3>
              <p style={contentTextStyle}>
                  Dữ liệu sử dụng: Thông tin về cách bạn tương tác với PlanNex, bao gồm các trang bạn xem, thời gian bạn dành cho các trang đó 
                  và các tính năng bạn sử dụng.
              </p>
              <p style={contentTextStyle}>
                  Dữ liệu thiết bị và kết nối: Địa chỉ IP, loại trình duyệt, múi giờ, thông tin mạng di động và hệ điều hành.
              </p>
          </section>

          {/* SECTION 3: Cách chúng tôi sử dụng thông tin - Dùng contentTextStyle (17px) */}
          <section id="section-3" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>
                  3. Cách chúng tôi sử dụng thông tin
              </h2>
              <p style={contentTextStyle}>
                  Chúng tôi sử dụng thông tin thu thập được để vận hành, duy trì và cung cấp các tính năng của PlanNex, cũng như:
              </p>
              <ul style={listStyle}>
                  <li>Cung cấp, vận hành và duy trì dịch vụ PlanNex của bạn.</li>
                  <li>Cá nhân hóa trải nghiệm của bạn (ví dụ: đề xuất nhiệm vụ, báo cáo tiến độ).</li>
                  <li>Phân tích và cải thiện các tính năng và hiệu suất của dịch vụ.</li>
                  <li>Gửi thông báo dịch vụ, hỗ trợ kỹ thuật và phản hồi yêu cầu của bạn.</li>
                  <li>Ngăn chặn gian lận và đảm bảo tính bảo mật của dịch vụ.</li>
              </ul>
          </section>
          
          {/* SECTION 4: Cách chúng tôi tiết lộ thông tin - Dùng contentTextStyle (17px) */}
          <section id="section-4" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>
                  4. Cách chúng tôi tiết lộ thông tin
              </h2>
              <p style={contentTextStyle}>
                  Chúng tôi có thể chia sẻ thông tin của bạn trong các trường hợp sau:
              </p>
              <ul style={listStyle}>
                  <li>Với các thành viên trong dự án: Khi bạn sử dụng các tính năng cộng tác, nội dung dự án và nhiệm vụ của bạn sẽ được chia sẻ với các 
                    thành viên khác trong cùng một không gian làm việc.</li>
                  <li>Nhà cung cấp dịch vụ bên thứ ba: Chúng tôi có thể chia sẻ thông tin với các đối tác cung cấp dịch vụ lưu trữ đám mây, xử lý thanh toán 
                    và phân tích dữ liệu.</li>
                  <li>Tuân thủ pháp luật: Khi chúng tôi tin rằng việc tiết lộ là cần thiết để tuân thủ luật pháp, quy trình tố tụng, lệnh tòa, 
                    hoặc để bảo vệ quyền lợi của PlanNex, người dùng hoặc công chúng.</li>
              </ul>
          </section>

          {/* SECTION 5: Cách chúng tôi lưu trữ và bảo mật thông tin - Dùng contentTextStyle (17px) */}
          <section id="section-5" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>
                  5. Cách chúng tôi lưu trữ và bảo mật thông tin
              </h2>
              <p style={contentTextStyle}>
                  Bảo mật: Chúng tôi sử dụng các biện pháp bảo mật vật lý, kỹ thuật và quản lý hợp lý để bảo vệ thông tin cá nhân khỏi việc truy cập, 
                  sử dụng hoặc tiết lộ trái phép. Các biện pháp này bao gồm mã hóa dữ liệu truyền tải và lưu trữ, kiểm soát truy cập và giám sát thường xuyên.
              </p>
              <p style={contentTextStyle}>
                  Lưu trữ: Thông tin được lưu trữ trên các máy chủ đám mây an toàn. Dữ liệu của bạn được giữ kín và bảo vệ theo các tiêu chuẩn ngành.
              </p>
          </section>

          {/* SECTION 6: Chúng tôi lưu giữ thông tin bao lâu - Dùng contentTextStyle (17px) */}
          <section id="section-6" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>
                  6. Chúng tôi lưu giữ thông tin bao lâu
              </h2>
              <p style={contentTextStyle}>
                  Chúng tôi giữ lại thông tin cá nhân của bạn miễn là tài khoản của bạn còn hoạt động hoặc khi cần thiết để cung cấp các dịch vụ cho bạn. 
                  Chúng tôi cũng sẽ giữ lại thông tin khi cần thiết để tuân thủ các nghĩa vụ pháp lý, giải quyết tranh chấp và thực thi các thỏa thuận 
                  của chúng tôi. Nếu bạn yêu cầu xóa tài khoản, chúng tôi sẽ thực hiện xóa dữ liệu cá nhân theo quy trình xóa của chúng tôi.
              </p>
          </section>

          {/* SECTION 7: Cách truy cập và kiểm soát thông tin của bạn - Dùng contentTextStyle (17px) */}
          <section id="section-7" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>
                  7. Cách truy cập và kiểm soát thông tin của bạn
              </h2>
              <p style={contentTextStyle}>
                  Bạn có quyền truy cập, chỉnh sửa hoặc xóa thông tin cá nhân của mình bất cứ lúc nào thông qua cài đặt tài khoản PlanNex của bạn. 
                  Bạn cũng có thể liên hệ với chúng tôi để yêu cầu truy cập hoặc sửa đổi thông tin mà bạn không thể tự thay đổi.
              </p>
              <p style={contentTextStyle}>
                  Tùy chọn Email: Bạn có thể chọn không nhận các email quảng cáo từ chúng tôi bằng cách làm theo hướng dẫn hủy đăng ký được 
                  cung cấp trong các email đó.
                  
              </p>
          </section>

          {/* SECTION 8: Chính sách của chúng tôi đối với trẻ em - Dùng contentTextStyle (17px) */}
          <section id="section-8" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>
                  8. Chính sách của chúng tôi đối với trẻ em
              </h2>
              <p style={contentTextStyle}>
                  PlanNex không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi. Nếu 
                  chúng tôi biết rằng chúng tôi đã thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi mà không có sự đồng ý của phụ huynh,
                   chúng tôi sẽ thực hiện các bước để xóa thông tin đó khỏi máy chủ của mình.
                  
              </p>
          </section>

          {/* SECTION 9: Thay đổi đối với Chính sách quyền riêng tư của chúng tôi - Dùng contentTextStyle (17px) */}
          <section id="section-9" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>
                  9. Thay đổi đối với Chính sách quyền riêng tư của chúng tôi
              </h2>
              <p style={contentTextStyle}>
                  Chúng tôi có thể cập nhật Chính sách quyền riêng tư này theo thời gian. Khi chúng tôi thay đổi Chính sách này, chúng tôi sẽ 
                  cập nhật ngày "Ngày có hiệu lực" ở đầu trang. Chúng tôi khuyến khích bạn xem lại Chính sách quyền riêng tư định kỳ để luôn được 
                  thông báo về cách chúng tôi bảo vệ thông tin của bạn.
              </p>
          </section>

          {/* SECTION 10: Liên hệ với chúng tôi - Dùng contentTextStyle (17px) */}
          <section id="section-10" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>
                  10. Liên hệ với chúng tôi
              </h2>
              <p style={contentTextStyle}>
                  Nếu bạn có bất kỳ câu hỏi nào về Chính sách quyền riêng tư này hoặc về các phương pháp xử lý dữ liệu của PlanNex,
                   vui lòng liên hệ với chúng tôi theo địa chỉ:
              </p>
              <ul style={listStyle}>
                  <li>Email: plannex@gmail.com</li>
                  <li>Địa chỉ: [Địa chỉ văn phòng PlanNex, 123 Đường Nguyễn Văn Linh, Quận Hải Châu, TP.Đà Nẵng]</li>
              </ul>
          </section>

        </main>

      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;