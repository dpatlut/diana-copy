/*foreach_demo.js
The examples in this file demonstrate how to apply procedures to every element of an array.
*/

/////////////////////////for loop version////////////////////////////

var snlPeople = [
  {
    name: "adam sandler",
    movies: ['happy gilmore', 'billy madison', 'the waterboy'],
    age: 40,
    stillFunny: false,
    alive: true
  },
  {
    name: "chris rock",
    movies: ["dogma", "madagascar", "bee movie"],
    age: 50,
    stillFunny: true,
    alive: true
  },
  {
    name: "david spade",
    movies: ["Joe dirt", "black sheep", "tommy boy"],
    age: 48,
    stillFunny: false,
    alive: true
  },
  {
    name: "Kristin Wiig",
    movies: ["bridesmaids", "her", "girl most likely" ],
    age: 41,
    stillFunny: true,
    alive: true
  },
  {
    name: "Chris Farley",
    movies: ["Black sheep", "Tommy boy", "Beverley Hills Ninja"],
    age: 33,
    stillFunny: false,
    alive: false
  },
  {
    name: "John Belusci",
    movies: ["The Blues Brothers", "Animal House"],
    age: 33,
    stillFunny: false,
    alive: false
  }
];

var outputNames = function(item, index){
    console.log(index, item.name);
}

snlPeople.forEach(outputNames);



/* Student Activity
Write both a named and anonymous foreach procedure that outputs this information:

adam sandler  has been in these movies: happy gilmore, billy madison, and the waterboy
chris rock  has been in these movies: dogma, madagascar, and bee movie
david spade  has been in these movies: Joe dirt, black sheep, and tommy boy
Kristin Wiig  has been in these movies: bridesmaids, her, and girl most likely
Chris Farley  has been in these movies: Black sheep, Tommy boy, and Beverley Hills Ninja
John Belusci  has been in these movies: The Blues Brothers, and Animal House
*/

var outputMovieList = function(item, index){
    var movieList = item.movies;//the array of movies
    var prettyMovieList = "";//the array of movies with commas

    for(var i=0; i<movieList.length-1; i++){
        prettyMovieList += movieList[i]+", ";
    }
    prettyMovieList += " and "+ movieList[movieList.length-1];

    console.log(item.name, "has been in these movies:", prettyMovieList);
}

snlPeople.forEach(outputMovieList);

snlPeople.forEach(
  function(item, index){
      var movieList = item.movies;//the array of movies
      var prettyMovieList = "";//the array of movies with commas

      for(var i=0; i<movieList.length-1; i++){
          prettyMovieList += movieList[i]+", ";
      }
      prettyMovieList += " and "+ movieList[movieList.length-1];

      console.log(item.name, "has been in these movies:", prettyMovieList);
  }
);


