import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RIPDb } from "./img/RIPDb_X.svg";

let HomePage = () => {
  return (
    <div>
      <h1>Welcome to Your Home Page</h1>
      <RIPDb />
      <Link to="/shoppingcart">Shopping Cart</Link>
    </div>
  );
};

export default HomePage;
