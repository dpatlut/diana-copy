# Week Two Weekend Review

##### [I. Nested Data Structures](#data)
##### [II. Debugging](#debug)
##### [III. Iteration](#iteration)
##### [IV. Callbacks](#callbacks)
##### [V. The DOM](#dom)
##### [VI. CDN](#cdn)
##### [VII. Pseudo Classes](#pseudo)
##### [VIII. CSS Resets](#reset)
##### [IX. CSS Grid](#grid)


### <a name=data>Nested Data Structures</a>
* We learned about arrays and we learned about objects with key value pairs inside. 
* Arrays and Objects can also be nested within each other. [Link to Bond Films HW for reference](https://github.com/ga-students/diana_students/tree/master/w02/d02/Homework/Bond)
* Another example in case you're not in the mood to click the link above. 

```
var warnerBros = [
	{
		title: "Animaniacs",
		start: 1995,
		end: 1999,
		characters: ["Yakko", "Wakko", "Dot"]
	},
	{
		title: "Pinky and the Brain",
		start: 1995,
		end: 1998,	
		characters: ["Pinky", "The Brain", "Snowball"]
	},
	{
		title: "Batman Beyond",
		start: 1999,
		end: 2001,
		characters: ["Terry McGinnis", "Bruce Wayne", "Maxine 'Max' Gibson", "Ace"]
	},
	
]
```

### <a name=debug>Debugging</a>
* ```console.log``` - Put these all over the place. It will tell you if your functions/codes are running fine. This might be especially handy for something like........ EVENT LISTENERS?!?!?!
* TypeOf method - If you're unsure what kind of value something is returning or what a variable might be try console logging and using the ```typeof``` method

### <a name=iteration>Iteration</a>
* The three loops we have studied so far are the "while loop", "for loop", "forEach loop". Below are examples of how you would loop through an array to console log all the values. 

```
var doug = ["Doug", "Skeeter", "Patti", "Stinky", "Porkchop"];

```
```
var i = 0;

while (i < doug.length){
	console.log(i);
	i++
}
```

```
for (var i = 0; i < doug.length; i++){
	console.log(doug[i])
}
```

```
doug.forEach(function(e){
		console.log(e);
	}
)
```

### <a name=callbacks>Callbacks</a>
* Callbacks can be anonymous or named functions. 
* Callbacks can be passed as an argument, a.k.a. parameter.
* A callback function is not invoked immediately but rather it is "called back" (see what I did there?) when a condition in the containing functions body is activated. 
* Below is an example of how to use a named function

```
var myCBFunc = function(){
	return "a, b, c";
};

var containerFunc = function(callback){
	callback();
};

containerFunc(myCBFunc); // returns "a, b, c"
```


### <a name=dom>The DOM (Queue scary lightning noise)</a>

* DOM = Document Object Model
* The DOM is a javascript representation of our HTML Markup and allows us the ability to access and manipulate its elements.
* Check out this "Tree of Objects" diagram here: [http://javascript.info/tutorial/traversing-dom](http://javascript.info/tutorial/traversing-dom)

##### How do we target elements in HTML using JS?

* Here are some methods you can use to grab elements:

```
* document.getElementById('myIdName')
* document.getElementsByTagName('article')
* document.getElementsByClassName('myClassName')
* document.querySelector('.cssSelector')
* document.querySelectorAll('li')
```

* Remember that some of the methods will return a different type of value then others. 
	* getElementsByClassName will return a nodeList VS. getElementById will return a single domNodeElement.

##### Event Listeners
* The addEventListener method takes in two arguments. The first argument is an "event" and the second is a callback function. 
* The below is an example of adding a click event to a button:

```
button.addEventListener("click", function(){
	document.getElementById('myTitle').innerHTML = "Did you reinforce the take off ramp?"
})
```
* Some other listeners you might consider other than click are "keyup", "keydown", "keypress", "mouseover" and the like. 


### <a name=cdn>CDN - Content Delivery Network</a>
* Literally the first thing off Google

```
A content delivery network (CDN) is a system of distributed servers (network) that deliver webpages and other Web content to a user based on the geographic locations of the user, the origin of the webpage and a content delivery server.
```

* ELI5 - Explain Like I'm Five version

```
Somebody has a giant server somewhere that is storing files such as css stylesheets. You can grab the link to those files and attach it to your webpage. 

Use a file that is not housed on your computer.
```

* Why we might use CDN's rather then include the entire files of packages or frameworks on our own server. (This was found )
	* More servers
    * The bandwidth that you don't pay for
    * Geolocation (lower response time)
    * Redundancy
    * The optimized caching settings
    * Chance the user has already cached the file from there
    * Parallelized downloads, user can grab other content from your site at the same time

### <a name=pseudo>Pseudo Class</a>
* A pseudo class is something that can be added to a CSS selector to specify a special state of an element. 
* Here is the MDN documentation for pseudo classes: [https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
* Below is an example of how you may use the hover class

```
button {
	font-size: 1.25em;
	color: white;
	background-color: black;
}

button:hover {
	color: black;
	background-color: red;
}

```


### <a name=reset>CSS Reset</a>
* Different browsers have different ways of rendering HTML markup. A ```< h1 >``` header may have a different paddiing or margin size in Chrome vs. Mozilla vs. IE vs. Safari vs. Opera. (Yes unfortunately there are plenty of companies that still use IE...). 
* We use CSS Reset files to reduce the amount of inconsistencies between browsers. 
* In our CSS sprinkles session we used "normalize.css".
* This is an external stylesheet that you can link in the head of your html.
* Make sure to put the normalize link BEFORE your own stylesheet link.
* Below is an example of how to link the file.

```
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css">

<link rel="stylesheet" type="text/css" href="./assets/style.css">
```


### <a name=grid>CSS Grid</a>
* The grid system allows us to make a website more "responsive" to various screen sizes. 
* Grids reduces the need for us to use hardcoded funky things like floats
* * A great post online about grids can be found here: [Don't Over Think It](https://css-tricks.com/dont-overthink-it-grids/).
* In class we went over "Skeleton CSS". It can be found here: [http://getskeleton.com/](http://getskeleton.com/).
	* You can link this the same way you would have linked the "normalize" example above.





