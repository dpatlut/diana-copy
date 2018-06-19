var name = process.argv[2];
var gender = process.argv[3]

console.log(gender)

var royalizer = function(name, gender){
	if(gender.toLowerCase() === "male"){
		return "His majesty " + name;
	} else if (gender.toLowerCase() === "female"){
		return "Her majesty " + name;
	}
}