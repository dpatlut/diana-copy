App.Collections.Groceries = Backbone.Collection.extend({
	url: '/groceries',
	model: App.Models.Grocery
});

var groceries = new App.Collections.Groceries();