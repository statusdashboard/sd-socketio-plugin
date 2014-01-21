# Status Dashboard Socket.io Plugin

Send status dashboard updates to a Socket.IO compliant server.

    Status Dashboard --> Socket.IO plugin --> Socket.IO server --> Socket.IO client(s)

## Howto

### Install

Install the 'sd-socketio-plugin' plugin in status dashboard as defined at https://github.com/obazoud/statusdashboard#external-plugins:

- Download/clone/install statusdashboard
- Install the plugin 'npm install sd-socketio-plugin'
- Add the plugin to the configuration file (plugins.json)

### Configure

Add the socket.io information to the status dashboad settings:

    {
      plugins:
        socketio:
          url : 'http://localhost:3000'
    }

Where the URL is a Socket.IO compliant server. If not set, it will default to 'http://localhost:3303'.

## Sample

A sample is available at http://github.com/chamerling/sd-socketio-plugin/samples. Check the README for more details.

## Licence

MIT