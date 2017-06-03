var express = require('express');
var app = express();

var http = require('http');
var server = http.createServer(app);

var io = require('socket.io')(server);

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

var port = 3000;

server.listen(port, function(){
  console.log('listening on *:' + port);
});
