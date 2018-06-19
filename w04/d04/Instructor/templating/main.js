var ejs = require('ejs');
var fs = require('fs');

var data = fs.readFileSync('data.json', 'utf8');
var dogsAry = JSON.parse(data);

var buster = {"id": 4, "name": "buster", "breed": "pitbull"};
dogsAry.push(buster);

var template = fs.readFileSync('template.html', 'utf8');

var html = ejs.render(template, {dogs: dogsAry});

fs.writeFile('index.html', html, function(err){
	if(err){
		console.log(err);
	} else {
		console.log("view updated")
	}
});