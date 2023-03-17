import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "./ShoppingCart";

describe("ShoppingCart component", () => {
  it("renders correct qty in cart", () => {
    const { container } = render(<ShoppingCart />);
    expect(container).toMatchSnapshot();
  });
  it("renders updated qty", () => {
    render(<ShoppingCart />);
    let button = screen.getByRole("button", { name: "add to cart" });
    userEvent.click(button);

    expect(screen.getByRole("heading", { level: 2 }).textContent).toMatch(/3/i);
  });
});
