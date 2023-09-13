import express from "express";
const app = express();
const port = 3000;

//Run the server on the supplied port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});