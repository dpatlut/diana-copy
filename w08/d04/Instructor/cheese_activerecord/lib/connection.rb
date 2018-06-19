require 'active_record'

# First we require ActiveRecord. Then we establish the connection to our database. This method takes a Hash with 2 keys.

# The adapter is postgresql (which is the type of our database). The database itself is called "cheese.db".

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :database => "cheese.db"
})

# The last line sets up our logger, which isn't required, but generally good to have. ActiveRecord will log all the SQL statements it runs under the hood.

ActiveRecord::Base.logger = Logger.new(STDOUT)