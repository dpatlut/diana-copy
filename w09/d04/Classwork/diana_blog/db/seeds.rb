# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.create({name: "Maria", email: "m@m.com"})
Post.create({title: "First Post", content: "This is Great", image_url:"http://cdn.1xrun.com/images/uploads/3_immer.jpg", author_id: 1 })