import React from "react";
import { createRoot } from "react-dom/client";

//Show a single h1 that says "Good Morning" and has colour red if between midnight and 12PM.
//or "Good Afternoon" and colour green if between 12PM and 6PM.
//or "Good Evening" and colour blue if between 6PM and midnight.

const currentHour = new Date().getHours();
let heading = "Good Morning";
let headingStyle = {
  color: "red"
};

if (currentHour >= 12 && currentHour < 18) {
  heading = "Good Afternoon";
  headingStyle.color = "green";
}
else if (currentHour >= 18) {
  heading = "Good Evening";
  headingStyle.color = "blue";
}

const root = createRoot(document.getElementById("root"));

root.render(
  <h1 className="heading" style={headingStyle}>{heading}</h1>
);