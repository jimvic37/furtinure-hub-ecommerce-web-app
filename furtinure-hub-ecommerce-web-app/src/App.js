import React, { Component } from 'react';
import ProductList from './components/ProductList/ProductList';
import Login from './components/Auth/Login';
import Register from './components/Auth/RegisterPage';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import Confirmation from './components/Cart/Confirmation';
import OrderHistory from './components/Orders/OrderHistory';
import ProductDetail from './components/ProductList/ProductDetail';
import Navbar from './components/Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: window.location.pathname,
      mockUserData: [],
    };
  }

  navigateTo = (route) => {
    this.setState({ route });
  };

  render() {
    const { route, mockUserData } = this.state;

    let componentToRender;
    switch (route) {
      case '/':
        componentToRender = <ProductList />;
        break;
      case '/login':
        componentToRender = <Login mockUserData={mockUserData} />; 
        break;
      case '/register':
        componentToRender = <Register mockUserData={mockUserData} />;
        break;
      case '/cart':
        componentToRender = <Cart />;
        break;
      case '/checkout':
        componentToRender = <Checkout />;
        break;
      case '/confirmation':
        componentToRender = <Confirmation />;
        break;
      case '/order-history':
        componentToRender = <OrderHistory />;
        break;
      default:
        // Handle product detail route '/product/:id'
        componentToRender = <ProductDetail />;
        break;
    }

    return (
      <div className="App">
        {/* Use the Navbar component here */}
        <Navbar navigateTo={this.navigateTo} />
        {componentToRender}
      </div>
    );
  }
}


export default App;
