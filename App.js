var http = require('http')
var express = require('express');
var fs = require('fs');
var path = require("path");
var tcp = require("./js/tcp.js")
const net = require('net');
const hostname = '127.0.0.1';
const port = 3000;

var buffer = ""

var app = express();
app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/js')));
app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {

    res.send()

})
app.get('/ajax',(req,res) =>{
    res.write('<p>' +buffer+ '</p>')
    buffer = ""
    res.send()
})
app.listen(port)


try {
    var client = new net.Socket();
    client.connect(12000, '35.246.170.211', function () {
        console.log('Connected');
    });

    client.on('data', function (data) {
        console.log("" + data);
        buffer += data.toString().replace("\n", "")+"\n"
        // var stream = fs.createWriteStream("test.txt", {flags:'a'});
        // stream.write(""+data)
        // stream.end()
        // fs.appendFile('test.txt', ""+data, function (){})
    });
} catch (e) {
    console.log("Connection to Google Server could not be established.")
}
