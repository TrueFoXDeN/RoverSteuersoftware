var http = require('http')
var express = require('express');
var fs = require('fs');
var path = require("path");
// var tcp = require("./js/tcp.js")
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
app.get('/requestData', (req, res) => {
    res.write('<p>' + buffer + '</p>')
    buffer = ""
    res.send()
})
app.get('/startClient', (req, res) => {
    startClient()
    res.send()
})
app.listen(port)

function startClient(){
    var client = new net.Socket();
    client.connect(12000, '35.246.170.211', function () {
        console.log('Connected');
    });

    client.on('data', function (data) {
        let res = data.toString().replace("\n","") + "%"
        buffer += res
        console.log(data.toString())
        //rov;11969;___18;___79;___51;___12;___56;___78;___43;___42;____0;__379
    });
    client.on('error', function (e) {
        if(e.code === 'ECONNRESET'){
            console.log("Connection reset.")
            startClient()
        }else{
            console.log("Connection to Google Server could not be established.")
            console.log(e)
        }

    });
}

