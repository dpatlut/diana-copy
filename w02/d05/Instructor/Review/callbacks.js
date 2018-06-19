// Callback use cases
// Queue up functions to run in a specific order
// Pass through variables, dealing with scope

var func = function(variable) {					// Declare a function that will be a callback, it receives an argument called variable
	console.log(variable);								// Logs the variable which was passed through when the function was invoked
	return 'something';										// returns the string "something"
}

var bigFunc = function(arg) {					// Declaring a function which accepts a function as an argument
	var myVar = "I am a string";				// Declaring a local variable called myVar
	console.log(arg(myVar));						// Invoking the callback function, passing through myVar, and logging the return
}

bigFunc(func);												// Invokes bigFunc which runs our program