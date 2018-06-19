#AJAX

##What is AJAX?

Asynchronous Javascript and XML. 

AJAX allows clients to make HTTP requests.

AJAX is a technique for creating fast and dynamic web pages.

AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page, without reloading the entire page.

We'll use AJAX in combination with JSON-server to create MOVIE HAUS 3 as a single page app.

Check out ```movie_test``
```javascript
$.ajax({
      method: "GET",
      url: "http://www.omdbapi.com/?t="+title,
    }).done(function(data) {
    	console.log(data);
       var output = "You searched for:<br><h5>"+data.Title+"</h5>";
       output+="<br>"+data.Plot;
       output+="<br>"+data.Year+", "+data.Rated+", "+data.Runtime;
       document.getElementById("data").innerHTML=output;
    }); 
```


##json-server
https://www.npmjs.com/package/json-server

An easy way to create a JSON database that relies on RESTful routes. We'll use this todoay to focus on AJAX. Create a new project folder and let's explore the documentation.



##Step 1: POST to the json-server via a form

- notice that the JSON response is loaded into a new page

##Step 2: POST via an JQuery AJAX request

- no page refresh

##Step 3: GET all of the entries in the database

### $ajax().done
Javascript is asynchronous, so this is the method that gets called once the http request recieves a response.


##Resources

JQuery docs: http://api.jquery.com/jquery.ajax/

Vanilla-js: http://vanilla-js.com/
