require 'pry'

class Student
    def initialize(name,age,favorite_tech)
        @name = name
        @age = age
        @favorite_tech = favorite_tech
    end
    
    #Getter
    def name
        @name
    end
    def age
        @age
    end
    def favorite_tech
        @favorite_tech
    end
    
    #Setter
    def name=(new_name)
        @name = new_name
    end
    def age=(new_age)
        @age = new_age
    end
    def favorite_tech=(new_tech)
        @favorite_tech = new_tech
    end
    
end #Student

binding.pry