require 'pry'
require 'sinatra'

require_relative('models/cheese')

get '/cheese' do
  cheese_list = Cheese.all
  erb :index, locals: {cheeses: cheese_list}
end