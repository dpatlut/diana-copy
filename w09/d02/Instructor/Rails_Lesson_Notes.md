# Make a New App

``rails new diana_blog -d postgresql``

- This starts the server:

``rails s``

- This creates the database:

``rake db:create``

#Make a Landing Page

- Define the Root route in routes.rb

``root 'welcome#index'``

- Make a controller in controller folder

```rb
class WelcomeController < ApplicationController
end
```

- Define action in WelcomeController

```rb
class WelcomeController < ApplicationController

	def index
	end
	
end
```

- make a folder in views called ``welcome`` and make a file ``index.html.erb``

- in index:

```rb
<h1>Hello to My Blog</h1>
<%= link_to "Posts", posts_path %></br>
<%= link_to "Make a New Post", new_post_path %>
```

# POSTS
- Generate a model for a Post.This will create a model in the ``app/models`` folder and a migration in the ``db/migrate`` folder.

``rails generate model Post title:string content:text image_url:string``

-Run the migration:

``rake db:migrate``

- In seeds.rb, make some starter data. 

```rb
Post.create({tite: "First Post", content: "This is great!", image_url: "http://people.ucsc.edu/~ddiep1/puppy.jpg"})
```

- Run the seed with a rake task:

``rake db:seed``


- In routes.rb, enable all the restful routes for the posts resource

``resources :posts``

- To see all your routes:
``rake routes``


- Create a Controller for Posts


```rb
class PostsController < ApplicationController	
end
```

- Define an action index and views/posts/index.html.erb

```ruby
class PostsController < ApplicationController	
	def index
		@posts = Post.all
	end
end
```

- in index.html.erb

```rb
<% @posts.each do |post| %>
	<h1><%= post.title %></h1>
	<img src="<%= post.image_url %>">
	<p><%= post.content %></p>
<% end %>

```

# NEW

- New action in Controller:

```rb
	def new
		@post = Post.new
	end

```

- New View:

```rb
<%= form_for @post do |f| %>
    <%= f.text_field :title, placeholder: 'Title' %><br>
    <%= f.text_field :content, placeholder: 'Content' %><br>
    <%= f.text_field :image_url, placeholder: 'Image URL' %><br>
    <%= f.submit %>
<% end %>
```

An authencity token is generated automatically with the form helper.

This is something that gets stored in the session to prevent CSRF - Cross Site Request Forgery.
[csrf](http://guides.rubyonrails.org/security.html)

# CREATE

- You can assign all the params at once. 

Add this at the bottom, and then we can add all params at once:

```rb
private

  def post_params
    params.require(:post).permit(:title, :content, :image_url)
  end
```


- Create action in controller:

```rb
	def create
		Post.create(post_params)
		redirect_to posts_path
	end
```


- SHOW


Let's add a link in our Index View for a specific post:

```rb
<% @posts.each do |post| %>
	<h1><%= link_to post.title, post %></h1>
	<img src="<%= post.image_url %>" width="300">
	<p><%= post.content %></p>
<% end %>
```


-In controller: 

```rb
def show
	@post = Post.find(params[:id])
end
```


Show View

```rb
<h2><%= @post.title %></h2></br>
<img src="<%= @post.image_url %>" width="300"></br>
<p><%= @post.content %></p></br>
```

- Make a link to the edit page
- Make rake routes again to look at the path names

```rb
<%= link_to 'Edit This Post', edit_post_path %>
```

- Make a view
- the form should look a lot like the new form, let's just copy it in.

Look at that!

- you don't have to tell it what action to look for. It knows. 
- There is a way to specify an action explicitly in the first line:

``<%= form_for @post, url: {action: "update"} do |f| %>``


- update action

```rb
	def update
		post = Post.find(params[:id])
		post.update(post_params)
		redirect_to post_path
	end
```


### Destroy

- Add this to show:

```rb
<%= form_for @post, url:{action: 'destroy'}, method: :delete do |f| %>
<%= f.button 'Delete Post' %>
<% end %>
```

- Action in controller

```rb
	def destroy
		post = Post.find(params[:id])
		post.destroy
		redirect_to posts_path
	end
```