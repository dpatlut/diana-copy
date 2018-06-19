CREATE TABLE books (
	id INTEGER PRIMARY KEY, 
	title TEXT, 
	author_id INTEGER, 
	genre TEXT, 
	published INTEGER,
	FOREIGN KEY(author_id) REFERENCES authors(id)
);

CREATE TABLE authors (
	id INTEGER PRIMARY KEY, 
	name TEXT, 
	hometown TEXT
);
