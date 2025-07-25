import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ProductItem from "./ProductItem";
import "../assets/styles/ProductList.css"

function ProductList({ products , onAddToCart, loading}) {
  if(loading){
    return(
      <div className="product-list">
        {Array.from({ length: 24 }).map((_, index) => (
          <div className="product-card skeleton-card" key={index}>
            <Skeleton height={150} className="product-img-skeleton" />
            <div className="product-content">
              <Skeleton height={20} width={`80%`} />
              <Skeleton height={20} width={`40%`} style={{ marginTop: 10 }} />
              <Skeleton height={35} width={`100%`} style={{ marginTop: 15 }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} loading = {loading} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
