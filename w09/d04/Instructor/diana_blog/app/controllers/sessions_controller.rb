class SessionsController < ApplicationController
	def new
		@author = Author.new
	end

	def create
		author = Author.find_by(name: params[:name])
		if author && author.authenticate(params[:password])
			session[:author_id] = author.id
			redirect_to(posts_path)
		else
			flash[:error] = "Incorrect Author Name or Password"
			redirect_to(login_path)
		end
	end

	def destroy
		# reset_session
		session[:author_id] = nil
		redirect_to(login_path)
	end
end