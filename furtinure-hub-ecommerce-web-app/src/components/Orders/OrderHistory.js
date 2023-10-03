import React from 'react';

function OrderHistory({ orderHistory }) {
  return (
    <div>
      <h2>Order History</h2>
      {orderHistory.length === 0 ? (
        <p>You have no previous orders.</p>
      ) : (
        <ul>
          {orderHistory.map((order) => (
            <li key={order.id}>
              Order ID: {order.id}, Total: ${order.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
