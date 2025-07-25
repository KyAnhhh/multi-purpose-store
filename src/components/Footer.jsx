import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Footer.css"; // CSS riêng cho footer

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4">
      <div className="container-fluid px-4 text-center text-white">
        {/* Logo & tên */}
        <NavLink to="/" className="footer-logo fw-bold fs-4 text-decoration-none">
          <i className="bi bi-shop me-2"></i>StoreLogo
        </NavLink>

        {/* Liên kết */}
        <ul className="footer-links d-flex justify-content-center list-unstyled mt-3 mb-2">
          {["home", "products", "about", "contact"].map((path) => (
            <li key={path} className="mx-3">
              <NavLink to={`/${path}`} className="footer-link text-white text-decoration-none">
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Copy */}
        <p className="footer-copy mb-0 text-white">
          &copy; {new Date().getFullYear()} StoreLogo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
