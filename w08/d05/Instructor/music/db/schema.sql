DROP TABLE albums;
DROP TABLE genres;
DROP TABLE artists;
DROP TABLE albumgenres;


CREATE TABLE albums(
  id serial PRIMARY KEY,
    title VARCHAR,
    price VARCHAR,
    artist_id INTEGER, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE albumgenres(
  id serial PRIMARY KEY,
    album_id INTEGER,
    genre_id INTEGER
);

CREATE TABLE artists(
  id serial PRIMARY KEY,
  name VARCHAR,
  nationality VARCHAR
);

CREATE TABLE genres(
  id serial PRIMARY KEY,
    name VARCHAR
);
