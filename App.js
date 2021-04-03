var http = require('http')
var express = require('express');
var fs = require('fs');
var path = require("path");

const hostname = '127.0.0.1';
const port = 3000;

// var html;
// fs.readFile("./test.html", (err,data) => {html = data})

var app = express();
app.use(express.static(path.join(__dirname, '/')));


app.get('/',(req,res) =>{
    // console.log("Hallo")
    // res.write("HAllol")
    res.send()

})
app.listen(port)