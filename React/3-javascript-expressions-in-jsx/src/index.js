import React from "react";
import ReactDOM from "react-dom";

const fName = "Callum";
const lName = "Dickinson";
const randomDice = Math.floor(Math.random() * 6) + 1;

ReactDOM.render(
    <div>
        <h1>Hello {fName + " " + lName}!</h1>
        <p>Your dice roll number is: {randomDice}</p>
    </div>,
    document.getElementById("root")
);
