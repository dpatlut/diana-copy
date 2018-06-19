require 'pry'

class Car

	def initialize(wheels, engine, color, make, year)
		@on = false
		@wheels = wheels
		@engine = engine
		@color = color
		@make = make
		@year = year
		@fuel = 0
	end

#Getter Methods
	def color
		@color
	end

	def wheels
		@wheels
	end

	def engine
		@engine
	end

	def make
		@make
	end

	def year
		@year
	end

	def on
		@on
	end

	def fuel
		@fuel
	end

#Setter Methods

	def color=(new_color)
		@color = new_color
	end

	def engine=(new_engine)
		@engine = new_engine
	end

	def fuel=(new_fuel)
		@fuel = new_fuel
	end

	#other instance methods

	def switch
		@on = !@on
	end

	def fill_tank
		@fuel = 100
	end

	def drive
		if @on && @fuel > 0
			puts "vroom vroom"
			@fuel -= 10
		else
			puts "you should probably get some gas or try turning on the car"
		end
	end


end #Car

c1 = Car.new(4, "1000hp", "Red", "Bugatti", 2007)
c2 = Car.new(4, "blah", "Black", "Mustang", 1966)
c1.color="blue"
binding.pry