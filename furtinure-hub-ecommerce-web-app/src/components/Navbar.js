import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Furniture Hub</div>
      <ul className="nav-links">
        <li className="nav-link"><a href="/">Home</a></li>
        <li className="nav-link"><a href="/login">Login</a></li>
        <li className="nav-link"><a href="/register">Register</a></li>
        <li className="nav-link"><a href="/cart">Cart</a></li>
        <li className="nav-link"><a href="/checkout">Checkout</a></li>
        <li className="nav-link"><a href="/confirmation">Confirmation</a></li>
        <li className="nav-link"><a href="/order-history">Order History</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
