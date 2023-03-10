import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ShoppingCart from "./ShoppingCart";

let RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
