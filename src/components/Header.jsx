import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Header.css"; // CSS riêng

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand fw-bold text-white" to="/">
          StoreLogo
        </NavLink>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu nội dung */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ minWidth: "160px" }}
            />
            <button className="btn btn-outline-light" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Login button */}
          <NavLink to="/login">
            <button className="btn btn-light text-primary fw-bold">Login</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
