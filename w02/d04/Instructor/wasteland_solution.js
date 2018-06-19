console.log("main.js linked");


var birds = [
  "Luther the Bird",
  "Tim the Bird",
  "Lucy the Bird",
  "Sara the Bird",
  "Tommy the Bird",
  "Billy the Bird",
];

var house = document.createElement("div");

house.setAttribute("class", "dwelling");
//house.setClassName("dwelling");
//house.className = "dwelling";

var body = document.querySelector("body");
//var body = document.body;

body.appendChild(house);

var topLevelHeader = document.createElement("h1");

var span = document.createElement("span");
span.textContent = "Seeming Wasteland";
span.className = "shadowed";

topLevelHeader.appendChild(span);
body.appendChild(topLevelHeader);

var waldo = document.createElement("div");
waldo.setAttribute("id", "waldo");
//waldo.id = "waldo";
body.appendChild(waldo);

var ul = document.createElement("ul");

for (var i = 0; i < birds.length; i++) {
	var li = document.createElement("li"); //creating the list item for a bird
	li.className = "bird"; //setting the class to "bird"
	li.textContent = birds[i]; //gives text within each list item
	ul.appendChild(li); //move the li into the ul
}

body.appendChild(ul);

var element = document.createElement("img");
element.setAttribute("src", "https://placekitten.com/g/200/300");
body.appendChild(element);

span.textContent = "Teeming Funland"

