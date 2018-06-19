require('active_record')

ActiveRecord::Base.establish_connection({
  database: 'music.db',
  adapter: 'postgresql'
})

ActiveRecord::Base.logger = Logger.new(STDOUT)





