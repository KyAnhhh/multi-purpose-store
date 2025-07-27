import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import "../assets/styles/ProductPage.css";

import { useCart } from "../contexts/CartContext";

function ProductPage() {
  
  const [products, setProducts] = useState([]);
  const limit = 15;
    const [pageActive, setPageActive] = useState(0)
    const [quantityPage, setQuantityPage] = useState(0);
    const [loading, setLoading] = useState(true);
    
useEffect(() => {
  const fetchProducts = () => {
    setLoading(true); // bắt đầu loading
    fetch(`https://dummyjson.com/products?skip=${pageActive*limit}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
        setLoading(false); // kết thúc loading
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);
      });
  }
   setTimeout(() => {  
      fetchProducts();
    },1000);
    }, [pageActive]);

  // Thay vì dùng alert
const { addToCart } = useCart();
const handleAddToCart = (product) => {
  addToCart(product);
  alert(`Đã thêm ${product.title} vào giỏ hàng`);
};

    console.log(quantityPage);
    console.log([...Array(quantityPage)]);

     const handleClickPage = (e) =>{
        setPageActive(e);
    };
   
  return (
    <>
     <div>
    <ProductList products={products} loading={loading} onAddToCart={handleAddToCart} />
    </div>
     <div className="pagination">
  {Array.from({ length: quantityPage }, (_, i) => i)
    .filter(index => Math.abs(index - pageActive) <= 2) // Hiển thị trang hiện tại ±2
    .map((index) => (
      <div
        key={index}
        className={`page-number ${index === pageActive ? "active-page" : ""}`}
        onClick={() => handleClickPage(index)}
      >
        {index + 1}
      </div>
    ))}
</div>
    </>
    
  );
}

export default ProductPage;
