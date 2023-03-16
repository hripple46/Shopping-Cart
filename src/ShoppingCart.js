import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
let ShoppingCart = () => {
  let [items, setItems] = useState([
    { name: "Banana", qty: 0 },
    { name: "Apple", qty: 0 },
  ]);
  let displayInventory = () => {
    return items.map((item) => {
      return (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <div className="itemCounter">
            <button>-</button>
            <h3>{item.qty}</h3>
            <button>+</button>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>Shopping Cart</li>
        </ul>
      </nav>
      <div className="container">
        <div className="inventory">
          <h1>Welcome to Your Shopping Cart</h1>
          {displayInventory()}
        </div>
        <div className="cart">
          <h2>Cart Will Go Here</h2>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
