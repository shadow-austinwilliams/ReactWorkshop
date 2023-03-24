import React from "react";

const ProductCard = ({ name, imgSrc, price }) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={`close up of ${name}`} className="card-img" />
      <span className="card-title">{name}</span>
      <span className="card-price">{price}</span>
    </div>
  );
};

export default ProductCard;
