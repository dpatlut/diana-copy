class Genre < ActiveRecord::Base
  has_many :albumgenres
  has_many :albums, through: :albumgenres
  has_many :artists, through: :albums
end