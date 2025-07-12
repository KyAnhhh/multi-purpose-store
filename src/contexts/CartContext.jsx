import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart"); // đọc dữ liệu giỏ hàng t ừ localStorage với key 'cart'
    return storedCart ? JSON.parse(storedCart) : []; //Chuyển từ chuỗi JSON về lại mảng/đối tượng
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems)); // ghi giỏ hàng vào localStorage với tên "key" là 'cart'
  }, [cartItems]); //chuyển đổi mảng sang chuỗi JSON để lưu vào localStorage
  
//Thêm vào giỏ hàng
  const addToCart = (product) => {
  setCartItems((prev) => {
    const existing = prev.find((item) => item.id === product.id);
    if (existing) {
      return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prev, { ...product, quantity: 1 }];
    }
  });
};
//Giảm số lượng
const decreaseQuantity = (productId) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    )
  );
};
//Xóa sản phẩm trong giỏ hàng
   const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
