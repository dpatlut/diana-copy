var fs = require("fs"); //loads the file input/output node module


var stringPeople = fs.readFileSync("./data.txt", "utf8"); //read data from the file (in Unicode (utf8) format)

if (stringPeople.length == 0)
  var jsonPeople = [];
else
  var jsonPeople = JSON.parse(stringPeople); //convert the string information into a JSON object


if (process.argv[2] === "add"){

  var firstNameValue = process.argv[3];
  var lastNameValue = process.argv[4];
  var ageValue = process.argv[5]; //read information from the command line arguments


  var personToAdd = {
      firstName: firstNameValue, 
      lastName: lastNameValue, 
      age: ageValue
  }; //create an object with key-value pairs

  jsonPeople.push(personToAdd); //add the new individual to the collection
  console.log(jsonPeople);

  var updatedPeople  = JSON.stringify(jsonPeople);

  fs.writeFileSync("./data.txt", updatedPeople); //writing the string version of the JSON data back to the file

} else if (process.argv[2] === "list"){

    console.log("----------------");
    jsonPeople.forEach(function(person){
        console.log(person.firstName);
        console.log(person.lastName);
        console.log(person.age);
        console.log("----------------");
    });

}
else if (process.argv[2] === "search"){

  if(process.argv[3] === "first"){
      var nameToFind = process.argv[4];

      jsonPeople.forEach(function(person){
          if (person.firstName === nameToFind){
            console.log(person); //output everyone with the specified name
          }
      })
  }
  else if(process.argv[3] === "last"){
      var nameToFind = process.argv[4];

      jsonPeople.forEach(function(person){
          if (person.lastName === nameToFind){
            console.log(person); //output everyone with the specified name
          }
      })

  }
  else if(process.argv[3] === "age"){
     var ageToFind = process.argv[4];
      jsonPeople.forEach(function(person){
          if (person.age === ageToFind){
            console.log(person); //output everyone with the specified name
          }
      })
  }
  else if(process.argv[3] === "oldest"){
      var maxPerson = jsonPeople[0];

      jsonPeople.forEach(function(person){
          if (parseInt(person.age) > parseInt(maxPerson.age)){
             maxPerson = person;
          }
      })
      console.log("The oldest person is:", maxPerson)

  }
  else if(process.argv[3] === "youngest"){
      //pretty much the same as oldest
  }

} else {
  console.log("please enter your query in the correct format!");
}

