import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/styles/MainContent.css";

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

const productsFamous = [
  {
    id: 1,
    title: "Eyeshadow Palette with Mirror",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    price: 19.99,
    rating: 2.86,
  },
  {
    id: 2,
    title: "Red Lipstick",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    price: 12.99,
    rating: 4.36,
  },
  {
    id: 3,
    title: "Eyeshadow Palette with Mirror",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    price: 19.99,
    rating: 2.86,
  },
];

function MainContent() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main className="main-content" style={{ background: "#f6f9ff" }}>
      {/* Banner */}
      <section
        className="banner-section py-5"
        style={{
          background: "linear-gradient(90deg, #e9f2ff 60%, #fff 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            {/* Text bên trái */}
            <div className="col-md-6 text-center text-md-start" data-aos="fade-right">
              <h1 className="display-5 fw-bold mb-3 text-primary">
                Chào mừng đến với{" "}
                <span style={{ color: "#ffb300" }}>
                  Multi-Purpose Store
                </span>
              </h1>
              <p className="lead mb-4 text-secondary">
                Nơi bạn tìm thấy mọi thứ từ đồ dùng cá nhân đến thiết bị công nghệ.
                <br />
                Trải nghiệm mua sắm hiện đại, an toàn và tiện lợi.
              </p>
              <Link
                to="/products"
                className="btn btn-warning btn-lg rounded-pill px-4 shadow-sm"
              >
                Khám phá ngay
              </Link>
            </div>
            {/* Ảnh minh họa bên phải */}
            <div className="col-md-6 mb-4 mb-md-0 text-center" data-aos="fade-left">
              <img
                src="https://img.freepik.com/free-vector/online-payment-concept-illustration_114360-7882.jpg"
                alt="Online Shopping Illustration"
                className="img-fluid rounded-4 shadow"
                style={{
                  maxHeight: 340,
                  width: "100%",
                  objectFit: "contain",
                  background: "#fff",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banner phụ: Mobile Shopping */}
      <section
        className="banner-section py-5"
        style={{
          background: "linear-gradient(90deg, #e9f2ff 60%, #fff 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center flex-md-row">
            {/* Ảnh minh họa bên trái */}
            <div className="col-md-6 mb-4 mb-md-0 text-center order-1 order-md-0" data-aos="fade-right">
              <img
                src="https://img.freepik.com/free-vector/mobile-shopping-concept-illustration_114360-1085.jpg"
                alt="Mobile Shopping Illustration"
                className="img-fluid rounded-4 shadow"
                style={{
                  maxHeight: 340,
                  width: "100%",
                  objectFit: "contain",
                  background: "#fff",
                }}
              />
            </div>
            {/* Text bên phải */}
            <div style={{paddingLeft: "50px"}} className="col-md-6 text-center text-md-start order-0 order-md-1" data-aos="fade-left">
              <h2 className="fw-bold mb-3" style={{ color: "#1e88e5", fontSize: "2.2rem" }}>
                Mua sắm mọi lúc, mọi nơi
              </h2>
              <p className="lead mb-4 text-secondary">
                Trải nghiệm mua sắm trên thiết bị di động với giao diện tối ưu, thao tác nhanh chóng và bảo mật tuyệt đối.
              </p>
              <Link
                to="/products"
                className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm"
                style={{ background: "#1e88e5", border: "none" }}
              >
                Khám phá trên điện thoại
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="featured-products py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center mb-4 text-primary fw-bold">
            Sản phẩm nổi bật
          </h2>
          <div className="row g-4">
            {productsFamous.map((product) => (
              <div className="col-12 col-sm-6 col-md-4" key={product.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="card-img-top"
                    style={{
                      objectFit: "cover",
                      height: 180,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary fw-bold">
                      {product.title}
                    </h5>
                    <div className="mb-2 text-center">
                      <span className="text-warning fw-semibold me-2">
                        {product.rating} <i className="bi bi-star-fill"></i>
                      </span>
                    </div>
                    <span className="text-primary fw-bold fs-5 mb-3 text-center">
                      ${product.price}
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-primary rounded-pill mt-auto"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dịch vụ */}
      <section className="services py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="services-title text-center text-primary fw-bold mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <div className="row justify-content-center">
            {services.map(
              ({ id, title, description, icon }, index) => (
                <div
                  key={id}
                  className="col-12 col-sm-6 col-md-4 mb-4"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center border border-1 border-light">
                    <div
                      className="icon mb-3"
                      style={{ fontSize: 40 }}
                    >
                      {icon}
                    </div>
                    <h5 className="fw-bold text-primary mb-2">
                      {title}
                    </h5>
                    <p className="text-secondary mb-0">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
