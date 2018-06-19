class SecretsController < ApplicationController
  def show
    if session[:logged_in] == 'yep'
      puts session[:monkey_banana]
      render :show
    else
      redirect_to '/enter'
    end
  end

  def login
    if params[:password] == 'cheese'
      session[:logged_in] = 'yep'
      session[:monkey_banana] = 'trees'
      redirect_to '/secret'
    else
      redirect_to '/enter'
    end
  end

  def enter
    render :enter    
  end
end