require_relative('../lib/connection')

class Artist < ActiveRecord::Base
  has_many :albums, dependent: :destroy
  has_many :genres, through: :albums
end