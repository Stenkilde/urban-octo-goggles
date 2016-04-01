// Base Setup for the server
var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var app         = express();
var UUID        = require('node-uuid');
var server      = require('http').Server(app);
var io          = require('socket.io')(server);
var port        = 1337;

var sio = io.listen(server);

sio.sockets.on('connection', function (client) {

    //Generate a new UUID, looks something like
    //5b2ca132-64bd-4513-99da-90e838ca47d1
    //and store this on their socket/connection
    client.userid = UUID();

    //tell the player they connected, giving them their id
    client.emit('onconnected', { id: client.userid } );

    console.log(io.engine.clientsCount);

    //Useful to know when someone connects
    console.log('\t socket.io:: player ' + client.userid + ' connected');

    //When this client disconnects
    client.on('disconnect', function () {
        console.log(io.engine.clientsCount);
        //Useful to know when someone disconnects
        console.log('\t socket.io:: client disconnected ' + client.userid );

    }); //client.on disconnect

});

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.sendfile('./app/index.html');
});

server.listen(port);
