import React from 'react';
import getProductById from '../../ProductUtils'; 

function ProductDetail(props) {
  const productId = props.match.params.id;
  const product = getProductById(parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductDetail;
