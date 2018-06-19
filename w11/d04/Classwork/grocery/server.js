var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/groceries.db');
var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.json({extended: false});


app.use(urlencodedBodyParser);

app.use(express.static('public'));

app.get('/', function(req, res){
	res.send('index.html')
})
app.get('/groceries', function(req, res) {
	db.all("SELECT * FROM groceries", function(err, rows) {
		if(err) {
			throw err;
		}
		res.json(rows);
	});
});


app.get('/groceries/:id', function(req, res) {
	db.get("SELECT * FROM groceries WHERE id = ?", req.params.id, function(err, row){
		if(err) {
			throw err;
		}
		res.json(row);
	});
});

app.post('/groceries', function(req, res) {
	db.run("INSERT INTO groceries (name) VALUES (?)", req.body.name,  function(err) {
		if(err) {
			throw err;
		}
    var id = this.lastID;
    db.get("SELECT * FROM groceries WHERE id = ?", id, function(err, row) {
    	if(err) {
    		throw err;
    	}
    	res.json(row);
    });
  });
});

app.put('/groceries/:id', function(req, res) {
	console.log(req.body)
	var id = req.params.id;
	console.log(req.body.name)
	db.run("UPDATE groceries SET name = ?  WHERE id = ?", req.body.name, id, function (err) {
		if(err) {
			throw err;
		}
		db.get("SELECT * FROM groceries WHERE id = ?", id, function(err, row) {
			if(err) {
				throw err;
			}
			res.json(row);
		});
	});
});

app.delete('/groceries/:id', function(req, res) {
	db.run("DELETE FROM groceries WHERE id = ?", req.params.id, function(err) {
		if(err) {
			throw err;
		}
		res.json({deleted: true});
	});
});

app.listen(3000, function(){
	console.log('listening on 3000')
});