$("#post-button").on( "click", postFunction);
$("#put-button").on( "click", putFunction);
$("#delete-button").on( "click", deleteFunction);




printDB();
function postFunction(){	
	
	var object ={};
	object['title']=document.getElementById("post-title-textfield").value;
	object['author']=document.getElementById("post-author-textfield").value;
	
	$.ajax({
      method: "POST",
      url: "http://localhost:3000/posts",
      contentType: "application/json",
      data: JSON.stringify(object)
    }).done(function(data){
		var output = "<p>You have successfully added<br>"+
		"title:"+data.title+"<br>author:"+data.author+"<br>"
		" to the database!";
		document.getElementById("data").innerHTML= output;
		printDB();	
     });
}
function putFunction(){	
	var id = document.getElementById("put-id-textfield").value;
	var object ={};
	object['title']=document.getElementById("put-title-textfield").value;
	object['author']=document.getElementById("put-author-textfield").value;
	
	$.ajax({
      method: "PUT",
      url: "http://localhost:3000/posts/"+id,
      contentType: "application/json",
      data: JSON.stringify(object)
    }).done(function(data){
		var output = "<p>You have successfully added<br>"+
		"title:"+data.title+"<br>author:"+data.author+"<br>"
		" to the database!";
		document.getElementById("data").innerHTML= output;
		printDB();	
     });
}
function deleteFunction(){	
	var id = document.getElementById("delete-id-textfield").value;
	$.ajax({
	  method: "DELETE",
      url: "http://localhost:3000/posts/" + id
    }).done(function() {
       printDB();	
    });
}

function printDB(){
	$.get("http://localhost:3000/posts")
	  .done(function(data){
			var output = "";
			data.forEach(function(item){
				output+="id:"+item.id+"<br>"+
				"title:"+item.title+"<br>"+
				 "author:"+item.author+"<br>"+
				 "----------<br>";
			});
			document.getElementById("entire-db").innerHTML= output;
     });
}