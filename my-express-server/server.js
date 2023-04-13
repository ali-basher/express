// jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, world!</h1>");
});

app.get("/Contact", function(req, res){
    res.send("<h1>Contact me at: alibasher2000.16.11@gmail.com</h1>");
});

app.get("/about", function(req, res){
    res.send("<h1>My name is Ali an I love coding and problem solving</h1>");
});



app.listen(3000, function(){
    console.log("Server started on port 3000"); 
})



 
