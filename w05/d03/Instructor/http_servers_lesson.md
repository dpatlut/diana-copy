![](http://www.ntu.edu.sg/home/ehchua/programming/webprogramming/images/HTTP_Steps.png)

# HTTP Server Basics

**Prior Knowldege:**    

      - Familiarity with making GET requests via curl to other websites. 
      - Experience using the omdb API to request specifc resources from a url.
                        
**Learning Objectives**

      - Understand and apply the url Node package to automatically dissect a "complicated" url
      - Describe the significance of both the "pathname" and "query" portion of a url
      - Write a simple HTTP server
      - Write an HTTP server that uses JSON files to respond to specific client requests
      - Compare and contrast TCP and HTTP
      

## HTTP GET Requests in the browser

**Question**: *What are "links"?*

      1) User clicks on a link (or types it in the browser).
      
      2) Browser makes a new HTTP request to the server
      
      3) Server reads the request and sends a response (maybe even a "Hey client, you made a bad request :( ")
      
      4) Browser renders new stuff

**Most links are actually HTTP GET requests.**
An HTTP GET request literally means "retrieve whatever information ... is identified by the Request-URI. If the Request-URI refers to a data-producing process, it is the produced data which shall be returned as the entity in the response..." (see: http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4)

- **Activity**: Make some HTTP GET requests in the browser:
  - Make a search on google: https://www.google.com/search?q=tiger+baby
  - Watch a video on youtube: https://www.youtube.com/results?search_query=tiger
      - Useful YouTube url tricks: http://www.techairlines.com/useful-youtube-url-tricks/
      - Example: https://www.youtube.com/watch?v=_gwt2IpcEKQ&ID#t=1m30s 

**API's**

 - API's are essentially the rules a server uses to respond appropriately to the information contained in a url.
 - Think about how you requested information from http://www.omdbapi.com/ 

**Top Tips**: 
   - HTTP is a request-response protocol that manages communication between clients and servers i.e. a client (like your web browser) will request information from a server (like www.google.com, or www.youtube.com) and expect a response. 
   - HTTP servers are programs that can respond to HTTP requests from different clients.
   - HTTP servers can respond to requests in different ways, but they ultimately JUST SEND STRINGS.
   - HTTP servers differentiate GET requests by looking at the "extra stuff" that follows the domain name/ip address.

## How to break down a URL/URI into it's important parts

There's a package for that!

**The url package**-
  ```javascript
  var url = require('url'); //a library to automatically parse the url 
  
  console.log( url.parse('https://www.youtube.com/results?search_query=tiger'));
  ```
  
  Output:
  ```
  { protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.youtube.com',
    port: null,
    hostname: 'www.youtube.com',
    hash: null,
    search: '?search_query=tiger',
    query: 'search_query=tiger',
    pathname: '/results',
    path: '/results?search_query=tiger',
    href: 'https://www.youtube.com/results?search_query=tiger' }
  ```


## Using Node to write an HTTP server that responds to GET requests
So, to write a Node HTTP server the responds to GET requests we need to:

    Write a server that: 
      1) Figures out the important parts of the incoming url to determine what a client is trying to "GET"
      2) If the client has made a valid request, return the appropriate and well-formed response


Here's a basic example:

```javascript
var http = require('http'); //includes the http package 
var url = require('url'); //includes the url package

//start the server
var server = http.createServer().listen(3000);//listens for traffic on port 3000

//create an HTTP server that expects both request and response objects
//as the two arguments to a callback 
server.on('request', function(request, response){ 
    console.log(request.headers);

    var urlObj = url.parse(request.url); 
    var pathname = urlObj.pathname; //parsing the important info in the url

    console.log('Requested ' + pathname);

    //returns a string with the contents of a basic HTML page as a reponse
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<!DOCTYPE html>')
    response.write('<html lang="en">');
    response.write('<head>');
    response.write('<meta charset="utf-8">');
    response.write('<title>' + pathname + '</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('<h1> You wanted the ' + pathname + ' path!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();

});

```


## Using Node to write an HTTP server that responds differently to different GET requests

HTTP servers use the "extra" information in a url to respond to requests in different ways. 

```javascript
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

```

**Chrome and the favicon**
 - Chrome makes two requests to the server... the second request is for the favicon. What a pain in the ass. 


 **Activity**: Test in both Chrome and Firefox

## Implement the otcmdb (the Tom Cruise Open Movie Database)


  Parameter | Description | Example 
  ------ | ------ | ------
   t | title | ```http://127.0.0.1:3000/?t=top+gun```
   id | omdb id | ```http://127.0.0.1:3000/?id=tt0092099```
   y | year of release | ```http://127.0.0.1:3000/?y=1986```
   d | director | ```http://127.0.0.1:3000/?d=Tony+Scott```

**Bonus**:
 - optional query parameter: r=json or r=html (to return rendered html instead of json)

```javascript
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
                foundit=true;
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

```

**Extra Resources:**
- HTTP Basics: http://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html 
