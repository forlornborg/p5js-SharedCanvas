var toHost = 'public';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});*/

app.use(express.static(toHost));



io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('a user disconnected');
    })

    socket.on('drawing', function(data){
        socket.broadcast.emit('drawing', data);
        
    })
    
});

http.listen(3000, function(){
    console.log("listening on *:3000");
});

console.log('hosting: ' + toHost);

