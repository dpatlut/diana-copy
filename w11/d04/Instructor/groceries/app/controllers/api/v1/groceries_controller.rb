class Api::V1::GroceriesController < ApplicationController

	def index
		groceries = Grocery.all
		render json: groceries
	end

	def create
		grocery = Grocery.create(grocery_params)
		render json: grocery
	end

	def update
		grocery = Grocery.find(params[:id])
		grocery.update(grocery_params)
		render json: grocery
	end

	def show
		grocery = Grocery.find(params[:id])
		render json: grocery
	end

	def destroy
		Grocery.find(params[:id]).destroy
		render json: 'deleted'
	end

	private

	def grocery_params
		params.permit(:name)
	end
end