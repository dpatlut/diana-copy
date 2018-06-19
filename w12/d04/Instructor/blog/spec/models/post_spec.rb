require "rails_helper"

describe Post do

	it "should be invalid without an author" do
		post = Post.new
		expect(post).to be_invalid
	end

	it "should be invalid with blank content" do
		post = Post.new(author: "Avi")
		expect(post).to be_invalid
	end

	it "should not have content longer than 500 characters" do 
		post = Post.new(author: "Viki", content: "z" * 501)
		expect(post).to be_invalid
		post[:content] = "hello world"
		expect(post).to be_valid
	end

	it "should not allow duplicate titles to be persisted" do
		post1 = Post.create(author: "Brian", content: "hello world", title: "hello")
		expect(Post.count).to eq 1
		post2 = Post.create(author: "Maria", content: "drums", title: "hello")
		expect(post2).to be_invalid
		expect(Post.count).to eq 1
		expect(post2.errors[:title]).to eq ["has already been taken"]
	end

end