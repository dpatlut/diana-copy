# Make a Grocery model  

- Use a function constructor to create new grocery objects. Your model object should have an attibutes property that will store all of the object's attributes, such as 'name', 'category', etc. 

# Make a Grocery Collection

- Use a function constructor to create new grocery collection objects. Your objects should have a models array as a poperty. It should also have a url property that is passed as an argument when a new object is instantiated. 

# Define some methods on the Collections prototype. 

- Make a ``fetch`` method that when called on a collection object will retrieve all the groceries from the database and store them as model objects inside of the collection's models array. 

- Make a ``create`` method that takes a model as an argument and, when called on a collection object, will create a new record in the database. 

- Use json-server to test your methods. 
Starter data is included in the db.json file. Run ``json-server --watch db.json`` 