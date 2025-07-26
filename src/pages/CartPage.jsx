// import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "../assets/styles/CartPage.css";

function CartPage() {
  const { cartItems, addToCart, decreaseQuantity , removeFromCart } = useCart();
  const navigate = useNavigate(); // hook điều hướng

  const handlePlus = (item) => {
    addToCart(item); // tăng thêm 1 sản phẩm (nó sẽ tự gộp trong context)
  };

const handleMinus = (item) => {
  decreaseQuantity(item.id); // Luôn giảm, kể cả khi quantity = 1
};


  const handleBuyEarly = (item) => {  
      alert(`Đã mua sản phẩm: ${item.title}`);
  };

   const handleGoBack = () => {
    navigate(-1); // quay lại trang trước
  };

  return (
    <div className="cart-container">
      {/* Nút quay lại */}
      <button className="btn btn-success mb-3" onClick={handleGoBack}>
        <i className="bi bi-arrow-left me-2"></i> Quay lại
      </button>
      <h1 className="title">Giỏ hàng của bạn</h1>
      {cartItems.length === 0 ? (
        <p>Không có sản phẩm nào trong giỏ.</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img className="product-img" src={item.thumbnail} alt={item.title} />
            <div>
              <h5 className="product-title">{item.title}</h5>
              <p className="product-price">{item.price} USD</p>
              <div className="quantity-controls">
                <button onClick={() => handleMinus(item)}>-</button>
                <span>Số lượng: {item.quantity}</span>
                <button onClick={() => handlePlus(item)}>+</button>
              </div>
              <p>Tổng tiền: {(item.quantity * item.price).toFixed(2)} USD</p>
              <button className="product-btn" onClick={() => removeFromCart(item.id)}>Xoá</button>
              <button className="product-btn" onClick={() => handleBuyEarly(item)}>Mua ngay</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;
