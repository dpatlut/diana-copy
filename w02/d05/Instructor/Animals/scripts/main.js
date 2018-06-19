console.log('linked')
//wait for the page to load before we run our script
$(document).ready(function(){

//grab the 2nd p tag, give it new text, then add a class of 'sub-head'
$('p').eq(1).text("Animals Are Great!").addClass('sub-head')

//grab the element with the id 'logo', add a click event to it. 
//change the 'background-image' css of the logo to the puppy image
$('#logo').on('click', function(){
  $(this).css("background-image", "url(img/logos/puppy.png)")
});

//make a container with a class of 'cute-container'
var $container = $('<div class="cute-container">');

//loop through to create 6 new divs with a class of 'cute' and append each one to the container.
for(var i = 0; i < 6; i++){
  $container.append("<div class='cute'>");
}

//append the container after the first p tag on the DOM
$('p').eq(1).after($container);





  $(window).on('keypress', function(e){
  	// $('#ani').empty();
    console.log(e)
     if(e.keyCode === 99){
       $('#ani').append($('<button>Fade</button>')).on('click', function(){
          $(this).fadeOut( 'slow', function() {
              $('button').remove()
          });
       }).addClass('surprise').show()
     }
  });
});//document.ready