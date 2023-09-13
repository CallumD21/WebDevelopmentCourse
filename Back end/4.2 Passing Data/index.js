import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var firstName = req.body["fName"];
  var lastName = req.body["lName"];
  var fullName = firstName + lastName;
  var letterCount = fullName.length;
  res.render("index.ejs", { nameLength: letterCount });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
