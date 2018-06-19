class Author < ActiveRecord::Base
	has_many :posts
	has_secure_password
	validates :password_confirmation, presence: true
end
