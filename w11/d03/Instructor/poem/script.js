console.log('script file loaded')
if($ !== undefined) { console.log('jQuery library loaded!'); }


var poem
var title

function poemfy(title, words){
	this.title = title
	var poem = ""
	for(var i = 0; i < words.length; i++){
		poem += words[i] + " "
	}
	this.poem = poem
}

var wordBank = {
	words: ["The", "sullen", "wind", "was", "soon", "awake"],
	poem: null,
	title: null
}

poemfy.apply(wordBank, ["prophyria's lover", wordBank.words])


// var Poem = function(){
// 	this.verse = "";

// 	this.initialize = function(){
// 		this.addWord();
// 	};

// 	this.addWord =  function(){
// 		console.log(this)
// 		$('input').on('keyup', function(){	
// 			//Fill this in
// 			console.log(this)
// 			$word = $('input').val();
// 			this.verse += $word
// 			this.renderPoem();
// 			$('input').val("");
// 		}.bind(this));
// 	};

// 	this.renderPoem = function(){
// 		$('h1').text(this.verse)
// 	}
// }

// // make a new Poem
// var myPoem = new Poem();
// myPoem.initialize();

// var verses = {
// 	verse: "And yet God has not said a word!"
// }

// verses.render = myPoem.renderPoem.bind(verses)