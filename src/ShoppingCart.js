import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
let ShoppingCart = () => {
  let [items, setItems] = useState([
    { name: "Banana", qty: 0 },
    { name: "Apple", qty: 0 },
  ]);
  let [cartItems, setCartItems] = useState([
    { name: "Banana", qty: 0 },
    { name: "Apple", qty: 0 },
  ]);

  //the following useEffect hook is purely for testing
  useEffect(() => {
    let newItems = [
      { name: "Banana", qty: 2 },
      { name: "Apple", qty: 0 },
    ];
    setItems(newItems);
  }, []);

  let addToCart = (e) => {
    let targetId = e.target.id.slice(0, -"AddToCart".length); //targetID allows us to look for the matching element from both state arrays

    let findItem = items.find((item) => item.name === targetId);
    console.log(findItem);
    let newCartItems = cartItems.map((newItem) => {
      if (e.target.id === newItem.name + "AddToCart") {
        //if we find the matching elements, we then set the cartItem qty to the existing qty plus whatever is carried over from the items
        return { name: newItem.name, qty: newItem.qty + findItem.qty };
      } else {
        return newItem;
      }
    });
    setCartItems(newCartItems); //set the state of cartItems to equal the qty that was added
    return displayCart(); //finally, we call the function to update the 'cart' side of page to show the qty that we added
  };

  let displayCart = () => {
    console.log(cartItems);
    if (cartItems.length > 0) {
      return cartItems.map((item) => (
        <div key={item.name + "cart2"}>
          <h4 key={item.name + "cart"}>
            {item.name},{item.qty}
          </h4>
          <button onClick={removeFromCart} id={item.name + "RemoveFromCart"}>
            Remove
          </button>
        </div>
      ));
    }
  };
  let removeFromCart = (e) => {
    let targetItem = e.target.id.slice(0, -"RemoveFromCart".length);
    console.log(targetItem);
    let updatedCartItems = cartItems.map((cartItem) => {
      if (targetItem === cartItem.name) {
        return { name: cartItem.name, qty: 0 };
      } else {
        return cartItem;
      }
    });
    console.log(updatedCartItems);
    setCartItems(updatedCartItems);
    return displayCart();
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
              add {item.name} to cart
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
