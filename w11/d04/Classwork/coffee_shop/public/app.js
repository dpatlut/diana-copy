// Waiting until page is loaded
$(function() {

// ------------ COFFEE MODEL ------------ 

  var Coffee = Backbone.Model.extend({
    urlRoot: "/coffees"
  })

// ------------ COFFEE VIEW ------------ 

  var CoffeeView = Backbone.View.extend({
    initialize: function() {
      console.log("Coffee view is heer");
    },
    template: $("#coffee-template").html(),
    render: function() {
      var template = _.template(this.template);
      var rendered = template(this.model.attributes);
      return rendered;
    }
  });

// ------------ COFFEE COLLECTION ------------ 

  var CoffeeCollection = Backbone.Collection.extend({
    model: Coffee,
    url: "/coffees"
  })

// ------------ COFFEE COLLECTION VIEW ------------ 

  var CoffeeCollectionView = Backbone.View.extend({
    tagName: "table",
    initialize: function() {
      console.log("Collection view is here");
      this.render();
      this.listenTo(this.collection, "add", this.addOne);
      this.collection.fetch();
    },
    render: function() {
      this.$el.html("<tr><th>Drink</th><th>Price</th></tr>");
      $('#content').append(this.$el);
    },
    addOne: function(model) {
      console.log("New model added!")
      var newCoffeeView = new CoffeeView({model: model});
      var newTr = newCoffeeView.render();
      this.$el.append(newTr);
    }
  });

// ----------- End constructor definitions, ----------- 
// ------------  begin creating instances  ------------ 

  // Instantiate a new coffee collection and view. 
  var coffeeCollection = new CoffeeCollection();
  var coffeeCollectionView = new CoffeeCollectionView({collection: coffeeCollection});
    
});
