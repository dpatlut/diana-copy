// This program demonstrates how to save JSON data to a file via JSON.stringify()
//Comment important lines of code in this file


var fs = require("fs");  


var fruits =[];

var fruit1 = {
  name: "banana",
  color: "yellow",
  price: ".79"
}

var fruit2 = {
  name: "apple",
  color: "red",
  price: "1.25"
}

var fruit3 = {
  name: "orange",
  color: "orange",
  price: "2.13"
}

fruits.push(fruit1);
fruits.push(fruit2);
fruits.push(fruit3);

console.log("JSON version:", fruits);  

var stringFruits = JSON.stringify(fruits);

console.log("String version:", stringFruits);


console.log("Name via JSON:", fruits[0].name);  
fs.writeFile("./fruit_bad.txt", fruits); //notice that the callback is optional

console.log("Name via string:", stringFruits[0].name);  
fs.writeFile("./fruit_good.txt", stringFruits);  //notice that the callback is optional

