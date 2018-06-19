var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hogwarts.db');

db.run("INSERT INTO houses (name) VALUES (?), (?), (?), (?)",
   'Gryffindor',
   'Slytherin',
   'Ravenclaw',
   'Hufflepuff',
   function(err){
      if(err){
        throw err
      }
   }
);