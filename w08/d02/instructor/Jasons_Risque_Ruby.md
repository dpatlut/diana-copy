# Humble Ruby Beginnings

## Part One: Introduce Ruby
* Why Ruby?
	* Ruby on Rails - A huge open sourced web framework with an army of developers working to keep it up to date
	* Matured / Documentation - Since so many people have been contributing to this open sourced project for about a decade it has some great documentation
	* Syntax - As close to english as you can possibly get
* irb vs. pry - Pry is a more intuitive version of irb. Both can be used to run Ruby code in the terminal. Similar to REPL in node. 
* install pry

```
gem install pry
```

## Part Two: Data types and Variables

* What data types did you guys have in JS
	* Booleans 
	* Numbers
	* Strings
	* Arrays
	* Objects
* Ruby
	* Booleans - true and false
	* Integer - 12 (a whole number)
	* Floats - 9.45 (decimal)
	* Strings - "You Are Beautiful"
	* Arrays - ['x', 'y', 'z']
	* Hashes - {key: value, key2: value2} (Objects with key value pairs)
* Variables
	* Can be declared without "var" 
	* We don't need semi colons
	* use one equal sign to declare 
* String Interpolation
	* JS - first + " " + last
	* Ruby - "#{first} #{last}"

***Exercise***
		
* "My favorite color is (color variable)"
* "My favorite ninja turtle is (turtle name) and his weapon is (turtle weapon)"
* "(actor name) is a great movie star. My favorite movie of theirs is (movie title)"


## Part Three: Control Flow

* Let's get out of pry and make a ruby file. The file extension is `.rb` 
	* Make a `test.rb` file and open it up
* Methods to use for command line apps
	* puts: gives you a new line after the string
	* print: prints out the string without a new line afterwards
	* gets: gets input from a user
	* chomp: removes the extra line

```
puts "Hey You"
me = gets.chomp
puts me
```

**Exercise**

* Write a command line app that starts with "Welcome to the personality interview game, what is your name?"
* Returns "Hello Name, what is your favorite color?"
* Returns "______ really brings out your eyes, do you have a favorite cartoon?"
* Returns "What? No way, _______ is my favorite cartoon also. Okay last question, if you could have one super power what would it be?"
* Returns "Well thank you (name), you sound like you would make a great superhero using (power) for good"

**Student Answer**

```
puts "Welcome to the personality interview game, what is your name?"
name = gets.chomp

puts "Hello #{name}, what is your favorite color?"
color = gets.chomp

puts "#{color} really brings out your eyes, do you have a favorite cartoon?"
cartoon = gets.chomp

puts "What? No way, #{cartoon} is my favorite cartoon also. Okay last question, if you could have one super power what would it be?"
superpower = gets.chomp

puts "Well thank you #{name}, you sound like you would make a great superhero using #{superpower} for good"
```
***

* Lets cover some if/else statements
	* Logically the if else statement works exactly as in JS
	* BUT as I mentioned earlier Ruby is a development language trying to mirror english
	* Some syntax changes
		* No need for ()
		* No need for ;
		* else if is not `elsif`
		* finish the statement with `end` (well get into `do` later)
		* Comparisons only need `==` not `===`
		
```
name = "Jason"

if name == "Jason"
	puts "You are so handsome"
else 
	puts "You wish you were Jason"
end
```
* The example below goes a bit further with booleans and else ifs

```
a = 10
b = 20

if a == b 
	puts "They are equal"
elsif a == 10 && b == 20
	puts "Nice math"
else
	puts "do you even math bro"
end
```	

**Exercises**

* Build a command line application that asks the user for a number between 1 and 100. Take the number and run it through fizz buzz 
* Forgot what fizz buzz is? Here's a refresher. 
	* If the number is divisible by five print out "Fizz"
	* If the number is divisible by three print out "Buzz"
	* If the number is divisible by both five and three print out "Fizz Buzz"
	* If the number is not divisible by either five or three print out "(num) is not fizzable"

**Student Answer**

```
puts "give me a number"
num = gets.chomp.to_i

if num % 5 == 0 && num % 3 == 0
    puts "fizzbuzz"
elsif num % 5 == 0
    puts "fizz"
elsif num % 3 == 0
    puts "buzz"
else
    puts "#{num} is not fizzable"
end
```

## Part Four: Loops / Arrays / Hashes

* For Loops
	* using ".." gives you up to and including the last number
	* using "..." gives you up to BUT NOT including the last number
```
for x in 1..5
	puts x
end
```
* While Loops
	* Notice incrementation is +=1 instead of ++ from JS
	* You cannot increment and decrement with (++) and (--)
	
```
x = 0
while x < 10
	puts x
	x += 1
end
```
* Arrays are the same shit in Ruby as in JS
	* Many similar methods
	* Indexes is the same as JS
	* Arrays nested into Arrays are the same
	* .push is different 
		* You can use `<<` instead of writing .push.
		* This works for both arrays and strings

```
turtles = ["Donny", "Leo", "Mikey"]

turtles << "Raph"

puts turtles
```

**Exercises**

* Write a command line app that takes in a variable with arrays nested as values inside another array. Print out sentences for each of them. 

```
people = [["Jason", "Maria", "Justin"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]

The sentence will look like "Jason's favorite color is Red, and he loves Limp Bizkit"
```

**Student Answer**

