var request = require('request');
var fs = require('fs');
var ejs = require('ejs');

var input = process.argv[2];
// var movieChoice = input.replace(/ /g , "+");

// function inputChanger(){
//     var input = []
//     for(i = 2; i <process.argv.length; i++){
//         input.push(process.argv[i])
//     }
//     return input.join(' ')
// }

var choice = input.split(" ").join("+");
console.log(choice)

request("http://www.omdbapi.com/?t=" + choice + "&r=json", function(error, response, body){
	var data = JSON.parse(body);
	var movieObject = {title: data.Title, year: data.Year, writer: data.Writer, director: data.Director}
	var template = fs.readFileSync('template.html', 'utf8');
	var html = ejs.render(template, {movie: movieObject});
	fs.writeFileSync('index.html', html)
});

// Exercise 

// build a simple CLI that grabs movie info (title, year, writer, and director) from ombd and creates and html page using ejs templating.

// You should be able to grab the movie title to search for as a command line argument. 