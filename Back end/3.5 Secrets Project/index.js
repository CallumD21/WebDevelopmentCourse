import express from "express";
//import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const password = "ILoveProgramming";
var isAuthorised = false;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

function authoriseCustomer(req, res, next) {
    var userPassword = req.body["password"];
    if (userPassword === password)
        isAuthorised = true;
    next();
}

app.use(authoriseCustomer);

app.post("/check", (req, res) => {
    if (isAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