```
people = [["Jason", "Maria", "Justin"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]

x=0
while x < 3

arr = []
people.each do |i| 
    arr.push(i[x])
end

    if arr[0] == "Maria"
        puts "#{arr[0]}'s favorite color is #{arr[1]}, and she loves #{arr[2]}"
    else
        puts "#{arr[0]}'s favorite color is #{arr[1]}, and he loves #{arr[2]}"
    end

x+=1 
end
```
***

* Hashes are like the Objects in JS. 
	* They are written in snake case (my_hash)
	* They can be written in several ways
		* put quotes around keys
		* use a hash rocket between key and value
		* make the key name a symbol

```
my_self = {
	"name" => "Jason",
	"age" => 27,
	"color" => "red",
	"hungry" => true
}

OR

my_self = {
	:name => "Jason",
	:age => 27,
	:color => "red",
	:hungry => true
}

OR 

my_self = {
	name: "Jason",
	age: 27,
	color: "red",
	hungry: true
}
```
**Quick Sidenote**

* Symbols are names in ruby. They are defined using ":"
	* Following the ":" must be a letter or an underscore. 
	* Do not put any spaces in the name of your symbols
* See the above example about hashes keys being declared as symbols instead of quotes
* Symbols are unique, there can be only one. This is why they are ideal for hashes
* ".to_s" method turns a value to a string
* ".to_sym" OR ".intern" method turns a value to a symbol

**Other hash things**

* You can use "Hash.new" to make a new hash. Make sure Hash is capitalized

```
pets = Hash.new
```
* You can also create a hash with predetermined data

```
puts Hash["a", 100, "b", 50]
```
* Add keys/values to hash: same shit as JS

```
food = Hash.new
food["fruit"] = "apple"
food["meat"] = "bacon"
```

**Exercise**

* Build a command line application that will loop through the tmnt hash below and create two new arrays. One called "turtleName" and one called "turtleColor". Print these arrays

```
tmnt = {
  "Raphael" => "Red",
  "Donnatello" => "Purple",
  "Leonardo" => "Blue",
  "Michealangelo" => "Orange"
}
```

**Student Answer**

```
tmnt = {
  "Raphael" => "Red",
  "Donnatello" => "Purple",
  "Leonardo" => "Blue",
  "Michealangelo" => "Orange"
}
names = tmnt.keys
//You can also set colors to tmnt.values
colors = []

for name in names
   colors << tmnt[name]
end

print names
print colors
```
***
## Part Five: Enumerables
* Was that annoying to write? Ruby gives us a lot of methods which will reduce the need for loops
* Enumerables: .times, .each, .upto, .downto, .map(the big one)

* Lets talk about the .each method
* .each is similar to the forEach method in JS however you can put two parameters inside of the each method when dealing with hashes.
	* The syntax is `object.each{|item| do something}`
	* It's not required to have two parameters
	* What happens when you only put one argument in?
	* What happens when you put two arguments in?
	
```
tomCruz = {
  "Pilot" => "Top Gun",
  "Racer" => "Days of Thunder",
  "Spy" => "Mission Impossible",
  "Sports Agent" => "Jerry Maguire"
}

tmnt.each do |x|
 	puts "Hello #{x}"
end

tomCruz.each do |key, value|
	puts "Tom Cruize was a #{key} in the movie #{value}"
end
```
**Side Note**

* Jumping very quickly back to arrays, the .each method works similarly with arrays as the forEach in JS

```
array = [1,2,3,4,5]

array.each do |x|
  x += 10
  puts "#{x}"
end
//11 12 13 14 15
```
**Exercises**

* A Hash of Hashes
	* Create a hash where the keys are names of family, friends, classmates, and the like.
	* The values are hashes with keys for
		* codeName
		* superPower
		* weapon
	* Print out a paragraph for each person
		* "(key)s secret identity is _____. They use their power of ______ to deliver justice to wrong doers everywhere. The weapon of choice is ______ and it strikes fears in the heart of their enemies."

**Student Answer**

```
people = {
  :alex => {
    :codeName => "????",
    :superPower => "Flying",
    :weapon => "Lazers"
  },
  :ross => {
    :codeName => "The Boss",
    :superPower => "Super Strength",
    :weapon =>  "Feet"
  },
  :mar => {
    :codeName => "Black Mist Widow",
    :superPower => "Darkness",
    :weapon =>  "Katana"
  }
}


people.each do |name, values|
  puts "#{name}'s secret identity is #{values[:codeName]}. They use their power of #{values[:superPower]} to deliver justice to wrong doers everywhere. The weapon of choice is #{values[:weapon]} and it strikes fears in the heart of their enemies."
end
```
***
* Other enumerables
* The times method: iterate something a specific number of times
	* number.times{do this}
	
	```
	10.times{puts "I Am Beautiful"}
	```
* Other ways of looping: `.upto`, `.downto`, `.each`

	```
	"L".upto("P"){|letter| puts letter}
	
	90.downto(72){|num| puts num}
	```

* now lets move to the `.map` method
	
	```
	arr.map { |a| 2*a }   #=> [2, 4, 6, 8, 10]
	arr                   #=> [1, 2, 3, 4, 5]
	arr.map! { |a| a**2 } #=> [1, 4, 9, 16, 25]
	arr                   #=> [1, 4, 9, 16, 25]
	```
* The map method will return a new array with the new values. The original array is not changed
* if we use the map! it will mutate the original array
