import React from "react";
import { Link } from "react-router-dom";

let HomePage = () => {
  return (
    <div>
      <h1>Welcome to Your Home Page</h1>
      <Link to="/shoppingcart">Shopping Cart</Link>
    </div>
  );
};

export default HomePage;
