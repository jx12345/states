var express = require('express');

module.exports = function() {
  var app = express();

  app.get('/', function(req, res) {
    res.send('Hello, world');

  });

  app.get('/states/:state', function(req, res) {
    res.send('Page for user ' + req.params.state + ' with optinos ' + req.query.option);
  });
  return app;
};
