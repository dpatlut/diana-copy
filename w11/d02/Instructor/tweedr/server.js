var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  sqlite3 = require('sqlite3'),
  db = new sqlite3.Database('db/tweeds.db'),
  urlEncodedBodyParser = bodyParser.json({
    extended: false
  });


app.use(urlEncodedBodyParser);
app.use(express.static('public'));


app.get('/', function(req, res) {
  res.send('index.html');
});

app.get('/tweeds', function(req, res) {
  db.all('SELECT * FROM tweeds', function(err, rows) {
    if (err) {
      console.error(err)
    }
    res.json(rows)
  });
});

app.post('/tweeds', function(req, res) {
  console.log(req.body)
  db.run("INSERT INTO tweeds (content, author) VALUES (?, ?)", req.body.content, req.body.author, function(err) {
    if (err) {
      throw err;
    }
    var id = this.lastID;
    db.get("SELECT * FROM tweeds WHERE id = ?", id, function(err, row) {
      if (err) {
        throw err;
      }
      res.json(row);
    });
  });
});


app.put('/tweeds/:id', function(req, res) {
  var id = req.params.id;
  db.run("UPDATE tweeds SET upvote = ?  WHERE id = ?", req.body.upvote, id, function (err) {
    if(err) {
      throw err;
    }
    db.get("SELECT * FROM tweeds WHERE id = ?", id, function(err, row) {
      if(err) {
        throw err;
      }
      res.json(row);
    });
  });
});

app.delete('/tweeds/:id', function(req, res) {
  db.run("DELETE FROM tweeds WHERE id = ?", req.params.id, function(err) {
    if(err) {
      throw err;
    }
    res.json({deleted: true});
  });
});

app.listen(3000, function(){
  console.log('listening on 3000')
});
