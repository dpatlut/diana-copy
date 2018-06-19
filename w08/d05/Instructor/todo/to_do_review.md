#TO-DO Review

## ActiveRecord and Sinatra: Cool, but so many files!
Activerecord makes it 'easy' to put ab object wrapper around a row in a database!

Sinatra makes it 'easy' to create RESTful routes!

But we need a specific organization to do it:

### ```db/schema.sql```
 - specifies the columns that will be present in each of the database tables
 - the table name is the *plural* version of the class name

 ```sql
DROP TABLE if exists items;

CREATE TABLE items(
  id serial PRIMARY KEY,
  name VARCHAR,
  tag VARCHAR, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 ```
 - remember to create your database first: ```createdb todo.db```
 - then, use this file to create your tables: ```psql todo.db < schema.sql```

### ```lib/connection.rb```
Specifies:
 - which type of database you'll be using (```postgresql```)
 - the name of the database that should be connected to the ActiveRecord (```todo.db```)

Also turns on the console logging, which lets you know important 'behind the scenes' information

```ruby
require 'active_record'

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :database => "todo.db"
})

ActiveRecord::Base.logger = Logger.new(STDOUT)
```

### ```models/...```
Contains one file per table in the database. This allows you to create a Ruby object with data from your tables. Notice the link to the ActiveRecord connection! Each class definition inherets a set of methods from ```ActiveRecord::Base``` This allows you to use very 'easy' methods to access database information.

**item.rb**
```ruby
require_relative('../lib/connection')

class Item < ActiveRecord::Base
end
```

### ```server.rb```
Defines the RESTful routes required by our application

Notice that each method combines:
  - HTTP verb: ```GET```, ```POST```, ```PUT```, ```DELETE```, etc
  - A *requested* route: ```'/'```, ```/items/:id'```, etc
  - A *response* to send back to the client:  ```erb :new```, ```erb :index, locals: {items: items_list}```, etc.

```ruby

require 'sinatra'
require 'pry'

require_relative('models/item')


# redirect root to '/items'
get '/' do
  redirect '/items'
end

#display all items
get '/items' do
  items_list = Item.all
  erb :index, locals: {items: items_list}
end

# renders the new item view
get '/items/new' do
  # render the 'new' view
  erb :new
end

#display one item
get '/items/:id' do
  # Retrieve item from database
  item = Item.find(params[:id])
  # render 'show' view and pass item to view
  erb :show, locals: {item: item}
end

# display edit item view
get '/items/:id/edit' do
  # Retrieve item from database
  item = Item.find(params[:id])
  # render 'edit' view and pass item to view
  erb :edit, locals: {item: item}
end

# create a new item
post '/items' do
  # grab the fields from the new item form
  Item.create({name: params[:name], tag: params[:tag]})
  # create a new item with the values in those fields
  redirect '/items'
end

#update an item's attributes
put '/items/:id' do
  # get item from database
  item = Item.find(params[:id])
  # update item with new values from fields
  item.update({name: params[:name], tag: params[:tag]})
  redirect '/items'
end

# delete an item
delete '/items/:id' do
  # get the item from the database
  item = Item.find(params[:id])
  # destroy the item
  item.delete
  redirect '/items'
end
```


### ```views/...```
Contains a template for each of the required views:

 - **edit.erb**: edit an item from the TO-DO list
```html
<!DOCTYPE>
<html>
  <head>
    <link rel = "stylesheet" type = "text/css" href = "/css/styles.css">
  </head>
  <body>
    <div>
    <header>
      <h1>Update an Item</h1>
    </header>
    <div class="lines"></div>
    <form class = "list" method = "post" action = "/items/<%= item.id %>" >
      <input type = "hidden" name = "_method" value = "put">
        <div class = "fields">
          <label>Item Name</label>
          <input type = "text" name = "name" value = "<%= item.name %>"><br />
          <label>Tag</label>
          <input type = "text" name = "tag" value = "<%= item.tag %>"><br />
          <button class = "update-button">Update</button>
        </div>
    </form>
    </div>
  </body>
</html>
```
 - **show.erb**: show one item from the TO-DO list
```html
<html>
<body>
	<h1>todo stuff!</h1>
	<p><%= item.name %></p>
	<a href="/items/<%= item.id %>/edit">Edit</a>	
</body>
</html>
```
 - **new.erb**: add an item to the TO-DO list
```html
<!DOCTYPE>
<html>
  <head>
    <link rel = "stylesheet" type = "text/css" href = "/css/styles.css">
  </head>
  <body>
    <div>
    <header>
      <h1>Add an Item</h1>
    </header>
    <div class="lines"></div>
    <form class = "list" method = "post" action = "/items" >
        <div class = "fields">
          <label>Item Name</label>
          <input type = "text" name = "name"><br />
          <label>Tag</label>
          <input type = "text" name = "tag"><br />
          <button class = "create-button">Create</button>
        </div>
    </form>
    </div>
  </body>
</html>
```
 - **index.erb**: lists all of the current items on the TO-DO list
```html
<!DOCTYPE>
<html>
  <head>
    <link rel = "stylesheet" type = "text/css" href = "/css/styles.css">
  </head>
  <body>
    <div>
    <header>
      <h1>Things I have to do:</h1>
    </header>
    <div class="lines"></div>
    <ul class = "list">
    <% items.each do |item| %>
      <li>
        <a href="/items/<%= item.id %>" style = "color: <%= item.tag %>"><%= item.name %></a>
        <%= item.created_at %>
        <form action = "/items/<%= item.id %>/edit" class = "edit-form">
          <button>Edit</button>
        </form>

      <form action="/items/<%= item.id %>" method="post" class = "delete-form">
        <input type="hidden" name="_method" value="delete">
        <button>Delete</button>
      </form>

      </li>
    <% end %>
    </ul>
    <a href = "/items/new">Add Item</a>
    </div>
  </body>
</html>
```

