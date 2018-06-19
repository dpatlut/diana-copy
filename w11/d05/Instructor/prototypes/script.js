console.log('linked');


var GroceryModel = function GroceryModel(){
	this.attributes = arguments[0]
}

function GroceryCollection(url){
	this.url = url;
	this.models = [];
}

GroceryCollection.prototype.fetch = function(){
  $.ajax({
		type: "GET",
		url: this.url, 
		dataType: 'json',
		context: this
	}).done(function(data){
		var tempModels = [];
		data.forEach(function(model){
			tempModels.push(new Grocery(model))			
		}.bind(this));
		this.models = tempModels
	});
    
}


GroceryCollection.prototype.create = function(model){
	$.ajax({
		method: 'POST',
		url: this.url,
		dataType: 'json',
		data: {name: model.attributes.name, category: model.attributes.category},
		context: this
	}).done(function(data){
		this.models.push(new GroceryModel(data))
	});
}

var grocery = new GroceryModel({name: "peaches", category: "fruit"})
var groceries = new GroceryCollection("http://localhost:3000/groceries")