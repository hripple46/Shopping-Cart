import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <h3>{item.qty}</h3>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Welcome to Your Shopping Cart</h1>
      {displayInventory()}
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default ShoppingCart;
