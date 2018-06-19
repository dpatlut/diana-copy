var body = document.querySelector('body');
var container = document.querySelector('.container');

var h1 = document.createElement('h1');

h1.textContent = "WDI ROCKS!!!!!!!"

body.appendChild(h1);

// var div = document.createElement('div');
// div.setAttribute('class', 'box');

// container.appendChild(div);

for(var i = 0; i < 9; i++){
	var div = document.createElement('div');
	div.setAttribute('class', 'box');
	container.appendChild(div);
}