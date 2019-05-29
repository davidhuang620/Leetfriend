const express = require("express")

const app = express();

app.get("/", (req, res) => {
    console.log("get request");
    res.send("get request");
})


app.listen(3000, () => {
    console.log("hello");
})