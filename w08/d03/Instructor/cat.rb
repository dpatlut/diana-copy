require 'pry'
require_relative('animal')

class Cat < Animal

	@@cats = []

	def initialize(legs, lives, coat, breed, name, species)
		@likes_lasagna = true
		@legs = legs
		@lives = lives
		@coat = coat
		@breed = breed
		@name = name
		super(species)
	end

	#Getters
		def likes_lasagna
			@likes_lasagna
		end
		def legs
			@legs
		end
		def lives
			@lives
		end
		def coat
			@coat
		end
		def breed
			@breed
		end
		def name
			@name
		end

		def self.get_cats
			@@cats
		end
	
	#Setters
		def legs=(new_legs)
			@legs = new_legs
		end
		def lives=(new_lives)
			@lives = new_lives
		end
		def coat=(new_coat)
			@coat= new_coat
		end
		def name=(new_name)
			@name = new_name
		end

	# instance methods

	def register
		@@cats.push(self)
	end

	def alive?
		# predicate method
		if @lives > 0
			true
		else
			false
		end
	end

	def kill!
		# self. similar to this
		if self.alive?
			@lives -= 1
		else
			puts "he gone"
		end
	end

	def speak
		"Meow"
	end

	def self.get_cat_name
		@@cats.each do |cat|
			puts cat.name
		end
	end

end #end Cat

# sherman = Cat.new('Feline')
garfield = Cat.new(3, 7, "orange", "American Shorthair", "Garfield", "Feline")
# all_the_cats = Cat.get_cats

binding.pry