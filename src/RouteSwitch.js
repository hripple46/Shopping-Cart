import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ShoppingCart from "./ShoppingCart";
import { HashRouter } from "react-router-dom";

let RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </HashRouter>
  );
};
export default RouteSwitch;
