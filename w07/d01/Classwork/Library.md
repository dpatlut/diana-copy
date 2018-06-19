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

### Exercise: Books/Authors ERD
With a partner, draw an ERD diagram to show the relationship between `books` and `authors`.

### Exercise: Create Authors Table
First we need to create a new authors table.

An author needs:
1. a unique identifier
2. a name
3. a hometown

Then we need to add all of our authors from the last exercise.

Finally, we need to re-create our books table.  Instead of an author column, you will need an `author_id` column.  Make sure the `author_id` matches the `id` in the `authors` table.

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

Write down (in your notes, in this markdown, on your desks, etc.) the queries needed for the following data:

1. Get the hometown of the author of Farenheit 451.
2. Get the name and the hometown of the author of *The Notebook*.
3. Get all of the books by J.K. Rowling.

**Bonuses:**

1. Get all of the books by the author who was born in Bloemfontein, Orange Free State.
2. Without re-seeding eh tables, change the hometown of the author of *Harry Potter and the Sorceror's Stone* to "Yate, Gloucestershire, England".
(you will need 2 queries for this).
