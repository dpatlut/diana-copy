class PostsController < ApplicationController
	before_action :authenticate, except: [:index, :show, :yoda]

	# GET /posts
	def index
		if params[:author_id]
			@posts = Post.where({author_id: params[:author_id]})
		else
			@posts = Post.all
		end
	end

	def yoda
    api_key = ENV["YODA_KEY"]
    content = URI.escape(params[:post][:content])
    yoda_speak = HTTParty.get("https://yoda.p.mashape.com/yoda?sentence=#{content}",
                              headers:{
                                "X-Mashape-Key" => api_key,
                                "Accept" => "text/plain"
                              })
    @yoda_post = {title: params[:post][:title], author: params[:post][:author], image: params[:post][:image_url], content: yoda_speak}
    render :yoda
	end

	# GET /posts/new
	def new
		@post = Post.new
	end

	# POST /posts
	def create
		Post.create(post_params)
		redirect_to posts_path
	end

	# GET /posts/:id
	def show
		@post = Post.find(params[:id])
	end

	# GET /posts/:id/edit
	def edit
		@post = Post.find(params[:id])
	end

	# POST /posts
	def update
		post = Post.find(params[:id])
		post.update(post_params)
		redirect_to posts_path
	end

	# DELETE /posts/:id
	def destroy
		post = Post.find(params[:id])
		post.destroy
		redirect_to posts_path
	end

	private
	# This allows us to add all params at once. We can choose which params we want to allow for mass assignment. 
	 def post_params
    params.require(:post).permit(:title, :content, :image_url, :author_id)
  end

end