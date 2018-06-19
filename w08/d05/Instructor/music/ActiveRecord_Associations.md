
# Modeling Relationships in ActiveRecord

### Objectives
*After this lesson, students will be able to:*

- Build models with has_many, belongs_to, and has_many :through

### Preparation
*Before this lesson, students should already be able to:*

- Create models that inherit from ActiveRecord
- Describe a relational database

## Why are relationships important? Intro - 15 mins

A hefty part of designing a relational database is dividing the data elements into related tables. Once you're ready to start working with the data, you rely on relationships between the tables to pull the data together in meaningful ways. For instance, order information is useless unless you know which customer placed a particular order.

By now, you probably realize that you don't store customer and order information in the same table. Instead, you store order and customer data in two related tables and then use a relationship between the two tables to view each order and its corresponding customer information at the same time. If normalized tables are a relational database's foundation, then relationships are the cornerstone.

####Relationship types

An association, in this context, is a connection between two ActiveRecord models. Associations are implemented using macro-style calls, so that you can declaratively add features to your models. For example, by declaring that one model belongs_to another, you instruct your application to maintain Primary Key-Foreign Key information between instances of the two models, and you also get a number of utility methods added to your model.

- ```has_many``` - Indicates a one-to-many connection with another model. This association indicates that each instance of the model has zero or more instances of another mode.
- ```belongs_to``` - A belongs_to association sets up a one-to-one connection with another model, such that each instance of the declaring model "belongs to" one instance of the other model.
- ```has_and_belongs_to_many``` - A has_and_belongs_to_many association creates a direct many-to-many connection with another model, with no intervening model.
- ```has_many :through``` - A has_many :through association is often used to set up a many-to-many connection with another model. This association indicates that the declaring model can be matched with zero or more instances of another model by proceeding through a third model.

Let's explain and create these relationships in the context of our application.

## Describe the app and database we're building - Demo - 5 mins

#### The database for this association

The purpose of this application is to show the different kinds of relations between models with ActiveRecord. We will use Tunr app again.  Remember our models:

* A model Artist
* A model Album
* A model Genre

The relationships will be:

* Artist has many albums
* Artist has many genres through albums
* Album belongs to an artist
* Album has many genres
* Genre has many albums
* Genre has many artists through albums

Take a look at your [starter_code](/starter_code). For our purposes, we're going to keep the empty models and the migrations.


## Create Associations - Code Along - 30 mins

We create relationships with ActiveRecord by adding functions to the models to define what other tables the model is related to. Then, ActiveRecord will take care of of almost everything - by creating relationships in your database - and then populating the foreign_keys columns in the appropriate tables. It will also provide a bunch of useful, dynamic methods for every instance of the model, making it really easy to retrieve data from other models associated with this instance.

**Build this:**

1. Create the schema for artists and albums

2. Seed the tables with the following starter data:
```ruby
tp=Artist.create({name:"Tom Petty", nationality:"American"})
jl=Artist.create({name:"John Lennon", nationality:"English"})

Album.create({title:"Greatist Hits", price:"9.99", artist_id:tp.id})
Album.create({title:"Mojo", price:"8.99", artist_id:tp.id})
Album.create({title:"Hypnotic Eye", price:"9.99", artist_id:tp.id})
Album.create({title:"Imagine", price:"8.99", artist_id:jl.id})
Album.create({title:"Double Fantasy", price:"9.99", artist_id:jl.id})
```
  - Display info in pry:
  ```ruby
  Artist.all
  Album.all
  Artist.first
  Artist.find_by({name:"Tom Petty"})
  ```

#### Create a has_many - belongs_to

An album will always belong_to an artist. Therefore, if we create two albums and assign them to the same artist, we will be able to list these two albums for this specific artist.

Let's open the model Artist and the model Album.

To retrieve all the albums related to a specific artist, we can use the method artist_id in the table albums:

```ruby
artist = Artist.find(1)
albums_for_artist = Album.where(artist_id: artist)
```


Then we can apply the inverse logic to retrieve the artist corresponding to an album

```ruby
album = Album.find(1)
artist_for_album = Artist.find(album.artist_id)
```

This logic works, but it's a lot of code, active record will allow us to do all these actions in one line, but first, we need to tell ActiveRecord what the relations are.

