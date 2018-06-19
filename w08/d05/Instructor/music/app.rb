#require('sinatra')

require_relative('models/artist')
require_relative('models/album')
require_relative('models/genre')
require_relative('models/albumgenre')


require_relative('db/seeds')


  Artist.first.albums.create({title:"Southern Accents", price:"7.50"})

  artist_list = Artist.all
  album_list = Artist.find(artist_list.first).albums
  genres_list1 = Genre.all
  puts "**************************"
  puts genres_list1.inspect
  

require("pry")

binding.pry