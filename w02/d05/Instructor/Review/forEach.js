// Differences between forEach and for
// for gives you the ability to write a conditional for your loop
// forEach does NOT work on DOM elements

var pets = [
	{name: "spot", type: "dog"},
	{name: "felix", type: "cat"},
	{name: "fluffy", type: "hamster"},
	{name: "rex", type: "dog"}
];

pets.forEach(function(pet) {				// pet represents how pets[i] functions in a for loop
	if (pet.type === "dog") {							// Check if the pet type is dog
		pet.speak = "woof";									// Add the speak key with a value of "woof" to the pet
	} else if (pet.type === "cat") {
		pet.speak = "meow";
	} else if (pet.type === "hamster") {
		pet.speak = "squeak";
	}
	console.log(pet);
});