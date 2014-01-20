var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs');

app.listen(3303);

io.sockets.on('connection', function (socket) {
  console.log('Connection from ', socket)
  socket.emit('connected', { hello: 'world' });

  // receive an event from status dasboard
  socket.on('refresh', function (data) {
    console.log('refresh received ', data);
    console.log('Sending to clients...')
    socket.emit('sd_refresh', data)
    socket.broadcast.emit('sd_refresh', data);
  });
});

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }

      res.writeHead(200);
      res.end(data);
    });
}