import React, { useState } from 'react';

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0 });

  const addProduct = () => {
    const productToAdd = { name: newProduct.name, price: newProduct.price };

    setProducts([...products, productToAdd]);

    setNewProduct({ name: '', price: 0 });
  };

  return (
    <div>
      <h2>Admin Dashboard - Product Management</h2>
      <div>
        <h3>Add New Product</h3>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div>
        <h3>Product List</h3>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductManagement;
