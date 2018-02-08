/**
 * @name SERVER
 * @author Naycool Gonzalez <naycoolgonzalez@gmail.com>
 * @description Instacia e inicializacion del servidor
 */

var http = require('http');
var path = require('path');
var fs = require("fs");
var Helpers = require('./server/helpers/helpers.js');
var Messages = require('./server/lib/messages.js');

var express = require('express');
var app = express();
var server = http.createServer(app);

app
  .use(express.static('./app/'))
  .get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  })
  .post('/api/getHotels', function (req, res) {
    var hotels = JSON.parse(fs.readFileSync("server/models/data.json"));
    var filter = hotels;

    if(Helpers.emptyDatas(req.query.score) || (req.query.name !== undefined && req.query.name !== "")) {
      filter = [];
      hotels.forEach(function (element, index) {
        var name = (new RegExp(".*" + Helpers.slugify(req.query.name) + ".*", "ig").test(Helpers.slugify(element.name)));
        var score = ([3,1].indexOf(element.stars) !== -1);
        if (name || score)
          filter.push(element);
      });
    }

    res.send({
      data: filter,
      msj: filter.length > 0 ? Messages.global.success.loadHotels : Messages.global.errors.loadHotels,
      event: filter.length > 0
    });
  })


server.listen(3000, "127.0.0.1", function () {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
