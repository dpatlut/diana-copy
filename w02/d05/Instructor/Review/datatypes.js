var pets = [
	{name: "spot", type: "dog"},
	{name: "felix", type: "cat"},
	{name: "fluffy", type: "hamster"},
	{name: "rex", type: "dog"}
];

for (var i = 0; i < pets.length; i++) {			// Go through each value of the array
	if (pets[i].type === "dog") {							// Check if the pet type is dog
		pets[i].speak = "woof";									// Add the speak key with a value of "woof" to the pet
	} else if (pets[i].type === "cat") {
		pets[i].speak = "meow";
	} else if (pets[i].type === "hamster") {
		pets[i].speak = "squeak";
	}
}