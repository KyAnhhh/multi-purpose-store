import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import "../assets/styles/ProductPage.css";

import { useCart } from "../contexts/CartContext";


function ProductPage() {
  
  const [products, setProducts] = useState([]);
  const limit = 10;
    const [pageActive, setPageActive] = useState(0)
    const [quantityPage, setQuantityPage] = useState(0);
    
  useEffect(() => {
    fetch(`https://dummyjson.com/products?skip=${pageActive*limit}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);
      });
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
     <Link to="/cart" className="btn btn-success mb-3">🛒 Xem giỏ hàng</Link>
      <h1 className="title">Danh sách sản phẩm</h1>
    <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
      <div className="pagination">
              <h3>Trang:</h3>
            {[...Array(quantityPage)].map((item,index) => (
                <div className={`page-number ${index === pageActive ? "active-page" : ""}`} key={index} onClick={() => handleClickPage(index)}>{index+1}</div>
            ))}
      </div>
    </>
    
  );
}

export default ProductPage;
