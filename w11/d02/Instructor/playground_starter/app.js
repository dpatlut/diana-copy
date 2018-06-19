$(function() {
  console.log('Loaded, bro.');


var template = Handlebars.compile($('#card-template').html());
var postTemplate = Handlebars.compile($('#post-template').html())
var newCardHtml = template({
  content: "Wash my dog!!"
})

var newPost = postTemplate({
  title: "KEWL", 
  author: "SUITE", 
  content: "I DONT KNOW"
});

$('body').append(newPost)
$('body').append(newCardHtml)

});



// ```html
// <h1 class="post-title">This Is The Title</h1>
// <h4 class="post-author">By Author Name</h4>
// <p class="post-content">
//   This is a pretty schweet blargh, right?
// </p>
// ``` 