const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const pg = require("pg");
const knex = require("knex");
const cors = require("cors");

// connect to postgre via knex
const database = knex({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "David",
        password: "",
        database: "leetdb"
    }
});


const app = express();

// middleware
app.use(morgan("short"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

// database.select("*").from("comment").then( data => {
//     console.log(data);

// // comment 

app.post("/comments", (req, res) => {
    const {Name, Comment} = req.body; 
    database("comment")
    .returning("*")
    .insert({
        username: Name,
        comment: Comment,
        createdtime: new Date()
    })
    .then( resp => {
        res.json(resp);
    })
    .catch( err => {
        res.send( err => { res.status(400).json("error")});
    });
})

app.get("/comments", (req, res) => {
    database.select("*").from("comment")
    .then( data => {
        res.json(data);
    })
})



app.get("/", (req, res) => {
    console.log("get request");
    res.send("get request");
})

app.listen(3002, () => {
    console.log("hello, Server is listening 3002");
})