
#### 1. Breakfast Club Cast

<img src="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/411667_441603715867202_685105596_o.jpg" height="200" width="200" >

Use the [Breakfast Club Imdb Page](http://www.imdb.com/title/tt0088847/fullcredits?ref_=tt_cl_sm#cast) to construct a object where the keys are **character names** and the values are **actor names**. Include at least 5 characters.

Create a command line program using this object that:
- takes a **character name** as an argument
- prints out the name of the actor that played that character


Don't forget to use quotes around the argument that you send to your program:

```
$ node breakfastclub.js "Andrew Clark"
Emilio Estevez
```

#### 2. Digging In

**TV Show Object**

```js
var tvShow = {
  name: "Twin Peaks",
  director: "David Lynch",
  genre: ["Drama", "Mystery", "Thriller"],
  actors: ["Kyle MacLachlan", "Lara Flynn Boyle", "Dana Ashbrook", "Sherilyn Fenn"],
}
```
Fill in the variable using object calls

```js
var tvShowName
var tvShowDirector
var tvShowGenre1
var tvShowActor4
```

##Bonus - Objects can be Values, too!!!

**Bank Account Object**

```js
var bankAccount = {
  number: 555555,
  balance: {
    checking: 6.30,
    savings: 10.09,
    investments: [
      {cocaCola:  100.00},
      {tesla: 200.00},
    ]
  }
}
```

fill in the variables with object calls

```js
var checkingBalance
var savingsBalance
var teslaBalance
```