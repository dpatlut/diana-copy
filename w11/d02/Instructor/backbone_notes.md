# MVC review:

- Models respresent the data in an application
- Views are usually the user interface
- Controllers handle input from the user and update the models. 

Typically javaScript frameworks don't strictly adhere to this structure. 

# MV*

Backbone follows the MV* pattern. There is a Model and a View. There is no distinct Controller. The view takes on a lot of the controller's responsibilities. 

![](http://backbonejs.org/docs/images/intro-model-view.svg)

**"The single most important thing that Backbone can help you with is keeping your business logic separate from your user interface. When the two are entangled, change is hard; when logic doesn't depend on UI, your interface becomes easier to work with."**

decoupled - two or more systems can interact with eachother without being connected. Changes can be made to one system without having an effect on any other system. 

- You know two components are coupled when a change to one requires a change in the other. 

Backbone allows you to decouple your concerns which makes code more maintaiable in the long-term. 


- We'll use Backbone to make a SPA(Single Page Application). The browser can react to data changes without refreshing the page. 

# Models

- "Backbone models contain data for an application as well as the logic around this data. For example, we can use a model to represent the concept of a grocery item including its attributes like name (grocery content) and category (current state of the grocery)."


- Set up index.html

```js
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<name>grocery</name>
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.2/backbone.js"></script>

	<script src="model.js"></script>	
</head>
<body>

</body>
</html>
```

**Really simply, create a model**

``var Grocery = Backbone.Model.extend({})``

- Play around in console

``var grocery1 = new Grocery();``

```js
var grocery2 = new Grocery({
  name: 'Oranges',
  category: "Produce"
});
```

``grocery2.attributes``

``grocery2.attributes.name``

- Cool, so we can use Models to make new objects with attributes. 

- Models have an initialize method. It is called when a new instance of a model is created. You can use it explicitly if you want to. 

** Change Model file **

```js
var Grocery = Backbone.Model.extend({
	initialize: function(){
	console.log("A new grocery has been created")
}
});
```

- In console, see it log when we make a new grocery:

``var grocery3 = new Grocery();``


- You can also set default values for your models:

```js
var Grocery = Backbone.Model.extend({
	initialize: function(){
		console.log("A new grocery has been created")
	},
	 defaults: {
    name: '',
    category: 'food'
  }
});
```

Q: In the console, how would I make a new grocery and check if the defaults were applied?

A: ``var grocery4 = new Grocery();`` ``grocery4.attributes``


- Now we can create a grocery with only a name and it the category attrbute will default to food. 


``grocery5 = new Grocery({name: "Peaches"})``

- Or even override all of the attributes:

``var grocery6 = new Grocery({name: "override model defaults", category: 'junk food'})``


### .get

- We can user .get to easily access a model's attributes


- Make a new Grocery1 ``var grocery1 = new Grocery();``

Q: If I call ``grocery1.get('category');``, what do you think will log to the screen?

A: 'food'

### You Do

- Make another grocery and use the .get method to see it's attributes

```js
var grocery2 = new Grocery({name: "cheese", category: 'dairy'});
```

``grocery2.get('name')``  ``grocery2.get('category')``

## toJSON()

- If we want to grab a cloned copy of the attributes as an object, you can call .toJSON() on it. 

- Try It!

``grocery2.toJSON()``

- This is kind of like a clone of the data's attributes. It will come in handy as we progress. 

## .set()

- You guessed it, we can also set attributes of a model. 

** Make a new model with the default values and try to set it's attributes using the .set() method **

- you can set one attribute at a time 
``grocery1.set('name', "tomatoes")``

- Or set all at once

``grocery1.set({'name': "tomatoes", category: 'produce'})``

- Check with ``.attributes``


## Listening for Changes. 

- we can listen for changes to our model, but adding a listener for a change event to our model's initialize function. 

```js
var Grocery = Backbone.Model.extend({
	initialize: function(){
		console.log("A new grocery has been created");
		this.on('change', function(){
        console.log('Something has changed.');
    });
	},
	 defaults: {
    name: '',
    category: 'food'
  }
});
```

Q: How could I test this?
A: Make a new model. Use .set() to change something and see it log in the console. 

## Model validations

- we can check that values are entered properly before setting them by using backbone validations. 

- Let's change our model thusly:

```js
var Grocery = Backbone.Model.extend({
    defaults: {
    	category: 'food'
	  },
    validate: function(attributes){
	    if(attributes.name === undefined){
	        return "Please set a name.";
	    }
	  },
    initialize: function(){
        console.log("A new grocery has been created");
        this.on('change', function(){
        	console.log('Something has changed.');
	    	});
        this.on("invalid", function(model, error){
        	console.log(error);
	    });
    }
});
```

- When we make a new Grocery, we have to do it like this to check the validation:

``var grocery = new Grocery()``
``grocery.set('category', 'produce', {validate: true})``


### Exercise

- Make a Model of a Dinosaur. 
- Whenever a Dinasaur is created, log 'a dino was born'
- Give your dinos a default name.
- Make it mandatory that a dinosaur is created with a type.
- Create 4 dinosaurs. Once they've been created, log a string to the screen similar to the following example. 'Jerome is a stegasaurus'


# Hooking up a model to a backend. 


** Really Simple backend **

```js
var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('groceries.db');
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
    console.log("i'm in")
    db.run("INSERT INTO groceries (name, category) VALUES (?,?)", req.body.name, req.body.category, function(err) {
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
    db.run("UPDATE groceries SET name = ?, category = ?  WHERE id = ?", req.body.name, req.body.category, id, function (err) {
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
```

** Schema **

```sql
DROP TABLE if exists groceries;
CREATE TABLE groceries(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	category TEXT
);
```

- Run schema

``sqlite3 groceries.db < schema.sql``

- Add Restful URL to model

```js
var Grocery = Backbone.Model.extend({
	urlRoot: '/groceries',
	initialize: function(){
		console.log("A new grocery has been created");
		this.on('change', function(){
        console.log('Something has changed.');
    });
	},
	 defaults: {
    name: '',
    category: 'food'
  }
});
```

- In the console, make a new grocery:

``var grocery = new Grocery()``

- Set it's name attribute:

``grocery.set({name: 'turnips'})``

** now we can make a POST request to our server with one simple built-in backbone method called .save(). and a success callback for sanity **

```js
grocery.save(null, {
    success: function (model, response) {
        console.log(response);
    },
    error: function (model, response) {
        console.log("error");
    }
});
```



# Fetching. 

- We can get a model the corresponds to a particular id in our DB. 

``g = new Grocery({id:1})``
``g.fetch()``

#  Update

``g.set({name: "brussel sprouts"})``
``g.save()``

# Destroy

``g.destroy()``
