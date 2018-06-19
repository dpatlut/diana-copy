$(function(){
  $('#new-tweed-form').on('click', '#submit', App.createTweed);
});


var App = {
  Models: {},
  Views: {},
  createTweed: function () {
    var data = {
      content: $('[name="content"]').val(),
      author: $('[name="author"]').val()
    };

    var newTweed = new App.Models.Tweed(data);
    newTweed.save();
    var newTweedView = new App.Views.TweedView({model: newTweed});
    $('input').val('');
  }
};