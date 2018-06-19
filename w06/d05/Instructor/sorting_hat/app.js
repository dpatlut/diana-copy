var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var urlEncode = bodyParser.urlencoded({extended: false});
var app = express();

var db = new sqlite3.Database('hogwarts.db');

app.set('view_engine', 'ejs');
app.use(urlEncode);

app.get('/', function(req, res) {
	res.redirect('/students/new');
});

app.get('/students/new', function(req, res) {
	res.render('new.ejs');
});

app.get('/students/:id', function(req, res) {
	db.get('SELECT * FROM students WHERE student_id = ?', parseInt(req.params.id), function(err, student) {
		if (err) {
			throw err;
		} else {
			res.render('student.ejs', {student: student});
		}
	});
});

app.post('/students', function(req, res) {
	db.all('SELECT * FROM houses', function(err, rows) {
		var houseNum = rows.length; //number of houses currently in the database
		var houseId = Math.ceil(Math.random() * houseNum);
		db.run('INSERT INTO students (name, house_id) VALUES (?, ?)', req.body.name, houseId, function(err){
			if (err) {
				throw err;
			} else {
				console.log(this);
				res.redirect('/students/' + this.lastID);
			}
		});
	});
});

app.listen(3000, function() {
	console.log('listening on 3000');
});