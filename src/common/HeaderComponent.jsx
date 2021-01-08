import React, { Component } from 'react';
import '../App.css';
class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
          <ul className="navbar-nav">
            <li className="nav-item nav-link"><a href="shop.html">Home</a></li>
            <ul className="nav navbar-nav collapse navbar-collapse">
            <li className=" text-primary " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Product
                 </li>
            <div className="dropdown-menu bg-light" >
              <li className="dropdown-item"><a href="shop.html">Product List</a></li>
              <li className="dropdown-item"><a href="product-details.html">Add Product</a></li>
            </div>

          </ul>
            <li className="nav-item nav-link"><a href="product-details.html">Category</a></li>
            <li className="nav-item nav-link"><a href="checkout.html">Order</a></li>
          </ul>

          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li className="nav-item nav-link"><a href="cart.html">Cart</a></li>
            <li className="nav-item nav-link"><a href="login.html">Login</a></li>
            <li className="nav-item nav-link"><a href="login.html">Logout</a></li>
          </ul>
        </nav>
      </header>
    );

  }
}

export default HeaderComponent;