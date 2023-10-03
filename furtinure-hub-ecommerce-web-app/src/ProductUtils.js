// Define a sample array of products (replace with your actual data)
const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description for Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 150,
      description: 'Description for Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 200,
      description: 'Description for Product 3',
    },
  ];
  
  // Function to get a product by its ID
  function getProductById(productId) {
    // Find the product in the array based on the provided ID
    const product = products.find((p) => p.id === productId);
  
    // Return the found product, or null if not found
    return product || null;
  }
  
  export default getProductById;
  