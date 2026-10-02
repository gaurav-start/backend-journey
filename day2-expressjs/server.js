let http = require("http");

let server = http.createServer((req,res) => {
    console.log("hey");
    res.end("ya done")

});

server.listen(3000,() =>{
    console.log("server chalu hai")
})

const express = require('express');

const app = express();
app.use(express.json()); //middleware for accepting data from frontend

app.get("/",(req,res) => {
    res.send("ok sir ");
});

app.get("/products",(req,res) => {
    res.send("hey you are reached here");
});

app.post("/create",(req,res) =>{

    console.log(req.body);

    //create
    res.send("ok post")
});

let port = 3000;

app.listen(3000,() => {
    console.log("serever is running on port 3000")
});