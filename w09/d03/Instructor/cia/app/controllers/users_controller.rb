class UsersController < ApplicationController
  def index
    if session[:logged_in_hmm]
      @users = User.all
      render :index
    else
      redirect_to '/login'
    end
  end

  def create
    u = User.create(
      codename: params[:codename],
      password: params[:password],
      real_name: params[:real_name]
    )

    redirect_to "/users/#{u.codename}"
  end

  def show
    if session[:logged_in_hmm]
      if (@user = User.find_by(codename: params[:codename]))
        render :show
      else
        redirect_to '/users/new'
      end
    else
      redirect_to '/login'
    end
  end
end
