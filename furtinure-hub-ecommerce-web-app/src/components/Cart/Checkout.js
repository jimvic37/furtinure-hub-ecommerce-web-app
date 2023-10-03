import React from 'react';

function Checkout({ cartItems, onConfirm }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={onConfirm}>Confirm Order</button>
    </div>
  );
}

export default Checkout;
