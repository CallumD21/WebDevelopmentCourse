import React from "react";
import { createRoot } from "react-dom/client";

const fName = "Callum";
const lName = "Dickinson";
const randomDice = Math.floor(Math.random() * 6) + 1;

const root = createRoot(document.getElementById("root"));

root.render(
    <div>
        <h1>Hello {fName + " " + lName}!</h1>
        <p>Your dice roll number is: {randomDice}</p>
    </div>
);
