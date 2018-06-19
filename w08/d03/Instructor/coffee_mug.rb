require "pry"

class CoffeeMug

 def initialize(color)
   @color = color
   @level = 0
 end

 #Getter methods
 def color
   @color
 end

 def level
  @level
 end

 #Setter methods
 def color=(new_color)
   @color = new_color
 end

 def level=(new_level)
   @level = new_level
 end

 #Instance methods
 def drink
   if @level > 0
     @level -= 1
   else
     puts "nothing to drink"
   end
 end

 def refill
   @level = 10
 end

end

monsters_inc = CoffeeMug.new('brown')
binding.pry