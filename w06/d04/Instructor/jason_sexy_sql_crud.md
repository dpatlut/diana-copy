# Jason's Sexy SQL CRUD

## Types of Languages

* GPL - What is a GPL? GPL stands for General Purpose Language
	* JavaScript is a GPL. This is a language written to serve various applications.
* DSL - What is a DSL? DSL stands for Domain Specific Language
	* DSLs are compter languages that specialize in a particular domain
* SQL - Structured Query Language. It is a DSL because it's main purpose is to build and manage relational databases. 
	* SQL allows us to store and persist data so we can access it even after our server restarts.
	* We will be using the sqlite library to write our queries.  

## CRUD Breakdown

* CRUDDING!!!!
	* C - (Create) POST - INSERT INTO table column VALUES new values
	* R - (Read) GET - SELECT something FROM somewhere WHERE a condition is true
	* U - (Update) PUT - UPDATE table SET new value WHERE condition
	* D - (Destroy)DELETE - DELETE FROM table WHERE condition


## Lesson Breakdown

* Let's start but creating a new directory
```
mkdir tomCRUD
```
* Install sqlite3

```
brew install sqlite3
```
* Go into that directory and create a database

```
sqlite3 tomcrud.db
```
* Let's create a table for tommy

```
CREATE TABLE tomcrud (id INTEGER PRIMARY KEY, charactor TEXT, movie TEXT, year INTEGER);
```
* Commands in SQL should be written in CAPS. This is to distinguish them from the names of tables and columns.
* `tomCRUD` is the name of the table
* `id` / `character` / `movie` are the names of the columns
* `charater` and `movie` columns are specified as a type `TEXT`
* `id` is an integer but also a primary key. This ensures that it is unique. 
	* Sqlite will automatcially insert an id into rows 

* Show your schema. This will give you your create statement for this table. It is useful if you forget the format of your columns or value types.

```
.schema tomcrud

// CREATE TABLE tomcrud (id INTEGER PRIMARY KEY, charactor TEXT, movie TEXT, year INTEGER);
```
* Now let's start adding information to our table

```
INSERT INTO tomcrud (character, movie, year) VALUES ("Maverick", "Top Gun", 1986);
```
* Fill out the `C` part of CRUD on the board. 
	* This is similar to how we used "POST" 
	* C - POST - INSERT INTO

* Show them their new information!

```
SELECT * FROM tomcrud

// 1|Maverick|Top Gun|1986
```
* `*` is a wildcard that allows us to grab everything from the table `tomcrud`

* Now let's add more information to play around with. 

| character  | movie  | year |
|------------| ------ |-------|
|Cage   | Edge of Tomorrow | 2014 |
|Ethan Hunt | Mission Impossible | 1996 |
|Vincent | Jack Reacher  | 2012 |
|Vincent  | Collateral  | 2004 | 
|Joel Goodson | Risky Business| 1983 |
|Brian Flanagan| Cocktail   | 1988 |
|Steve Randle | The Outsiders| 1983 |
|Jerry Maccgiree | Jerry Maguire| 1996 |
|Lt. Daniel Kaffee| A Few Good Men| 1992 |

Run SELECT * FROM to see all the movies in the tomcrud database

* What if we want to only show one? 

```
SELECT * FROM tomcrud WHERE movie = "Collateral";

SELECT * FROM tomcrud WHERE id = 3;
``` 

* This is similar to `GET /tomcrud/:id`
* WHERE command adds conditions for you to narrow down your results. We can search by the "movie" column, by "id", and the like.

* Let's add more movies that are not accurate, some that carry the same title or character name

```
INSERT INTO tomcrud (character, movie, year) VALUES ("Reacher", "The Aviator", 2004), ("Brad Pitt", "Days of Thunder", 1990);
```
* Now lets search for these redundancies using `SELECT` and `WHERE`

```
SELECT * FROM tomcrud WHERE character ="Reacher";
```
* How about a more accurate search?

```
SELECT * FROM tomcrud WHERE character = "Reacher" AND year = 2012
```
* Now lets UPDATE our Days of Thunder

```
UPDATE tomcrud SET character="Cole Trickle" WHERE movie = "Days of Thunder";
```

* Lets Delete the Aviator movie

```
DELETE FROM tomcrud WHERE movie="The Aviator"
```
