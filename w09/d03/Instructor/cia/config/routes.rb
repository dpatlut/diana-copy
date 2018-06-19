Rails.application.routes.draw do
  get '/users/new' => 'users#new'
  post '/users' => 'users#create'
  get '/users' => 'users#index'
  get '/users/:codename' => 'users#show'

  get '/login' => 'sessions#new'
  get '/do_the_loggin_in' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
end
