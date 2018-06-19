//#1 - Command Line Message

//Alex's fantastic solution

var fs =  require('fs');

var fileName = process.argv[2];
var text = process.argv[3];

fs.writeFile(fileName, text, function(err){
  if (err) {
    console.log(err);
  } else{
    console.log("itworked")
  };
});



//#2 - Read then Write

// Sync Read
var fs = require('fs')
var readFile = process.argv[2];
var writeFile = process.argv[3];


text = fs.readFileSync(readFile).toString()

fs.writeFile(writeFile, text, function(err){
    if(err){
    	console.log(err);
    } else {
      console.log('it worked');
    }
});

// Async Read

var fs = require('fs');
var file1 = process.argv[2];
var file2 = process.argv[3];

fs.readFile(file1, function(err, data) {
  if(err) {
    console.log(err);
  }
  else {
    fs.writeFile(file2, data, function(err) {
      if(err) {
        console.log(err);
      }
    });
  }
});



//#3 - Zzzzzs

//AVI's awesome regex solution!!

var fs = require('fs')
var readFile = process.argv[2];
var writeFile = process.argv[3];


text = fs.readFileSync(readFile).toString()

zs = text.match(/\bz\w+/gi).join('\n');


fs.writeFile(writeFile, zs,  function(err){
    if(err){     
       console.log(err);
    } else {
       console.log('it worked');
    }
  }
)

//An alternate solution w/o Regex

var fs = require('fs');

fs.readFile('texts/dictionary.txt', function(err, fileContents){
  var zWords = [];
  var allWords = fileContents.toString().split('\n');
    for(var i = 0; i < allWords.length; i++){
      if(allWords[i][0] === "z")
        zWords.push(allWords[i] + '\n')
    }
      fs.writeFile('z.txt', zWords.join("").replace(",", ""), function(){
        console.log('it worked')
      });
});






















