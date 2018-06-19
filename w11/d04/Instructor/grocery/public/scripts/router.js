$(document).ready(function() {
App.Routers.GroceryRouter = Backbone.Router.extend({
  routes: {
    "": "redirectGroceries",
    "groceries": "showGroceries",
    "groceries/:id": "showGrocery"
  },

  redirectGroceries: function() {
    groceryRouter.navigate("groceries", {trigger: true})
  },

  showGroceries: function() {
    $("#grocery-list").empty();
    var createGroceryView = new App.Views.CreateGroceryView({collection: groceries});
    var groceriesView = new App.Views.GroceriesView({collection: groceries});
  },

  showGrocery: function(id) {
    $("#grocery-list").empty();
    var grocery = new App.Models.Grocery({id: id})
    grocery.fetch({
      success: function(res) {
        var groceryView = $("#grocery-list").append(new App.Views.GroceryView({model: res}).render().$el);
      }
    });
  }
});

var groceryRouter = new App.Routers.GroceryRouter();
Backbone.history.start();
});
