var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var publicDirectory = path.resolve(__dirname, './public');

var http = require('http').Server(app);
var port = 8080;

app.use(bodyParser.json({limit: '50mb'}));       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true,
  limit: '50mb'
}));

app.use(express.static(publicDirectory));

// DO NOT CACHE ANYTHING DURING DEV
app.get('/*', function(req, res, next){
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next();
});

app.put('/itineraries/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var result = {};
  if (req.params.id) {
    if (req.body) {
      if (req.body.hasOwnProperty('confirmed')) {
        result = { id: req.params.id, status: 'CONFIRMED' };
      } else {
        result = new Error("expected JSON object to have a boolean property named 'confirmed'");
        res.status(412);
      }
    } else {
      result = new Error("expected a JSON object to be sent, none was present.")
      res.status(412);
    }
  } else {
    result = new Error("expected an id to be sent in the URL. ex: /itineraries/1")
    res.status(412);
  }
  res.send(JSON.stringify(result, null, 2));
});

app.get('/itineraries/:id', function(req, res, next) {
  var result = {};
  if (req.params.id) {
    var file = path.resolve(__dirname, './itineraries/' + req.params.id + '.html');
    fs.readFile(file, function(err, data) {
      if(!err) {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
      }
      else {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send(JSON.stringify(err, null, 2));
      }
    });
  } else {
    res.setHeader('Content-Type', 'application/json');
    result = new Error("expected an id to be sent in the URL. ex: /itineraries/1")
    res.status(412).send(JSON.stringify(result, null, 2));
  }
});

app.delete('/itineraries/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var result = {};
  if (req.params.id) {
    res.status(204);
  } else {
    result = new Error("expected an id to be sent in the URL. ex: /itineraries/1")
    res.status(412);
  }
  res.send(JSON.stringify(result, null, 2));
});

// start the server
var server = http.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('The server has started. You can view the site by visiting: http://localhost:' + port + '/ in a browser.');
  console.log('    If you\'re into changing the jquery code, check out the public directory:', publicDirectory);
});
