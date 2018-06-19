class AuthorsController < ApplicationController
	def create
		@author = Author.create(author_params)
		if @author.save
			session[:author_id] = @author.id
			redirect_to posts_path
		else
			render template: "sessions/new"
		end
	end

	private

	def author_params
		params.require(:author).permit(:name, :email, :password, :password_confirmation)
	end
end