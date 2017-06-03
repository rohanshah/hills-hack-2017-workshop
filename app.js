$(document).ready(function() {

    // Step (3): https://socket.io/docs/
    // - create a Socket.IO client 
    // - have it emit something to the server
    // - have it listen for a message from the server
    var socket = io();

    // Step (1a): https://api.jquery.com/click/
    // - use JQuery to select the button and do something when it's clicked
    $('#b').click(function() {
      // Step (1b):
      // - use val to read something from the DOM and do something with it
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });

    socket.on('chat message', function(msg) {
      // Step (2): http://api.jquery.com/append/
      // - Update the dom using append
      $('#messages').append($('<li>').text(msg));
    });

});

