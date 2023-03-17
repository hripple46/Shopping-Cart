import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "./ShoppingCart";
import { act } from "react-dom/test-utils";

describe("ShoppingCart component", () => {
  it("renders correct qty in cart", () => {
    const { container } = render(
      <BrowserRouter>
        <ShoppingCart />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("renders updated qty", () => {
    render(
      <BrowserRouter>
        <ShoppingCart />
      </BrowserRouter>
    );
    let button = screen.getByRole("button", { name: "add Banana to cart" });
    act(() => {
      userEvent.click(button);
    });

    expect(screen.getByRole("heading", { level: 4 }).textContent).toMatch(
      /banana,2/i
    );
  });
});
