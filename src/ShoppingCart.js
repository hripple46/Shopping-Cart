import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
let ShoppingCart = () => {
  let [items, setItems] = useState([
    { name: "Banana", qty: 0 },
    { name: "Apple", qty: 0 },
  ]);
  let [cartItems, setCartItems] = useState([]);

  //the following useEffect hook is purely for testing
  useEffect(() => {
    let newItems = [
      { name: "Banana", qty: 2 },
      { name: "Apple", qty: 0 },
    ];
    setItems(newItems);
  }, []);

  let addToCart = (e) => {
    let newItem = items.find((item) => e.target.id === item.name + "AddToCart");
    if (newItem) {
      setCartItems([...cartItems, newItem]); // Use spread operator to create a new array
    }
  };

  let displayCart = () => {
    if (cartItems.length > 0) {
      return cartItems.map((item) => <div key={item.name}>{item.name}</div>);
    }
  };

  let displayInventory = () => {
    return items.map((item) => {
      return (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <div className="itemCounter">
            <button onClick={decrement} id={item.name + "Dec"}>
              -
            </button>
            <h3>{item.qty}</h3>
            <button onClick={increment} id={item.name}>
              +
            </button>
            <button onClick={addToCart} id={item.name + "AddToCart"}>
              add to cart
            </button>
          </div>
        </div>
      );
    });
  };
  let increment = (e) => {
    let newItems = items.map((item) => {
      if (item.name === e.target.id) {
        return { name: item.name, qty: item.qty + 1 };
      } else {
        return item;
      }
    });
    setItems(newItems);
  };
  let decrement = (e) => {
    let newItems = items.map((item) => {
      if (item.name + "Dec" === e.target.id && item.qty > 0) {
        return { name: item.name, qty: item.qty - 1 };
      } else {
        return item;
      }
    });
    setItems(newItems);
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
          {displayCart()}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
