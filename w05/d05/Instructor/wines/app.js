var express = require('express');
var app = express();
var ejs = require('ejs');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

// Tells app to use the urlencoding body-parser to parse our body data.

app.use(urlencodedBodyParser);

// Sets up app to render templates using EJS, our favorite.
app.set('view_engine', 'ejs');

// Custom functions
function getWines(){
	var data = fs.readFileSync('data.json', 'utf8');
	var wines = JSON.parse(data);
	return wines;
}

function makeNewId(wines){
	var currentId = wines[wines.length - 1].id;
	var newId = currentId + 1
	return newId
}

app.get('/', function(req, res){
	res.redirect('/wines');
});

// LIST
// Serves up a list of all the wines.
app.get('/wines', function(req, res){
	var wines = getWines();
	res.render('index.ejs', {wines: wines})
});

// NEW
// Uses the view engine serves up html (a form) to make a new wi
app.get('/wines/new', function(req, res){
	res.render('new.ejs');
});

// SHOW
app.get('/wines/:id', function(req, res){
	var wines = getWines()
	wines.forEach(function(wine){
		if(wine.id.toString() === req.params.id){
			res.render('show.ejs', {wine: wine})
		}
	});
});

// CREATE
// The route that we hit to gather the data sent from the form to create a wine.
app.post('/wines', function(req, res){
	var wines = getWines();
	var id = makeNewId(wines);
	var newWine = {id: id, studentName: req.body.studentName, faveWine: req.body.faveWine, type: req.body.type}
	wines.push(newWine);
	var updatedData = JSON.stringify(wines);
	fs.writeFileSync('data.json', updatedData);
	res.redirect('/wines')
});

// tell our app to listen on port 3000
app.listen(3000, function(){
	// log information for sanity
	console.log('listening on port 3000!')
});