Take a look back at the database structure: the albums table has a column artist_id.  Based on this column name and the code we will add to the models, ActiveRecord will know that this column contains a foreign key and use it behind the scene to link artists and albums.

Update the models like this:

```ruby
class Album < ActiveRecord::Base
  belongs_to :artist
end

class Artist < ActiveRecord::Base
  has_many :albums
end
```

That's all you need to do! If the database structure follows the ActiveRecord conventions, a foreign_key in a table has a name corresponding to the resource that the foreign key refers to plus `_id` (`book_id`, `user_id`, `contract_id`) and the code in the models identifying the `has_many` model and the `belongs_to` model (the `belongs_to` model is ALWAYS the one hosting the foreign key).

Now, to get the albums related to an artist record, just type:

```ruby
Artist.find(1).albums   #You get an array... (An Artist *has many* albums)
```

To find the artist related to an album:

```ruby
Album.find(1).artist   #You get an instance of an artist! 
```

That's it! Given that the relationship between the Artist and Album class is a ```has_many```, ActiveRecord will always return an array, even if there is no corresponding result. On the other hand, when we ask for an artist related to an album, the result will always be an artist instance, and you'll **notice that the pluralization of the methods correspond with this logic too (`albums`, `artist`)**.

Don't try to overthink it. As a developer, focus on how to use ActiveRecord.

Try:
```ruby
Artists.destroy_all
```
followed by
```ruby
Album.all
```
**What ahppened?!**



```ruby
    Artist.first.albums.create({title:"Southern Accents", price:"7.50"})
```

Now, let's add a seeds.rb file to make things easy.



#### Create a ```has_many through```

What about Genre? Remember, out relationships were:
* Artist has many albums
* Artist has many genres through albums
* Album belongs to an artist
* Album has many genres
* Genre has many albums
* Genre has many artists through albums

A ```has_and_belongs_to_many``` association creates a direct many-to-many connection with another model, with no intervening model. For example, if your application includes cars and parts, with each car having many parts and each part appearing in many cars, you could declare the models this way:

```ruby
class Car < ActiveRecord::Base
  has_and_belongs_to_many :parts
end

class Part < ActiveRecord::Base
  has_and_belongs_to_many :cars
end
```

We said when we listed the associations that a genre would have many albums and an album can also have many genres. We will, therefore, need to create a join table to link the resource album and the resource genre.

####Why a join table?

If you create a ```has_and_belongs_to_many``` association, you need to explicitly create a joining table. Why? Join tables bridge the relationship between two resources that both have many of the other. If one resource ```has_many``` and the other ```belongs_to```, you don’t need a join table, because it can be mapped out in two tables no problem. When they both has_many of each other, you need a third table because it creates a third dimension.

> Note: It could help to draw creating a join table between parts and cars or albums, genres on the board.

To create a join table for albums and genres, we need to add another two tables in the database: 

```sql
CREATE TABLE genres(
  id serial PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE albumgenres(
  id serial PRIMARY KEY,
    album_id INTEGER,
    genre_id INTEGER
);
```

Now, we will need to update the models:

**albumgenres.rb**
```ruby
class Albumgenre < ActiveRecord::Base
  belongs_to :genre
  belongs_to :album
end
```

**album.rb**
```ruby
class Album < ActiveRecord::Base
  belongs_to :artist
  has_many :albumgenres
  has_many :genres, through: :albumgenres
end
```
**genre.rb**
```ruby
class Genre < ActiveRecord::Base
  has_many :albumgenres
  has_many :albums, through: :albumgenres
end
```

Now in the terminal, you can check that everything is set properly:

```ruby
 Album.first.genres
 Genre.first.albums
```

```
Album.first.genres.create({name:"horror"})

```
Check out the Series of SQL statments!

The code above shows that an album can be associated with many genres and vice-versa: a genre can be associated to many albums.

##Independent Practice - Add another association 

We've added a few associations to our app, however, we still need to add an relationship between Artist and Genre. This kind of relationship is called `has_many :through` .

Try to implement this association so that we can list all the genres for an artist and all the artists for a genre like this:

```ruby

artist = Artist.first
genre = Genre.first

# you should be able to call these methods
artist.genres
genre.artists
```
 
 
