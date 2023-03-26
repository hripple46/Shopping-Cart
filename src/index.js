import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import RouteSwitch from "./RouteSwitch";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
