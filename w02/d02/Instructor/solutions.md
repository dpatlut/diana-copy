#### Print the Vowels

Write a javascript application that takes a string as an argument and returns a string of just the vowels.

```js
function vowels(string){
    var vowels = ""
    for(var i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "o" || string[i] === "u"){
            vowels += string[i] 
        }
    }
    return vowels
}

console.log(vowels("hello"))
```



#### Lengths

Write a function that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

```js
var words = ["hello", "what", "is", "up", "dude"];

function lengths (array) {
    lengthArray = [];
    for (var i = 0; i < array.length; i++) {
        lengthArray.push(array[i].length);
    }
    return lengthArray;
};

console.log(lengths(words))
```

####  Fibonacci Sequence

The Fibonacci sequence is an infinite sequence where each element in the sequence is the sum of the previous 2 numbers.   

The first 5 numbers are 0, 1, 1, 2, 3.

Write a program that prints out the first 100 elements of the Fibonacci sequence. 

```js
var ary = [0,1]

for(var i = 2; i < 100; i++){
    sum = (ary[i - 1]) + (ary[i - 2])
    ary.push(sum)
}

console.log(ary)
```


# Looping Through an Array of Objects

```js
var pumpkinsRecords = [
	{title: "Gish", year: 1991, albumsSold: 534000},
	{title: "Siamese Dream", year: 1993, albumsSold: 1000037},
	{title: "Mellon Collie and the Infinite Sadness", year: 1995, albumsSold: 1000500},
	{title: "Adore", year: 1998, albumsSold: 300100},
	{title: "Machina", year: 2000, albumsSold: 200000},
	{title: "Machina II", year: 2000, albumsSold: 50000},
	{title: "Zietgiest", year: 2007, albumsSold: 250}
]
```

Q: How can I log all of the titles?

```js
for(var i = 0; i < pumpkinsRecords.length; i++){
  console.log(pumpkinsRecords[i].title);
}
```

Q: How can I log only the titles of the records that came out before 1998

```js
for(var i = 0; i < pumpkinsRecords.length; i++){
	if(pumpkinsRecords[i].year < 1998){
  	console.log(pumpkinsRecords[i].title);
  }
}
```

Q: What is the total number of albums sold for all albums?

```js

var sum = 0
for(var i = 0; i < pumpkinsRecords.length; i++){
	sum += pumpkinsRecords[i].albumsSold
}
console.log(sum)
```
