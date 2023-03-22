import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="categories__card_grid">
      <Link to={`/product/${product.id}`}>
        <div className="product__card">
          <img src={product.img} alt="img" className="product__card_img" />
          <div className="product_desc">
            <h4>{product.name}</h4>
            <span>{product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
