require 'pry'
require_relative('animal')

class Dog < Animal

	def initialize(name, species)
		@name = name
		super(species)
	end

	def speak
		"Woof Woof"
	end
end

willy = Dog.new("Canine")
binding.pry