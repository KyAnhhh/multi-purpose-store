import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-center">
        {/* Hình minh họa bên trái */}
        <div className="col-md-5 d-none d-md-block" data-aos="fade-right">
          <img
            src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
            alt="About Multi-Purpose Store"
            className="img-fluid rounded-4 shadow"
          />
        </div>
        {/* Nội dung bên phải */}
        <div className="col-md-7" data-aos="fade-left" style={{paddingLeft: "45px"}}>
          <h1 className="text-primary fw-bold mb-4">Về Multi-Purpose Store</h1>
          <p className="lead mb-4">
            Multi-Purpose Store là nơi bạn có thể tìm thấy mọi sản phẩm phục vụ cho nhu cầu cá nhân, gia đình và công việc...
          </p>
          <div className="row mb-4">
            <div className="col-12 col-sm-4 mb-3 mb-sm-0" data-aos="zoom-in">
              <div className="bg-light rounded-3 p-3 h-100 text-center shadow-sm">
                <i className="bi bi-truck text-primary fs-2 mb-2"></i>
                <div className="fw-semibold">Giao hàng nhanh</div>
                <div className="small text-muted">Toàn quốc</div>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-3 mb-sm-0" data-aos="zoom-in" data-aos-delay="100">
              <div className="bg-light rounded-3 p-3 h-100 text-center shadow-sm">
                <i className="bi bi-shield-lock text-primary fs-2 mb-2"></i>
                <div className="fw-semibold">Thanh toán an toàn</div>
                <div className="small text-muted">Nhiều phương thức</div>
              </div>
            </div>
            <div className="col-12 col-sm-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="bg-light rounded-3 p-3 h-100 text-center shadow-sm">
                <i className="bi bi-headset text-primary fs-2 mb-2"></i>
                <div className="fw-semibold">Hỗ trợ 24/7</div>
                <div className="small text-muted">Tận tâm, chuyên nghiệp</div>
              </div>
            </div>
          </div>
          <p>
            Đội ngũ Multi-Purpose Store luôn nỗ lực không ngừng để nâng cao chất lượng dịch vụ, cập nhật sản phẩm mới và mang lại giá trị tốt nhất cho khách hàng.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
