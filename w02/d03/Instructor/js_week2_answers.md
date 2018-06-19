# Javascript Week 2 Check In Answer Key

##Question 1
> `a` will be set to 'cat'. When a = b is run, a gets set to b's value, which is 'cat'. a === "duck" returns false, but is not an assignment and does nothing to change a's value.

##Question 2
The student is not invoking the function properly. myFunc should be called with an opening and closing parenthesis `myFunc()`

##Question 3
```javascript
myFunc("Paul");
```

##Question 4
```javascript
if (a === b) {
  console.log('error!');
} else {
  myFunc();
}

// The student is assigning the value of b to a instead of comparing the value of b to a.
// They need to use a === instead of a =
```

##Question 5
```javascript
rangers.yellow
// or
rangers["yellow"]
```

##Question 6
```javascript
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"];

for (var i = 0; i < turtles.length; i++) {
  console.log(turtles[i] + " likes pizza");
}

##Question 7
```javascript
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"];

turtles.forEach(function(turtle) {
  console.log(turtle + " likes pizza");
});
```

##Question 8
> 3 times

##Question 9
```javascript
crimefighters.turtles[3]
```

##Question 10
```javascript
crimefighters.rangers.red
// or
crimefighters['rangers']['red']
```
