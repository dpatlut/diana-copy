##### What is Digital Ocean? How are we using it? 

* DO is a hosting service. Where we can host our applications
* Each Digital Ocean Droplet can hold multiple servers. A user can also have multiple droplets. 
* Other services
	* Heroku
	* Amazon Web Services
	* Blue Host
	* GoDaddy (NOT AN OPTION)

##### Would you use the HTTP module or the Express NPM to build a node server and why?

* There's only one answer.... Express
* Using the HTTP module forces us to write extra code for parsing, conditions for routes, and the like. 
* Express has shorthand conventions for us to use. 

##### What is apt-get, what does it do, why do we use it?

* APT = Advanced Packaging Tool
* This is the package manager to install things on Linux environments
* We used this when we created our DO droplets because we created them as Ubuntu servers

##### Describe to me CSS specificity

* There is a hierarchy in CSS. 
	* Inline - Internal - External
	* ID - Class - Element
* If CSS is applied to an element multiple times the value with the higher hierarchy takes place. 
* If the hierarchy is the same, the CSS value that comes last will take precedent. 
* NOTE: The child element will inherite it's parents style unless you override them.

##### What does a "POST" request do?

* POST requests pass data from the user to the web server. and "request" that server accepts the data enclosed in the messages "body"

##### Tell me why we need the "body-parser" npm module

* To. Parse. The. Body
* It makes your life easy
* Creates an object for the server to use
* You cannot access the "body" being sent in POST unless you parse it
* inbetween hard and soft

* **body-parser module is middleware. We are using it because it alters the data sent from html forms before it reaches the server.**


##### How do you find a server running on your Digital Ocean droplet and stop it? 

* ps aux | grep (search term)
	* ps aux | grep node
	* ps aux | grep server.js
* Stopping
	* kill -9 processNumber

##### What happens when you type www.facebook.com into the url and press enter?

* Send request to DNS server for IP address
* Information gets sent to browser
* Browser sends request to server with IP address
* Server sends back an HTML file
* Browser sends new request for script files (if there are any)

##### What does TCP stand for and why do we use it?

* Transmission Control Protocol
* A set of rules for reliable transmission of data sent over IP
* Things are transferred as broken up packets. TCP garaunteeds the data is sent between clients and server in the correct order

##### What does a "GET" request do?

* It gets information 
* GET requests ONLY retrieves data, does not do anything else 

```
app.get('/', function(request, response){
	response.send("hello world");
})
```

##### Why do we use forms?

* Getting information from the client

```
<form method="POST" action="/">
	<input id="name" type='text' name='name'/>
	<label for='name'> YOUR NAME!!!</label>
	<button>SUBMIT</button>
</form>
```

VERY IMPORTANT!!!!!
	
* the `for=` in a label references an input tags `id` attribute. NOT it's `name` attribute. 

##### In your own words tell me what a server is / what it does? 

* It brings something...
* Responds to the client request
* Does it act as a middle man between two clients? Yes verbatim why okay omg haha
* A server is a computer that hosts a (server application) that will host a website that other clients can access

* **A server is a computer that serves up information which is requested. **

##### Describe to me the Box model in CSS

* Four layers to the box model
* Content
* Padding
* Border
* Margin

##### PARKING LOT

* Does POST send over plain text?
	* From [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Sending_and_retrieving_form_data)
	* The POST method is a little different. It's the method the browser sends the server to ask for a response that takes into account the data provided in the body of the HTTP request: "Hey server, take a look at this data and send me back an appropriate result." If a form is sent using this method, the data is appended to the body of the HTTP request. 
* Do you need an ID for input label, or does it pull of name
	* VERY IMPORTANT!!!!!
	* the `for=` in a label references an input tags `id` attribute. NOT it's `name` attribute. 
	* I knew something was off when you guys starting spewing me weird answers! Good thing we have this sweet parking lot. 
* "pgrep" vs "ps aux | grep" 
	* ps aux is more accurate because it includes the full command line (path and parameters), while pgrep only looks at the first 15 characters of the executable's names.