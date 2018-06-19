PRAGMA FOREIGN_KEYS = ON;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS employee;

CREATE TABLE employee(
	id INTEGER PRIMARY KEY,
	name TEXT,
	age INTEGER,
	salary INTEGER,
	state TEXT
);

CREATE TABLE department(
	id INTEGER PRIMARY KEY,
	name TEXT,
	employee_id INTEGER,
	FOREIGN KEY(employee_id) REFERENCES employee(id)
);