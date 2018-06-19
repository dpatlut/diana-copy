# Week Nine and Ten Slip Questions and Student Answers

### Group A

1. What is the sprockets gem used for? What does it allow us to do?  
* What is turbolinks? Why would we use it? 
* What does AJAX stand for and why do we use it? 
* When an HTTP request is made, explain the method of travel it takes through your Rails application. (Think MVC)
* What goes in the Controllers folder? Go in depth. What are these files responsible for?
* How do we include our own JavaScript files and stylesheets in a Rails application? 
* How is submitting a form by using the browser's default action (no JS) different than submitting a form with AJAX?
* If you have behavior that needs to be performed after the completion of an AJAX call (example: displaying data), how would you accomplish this? 
* What is a single page application? How is it different from a traditional web application?
* What does CRUD stand for? How do we perform CRUD operations using SQL? Using AJAX?

### Group B 

1. What goes in the Models folder? Go in depth. What are you doing in here?
* What goes in the Views folder? Go in depth. What are you doing in here?
* What are some pros and cons of using scaffold?
* What is the Asset Pipeline? What are some of its benefits?
* How do we include third party JavaScript files and stylesheets?
* What is an MVC framework? Explain briefly hat the purpose of each component is.
* If you used `resources :items` in your routes file what is this doing? How can you see them?
* Explain two major benefits of using REST to design a web application.
* How can we prevent a default action from occurring when a button is clicked? Why would this be useful?
* How do we make calls to our SQL db in rails? What allows us to do this without writing SQL?

### Group A Answers

1. Used for the Asset Pipeline. Asset Pipeline is no longer a requirement of Rails 4. It does come in when you run `rails new` but you have the option to not bring it in.
	* It's clobbering time! - rake assets clobber - Something Spencer mentioned
2. Supposedly renders pages faster when clicked on a link. Not a necessity. Usually was the source of mysterious breaking during group 3 projects
3. Asynchronous JavaScript And XML. Allows us to talk to the server without us refreshing the entire page. 
4. Request goes to routes.rb --> controller --> model --> databse --> back to model --> back to controller --> to the view
5. Your controller holds CRUD logic and methods that will touch a model for data and or send information to render a view
	* Fat models and skinny controllers 
6. app / assets and then into JavaScript or Stylesheets. 
7. You would normally need a form tag. With AJAX jQuery you can give a button a click event to grab inputs 
8. `.done()` / `.failure()` / `.always()`
	* AJAX is asynchronous. So what happens if we have one function "B" that requires a value which is being returned from function "A". Using something such as `.done()` ensures that function B is not run until function A is finished. 
9.  SPA vs Pagination
	* In the olden days websites had many MANY pages. And whenever a user clicked to go somewhere the server would get a request and a brand new template file is rendered. This is pretty slow. Think about when you had to refresh your email page just to see if you got new mail. Single Page Apps allows us to keep the user on the same page, and just send them new data. Think about how Tumbler, Facebook, Twitter and the like have an infinite scrolling news feed. Your page is not refreshing or changing, you are just getting new data.   
10. CRUD - Create, Read, Update, Delete / Destroy
	* INSERT INTO table VALUES values
	* SELECT * FROM table WHERE blah
	* UPDATE table SET new value = blah WHERE old value = blah blah
	* DELETE FROM table WHERE value = blah blah
	* $.ajax 
		* POST  / GET / PUT / DELETE 
		
### Group B Answers

1. Your models - Database relationships, and Active Record Connections 
	* belongs to, one to many, many to many, has many, belongs to many
2. Templates / Views 
3. Creates everything in 2 minutes and 33 seconds. Con = lack of customization. No idea of what's happening because it was all set up for us. Scaffolding may give us files we don't really need. NOBODY BUILDS A SCAFFOLDED WEBSITE
4. Asset Pipeline:
	* Allows us to minimize and compress our stylesheets and JS files. This is great for faster rendering. (precompile)
	* Fingerprinting: Each precompiled file comes with a fingerprint. The Asset Pipeline knows which file is the most recent one to use in production. 
5. Putting shit in the vendors folder. Then including it in the manifests file in your app/assets folder
6. MVC - Models Views Controller - Means of abstracting all the components of each other. logic is seperated from the view seperated from the data. 
7. automatically creates RESTful routes for you. in terminal you run rake routes to see them
8. Representational State Transfer - Organize your routes. Cleaner code. Our routes should follow the CRUD format. 
9. `e.preventDefault()` - prevents the default action of an event from happening. You may use this to prevent a user from hitting a submit button in a form, or clicking on a specific URL. 
10. We make the call in our controller. We call the `Model` and use Active Record commands. Active Record allows us to use SQL without actually writing a bunch of SQL. 

	 