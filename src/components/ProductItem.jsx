import React from "react";
import "../assets/styles/ProductItem.css"
function ProductItem({ product, onAddToCart }) {
  return (
    <div className="col mb-4">
  <div className="card h-100 text-center">
    <img className="card-img-top mx-auto d-block" src={product.thumbnail} alt={product.title} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text text-danger fw-semibold">{product.price} USD</p>
      <p className="card-rating text-danger fw-semibold">{product.rating}<i style={{color:"yellow"}} class="bi bi-star"></i></p>
      <div className="mt-auto">
        <button className="btn btn-primary" onClick={() => onAddToCart(product)}>Thêm vào giỏ</button>
      </div>
    </div>
  </div>
</div>

  );
}

export default ProductItem;
