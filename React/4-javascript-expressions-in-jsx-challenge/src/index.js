import React from "react";
import { createRoot } from "react-dom/client";

const name = "Callum";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>
);