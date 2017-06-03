// Step (1): https://expressjs.com/en/starter/hello-world.html
// - Use Express to initialize a function handler and set it to a variable
// - use that handler to create a GET route
// - use the handler to listen to a port

// Step (2): https://socket.io/docs/server-api/#server
// - Create a Socket.IO Server object and assign it to a var
//   - What does it take as a parameter?

// Step (3): https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/#create-the-server
// - create an HTTP server object and supply the Express function handler to an HTTP server
// - provide the HTTP server to the Socket.io constructor
// - Use the HTTP server to listen to the port instead

// Step (4): https://socket.io/docs/server-api/#socket-on-eventname-callback
// - Use the Socket.io object to set up a handler on socket connection

// Step (5): https://socket.io/docs/emit-cheatsheet/
// - make the handler use the socket object to emit a message to all its listeners.

console.log("Hello, hacker");
