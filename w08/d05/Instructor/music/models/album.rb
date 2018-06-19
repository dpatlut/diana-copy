
class Album < ActiveRecord::Base
  belongs_to :artist
  has_many :albumgenres
  has_many :genres, through: :albumgenres
end