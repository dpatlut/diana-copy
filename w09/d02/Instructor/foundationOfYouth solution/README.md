# Foundation of Youth Solution

* Lets run the following steps in terminal

```
rails new foundationOfYouth
cd foundationOfYouth
rails generate controller blogs
```
* Now let's download the foundation items and copy them into our vendor folder
* This is where you want to store all third party stylesheets and js files

```
vendor/assets/stylesheets
vendor/assets/javascripts
```
* Great, they are in your vendor file but how do we tell our app to use them?
* We have to input them into our manifest files. These are located in your app/assets folder
* Open your app/assets/javascripts/application.js. You'll see something like this

```
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
```
* To include foundation input `//= require foundation` line above `require_tree`
* Now let's do the same for our stylesheets. Open up app/assets/stylesheets/application.css and you'll see something like

```
 *= require foundation
 *= require_tree .
 *= require_self
```
* Let's put in `*= require foundation` also above `require_tree`
* So we have our controller already generated but we still have to make sure the user can reach that page. 
* In our routes.rb file make a root route that will touch an index method in the blogs controller

```
root 'blogs#index'
resources :blogs
```
* The `resources` line makes our RESTful routes for blogs. You can see this if you run `rake routes` in your terminal.
* Now lets add an index method into our blogs controller

```
class BlogsController < ApplicationController
	def index 		
	end
end

```
* There still has to be a page for your users to see. Let's touch an index file in your views calld `index.html.erb`. Remember we do not need to add boilerplate HTML to this file because it is taking the items from the layout
* The `application` file in the layout folder has the two lines at the top that says incorporate everything within the manifests
	* Your own scripts and stylesheets will be included in there because the manifest have the "require_tree" line
* Your own files will go into your app/assets folder. If you had multiple css/js files they will all be read because your "manifest" files has the `require_tree` line. Should you want your files to be loaded a certain way you can remove the `require_tree` line and input your own files in the order you want. 
		
***What did we cover today?***

* What is the assets pipeline? What does it do? How do we use it? 
	* The assets pipeline concatenates all your JS files into one file and all your CSS files into one file. It also minimizes those files by eliminating the white space. This makes things faster for the user because it will only have to make one request instead of multiple requests for various files. 
	* Precompiling - this is the process described above about concatenating and minizing your JS and CSS files. This is not necessary for development, we do this when we are in production to save speed for our users. When you run `rake assets:precompile` it will give that file a "fingerprint"
	* Fingerprint - a unique hash/identifier added to a precompile file. The assets pipeline understands which file is the newest one by reading the fingerprint. 
* What is the sprokets gem? Why is this not a core thing anymore in Rails 4? Manifest?
	* The assets pipeline is no longer a core factor in Rails 4. If a developer choose to, they could remove the assets pipeline by skipping the "Spokets" gem when running rails new. `Sprokets` is the gem that allows us to use our manifest files. 