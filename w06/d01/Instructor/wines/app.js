var express = require('express');
var app = express();
var ejs = require('ejs');
var fs = require('fs');
var bodyParser = require('body-parser');
// allow for method override ADD ME DURING PUT and DELETE
var methodOverride = require('method-override');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

// Tells app to use the urlencoding body-parser to parse our body data.
app.use(urlencodedBodyParser);

// tell the app what override method to use
app.use(methodOverride('_method'));

// Sets up app to render templates using EJS, our favorite.
app.set('view_engine', 'ejs');

// Read in current data information from JSON file
function getWineData(){
	var data = fs.readFileSync('data.json', 'utf8');
	var parsedData = JSON.parse(data);
	return parsedData
}

// Write new data information to JSON file
function saveWine(wineData){
	var updatedData = JSON.stringify(wineData);
		fs.writeFile('data.json', updatedData, function(err){
			console.log('data updated');
		});
}

function getCurrentWine(id){
// Fill this in	
}

app.get('/', function(req, res){
	res.redirect('/wines');
});

// LIST
// Serves up a list of all the wines.
app.get('/wines', function(req, res){
	var wines = getWineData().wines;
	res.render('index.ejs', {wines: wines})
});

// NEW
// Form to make a new wine
app.get('/wines/new', function(req, res){
	res.render('new.ejs');
});

// SHOW a single wine
app.get('/wines/:id', function(req, res){
	var wines = getWineData().wines;
	wine = wines[req.params.id]
	res.render('show.ejs', {wine: wine})
});

// CREATE
// The route that we hit to gather the data sent from the form to create a wine.
app.post('/wines', function(req, res){
//get all the current data from the JSON file		
	var wineData = getWineData()
//set a new id 
	var id = getWineData().counter + 1
//make a new wine object	
	var newWine = {
		id: id,  
		wineName: req.body.wineName, 
		type: req.body.type
	}
//create the new object in the dataset
	wineData.wines[id] = newWine;
//set the counter to the incremented number	
	wineData.counter = id;
//call function to stringify the updated data and rewrite the data file		
	saveWine(wineData)
//redirect to the list of wines	
	res.redirect('/wines')
});

//EDIT form for updating a wine
app.get('/wines/:id/edit', function(req, res){
	var wineData = getWineData();
	var thisWine = wineData.wines[req.params.id];
	res.render('edit.ejs', {wine: thisWine})
});


// UPDATE a wine
app.put('/wines/:id', function(req, res){
//get all the current data from the JSON file	
	var wineData = getWineData();
//choose wine object by id
	var thisWine = wineData.wines[req.params.id];
//update each attribute
	thisWine.wineName = req.body.wineName;
	thisWine.type = req.body.type;
//call function to stringify the updated data and rewrite the data file		
	saveWine(wineData)
// redirect to this wine page to see changes
  res.redirect('/wines/' + req.params.id)
});

app.delete('/wines/:id', function(req, res){
//get all the data from the JSON file	
	var wineData = getWineData();
//choose wine object by id
	var thisWine = wineData.wines[req.params.id];
//delete wine
	delete wineData.wines[req.params.id];
//call function to stringify the updated data and rewrite the data file		
	saveWine(wineData)
//redirect to the list of wines		
	res.redirect('/wines');
});

// tell our app to listen on port 3000
app.listen(3000, function(){
	// log information for sanity
	console.log('listening on port 3000!')
});
