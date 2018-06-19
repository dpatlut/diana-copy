var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('HR.db');

//Output the contents of the employee table
db.all("SELECT * FROM employee", function(err, table){
	if (err) throw err;
	else {
		console.log("-------------EMPLOYEE TABLE----------------");
		console.log(table);
	}
});

//Output the contents of the department table
db.all("SELECT * FROM department", function(err, table){
	if (err) throw err;
	else{
		console.log("-------------DEPARTMENT TABLE----------------");
	 	console.log(table);
	 }
});

//Output specific content from the employee table
db.all("SELECT name, salary, salary/12 AS monthly FROM employee ORDER BY salary desc", function(err, table){
	if (err) throw err;
	else {
		console.log("-------------EMPLOYEE SALARY----------------");
		console.log(table);
	}
});

//output the intersection of employee & department based on the foreign key relationship
db.all("SELECT employee.name AS emp_name, department.name AS dept_name FROM employee INNER JOIN department ON department.employee_id = employee.id", function(err, table){
	if (err) throw err;
	else{
		console.log("------------INNER JOIN---------------");
	 	console.log(table);
	 }
});