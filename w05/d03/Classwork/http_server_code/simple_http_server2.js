var http = require('http'); //includes the http package 
var url = require('url'); //includes the url package
var fs = require('fs');

//start the server
var server = http.createServer().listen(3000);//listens for traffic on port 3000

//create an HTTP server that expects both request and response objects
//as the two arguments to a callback 
server.on('request', function(request, response){ 

    var urlObj = url.parse(request.url); 
    console.log(urlObj);
    var path = urlObj.pathname;

    if(path==="/"){
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Welcome to the Open Tom Cruise Database!!!</h1></body>')
      response.write('</html>')
      response.end();
    }else if (path==="/movies"){
       var cruiseDBText = fs.readFileSync("cruise_data.json");
       var cruiseDB = JSON.parse(cruiseDBText);

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Tom Cruise has been in A LOT of movies!!!</h1></body>');
      response.write("<ol>");
      cruiseDB.forEach(function(movie){
          response.write("<li>"+movie.Title + "</li>");
      });
      response.write("</ol>");
      response.write('</html>')
      response.end();
    }
    else{
      response.writeHead(400, { 'Content-Type': 'text/html' });
      response.write('Bad Request');
      response.end();
    }

});
