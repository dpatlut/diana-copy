DROP TABLE if exists people;
DROP TABLE if exists cows;
DROP TABLE if exists pigs;
DROP TABLE if exists sheep;

CREATE TABLE people(
  id serial PRIMARY KEY,
    name VARCHAR,
    age INTEGER,
    sex VARCHAR,
    breed VARCHAR, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cows(
  id serial PRIMARY KEY,
    name VARCHAR,
    age INTEGER,
    sex VARCHAR,
    breed VARCHAR, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pigs(
  id serial PRIMARY KEY,
    name VARCHAR,
    age INTEGER,
    sex VARCHAR,
    breed VARCHAR, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sheep(
  id serial PRIMARY KEY,
    name VARCHAR,
    age INTEGER,
    sex VARCHAR,
    breed VARCHAR, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

