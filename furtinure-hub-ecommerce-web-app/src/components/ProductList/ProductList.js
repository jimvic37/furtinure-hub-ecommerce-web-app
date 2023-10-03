import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component

function ProductList() {
  // Define a state variable to store the list of products
  const [products, setProducts] = useState([]);

  // Simulated product data (replace this with your actual data source)
  const initialProducts = [
    { id: 1, name: 'Sofa', price: 599, description: 'Comfortable sofa for your living room' },
    { id: 2, name: 'Dining Table', price: 299, description: 'Elegant dining table for your meals' },
    { id: 3, name: 'Bed', price: 499, description: 'Cozy bed for a good night\'s sleep' },
  ];

  // Simulate fetching product data when the component mounts
  useEffect(() => {
    // You can replace this with an actual API call or database fetch
    setProducts(initialProducts);
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
