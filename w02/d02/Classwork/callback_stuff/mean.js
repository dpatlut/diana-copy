/*mean.js

A function that calculates the average of a bunch of numbers

Input: an array of numbers
Output: the average of all of the numbers in the array, a numbers
*/

function mean(listOfNumbers){

	var total = 0;
	for(var i = 0; i<listOfNumbers.length; i++){
		total+=listOfNumbers[i];
	}

	return total/listOfNumbers.length;
}

var list = [10,0,10,10,10, 10, 10];
var list2 = [13330,033,10,310,10, 10, 10];


console.log("The avg:",mean(list));
console.log("The avg:",mean(list2));