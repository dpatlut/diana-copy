# Intro to rails

### Objectives
*After this lesson, students will be able to:*

- Create a new Rails application with PostgreSQL
- Describe similarities between Sinatra routing & Rails routing
- Describe the MVC paradigm
- Draw and order the Rails request-response cycle
- Navigate the architecture of a scaffold-generated Rails app

### Preparation
*Before this lesson, students should already be able to:*

- Execute ruby code
- Explain the difference between HTTP request/request

## Intro: What is Rails (10 mins)

Rails was created in 2003 by David Heinemeier Hansson, while working on the code base for Basecamp, a project management tool by 37signals. David extracted Ruby on Rails and officially released it as open source code in July of 2004. Despite rapid iteration of the Rails code base throughout the years, it has stuck to three basic principles:

* Ruby Programming Language
* Model-View-Controller Architecture
* Programmer Happiness

Rails was created with the goal of increasing programmers' happiness and productivity levels. In short, with Rails you can get started with a full-stack web application by quickly creating pages, templates and even query functions. Rails heavily emphasizes **"Convention over Configuration."** This means that a programmer only needs to specify and code out the non-standard parts of a program. Even though Rails comes with its own set of tools and settings, you're certainly not limited to library of rails commands and configurations. Developers are free to configure their applications however they wish, though adopting conventions is certainly recommended.

## The Model-View-Controller Architecture

 - **Model**: Stores data in a suitable manner
 - **View**: Puts data in a well-presented format
 - **Controller**: Connects the appropriate view with the appropriate model

Rails separates the routing logic as well. 


## Demo: A blog in 10 mins (10 mins)

The goal of the next few minutes is to show the power that Rails gives us – it's actually possible to create a website with a lot of the functionality you've seen in our Sinatra app – forms, links, database, and MVC structure – in less than 5 minutes. We will not detail each step for this app, but we will create a dynamic website in 5 mins by typing the following commands.

I'll talk through this as I demo, and we'll come back and talk about what each of these steps are doing afterwards.

```ruby
rails new blog_app -d postgresql
cd blog_app
rails generate scaffold posts title:string content:text author:string
rake db:create
rake db:migrate
rails server
```

Now we'll head over to `localhost:3000/posts`. All of our REST actions are live!


## Codealong: Installing Rails (5 mins)

#### Let's install rails

```bash
  gem install rails
```

Versions of Rails change quite rapidly, and if you leave off the "-v", you'll just get the latest version. Be specific if you want a specific version.

#### Now, create your blog!

Follow the steps above.

## Navigate the Rails Structure

How does this actually work?

Let's look at the contents of this folder (using `ls`), and take a look at the files and folders that were magically created by the `rails new` command:

```
├── app
├── bin
├── config
├── db
├── lib
├── log
├── public
├── test
├── tmp
└── vendor
```

Some details about this structure:

* 90% of the web app code will be inside the folder `app`, including all of our model, view, and controller logic.
* `config` contains all the credentials for the DB and other 3rd party services, all the deployment settings, and the specs about how to serve this app over HTTP.
* `db` will contain all of your migrations

#### Take 15 minutes and try to figure out how this works!


#### Rails Routing vs. Sinatra Routing

As you know, a "route" is a combination of **the path** that was requested and **the HTTP verb** that was used to request that path.

A Sinatra route might look like this:

```Ruby
  get '/posts' do
    post_list = Recipe.all
    erb :'recipes/index', locals: {items: post_list}
  end

```
When we've used Sinatra, we were managing the routes and the code executed for a specific route in the same place. This is handy for us as developers, because it allows us to keep everything in the same place - routing and controller logic - but if the app grows it can get unreadable. Imagine, for example, an app that has 20 or 30 different routes... your main routes file could contain a lot of complex code.




Rails separates these jobs. The code for each is stored in a different folder.

