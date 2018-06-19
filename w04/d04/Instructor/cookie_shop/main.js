var ejs = require('ejs');
var fs = require('fs');

var data = fs.readFileSync('data.json', 'utf8');
var cookiesArr = JSON.parse(data);

var template = fs.readFileSync('template.html', 'utf8');

var html = ejs.render(template, {cookies: cookiesArr});

fs.writeFile('index.html', html, function(err){
    if(err){
        console.log(err);
    } else{
        console.log('you did it!')
    }
});