import React from 'react';

function Confirmation({ orderSummary }) {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <h3>Order Summary:</h3>
      <ul>
        {orderSummary.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Confirmation;
