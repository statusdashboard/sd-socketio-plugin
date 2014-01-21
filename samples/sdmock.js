var plugin = require('../index');
var EventEmitter = require('events').EventEmitter;

var api = new EventEmitter();

var settings = {
  plugins : {
    socketio : {
      url : 'http://localhost:3303'
    }
  }
};

plugin({
  api : api,
  settings : settings
});

setInterval(function() {
  console.log('Generating new data');
  api.emit('refresh', { foo : 'bar'});
}, 1000);

setInterval(function() {
  console.log('Generating Status');
  api.emit('status', { status : '...'});
}, 2000);