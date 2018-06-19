class Post < ActiveRecord::Base

	validates :author, presence: true
	validates :content, presence: true, length: {maximum: 500}
	validates :title, uniqueness: true

end
