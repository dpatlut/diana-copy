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
