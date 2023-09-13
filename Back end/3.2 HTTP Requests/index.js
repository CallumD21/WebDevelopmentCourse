import express from "express";
const app = express();
const port = 3000;

//Set up GET request for the root page
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1> <p>Phone number: 07920709747</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1> <p>My name is Callum Dickinson and I am a full stack developer!</p>");
});

//Set up server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});