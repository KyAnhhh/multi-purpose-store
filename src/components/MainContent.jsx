import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/MainContent.css"
const services = [
  {
    id: 1,
    title: "Giao hàng nhanh",
    description: "Chúng tôi đảm bảo giao hàng trong vòng 24h.",
    icon: "🚚",
  },
  {
    id: 2,
    title: "Thanh toán an toàn",
    description: "Hỗ trợ nhiều phương thức thanh toán bảo mật.",
    icon: "🔒",
  },
  {
    id: 3,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ.",
    icon: "📞",
  },
];

function MainContent() {
  return (
    <main className="main-content">
      {/* Banner */}
      <section className="banner-section text-white text-center position-relative">
      {/* Lớp phủ mờ */}
      <div className="banner-overlay"></div>

      {/* Nội dung */}
      <div className="container position-relative banner-content">
        <div className="row justify-content-center align-items-center min-vh-70">
          <div className="col-md-8">
            <h1 className="display-4 fw-bold mb-3">Chào mừng đến với Multi-Purpose Store</h1>
            <p className="lead mb-4">
              Nơi bạn tìm thấy mọi thứ từ đồ dùng cá nhân đến thiết bị công nghệ.
            </p>
            <Link to="/products" className="btn btn-warning btn-lg px-4">
  Khám phá ngay
</Link>
          </div>
        </div>
      </div>
    </section>

      {/* Dịch vụ */}
      <section className="services">
  <h2 className="services-title">Dịch vụ của chúng tôi</h2>
  <div className="services-grid">
    {services.map(({ id, title, description, icon }) => (
      <div key={id} className="service-item">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    ))}
  </div>
</section>

    </main>
  );
}

export default MainContent;
