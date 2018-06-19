class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by(codename: params[:codename])

    if user.password == params[:password]
      session[:logged_in_hmm] = true
      redirect_to '/users'
    else
      redirect_to '/login'
    end
  end

  def destroy
    session.clear
    redirect_to '/login'
  end
end