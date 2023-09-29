import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>My most recently watched films</h1>
    <ul>
      <li>Blue Beatle</li>
      <li>Tenet</li>
      <li>Oppenheimer</li>
    </ul>
  </div>
);