# Week Eleven FINAL WEEKEND REVIEW
# BACKBONEZ

* [Introduction](#intro)
* [Why App](#app)
* [Models](#models)
* [Collections](#collections)
* [Views](#views)
* [Templating](#templating)
* [Router](#router)
* [Rails as an API](#railsapi)

## <a name=intro>Introduction</a>

* Resources
	* [Addy Osmani open sourced Backbone Book](http://addyosmani.github.io/backbone-fundamentals/)
	* [http://backbonejs.org/](http://backbonejs.org/)
	* [https://backbonetutorials.com/](https://backbonetutorials.com/)
	* [http://adrianmejia.com/blog/2012/09/11/backbone-dot-js-for-absolute-beginners-getting-started/](http://adrianmejia.com/blog/2012/09/11/backbone-dot-js-for-absolute-beginners-getting-started/)
* Backbone is an MV* framework. It uses jQuery and Underscore templating. 
* Similar to the MVC format you saw in the Rails framework, Backbone allows us to seperate our code on the client side instead of the server side. 
* Keep in mind this is still just JavaScript. By convention we seperate all our models / collections / and views into different files. IF you have a tiny Backbone app you can put it all in one file for easier reading but it's not recommended
* When you attach these scripts to your html file they should be in the order of Models then Collections then Views.

## <a name=app>Why App</a>

* You might notice during demonstrations in class we did something similar to the line below:

```
var App = App || {Models: {}, Views: {}, Collections: {}}
```
* We can include this in a `app.js` file which is loaded to the html in a script tag before the Models / Collections / and Views.
* When we create our Models / Collections / or Views they will now look like this

```
var App.Models.Hero = Backbone.Model.extend({})

var App.Views.HeroList = Backbone.View.extend({})

var App.Collections.Heroes = Backbone.Collections.extend({})
```
* We make the `App` variable above for more organized name spacing. Now whenever we make a new `Model / Collection / View` they will be moved into the `App` variable. This protects us from making things in the global space.


## <a name=models>Models</a>

* The core of this MV* framework. It may not hold the most lines of code but it is essential for holding data that the user can interact with. 
* You can also add logic to it such as alerts, default values, validations, and the like. Below is an example followed by a breakdown:

```
var App.Models.Hero = Backbone.Model.extend({
	urlRoote = '/',
	defaults: {
		name: "Unknown",
		team: "Xavier Student",
		power: "Unknown"
	},
	initialize: function(){
		alert("You have made a new hero");
	}
})

var wolverine = new App.Models.Hero()
```
* Notice that Hero is capitalized. This is because it is a contructor/blueprint of what we want.
* When we call jamesHowlett below it is creating a variable for us with the `Hero` properties
* `Backbone.Model.extend` tells us we want the `App.Model.Hero` to have the superpowers / porperties that the `Backbone` library offers
* Again the logic inside is optional
	* We are declaring a url route that will make a call to a server
	* We are declaring default values to specific keys, maybe you are taking input from a user and wants to make sure the database will have something in it when this is created
	* initialize - when this Model is instantiated run this function and alert the user it works.
* The last line we are making a new variable that calls this `App.Models.Hero` property, it will have all the values and properties located inside, along with immediately running the initialize function. 


## <a name=collections>Collections</a>

* Collections are groups of Models. If we take the above example our Collection may look like this:

```
var App.Collections.Heroes = Backbone.Collections.extend({
	url: '/heroes',
	model: App.Models.Hero,
})

App.Collections.Heroes.on("add", function(){
	console.log("you have added a hero")	
})
App.Collections.Heroes.on("remove", function(){
	console.log("you have removed a hero")
})

var Heroes = new App.Collections.Heroes()
```
* Notice by convention we are making this collection name the pluralized version of the model name. 
* The collection name is also capitalized
* We need to declare a model that will be associated with this Collection
* Other than naming the specific model the logic is optional
* We also added two listeners for `adding` and `removing` `Models` to the `Collections`
* In the last line we create a variable `Heroes` that pulls in the values and properties of the `App.Collections.Heroes` properties
* We can use this later when we want to instantiate a `View` that grabs all our `Heroes`
* Alright let's make a whole bunch of `Heroes` using our `App.Models.Hero` so we can make some more examples:

```
var wolverine = new App.Models.Hero({
	name: "James Howlett",
	team: "X-Force",
	power: ["Regeneration", "Adamantium Skeleton", "Increased Senses"]
})

var gambit = new App.Models.Hero({
	name: "Remy LeBeau",
	team: "X-Factor",
	power: ["Energy Manipulation"]
})

var nightcrawler = new App.Models.Hero({
	name: "Kurt Wagner",
	team: "Excalibur",
	power: ["Enhanced Speed and Agility", "Teleportation", "Night Vision", "Wall Crawling"]
})
```
* Now lets add some listeners so we know when things are added and removed to the `Collection`

```
Heroes.add([wolverine, gambit]);
Heroes.remove(wolverine);
Heroes.add(nightcrawler);
```

## <a name=views>Views</a>

* Views will most likely be the largest file you have in your applications. They will contain the logic that:
	* Can take input from the user
	* When to call/instantiate new Models and Collections
	* How to render this data to the user
* Backbone views do not act the same way as conventional MVC's (such as Rails). They do not contain any HTML markup. Rather they keep the logic behind the presentation of model data. The data is rendered to a html file using templating. Backbone comes with Underscore templating but is also compatible with others such as Mustache.js or Handlebars
* Backbone views have four basic properties
 	* `el` - Every view needs to reference a DOM at all times. Therefore, the view will inject content into this element. This is the el property. this.el is created from view’s el,tagName, className, id or attributes properties. If none of these are specified, then this.el is an empty div. The view.$el it’s a cached jQuery object of the view’s element (view.el).
	* `render` - markup injection
	* `initialize` - where you declare parameters of a model / collection / or view.el
	* `events` - such as clicks? hover? mouseover?

* Below is the markdown for the Views file from the `grocery` lab we did in class. I have broken it up into a few boxes followed by comments as to what that box is doing

```
$(document).ready(function() {

App.Views.GroceryView = Backbone.View.extend({
	tagName: 'li', 
	template: _.template($('#grocery-template').html()), 
	events: {
						'click .edit-grocery': 'edit',
						'click .delete-grocery': 'delete',
						'click .update-grocery': 'update'
					},
	render: function(){	
		this.$el.html(this.template({grocery: this.model.toJSON()}));
		return this;
	},
	edit: function(){
		this.$('.grocery').hide();
		this.$('.edit-form').show();
	},
	update: function(){
		var newName = this.$('#' + this.model.id).val();
		this.model.save({name: newName});
	},
  delete: function() {
    this.model.destroy();
  }				
});
```
* Write a view that will make an li for each grocery and give it certain properties.
* The tagName represents the `el` for this view
* Every item created using this view will populate the template `#grocery-template` inside of the html. 
* Every item created using this view will have three click events and their functions associated with them

```
App.Views.GroceriesView = Backbone.View.extend({
	el: '#grocery-list',
	initialize: function(){
		groceries.fetch();
		this.listenTo(this.collection, 'sync remove', this.render);
	},
	render: function(){
		this.$el.html('');
		this.collection.each(function(grocery){
			this.$el.append(new App.Views.GroceryView({model: grocery}).render().$el);
		}.bind(this));
		return this;
	}
});
```
* This view will grab the list from the collection being passed in
* It's `el` is an element already made on the DOM
* When this view is instantiated it will run it's initialize function
* Initialize will run the .fetch method to grab the data
* It will then listen to the sync/remove of the collection being passed in and then run this views `render` function
* Render will first clear the `el` html
* Render then uses the `.each` iterator to loop through the list given to us by the collection being passed in
* NOW FOLLOW THIS PART CLOSELY
* Through each iteration it will run the `GroceryView` above, that will take in a `model:grocery` which is the value being passed in from `.each` at that time, then run `GroceryView` render function.
* The `.$el` is grabbing the populated li from `return this;` inside the render function in `GroceryView`
* We then use .bind(this) to make sure that the View is using the correct `this` element. Remember that `this` is the element at the specific time of an event, so the `this` inside the .each will not be the same as the `this` above it or the `this` in the initialize.


```
App.Views.CreateGroceryView = Backbone.View.extend({
  el: '#addGroceryForm',
  events: {
  	'click #addNewGrocery': 'createGrocery'
  	},
  	
 	createGrocery: function() {
    	var nameField = this.$('#newGroceryName');
    	var name = nameField.val();
    	this.collection.create({name: name});
    	nameField.val('');
  	}
 });
```
* This view is seperate from the other two from earlier
* It was made to allow users to add new groceries to their list
* It targets the DOM element with an id of `addGroceryForm` and gives it a click event
* This function takes in the values the user input and creates a new model within the collection using the `.create` method
* Afterwards it clears the value of the DOM element

```
  var createGroceryView = new App.Views.CreateGroceryView({collection: groceries});

	var groceryViewList = new App.Views.GroceriesView({collection: groceries});

}); //end of your document.ready line
```
* The final lines of the view instantiates everything and then closes the document. 

##### Other Info
* All views have an `el`. This is a reference to a DOM element. `el` is used to put all of your content into an element and then send it to the DOM all at once for faster rendering. 
* Two ways to use `el`
	* A new element can be created inside of the view
	* Reference an already exitsting DOM element. 
* Making a new element has three optional properites in the view. `tagName` / `id` / `className`. If nothing is specified in the tagName the new tag will be a div.
	* By using the tagName you are creating a property in the view. This can now be referenced as the `el` property in this view.
* Using `view.$el` is the same as `$(view.el)` because Backbone also uses jQuery
* Lets append our `el` to an element on the page and then render it. 
* Underscore uses a `_.template()` method to target a template that we are going to put our view items in.
* It is preferred to use `.attributes` over `.toJSON()` because JSON can be altered where as attributes should always return the data in the same format

##### Events

* We can use an `events` hash to attach event listeners to our views. We do this by passing in the type of event as a key, and a function name as a value. 

```
var App.Views.HeroList = Backbone.View.extend({
	el: '#someUL',
	events: {
		'click .toggle' : 'toggleCompleted',
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'click .destroy': 'clear',
		'blur .edit': 'close'
	}
})
```
**One nice side note about Backbone is it allows you to make these event listeners without worrying if the element already exists on the DOM or not**

* You can also use the `_.bind(this.viewElement, this)` to re-render our view when a model changes. 
	* `_.bind` only works on one method at a time. 
	* What this will do is bind a function to an object so whenever that function is invoked the value of `this` will be the object 
	
```
var TodoView = Backbone.View.extend({ 
	initialize: function(){
		this.model.bind('change', _.bind(this.render, this))
	}
})
```


## <a name=templating>Templating</a>

* Backbone comes with `Underscore.js` templating. We can also use `Handlebars` and `Mustache`

##### Some Underscore.js Methods You May Want To Look Into

* forEach()
* map()
* pluck()
* indexOf()
* any()
* keys()
* values()
* pairs()
* pick()

## <a name=router>Router</a>

* In a traditional web application, a user can enter a URL and expect the server to send back a certain file/show a certain page. Can we do this with a single page application? If a user wanted to go directly to a show page, for example, without clicking a button, how could we accomplish this? 
* What does the router do?
	* Allows us to save the "state" of our application at a given point. Note - we, the developer, decide what the important states are. Don't necessarily need a route for every modal/page, only the ones we want to be able to link to.
* What user experience problem does the router solve for us?
	* Mimics the experience of a traditional web app - allows users to link to states of our single page app or bookmark them without sacrificing speed/other SPA benefits.
* How does it do this?
	* By reacting to the [`hashchange`](https://developer.mozilla.org/en-US/docs/Web/Events/hashchange) event. When the part of the URL that follows the hash symbol changes, that event is emitted.

##### Anatomy of a router

* Creating the Blueprint

We create a new router constructor like so, by extending Backbone's Router class:

```
var MyRouter = Backbone.Router.extend({})
```
* We are giving our `Router` the super powers of the Backbone Library
* The Router takes an object containing the routes you want to make. 
* The key is the segment of the url that will follow the hash
* The value is the name of the function that will display that route

```
var MyRouter = Backbone.Router.extend({
  routes: {
    "coffees" : "showAllCoffees"
  }
})
```
* Now that we have a route defined, it's time to set up the function to handle it!

```
var MyRouter = Backbone.Router.extend({
  routes: {
    "coffees" : "showAllCoffees"
  },
  showAllCoffees: function () {
    console.log("ALL THE COFFEES");
  }
  })
```
* This is great! But it won't work yet.
* We need to instantiate a new router:

```
var myLilRouter = new MyRouter();
```
* But it's still not working you say?

##### Backbone.history
* We know the router works by tracking changes to the segment of the URL following the hash - but Backbone needs to be told explicitly to start tracking!

```
Backbone.history.start();
```

Backbone's `history`...

```
- ...starts tracking changes to location.hash
- ...allows us to use the forward/back buttons to navigate.
- ...is absolutely necessary to start!!
```


* Now when we navigate to `http://localhost:3000/#coffees`, we should see ALL THE COFFEES console logged. Yay!
* Let's move the logic that creates a new collection & collection view to our showAllCoffees function.

```
var MyRouter = Backbone.Router.extend({
  routes: {
    "coffees": "showAllCoffees"
  },
  showAllCoffees: function() {
    console.log("ALL THE COFFEES");
    // Instantiate a new coffee collection and view.
    var coffeeCollection = new CoffeeCollection();
    var coffeeCollectionView = new CoffeeCollectionView({
      collection: coffeeCollection
    });
  }
});
```
* Cool! Now let's make those buttons at the top actually work. Go back to your html

```
<nav class="twelve columns">
  <h2>Delicious Coffeestuffs Menu</h2>
  <a class="button" href="#coffees">Coffees</a>
  <a class="button" href="#about">About</a>
</nav>
```

##### Accessing Route Parameters

* Now that we have an about and a show all coffees route, let's take it one step further and create a show route for each coffee! To do so, we'll need a route that can handle URL parameters. Backbone has functionality built in to handle that:

```
var MyRouter = Backbone.Router.extend({
  routes: {
    "coffees": "showAllCoffees",
    "about": "showAbout",
    "coffees/:id": "showCoffee"
  },
  // ...
  showCoffee: function (id) {
    console.log(id);
  }
});
```
* This syntax is similar to Express's and Rails's URL syntax - the colon denotes a variable that will be passed along to the route handler function - in this case, it's the ID of a coffee drink. Let's set up our show route!

```
showCoffee: function (id) {
      var coffeeToShow = new Coffee({id: id});
      var singleCoffeeView = new CoffeeView({model: coffeeToShow});
      coffeeToShow.fetch({success: function() {
        var newTable = $("<table><tr><th>Mmmm!</th><th>$$</th></tr></table>")
        var rendered = singleCoffeeView.render();
        newTable.append(rendered);
        $("#content").html(newTable);

        }
      });
    }
```
* ...and now let's add a link to each show route into our template.

```
<script type="text/template" id="coffee-template">
  <tr>
    <td><a href="#coffees/<%= id %>"><%= name %></a></td>
    <td><%= price %></td>
  </tr>
</script>
```

##### router.navigate

* One last problem - when we hit `localhost:3000`, our router doesn't do anything since there's nothing after the hash. We can tell our router to hit a certain route when the page is loaded:

```
myLilRouter.navigate("coffees", {trigger: true});
```
* Here, we tell our router to immediately navigate to the 'coffees' route and to trigger that route's function. It's probably a good idea to check and see if there's a hash in the url, though:

```
if (!location.hash){
  myLilRouter.navigate("coffees", {trigger: true});
}
```
* This way, we only redirect the user to 'coffees' if they haven't got anything after the hash.

## <a name=railsapi>Rails as an API</a>

We want to build out a Ruby on Rails API on the backend that will have endpoints and server up data. These endpoints are in the form of routes. Why might we do this? We can use Backbone on the front end to render data faster in a single page application format. In this scenario we are NOT using the `MVC folders of rails` but rather the `MV* of Backbone`. Below is the copy of the introductory code along of setting your Rails app as an API.

1. Make a new rails app - ``rails new groceries --d postgresql``
2. ``rails g model Grocery name:string``
3. routes.rb:

 ```
   namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :groceries 
    end
  end
 ```
 
4. Make groceries controller
5. define all actions:

```
class Api::V1::GroceriesController < ApplicationController
	
	def index
		groceries = Grocery.all
		render json: groceries
	end

	def create
		grocery = Grocery.create(grocery_params)
		render json: grocery
	end

	def show
		grocery = Grocery.find(params[:id])
		render json: grocery
	end

	def update
		grocery = Grocery.find(params[:id])
		grocery.update(grocery_params)
		render json: grocery
	end

	def destroy
		Grocery.find(params[:id]).destroy
		render json: 'deleted'
	end

	private

	def grocery_params
		params.permit(:name)
	end
end
```

6. Make a html page to load the js files. welcome_controller, route, index action, welcome index view. 

7. Test with Ajax or just go to the routes

**GET**

```
$.ajax({
  url: '/api/v1/groceries',
  method: 'GET'
}).done(function(data){
  console.log(data)
});
```

```js
$.ajax({
  url: '/api/v1/groceries/1',
  method: 'GET'
}).done(function(data){
  console.log(data)
});
```
**POST**

```
$.ajax({
  url: '/api/v1/groceries',
  method: 'POST',
  data: {name: "oranges"}
}).done(function(data){
  console.log(data)
});
```

**PUT**

```
$.ajax({
  url: '/api/v1/groceries/1',
  method: 'PUT',
  data: {name: "peaches"}
}).done(function(data){
  console.log(data)
});
```

**DELETE**

```
$.ajax({
  url: '/api/v1/groceries/1',
  method: 'DELETE',
  data: {name: "peaches"}
}).done(function(data){
  console.log(data)
});
```

8. In vendor/assets/javascripts, make backbone and underscore files, copy in code. 
9. Link in application.js
10. In app/assets/javascripts/api/v1, make folders and files models/groceries_model, collections/groceries_collection, views/groceries_views
11. make assets/javascripts/api/v1.js and Link views, collections, and models

```
//= require underscore
//= require backbone
//= require models/grocery_model
//= require collections/grocery_collection
//= require views/grocery_view
//= require api/v1/v1
```

11. The default templating language for underscore uses the clown hats, we have change the settings so it doesn't conflict with erb. We'll se it to use the mustache style.


**Underscore settings**

```
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};
```

