import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bootstrap & Icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Context & Components
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import MainContent from "./components/MainContent";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        {/* Các trang định tuyến */}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/home" element={<MainContent />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
