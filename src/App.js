import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bootstrap & Icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Context & Components
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";

// Pages
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Header luôn hiển thị trên mọi trang */}
        <Header />

        {/* Các trang định tuyến */}
        <Routes>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
