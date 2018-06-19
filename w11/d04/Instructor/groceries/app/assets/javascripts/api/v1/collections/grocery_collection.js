var GroceryCollection = Backbone.Collection.extend({
	url: '/api/v1/groceries',
	model: Grocery
});

var groceries = new GroceryCollection();