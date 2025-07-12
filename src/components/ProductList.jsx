import React from "react";
import ProductItem from "./ProductItem";
import "../assets/styles/ProductList.css"

function ProductList({ products = [] , onAddToCart}) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
