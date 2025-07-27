import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-center">
        {/* Form liên hệ bên trái */}
        <div className="col-md-7 mb-4 mb-md-0" data-aos="fade-right">
          <h1 className="text-primary fw-bold mb-4">Liên hệ với chúng tôi</h1>
          <p className="mb-4 text-secondary">
            Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, vui lòng điền vào form dưới đây. Chúng tôi sẽ phản hồi sớm nhất có thể!
          </p>
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="name">Họ và tên</label>
              <input type="text" className="form-control rounded-3" id="name" placeholder="Nhập họ tên của bạn" required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="email">Email</label>
              <input type="email" className="form-control rounded-3" id="email" placeholder="Nhập email của bạn" required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="message">Nội dung</label>
              <textarea className="form-control rounded-3" id="message" rows="5" placeholder="Nhập nội dung liên hệ" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary rounded-pill px-4 fw-bold">
              Gửi liên hệ
            </button>
          </form>
          <div className="mt-5">
            <h5 className="fw-bold mb-2">Thông tin liên hệ</h5>
            <p className="mb-1"><i className="bi bi-envelope me-2"></i> support@multi-purpose-store.com</p>
            <p className="mb-1"><i className="bi bi-telephone me-2"></i> 0123 456 789</p>
            <p><i className="bi bi-geo-alt me-2"></i> 123 Đường ABC, Quận 1, TP.HCM</p>
          </div>
        </div>
        {/* Ảnh minh họa bên phải */}
        <div className="col-md-5 text-center d-none d-md-block" data-aos="fade-left">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
            alt="Contact Illustration"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: 700, background: "#fff", padding: "12px" , marginLeft:"40px"}}
          />
        </div>
      </div>
    </div>
  );
}
  export default  Contact;