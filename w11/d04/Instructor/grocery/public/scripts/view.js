$(document).ready(function(){
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
    return this
  },
  edit: function(){
    this.$('.grocery').hide();
    this.$('.edit-form').show();
  },
  update: function(){
    var newName = this.$('#' + this.model.id).val();
    this.model.save({name: newName});
    this.$('.grocery').show();
    this.$('.edit-form').hide();
  },
  delete: function(){
    this.model.destroy();
  }
});

App.Views.GroceriesView = Backbone.View.extend({
	el: '#grocery-list',
	initialize: function(){
		this.collection.fetch();
		this.listenTo(this.collection, 'sync remove', this.render);
	},
	render: function(){
		this.$el.html('');

		this.collection.each(function(grocery){
			this.$el.append(new App.Views.GroceryView({model: grocery}).render().$el);
		}.bind(this))
		return this
	}
});

App.Views.CreateGroceryView = Backbone.View.extend({
	el: '#add-grocery-form',
	events: {'click #add-new-grocery': 'createGrocery'},
	createGrocery: function(){
		var newName = $('#new-grocery-name').val();
		this.collection.create({name: newName});
		$('#new-grocery-name').val('')
	}
});
});
