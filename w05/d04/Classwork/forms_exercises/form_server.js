var express = require('express');
var fs = require("fs");
var app = express();

app.get('/', function (req, res) {
 var index = fs.readFileSync("./index.html", "utf8");
  res.send(index);}
);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://'+host+":"+ port);
});
