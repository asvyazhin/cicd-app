import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

import "jest-dom/extend-expect";

import App from "./App";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders welcome text", () => {
  const { getByText } = render(<App />);
  expect(getByText("Welcome to React")).toBeInTheDocument();
});
