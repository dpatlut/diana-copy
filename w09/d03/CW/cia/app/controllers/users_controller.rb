class UsersController < ApplicationController
  def index
    @users = User.all
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
    if (@user = User.find_by(codename: params[:codename]))
      render :show
    else
      redirect_to '/users/new'
    end
  end
end
