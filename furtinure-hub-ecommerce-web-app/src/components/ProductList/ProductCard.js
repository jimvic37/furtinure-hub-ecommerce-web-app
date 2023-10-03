import React from 'react';

function ProductCard({ id, name, price, description }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      {/* Add buttons or actions for adding the product to the cart */}
    </div>
  );
}

export default ProductCard;
