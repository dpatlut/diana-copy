console.log("Connection to main.js works!");

var parent = document.querySelector(".container");

for(var i=0; i<9; i++){
	var section = document.createElement("div");
	section.setAttribute("class", "box");
	section.setAttribute("id", "box"+i);


	section.addEventListener('click',function(event){
		console.log(event);
		var id = event.srcElement.id;
		console.log("hello "+id);
	});

	parent.appendChild(section);
}