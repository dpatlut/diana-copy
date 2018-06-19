var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('library.db');

db.all('SELECT * FROM books', function(err, table){
			if(err) throw err;
			else{
				console.log("------------BOOKS--------");
				console.log(table);
			}
});

db.all('SELECT * FROM authors', function(err, table){
			if(err) throw err;
			else {
				console.log("------------AUTHORS--------");
				console.log(table);
			}
});

//WHERE authors.hometown = "Bloemfontein, Orange Free State"
db.all('SELECT books.title FROM authors INNER JOIN books ON books.author_id=authors.id WHERE authors.name="J.K. Rowling"', function(err, table){
			if(err) throw err;
			else{
			 console.log("------------Title, Name--------");
			 console.log(table);
			}
});
