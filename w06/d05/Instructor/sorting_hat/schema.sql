DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS houses;
CREATE TABLE houses (
  house_id INTEGER PRIMARY KEY autoincrement,
  name TEXT, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
PRAGMA foreign_keys = ON;
CREATE TABLE students (
  student_id INTEGER PRIMARY KEY autoincrement,
  name TEXT,
  house_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(house_id) REFERENCES houses(house_id)
);