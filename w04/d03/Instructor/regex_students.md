# What is Regex? 


### Overview
Regex stands for Regular Expressions. These are a combination of characters we use to target specific elements or patterns in a string. Below are the two resources we used in class today. 

* [Regex Cheat Sheet](http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/)
* [Scriptular](http://scriptular.com/)

### Exercises + Answers

##### Exercise 1
Walter is laundering money through his car wash company. He needs
you to discretely write a javascript application which takes his
"earnings" and adds their values up.

```
var earnings = [
  "$243,000",
  "$138,000",
  "$367,000",
  "$275,000,000"
];
```

How can we add these up? Dey's not numberz

The below code targets the fourth index of the earnings variable and replaces all the commas and "$" in the string. The "g" at the end stands for global and is how we target all the commas and not just the first one. 
 
```
earnings[3].replace(/\,|\$/g, "");
```

Another way to do this is to target all the numbers in the string. The "^" inside the bracket stands for "NOT" therefore the "[^0-9]" tells javascript to target all the characters which are NOT a number between 0 and 9

```
earnings[3].replace(/[^0-9]/g, '');
```

##### Exercise 2

Given the following story, replace all of the foods using a single
regular expression

```
var story = "Pauly lives in a house with his favorite pet - a 30 lb tabby cat, Mittens. Mittens absolutely loves to eat fish, steak, and broccoli, but can’t stand avocados. Paul has to be careful, though - cats love a warm saucer of milk, but that upsets their stomachs and makes them even more moody than usual..."
```

Below we target the variable "story" and look for anything that falls under "fish", "steak", "broccoli", "avocados", "milk" in the entire (global) string. We then replace it with bacon

```
story.replace(/fish|steak|broccoli|avocados|milk/g, 'bacon');
```

##### Exercise 3

Oh no! There's a snitch in Walters organization! All Walter knows is that
the snitch has been corresponding via email, and has done a poor job
forging a fake email address to throw Walter off his path.
Walter has the following list of associates' email addresses:

```
var associates = [
  "vincenzo@legitimatebusiness.org",
  "jimmy82@notafront.com",
  "pauly'srealemail@mob",
  "mikey@aol.com",
  "vinny@generalassemb.ly"
];
```

Write a command line application which loops through these emails and
checks if the email address is a valid email or not. If it is,
log the email address and the string `"He's family"`, otherwise log the
email address and the string `"He'll be sleeping with the fishes
tonight!"`. 

In this answer we target the associates variable and use a forEach loop. This loop takes in a function where each value is an "associate". 
".test" is a method that test a regex and returns the boolean value true or false. 

"\w+@" = target any letter or word in front of the "@"
"w+\." = target any letter or word in front of the "."
"\w+"= target any letter or word

```
associates.forEach(function(associate) {
  if (/\w+@\w+\.\w+/.test(associate)) {
    console.log(associate + " He's family");
  } else {
    console.log(associate + " He'll be sleeping with the fishes tonight!");
  }
});
```

### NOTES

* You DO NOT have to memorize any regex expression. It's nice to be able to read it but memorizing every expression is not necessary. Use the resources above to help guide you to the correct expression you intend to target
* Something I want to clarify is the backslach(\) is used in these exercises to target special characters. That is why we did not require it in the food exercise, and only needed to differentiate using the vertical slash (|)