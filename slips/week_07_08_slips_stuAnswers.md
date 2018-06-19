# Week Seven and Eight Slip Questions + Student Answers

***Students will pair up. Student A will have their laptop open and receive seven questions to ask Student B. Student B will have their laptops closed when answering. After 15 minutes reverse roles and distribute second half of the questions. End the pairing interviews, come back to discuss as a class and write down answers on projector.***

* How do we use the `.each` method in an array? In a hash?
	* You write `.each`
	* In an array you define an argument / parameter between pipes `|x|`
	* In a hash you can define up to two arguments between pipes `|x. y|`
* What are the major differences between JS and Ruby? What is your experience with both?
	* Ruby no hoisting vs JS hoisting
	* Bad to declare Global Variables in BOTH
	* JS can be used for DOM manipulation, and now on the server side as well
	* RUBY = sugar 
	* Ruby very close to english
	* Ruby is more OOP 
	* JS is async, Ruby is not
* What are methods? How are they different from blocks?
	* blocks are pieces of code that are unnamed 
	* methods are like JS functions
	* methods are pieces of code that are named, we can call multiple times
	* make sure you understand what datatypes can be passed
* Explain when and how we use the keyword `yield`. What is it similar to in JS?
	* You can write a method, and inside of it you have the `yield`, it will reach outside and run a new block of code
	* Yield acts like a callback function from JS. You can utilize a new block of code while inside another code.
	* Since I couldn't remember the syntax off the top of my head here are some more detail examples I promised. 

```
def talk
	puts yield
end

talk {"Hello my name is Jason"}
``` 
* Notice how in the above example we invoked the method talk and followed it with a block of code
* Below is the example from your week7-8 review markdown
	* In this example we are using the enumerator method `times` 
	* Throughout each iteration the method will use yield to run the outside block of code, THEN jump back inside the method to run the rest of the code. 

```
def example(x)
  5.times do |n|
   yield n
   answer=n*x
   puts "You are in the method test:#{answer}"
  end
end

example(10) {|i| puts "You are in the anonymous method (i.e. the block) #{i}"}
```
* You can also pass it methods using yield. Let's write something similar to the above example

```
def example(x)
  5.times do |n|
   yield n
   answer=n*x
   puts "You are in the method test:#{answer}"
  end
end

def blah
	puts "You are in the anonymous method"
end

example(10) {blah}
```

* What is inheritance? How do classes use this?
	* inherit data from an external file/class by using the `<` sign
	* inheriting properties/methods from parent
	* `super` keyword is used when you want to define properties you want to inherit 
		* use this when you override parent methods
* What does ORM stand for? Why do we use them? What is your experience using an ORM?
	* Object Relational Mapping
	* Active Record is an ORM
	* AR - allows you to connect to dbs while using Sinatra and Rails
	* Magical - allows SQL code to be used without using SQL syntax
* Explain the difference between getter and setter methods.
	* Allows you to access the instance variables that are initialized in that Class's instance
* What are the shortcuts to getter and setter methods? How do we use them?
	* attr_reader 
	* attr_writer
	* attr_accessor - let's you read and write
	* Because it's a shortcut duhhhhhhhhh
* How can I override a property or method of a parent class? How can I modify it?
	* You can override using super
	* You can't override instance properties of an object after it has already been made
	* To override a parent Class's method, in the child make a method of the same name
* What do we use Active Record for?
	* It connects our server to our db. Allows to use SQL in Sinatra
	* Is Active Record considered middleware? No but it has middleware
		* Middleware - software that acts as a bridge between an operating system or database and applications, especially on a network.
		* Active Record has it's own middleware functionality that will be used in Sinatra/Rails. 
* You're writing a web server that interacts with a database. Explain how you would set up your folder structure. (What goes in our models folder? views? lib? db?)
	* models - code that interacts with DB
	* views - houses your template files. such as erb, html, ejs
	* lib - connection
	* db - db files - seed and schema
* How does scope work in Ruby? Explain the language's different levels of scope.
	* Instance Variables - available to only the instance of that object created by that class
	* Class Variables - available to the entire class `@@`
	* Local Variables - variables available to that specific method/block 
	* Global Variables - DON'T MAKE GLOBAL VARIABLES
* What is a class?
	* A blueprint for objects. 
	* How you create properties for specific objects. 
* How do you feel about "syntactic sugar"?  Ruby has quite a few different ways to write a hash, for example. What is your preferred method, and why?
	* Sweet
	* we write methods to keep code DRY
		* we use parenthesis to invoke methods even though we don't have to
	* You don't have to write return but sometimes it is better to write it to ensure future you and other people looking at your code can read it easier.
	* hashes - `=>` `symbols` `quotes`
		* preference
		* symbols are unique
		* when targeting a hash value has to be in `[]`
	* when to use `{}` vs `do` and `end`
		* you can use either for methods and blocks
		* preferably you would use `{}` if the code is single line
	* sometimes just use quotes - e.g. requiring `pry` 
	* According to [ruby learning](http://rubylearning.com/satishtalim/ruby_hashes.html) you may not need to use colons to define keys as symbols in a hash. However I recommend it to make sure people know they are what they are.

