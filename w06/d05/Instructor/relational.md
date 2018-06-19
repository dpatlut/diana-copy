# Relational Databases/Foreign Keys

## Learning Objectives

Students will be able to...

1. ...explain one-to-one and one-to-many relationships in the context of SQL
2. ...use foreign keys to set up relationships in SQLite
3. ...explain the use-cases for foreign keys and one-to-one
4. ...explain the use-cases for foreign keys and one-to-many

## Part One - One-to-One/One-to-Many
***15 minutes***

* Instructor: Talking
* Students: Listening, Laptops Shut

In SQL, a one-to-one relationship means that a row in a table can only
relate to one other row in another table at a time. In other words, if I
have a table of people, and a table of passports, each person can only
have one passport. The reverse is also true, each passport can only have
one person. What are some other examples you can think of?

* A key has one door
* A nut has one bolt
* A person has one nose
* A dog has one day

Draw ERD for people and passports.

Ask class which table belongs to which table (who is the parent? who is
the child?)

We can also establish a one-to-many relationship. This means that a row
in a table can relate to multiple rows in another table. In other words,
if Leno's garage has many cars, the cars have one garage.

* A king can have many subjects
* A person can have many legs
* A cat has many lives

Draw ERD for Leno's garage and cars

Ask class which table belongs to which table (who is the parent? who is
the child?)

## Part Two - Foreign Keys
***10 minutes***

* Instructor: Talking
* Students: Listening, Laptops Shut

In SQL, a foreign key is given to a child element in order to reference
its parent. In the case of the people/passport example, the passport
will get the foreign key. Let's go back to the examples and state which
table gets a foreign key. Keep in mind, the foreign key is just another
column.

## Part Three - Write some SQL
***25 minutes***

* Instructor: Coding
* Students: Following Along

Open up a .sql file and write out the two tables

```sql
CREATE TABLE garages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  owner TEXT
);

CREATE TABLE cars (
  car_id INTEGER PRIMARY KEY AUTOINCREMENT,
  garage_id INTEGER,
  make TEXT,
  model TEXT,
  year INTEGER,
  FOREIGN KEY(garage_id) REFERENCES garages(id)
);
```

And add the following garage to our new table

```sql
INSERT INTO garages (owner) VALUES ('Leno');
```

Now we're going to grab the garage's id

```sql
SELECT * FROM garages;
```

And finally add in the cars

```sql
INSERT INTO cars (garage_id, make, model, year) VALUES (1, 'Lamborghini', 'Countach', 1986);
INSERT INTO cars (garage_id, make, model, year) VALUES (1, 'Citroen', 'SM', 1970);
INSERT INTO cars (garage_id, make, model, year) VALUES (1, 'Mazda', 'Cosmo', 1970);
INSERT INTO cars (garage_id, make, model, year) VALUES (1, 'Jaguar', 'E-Type', 1963);
```

Try dropping the garages table. Notice that we get a FOREIGN KEY
constraint error. SQLite stops us from deleting any parents that are
depended on by a parent's children. Also, try deleting a single garage.
Same error.
