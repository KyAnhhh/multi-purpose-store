import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Header.css"; // CSS riêng

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid px-4">
        {/* Logo */}
        <NavLink className="navbar-brand fw-bold text-white fs-4" to="/">
          <i className="bi bi-shop me-2"></i>StoreLogo
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
            {["home", "products", "about", "contact"].map((path) => (
              <li className="nav-item" key={path}>
                <NavLink
                  className="nav-link text-white fw-semibold px-3"
                  to={`/${path}`}
                  end={path === "home"}
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2 rounded-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ minWidth: "160px" }}
            />
            <button className="btn btn-outline-light" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Login Button */}
          <NavLink to="/login">
            <button className="btn btn-light text-primary fw-bold rounded-pill px-4">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
