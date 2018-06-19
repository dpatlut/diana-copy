App.Models.Tweed = Backbone.Model.extend({
  urlRoot: '/tweeds',
  initialize: function () {
    console.log('New Tweed Model Created')
  }, 
  updateVotes: function (voteValue) {
    var votes = this.get('upvote');
    this.save('upvote', votes + voteValue);
  }
})