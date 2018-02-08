
/**
 * @name SERVER
 * @author Naycool Gonzalez <naycoolgonzalez@gmail.com>
 * @description Instacia e inicializacion del servidor
 */

var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var server = http.createServer(app);

app
  .use(express.static('./app/'))
  .get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  })


server.listen(3000, "127.0.0.1", function () {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
