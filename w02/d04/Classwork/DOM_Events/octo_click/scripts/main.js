console.log("Connection to main.js works!");


function displayMessage(event) {
	console.log("A "+event.type+" event just ocurred!")
	document.querySelector("p.message").innerHTML = "Whoah! DOM events actually work!";
}

document.getElementById("intro").addEventListener("click", displayMessage);





window.addEventListener("resize", function(event){
	console.log("A "+event.type+" event just ocurred!");
	var w = window.innerWidth;
	var h = window.innerHeight;
	document.querySelector("p.message").innerHTML = "You've just resized the window to "+w+"px  x  "+h+"px!";
});



var header = document.querySelector("h1");

header.addEventListener('copy',function(event){
	console.log("A "+event.type+" event just ocurred!");
	document.querySelector("p.message").innerHTML = "Why did you copy my H1 text???!!";
});




var octoPic = document.querySelector("#octo");

octoPic.addEventListener('click', function(event){
	console.log("A "+event.type+" event just ocurred!");

	var caption = document.querySelector("#octo-caption");
	caption.setAttribute("class","purple-stuff");
});



var picture = document.querySelector("#garden");

picture.addEventListener('click', function(event){
	    console.log(event);
		var msg = document.querySelector(".message");
		msg.setAttribute("class","message green-stuff");
	    console.log(msg);
});


var btn = document.querySelector("#myInput");

btn.addEventListener('click', function(event){
		var name = document.querySelector("input");
		console.log(name.value);
		var caption = document.querySelector("#octo-caption");
		var words = caption.innerText;
		console.log(words);
		words = "A " + words + " named " + name.value;
		console.log(words);
		caption.innerText = words;
});


/*	
	1) Make "Purple Octopus" turn Purple when you click on the octopus picture
	   Modify a class attribute to trigger a different css style to accomplish this



/*
	2) Add a text input field and a button. 
	   Once the user clicks the button, 
	    change "Purple Octopus" to "A Purple Octopus named ...."
	   Use the contents of an input field to replace the ...
*/


/*
	3) Take the "9 divs" exercise from yesterday and use a for loop 
		to dynamically add event listeners to each 
		Hint: try console.log(event) to see all of the info contained in the event object
		
		Bonus: When a user clicks on a box, write the box number in the center of the box
*/


