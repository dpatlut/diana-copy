class Albumgenre < ActiveRecord::Base
  belongs_to :genre
  belongs_to :album
end