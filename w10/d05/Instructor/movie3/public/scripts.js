$("#search-button").on( "click", searchMovies);
$("#edit-button").on( "click", editMovie);
$("#delete-button").on( "click", deleteMovie);

//print the current list of movies
printMovies();

function printMovies(){
	$.get("http://localhost:3000/movies")
	  .done(function(data){
			var output = "";
			data.forEach(function(item){
				output+="<h4>"+item.title+"</h4><br>"+
				 "showtimes:"+item.showtimes+"<br>"+
				 "----------<br>";
			});
			document.getElementById("current-movies-list").innerHTML= output;
     });
}

function searchMovies(){
   	var title = document.getElementById("movie-title-textfield").value;
	
	$.ajax({
      method: "GET",
      url: "http://www.omdbapi.com/?t="+title,
    }).done(function(data) {
       console.log(data);
       var output = "You searched for:<br><h5>"+data.Title+"</h5>";
       output+="<br>"+data.Plot;
       output+="<br>"+data.Year+", "+data.Rated+", "+data.Runtime;
       document.getElementById("search-display-results").innerHTML=output;
    }); 
}
function editMovie(){
   //printMovies();

}
function deleteMovie(){
    var id = 1;//?
	$.ajax({
	  method: "DELETE",
      url: "http://localhost:3000/posts/" + id
    }).done(function() {
       printMovies();	
    });
}