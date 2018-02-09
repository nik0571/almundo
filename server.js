/**
 * @name SERVER
 * @author Naycool Gonzalez <naycoolgonzalez@gmail.com>
 * @description Instacia e inicializacion del servidor
 */

var ENVIRONMENT = "PRODUCTION";
var http = require('http');
var path = require('path');
var fs = require("fs");
var Helpers = require('./server/helpers/helpers.js');
var Messages = require('./server/lib/messages.js');

var express = require('express');
var app = express();
var server = http.createServer(app);

app
  .use(express.static(ENVIRONMENT !== 'PRODUCTION' ? './app/' :'./dist/'))
  .get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  })
  .post('/api/getHotels', function (req, res) {
    var hotels = JSON.parse(fs.readFileSync("server/models/data.json"));
    var filter = hotels;

    if(Helpers.emptyDatas(req.query.score) || (req.query.name !== undefined && req.query.name !== "")) {
      filter = [];
      hotels.forEach(function (element, index) {
        var name = false,
            score = false;

        if(req.query.name !== undefined && req.query.name !== "")
          name = (new RegExp(".*" + Helpers.slugify(req.query.name) + ".*", "ig").test(Helpers.slugify(element.name)));

        if(Helpers.emptyDatas(req.query.score))
          score = (req.query.score.indexOf(element.stars) != -1) || (req.query.score.indexOf(element.stars.toString()) != -1);

        if (name || score)
          filter.push(element);
      });
    }

    res.send({
      data: filter,
      msj: filter.length > 0 ? Messages.global.success.loadHotels : Messages.global.errors.loadHotels,
      event: filter.length > 0,
      query: req.query
    });
  })


server.listen(process.env.PORT || 3000, process.env.IP || "127.0.0.1", function () {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
