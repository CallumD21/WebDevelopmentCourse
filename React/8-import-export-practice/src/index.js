import React from "react";
import { createRoot } from "react-dom/client";
import calculator from "./calculator"
//import { add, multiply, subtract, divide } from "./calculator";

const root = createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{calculator.add(1, 2)}</li>
    <li>{calculator.multiply(2, 3)}</li>
    <li>{calculator.subtract(7, 2)}</li>
    <li>{calculator.divide(5, 2)}</li>
  </ul>
);
