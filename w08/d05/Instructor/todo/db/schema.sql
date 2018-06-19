DROP TABLE if exists items;

CREATE TABLE items(
  id serial PRIMARY KEY,
 	name VARCHAR,
 	tag VARCHAR, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);