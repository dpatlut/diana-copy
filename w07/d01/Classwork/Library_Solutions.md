# SQL Part II
### Objectives: 
You will be able to:  
1. Normalize a table into multiple tables to reduce duplication of data.  
2. Use SQL joins to collect related data from multiple tables.  

### Exercise: Library

Using a schema file, create a database called `library.db` and a table called `books`.

A book needs:  
1. a unique identifier  
2. a title  
3. an author  
4. a genre  
5. a year published  

Using a seeds file, add the following books to the books table:

|title|author|genre|published|
|-----|------|-----|---------|
|*The Lord of the Rings: The Fellowship of the Ring*| J.R.R. Tolkien | fantasy | 1954
|*The Lord of the Rings: The Two Towers*| J.R.R. Tolkien | fantasy | 1954|
|*Harry Potter and the Sorceror's Stone*| J.K. Rowling |fantasy| 1997|
|*Harry Potter and the Chamber of Secrets*|J.K. Rowling |fantasy| 1998|
|*The Time Machine*| H.G. Wells | science fiction| 1895|
|*Fahrenheit 451*| Ray Bradbury | science fiction |1953|
|*The Notebook*| Nicholas Sparks | romance | 1996 |
|*Twilight*| Stephanie Meyer | romance | 1996|

---

So now that we have this, how would we go about adding a hometown to authors?

`ALTER TABLE books ADD COLUMN author_hometown TEXT;` will add a column to the `books` table called `author_hometown` with a type of `TEXT`.

But this seems kind of weird.  `author_hometown` has NOTHING to do with books!

To solve this problem, we first need to figure out the relationship between books and authors.

---

(Show an ERD between books and a shopping cart in a store)

### Exercise: Books/Authors ERD
With a partner, draw an ERD diagram to show the relationship between `books` and `authors`.

---
The relationship between books and authors is that books belong to one author and an author has many books.

After we identify this relationship, we can begin normalizing the database.

### Exercise: Create Authors Table
First we need to create a new authors table.

An author needs:
1. a unique identifier
2. a name
3. a hometown

Then we need to add all of our authors from the last exercise.

Finally, we need to re-create our books table.  Instead of an author column, you will need an `author_id` column.  Make sure the `author_id` matches the `id` in the `authors` table.

---

Normalization refactors tables with "redundant data" (like our duplicate authors) into smaller tables.

So we've reduced the amount of duplicate data, but how can we see all of the authors for our books?

This is called a `JOIN`.

You can run `SELECT books.title, authors.name FROM books INNER JOIN authors ON books.author_id = authors.id;`

Here we are specifying which columns we want, and which tables they are from.  If the columns are unique between the two tables (for example, `books` has a `title` column and `authors` does not), then the table name is optional, but it's good practice to specify which tables the columns are coming from.

We are saying "Give me the title from the books table, and the name from the authors table." Then we specify which tables we want and what we are joining them on.  We want to join where the `author_id` on `books` equals the `id` from the `authors` table.

So if our data is correct, we will see only the title of the book and the name of the author. But this information is coming from separate tables.

Next we have to update each hometown.

Update the `authors` table to reflect the following hometowns:

|author|hometown|
|------|--------|
|J.R.R. Tolkien|Bloemfontein, Orange Free State|
|J.K. Rowling|Yate, England|
|H.G. Wells|Bromley, England|
|Ray Bradbury|Waukegan, IL|
|Nicholas Sparks|Omaha, NE|
|Stephanie Meyer|Hartford, CT|

### Exercise: Hometowns

After this, write down (in your notes, in this markdown, on your desks, etc.) the queries needed for the following data:

1. Get the hometown of the author of Farenheit 451.
2. Get the name and the hometown of the author of *The Notebook*.
3. Get all of the books by J.K. Rowling.

**Bonuses:**
1. Get all of the books by the author who was born in Bloemfontein, Orange Free State.
2. Change the hometown of the author of *Harry Potter and the Sorceror's Stone* to "Yate, Gloucestershire, England".
(you will need 2 queries for this).


`SELECT authors.hometown FROM authors INNER JOIN books ON authors.id = books.author_id WHERE books.title = "Fahrenheit 451";`

`SELECT authors.name, authors.hometown FROM authors INNER JOIN books ON authors.id = books.author_id WHERE books.title = "The Notebook";`

`SELECT books.title FROM books INNER JOIN authors ON books.author_id = authors.id WHERE authors.name = "J.K. Rowling";`

`SELECT books.title FROM books INNER JOIN authors ON books.author_id = authors.id WHERE authors.hometown = "Bloemfontein, Orange Free State";`



