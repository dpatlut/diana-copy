$(function() {
  $('#level3').click(function(event) {
    alert('Clicked on ' + $(event.currentTarget).attr('id'));
  });

  $('#level2').click(function(event) {
    // event.stopPropagation();
    alert('Clicked on ' + $(event.currentTarget).attr('id'));
  });

  $('#level1').click(function(event) {
    alert('Clicked on ' + $(event.currentTarget).attr('id'));
  });

  $('body').click(function(event){
    alert('Clicked on <body>');
  });
});