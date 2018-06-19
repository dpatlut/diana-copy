var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rolodex.db');

db.run("INSERT INTO contacts (name, phone) VALUES (?,?), (?,?), (?,?), (?,?), (?,?)",
		'Maria', '2125551234',
		'Justin', '2123334444',
		'Jason', '2128675309',
		'Hayley', '2124445555',
		'Paul', '2127776666',
		function(err){
			if(err){
				throw err
			}
		}
	);