import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Header.css"; // CSS riêng

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid px-4">
        {/* Logo */}
        <NavLink className="navbar-brand fw-bold text-white fs-4" to="/">
          <i className="bi bi-shop me-2"></i>MultiStore
        </NavLink>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-4 me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-semibold px-3" to="/home" end>
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-semibold px-3" to="/products">
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-semibold px-3" to="/about">
                Giới thiệu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-semibold px-3" to="/contact">
                Liên hệ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-semibold px-3" to="/cart">
                Giỏ hàng
              </NavLink>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex me-3" role="search">
              <input
                className="form-control me-2 rounded-pill"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ minWidth: "160px" }}
              />
              <button
                className="btn btn-light text-primary fw-bold rounded-pill px-3 d-flex align-items-center"
                type="submit"
                style={{ border: "none", fontSize: "1rem" }}
              >
                <i className="bi bi-search"></i>
              </button>
           </form>

          <div className="dropdown">
            <button
              className="btn btn-light text-primary fw-bold rounded-pill px-4 dropdown-toggle"
              type="button"
              id="userMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle me-2"></i>Tài khoản
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenuButton">
              <li>
                <NavLink className="dropdown-item" to="/profile">
                  <i className="bi bi-person me-2"></i>Thông tin cá nhân
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/login">
                  <i className="bi bi-box-arrow-in-right me-2"></i>Đăng nhập
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/register">
                  <i className="bi bi-pencil-square me-2"></i>Đăng ký
                </NavLink>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button className="dropdown-item text-danger" type="button">
                  <i className="bi bi-box-arrow-right me-2"></i>Đăng xuất
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
