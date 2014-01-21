//
// Socket.IO plugin for Status Dashboard
//
// Christophe Hamerling <christophe.hamerling@gmail.com>
//

var io = require("socket.io-client");

module.exports = function(statusdb) {
  console.log("Init status dashboard Socket.IO client plugin");
  
  var api = statusdb.api;
  var settings = statusdb.settings;

  var url = 'http://localhost:3303';
  if (settings.plugins.socketio) {
    url = settings.plugins.socketio.url || url;
  }
  var socket = io.connect(url);

  socket.on('connect', function() {
    console.log('Connected!');
  });

  socket.on('connecting', function(transport) {
    console.log('Trying to connect with ' + transport + ' transport...');
  });

  socket.on('disconnect', function() {
    console.log('Socket has been disconnected');
  });

  socket.on('connect_failed', function() {
    console.log('Connection failed/timeout!');
  });

  socket.on('error', function(err) {
    console.log('Error: ' + err);
  });

  // this is where we send stuff to the socket.IO server
  api.on('refresh', function(status) {
    socket.emit('refresh', status);
  });

  api.on('status', function(status) {
    socket.emit('status', status);
  });
}