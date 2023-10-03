import React from 'react';

function Cart({ cartItems, onCheckout }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;
