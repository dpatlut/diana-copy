# Steps

1. Make a new rails app - ``rails new groceries --d postgresql``
2. ``rails g model Grocery name:string``
3. routes.rb:

 ```js
   namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :groceries 
    end
  end
 ```
 
4. Make groceries controller
5. define all actions:

```js
class Api::V1::GroceriesController < ApplicationController
	
	def index
		groceries = Grocery.all
		render json: groceries
	end

	def create
		grocery = Grocery.create(grocery_params)
		render json: grocery
	end

	def show
		grocery = Grocery.find(params[:id])
		render json: grocery
	end

	def update
		grocery = Grocery.find(params[:id])
		grocery.update(grocery_params)
		render json: grocery
	end

	def destroy
		Grocery.find(params[:id]).destroy
		render json: 'deleted'
	end

	private

	def grocery_params
		params.permit(:name)
	end
end
```

6. Make a html page to load the js files. welcome_controller, route, index action, welcome index view. 

7. Test with Ajax or just go to the routes

**GET**

```js
$.ajax({
  url: '/api/v1/groceries',
  method: 'GET'
}).done(function(data){
  console.log(data)
});
```

```js
$.ajax({
  url: '/api/v1/groceries/1',
  method: 'GET'
}).done(function(data){
  console.log(data)
});
```
**POST**

```js
$.ajax({
  url: '/api/v1/groceries',
  method: 'POST',
  data: {name: "oranges"}
}).done(function(data){
  console.log(data)
});
```

**PUT**

```js
$.ajax({
  url: '/api/v1/groceries/1',
  method: 'PUT',
  data: {name: "peaches"}
}).done(function(data){
  console.log(data)
});
```

**DELETE**

```js
$.ajax({
  url: '/api/v1/groceries/1',
  method: 'DELETE',
  data: {name: "peaches"}
}).done(function(data){
  console.log(data)
});
```

8. In vendor/assets/javascripts, make backbone and underscore files, copy in code. 
9. Link in application.js
10. In app/assets/javascripts/api/v1, make folders and files models/groceries_model, collections/groceries_collection, views/groceries_views
11. make assets/javascripts/api/v1.js and Link views, collections, and models

```js
//= require underscore
//= require backbone
//= require models/grocery_model
//= require collections/grocery_collection
//= require views/grocery_view
//= require api/v1/v1
```

11. The default templating language for underscore uses the clown hats, we have change the settings so it doesn't conflict with erb. We'll se it to use the mustache style.


**Underscore settings**

```js
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};
```
