var http = require('http'); //includes the http package 
var url = require('url'); //includes the url package
var fs = require('fs');

//start the server
var server = http.createServer().listen(3000);//listens for traffic on port 3000

//create an HTTP server that expects both request and response objects
//as the two arguments to a callback 
server.on('request', function(request, response){ 

    var urlObj = url.parse(request.url); 
    var path = urlObj.pathname; //dissect the url 

    if (path==="/" && urlObj.query){
   
      var queryPortion = urlObj.query.split("=");
      
      if(queryPortion[0]==="t"){

         var cruiseDBText = fs.readFileSync("cruise_data.json");
         var cruiseDB = JSON.parse(cruiseDBText);

         var foundIt = false;

         cruiseDB.forEach(function(movie){
            var targetMovie = queryPortion[1].replace(/\+/g," ");

            if(movie.Title.toLowerCase() === targetMovie.toLowerCase()){
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.write(JSON.stringify(movie));
                response.end();
                foundIt=true;
            }
        });//look through each movie

         if(foundIt===false){
             var movie = { error : "movie not in the otcmdb!"};
             response.writeHead(200, { 'Content-Type': 'application/json' });
             response.write(JSON.stringify(movie));
             response.end();
         }

      }//look for a title match
      else{
            response.writeHead(400, { 'Content-Type': 'text/html' });
            response.write("Bad Request");
            response.end();
      }
    }
    else if(path ==="/"){  

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Welcome to the Open Tom Cruise Database!!!</h1></body>')
      response.write('</html>')
      response.end();

    }
    else if( path ==="/favicon.ico"){

        console.log("request for favicon.ico");
        
    }

});
