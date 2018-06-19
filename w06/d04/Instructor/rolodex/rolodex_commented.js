// require node sqlite3 wrapper so that we can interface with the SQL database
var sqlite3 = require('sqlite3').verbose();
//connect our SQL databse
var db = new sqlite3.Database('rolodex.db');

//Log a welcome message 
console.log("Welcome to the CRUD Rolodex. Please enter (C)reate, (R)ead, (U)pdate, or (D)elete");

//process.stdin waits for a data event...whatever you type into the terminal 
process.stdin.on('data', function(data){
//input comes through the callback. we call .toString() to make it a string and them .trim() to get rid of the white space
	var input = data.toString().trim();
//Control flow - if the user enter "C", then log a message promting the user to enter the information in the correct format.   
	  if (input.toUpperCase() === "C") {
// after the log, it's listening for input again.       
    console.log('Please enter a name and phone number in the following manner: new Name number')

  } else if (input.toUpperCase() === "R"){
//grabs all the rows from the DB from the database and returns them as an array of objects - a useful javaScript data structure that we know how to deal with.     
    db.all("SELECT * FROM contacts", function(err, rows) {
      if(err) { 
        throw err; 
      }
      console.log(rows);
    });
  } else if (input.toUpperCase() === "U") {
    console.log('Please enter the id of the person to update, and then a new name and number in the following format: id# Name number')
  } else if (input.toUpperCase() === "D") {
    console.log('Please enter the id of the person to delete in the following format: delete #')
//since we prompted the user to enter the keyword 'new,' we can now listen for that. We split the input so that each word can be evaluated separately. 
  } else if (input.split(" ")[0].toLowerCase() === "new") {
    db.run("INSERT INTO contacts (name, phone) VALUES (?, ?)", input.split(" ")[1], input.split(" ")[2], function(err) {
      if(err) { 
        throw err; 
      }
//this.lastID gives us access to the id of the row that we just inserted. 
      var id = this.lastID; 
      db.get("SELECT * FROM contacts WHERE id = ?", id, function(err, row) {
        if(err) { 
          throw err; 
        }
        console.log(row);
      });
    });
  } else if (input.split(" ")[0].toLowerCase() === "delete") {
    db.run("DELETE FROM entries WHERE id = ?", input.split(" ")[1], function(err) {
      if(err) { 
        throw err; 
      }
    });
//Number turns the first element of the split input into a number. If I had done Number("hello"), then it would be NaN. if I did Number("2"), then it would be 2. That's why we can use this condtional. If it's !NaN, then it's a number. 
  } else if (Number(input.split(" ")[0]) != NaN) {
    db.run("UPDATE entries SET name = ?, phone = ? WHERE id = ?", input.split(" ")[1], input.split(" ")[2], input.split(" ")[0], function (err) {
      if(err) { 
        throw err; 
      }
    });
  }

});