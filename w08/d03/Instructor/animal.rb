require 'pry'

class Animal

		def initialize(species)
			@multi_cellular = true
			@has_breath = true
			@species = species
		end

		def species
			@species
		end

		def has_breath
			@has_breath
		end

		def multi_cellular
			@multi_cellular
		end
	
		def breathe
			"Inhale and exhale"
		end		
end

# animal = Animal.new("Arachnid")
