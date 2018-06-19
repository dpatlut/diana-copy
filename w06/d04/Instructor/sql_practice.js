var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('pizza.db');

//CREATE A TABLE
db.run('CREATE TABLE pizzas(id INTEGER PRIMARY KEY autoincrement, name TEXT, price INTEGER)');


// CREATE - INSERT into a table
db.run("INSERT INTO pizzas(name, price) VALUES (?,?)", "Bianco", 5, function(err){
	if(err){
		throw err;
	}
});

// CREATE - INSERT into a table
db.run("INSERT INTO pizzas(name, price) VALUES (?,?)", "Shroomtown", 10, function(err){
	if(err){
		throw err;
	}
});

// READ - GET all rows from a table
db.all('SELECT * FROM pizzas', function(err, rows){
	if(err){
		throw err
	} else {
		console.log(rows)
	}
});

// READ - GET a single row from a table
db.get("SELECT * FROM pizzas WHERE id=?", 2, function(err, row){
	if(err){
		throw err
	} else {
		console.log(row)
	}
});

// UPDATE - update a row in a table
db.run("UPDATE pizzas SET name=?, price=? WHERE id=?", "Bella Bianco", 12, 1, function(err){
	if(err){
		throw err
	}
});

// DELETE - delete a row from a table
db.run("DELETE FROM pizzas WHERE id=?", 1, function(err){
	if(err){
		throw err
	}
});


