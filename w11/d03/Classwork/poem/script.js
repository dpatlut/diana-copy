console.log('script file loaded')
if($ !== undefined) { console.log('jQuery library loaded!'); }

var Poem = function(){
	this.verse = "";

	this.initialize = function(){
		this.addWord();
	};

	this.addWord =  function(){
		$('input').on('keyup', function(){	
			//Fill this in
		});
	};

	this.renderPoem = function(){
		$('h1').text(this.verse)
	}
}

// make a new Poem