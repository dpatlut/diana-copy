App.Views.TweedView = Backbone.View.extend({
  el: '#tweeds-view',
  initialize: function () {
    console.log("New Tweed View Created");
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#tweed-template").html())
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()))
  }, 
  events: {
    'click #upvote': 'upvote',
    'click #downvote': 'downvote',
    'click .delete': 'delete'
  },
  upvote: function () {
    console.log("upvote clicked")
    this.model.updateVotes(1)
  },
  downvote: function () {
    this.model.updateVotes(-1)
  },
  delete: function () {
    this.model.destroy();
    this.$el.empty();
  }
})