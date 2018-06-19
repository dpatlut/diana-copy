//This file demonstrates how to read JSON data from a file
//Coment each line of code in this file

var fs = require("fs");  

var stringFruit = fs.readFileSync("./fruit_good.txt", "utf8");  

if (stringFruit.length == 0){
  var jsonFruit = [];
}
else{
  var jsonFruit = JSON.parse(stringFruit);  
}

console.log("Here are your fruit:",jsonFruit);
console.log("Your first fruit is a:",jsonFruit[0].name);




