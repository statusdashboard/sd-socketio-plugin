# Status Dashboard Socket.io Plugin

Send status dashboard updates to a Socket.IO compliant server.

    Status Dashboard --> Socket.IO plugin --> Socket.IO server

## Howto

### Install

Install the plugin in status dashboard as defined at https://github.com/obazoud/statusdashboard#external-plugins

### Configure

Add the socket.io information to the status dashboad settings:

    {
      plugins:
        socketio:
          url : 'http://localhost:3000'
    }

Where the URL is a Socket.IO compliant server.

## Sample

A sample is available at http://github.com/chamerling/sd-socketio-plugin/samples. Check the README for more details.

## Licence

MIT