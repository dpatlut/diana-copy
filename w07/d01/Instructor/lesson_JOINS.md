# How to Combine Data from Different Tables

### Objectives

You will be able to:
 1. Normalize a table into multiple tables to reduce duplication of data.
 2. Use SQL joins to collect related data from multiple tables.


#### Warm-Up

 - Check out this picture from last week:
 ![](https://camo.githubusercontent.com/cfb9ca77c6840a46cc0e7aa9e02cca99ba52c71a/687474703a2f2f646f63732e6f7261636c652e636f6d2f68746d6c2f4231333931355f30342f696d616765732f7461626c65732e676966)
 
- Draw the ERD for this collection of tables. Identify attribute names, data types, and primary/foreign keys.
- What are some of the advantages of organizing our tables this way?

##Normalization

The data in the above database had been *nomalized*.

**Normalization** is the process of getting rid of redundent information from a database. This usually involves breaking your data into smaller tables where each table has a very specific and well-defined purpose. 

Part of data normalization is ensuring data *integrity*. This usually means that there should be a formal relationship between tables that depend upon one anther. **Foreign keys** and **primary keys** help enforce relational integrity. 

   - Strengths:
    - Stronger overall database organization
    - Reduction of redundant data
    - Data consistency within the database i.e. data is always represented the same way

   - Trade-Offs:
    - Heavier CPU and memory requirements 

### You can combine data from multiple tables by performing a ```Join```

**Activity**: Use a schema and seed file to generate a database called 'HR.db' that contains both of the following tables (don't forget to include a unique id for each entry):

  - **department**:
  
  |dept|employee_id|
  |-----|------|
  |operations|1|
  |operations|2|
  |marketing|3|
  |engineering|4|
  |sales|5|
  |sales|6|

  - **employee**:
  
  |name|age|salary|state|
  |-----|------|------|------|
  |Ted|37| 65000 | VA |
  |Sally|30| 55000 | VA |
  |Sam|27| 85000 |NY |
  |Yu|25| 55000 |CA |
  |Eddie|25| 35000 |NY |
  |Carly|26| 45000 |CA |


```sql

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
	id INTEGER PRIMARY KEY, 
	name TEXT, 
	age INTEGER,
	salary DECIMAL,
	state TEXT
);

CREATE TABLE department (
	id INTEGER PRIMARY KEY, 
	dept TEXT, 
	employee_id INTEGER,
	FOREIGN KEY(employee_id) REFERENCES employee(id)
);

```
and

```sql
INSERT INTO employee(name, age, salary, state) VALUES ('Ted', 37, 65000, 'VA');
INSERT INTO employee(name, age, salary, state) VALUES ('Sally', 30, 55000, 'VA');
INSERT INTO employee(name, age, salary, state) VALUES ('Sam', 27, 85000,'VA');
INSERT INTO employee(name, age, salary, state) VALUES ('Yu', 25, 55000,'CA');
INSERT INTO employee(name, age, salary, state) VALUES ('Eddie', 25, 35000,'CA');
INSERT INTO employee(name, age, salary, state) VALUES ('Carly', 26, 45000,'CA');


INSERT INTO department(dept, employee_id) VALUES ('operations', 6);
INSERT INTO department(dept, employee_id) VALUES ('operations', 5);
INSERT INTO department(dept, employee_id) VALUES ('marketing', 4);
INSERT INTO department(dept, employee_id) VALUES ('engineering', 3);
INSERT INTO department(dept, employee_id) VALUES ('sales', 2);
INSERT INTO department(dept, employee_id) VALUES ('sales', 1);

```

### The ```ORDER BY``` clause

How would you form this table?

|name|salary|monthly|
|-----|------|------|
|Eddie|35000| 2916 |
|Carly|45000| 3750 |
|Sally|55000| 4583 |
|Yu|55000| 4583 |
|Ted|65000| 5416 |
|Sam|85000| 7083 |

The ```ORDER BY``` clause gives you a way of ordering your results

```sql
db.all('SELECT name, salary, salary/12 AS monthly FROM employee ORDER BY monthly', function(err, table){
	if(err) throw err;
	else{
		console.log("--------Table Salary---------");
		console.log(table);
	}
});
```

### Combining Data from multiple tables

Combining data from multiple tables is actually pretty easy: 

```sql
db.all('SELECT employee.name, department.dept FROM department, employee', function(err, row){
	if(err) throw err;
	else{
		console.log("--------Cartesian Product---------");
		console.log(row);
	} 
});

```

Each row of the first table is combined with each row of the second table (a 'Cartesian Product'... like the multiplication table). This way of combining tables is actually not that useful.

What if we only want the intersection of certain rows per employee? For instance, how could we print out a table that looks like this:

| name | department |
| ----- | ----- |
| Ted | sales |
| Sally | sales |
| Sam | engineering |
| Carly | opeerations |
| Eddie | operations |
| Yu | marketing |

```sql
db.all('SELECT employee.name, department.dept FROM department, employee WHERE department.employee_id = employee.id', function(err, row){
			if(err) throw err;
			else{
				console.log("--------Combine with WHERE Clause---------");
				console.log(row);
			} 
});
```

### ```JOIN``` your Tables

**Pro Tip**: There are built-in operations that also perform these actions! 

The ```JOIN``` operation describes the process of forming a new table from multiple other tables. There are [several different](https://o5k4r.files.wordpress.com/2014/02/joins.jpg) built-in ```JOIN``` operations, but we'll focus on one: ```INNER JOIN```

But first, the ```JOIN``` operation that would prodcue the cartesian product is called the ```CROSS JOIN```:
```sql
db.all('SELECT employee.name, department.dept  FROM department CROSS JOIN employee', function(err, row){
			if(err) throw err;
			else{
				console.log("--------CROSS JOIN---------");
				console.log(row);
			} 
});

```

#### The ```INNER JOIN``` 
By far the most useful ```JOIN```, ```INNER JOIN``` makes forming tables via primary keys and foreign keys super easy!

Try to make this table again:

|name|department|
|-----|------|
|Ted|operations|
|Sally|operations|
|Sam|marketing|
|Yu|engineering|
|Eddie|sales|
|Carly|sales|


```sql
db.all('SELECT employee.name, department.dept FROM department INNER JOIN employee ON department.employee_id = employee.id', function(err, row){
			if(err) throw err;
			else{
				console.log("--------INNER JOIN---------");
				console.log(row);
			} 
});

```


#### What happens when you try to combine tables that contain the same column name?
```sql
db.all('SELECT employee.name AS employeeName, department.name AS departmentName  FROM department INNER JOIN employee ON department.employee_id = employee.id', function(err, row){
			if(err) throw err;
			else{
				console.log("--------INNER JOIN---------");
				console.log(row);
			} 
});
```

### CW Activity
The Library Exercise


