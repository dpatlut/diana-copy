var html = process.argv[2]
var value = process.argv[3]

var tagger = function(tag, content){
	return "<" + tag + ">" + content + "</" + tag + ">"
}

console.log(tagger(html, value))