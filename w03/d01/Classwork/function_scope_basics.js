/*Function_Scope_Basics.js

An example designed to illustrate
the consequences of declaring variables
in different places.
*/

var a = 10;

function doStuff(num1){
	var a = 5;
	console.log(num1, " was passed as an argument!");
	console.log("The value of a inside of the function:", a);
}

doStuff(a);
console.log("The value of a outside of the function:", a);