![](http://www.smashingmagazine.com/images/introduction-to-rails/request.jpg)

Another [perspective](http://www.codelearn.org/ruby-on-rails-tutorial/mvc-in-rails#).

Rails has a "routing engine" that separates the routing logic from the controller logic (what we want to happen when routes are requested). The configuration for this routing engine is in the file `config/routes.rb`.

```ruby
Rails.application.routes.draw do


end
```

Everything between the `do` and the `end` will be code related to handling routes for the current application.

This line ```resources :posts``` hides some powerful rails magic - it's actually mapping the seven restful methods from the controller `posts` to the related http routes with the correct HTTP verbs and uris:

| REST Route type | HTTP Verb | URI | ruby method name|
|-----------------|-----------|-----|-----------------|
|index|    GET    |     /posts(.:format)          |   posts#index|
|create|    POST   |     /posts(.:format)          |   posts#create|
|new|    GET    |     /posts/new(.:format)      |   posts#new |
|edit|    GET    |     /posts/:id/edit(.:format) |   posts#edit|
|show|    GET    |     /posts/:id(.:format)      |   posts#show|
|update|    PUT    |     /posts/:id(.:format)      |   posts#update|
|destroy|    DELETE |     /posts/:id(.:format)      |   posts#destroy|

YES! These seven routes have been created just by adding `resources :posts` in the file `routes.rb`

If we had to create these routes individually in ```routes.rb```, it would looks like this:

```ruby
get    "/posts"          , to: "posts#index"
post   "/posts"          , to: "posts#create"
get    "/posts/new"      , to: "posts#new"
get    "/posts/:id/edit" , to: "posts#edit"
get    "/posts/:id"      , to: "posts#show"
put    "/posts/:id"      , to: "posts#update"
delete "/posts/:id"      , to: "posts#destroy"
```



#### Check out the controller folder!

As Rails is an MVC framework, we will need to have controllers to handle requests and call the database through models. 

"In Rails, a resourceful route provides a mapping between HTTP verbs and URLs to controller actions. By convention, each action also maps to particular CRUD operations in a database." - [Rails Routing from the Outside In] (http://guides.rubyonrails.org/routing.html)

In Rails, the controllers are files inside the `app/controllers` folder. If you open this folder, you will see that one controller is already here: the file `application_controller.rb`. This controller does not directly handle HTTP requests, but rather serves as a link between all the controllers we will create, `application_controller.rb` will be the parent of all the controllers in our app.

You will also notice a file called `app/contollers/posts_controller.rb`

Why are some methods empty? 
Can you relate these methods to the list of RESTful routes we just saw?


#### Activity 1: Add a new controller action (and a route to listen for it!

In `routes.rb` add:

```ruby
Rails.application.routes.draw do
  resources :posts

  get    "/hello"          , to: "application#hello"
  
end
```

Then, in `application_controller.rb` add:

```ruby
def hello
    render text: "Hello first route!"
end
```



#### Check out the views folder!

This is where the views for your project are stored. Similar to what we're familiar with. 


#### Check out the db folder! 

This is where you set up the model logic for your application. Should also look (pretty much) familiar.

#### Activity 2: Modify the Model and View

Start a new rails blog, but this time type into the Terminal:

```ruby
rails new blog_app -d postgresql
cd blog_app
rails generate scaffold posts title:string content:text author:string color:string
rake db:create
rake db:migrate
rails server
```

Modify `index.html.erb`:

```html
<td style = "color: <%= post.color%>"><%= post.content %></td>
```


## Now it's time to build your own blog! (without scaffolding)

Rails is a framework that:

 - automates much of the repetitive work associated with creating RESTful routes
 - enforces the MVC architecture paradigm
 - makes the "magic" happen

Don't be a Rails Monkey. Learn how the pieces connect. Learn how the pieces work. Dispel the magic.


An excellent summary of these ideas can be found [here](https://www.railstutorial.org/book/toy_app#cha-a_toy_app).