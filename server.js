// Step (1): https://expressjs.com/en/starter/hello-world.html
// - Use Express to initialize a function handler and set it to a variable
// - use that handler to create a GET route
// - use the handler to listen to a port

var express = require('express');
var app = express();

// Step (2): https://socket.io/docs/server-api/#server
// - Create a Socket.IO Server object and assign it to a var
//   - What does it take as a parameter?

// Step (3): https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/#create-the-server
// - create an HTTP server object and supply the Express function handler to an HTTP server
// - provide the HTTP server to the Socket.io constructor
// - Use the HTTP server to listen to the port instead

var http = require('http');
var server = http.createServer(app);

var io = require('socket.io')(server);

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Step (4): https://socket.io/docs/server-api/#socket-on-eventname-callback
// - Use the Socket.io object to set up a handler on socket connection
io.on('connection', function(socket) {

  // Step (5): https://socket.io/docs/emit-cheatsheet/
  // - make the handler use the socket object to emit a message to all its listeners.
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

var port = 3000;

server.listen(port, function(){
  console.log('listening on *:' + port);
});
