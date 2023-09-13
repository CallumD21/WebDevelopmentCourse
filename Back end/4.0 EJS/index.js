import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    let day = today.getDay();

    let dateText = "It's a weekday, it's time to work hard!";

    if (day == 0 || day == 6) {
        dateText = "It's the weekend, it's time to have fun!";
    }

    res.render("index.ejs",
        {
            dateText: dateText
        }
    );
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});