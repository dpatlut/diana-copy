#JSON (and a bit about data validation)

By the end of this lesson you'll be able to:

- convert robust objects to JSON strings that can be written to files (and eventually sent across networks)

- read JSON from files, then parse and manipulate that data

- understand that JSON is a 'lightweight' data format that many different languages can use to send objects to each other

- understand the limits of JSON (we can't package functions, dates, floats, etc)


## DATA 

- Data drives all modern applications. It's sent/recieved by clients, servers, and databases.

- It's easy for users to make mistakes while entering data, so it's risky to give them access to the 'raw' data - we should make them interact through an interface where we can check their inputs

- *Data validation* allows us to make sure the data we input into our program is consistent with what's expected.

- JSON allows us to store data in lightweight strings for easy manipulation

- A huge function of software is to allow users access to Create, Read, Update, and Delete data. This suite of functionality is affectionately referred to as CRUD.

### Make an application via the CL that allows a user to Create and Read data

- **Question**: Why is data so important? 

- **Prompt**: Write an application that functions as a contact list. It should store (i.e. save to a file caled "data.txt") basic information about people (first name, last name, and age) to a file. It should allow a user to add a person to the list by specifying their name and age on the command line. It should also allow a user to list everyone in the contact list. Devise your own unique format for creating and reading data.

- **Question**: How are you going to structure your data? How will you organize your information in "data.txt"? How will you distinguish between the different "parts" of a person? How will you separate different people?


```javascript
//write a simple CLI that functions as a contact list. 
//It should allow a user to store a person's first name, last name, and age. 
//It should also allow a user to list every individual in the contact list
//This data should be stored to a file called "data.txt". 
//Your application should offer positive feedback if the add was successful. 
```
```bash
  node people.js add andrew fritz 28
  thanks!

  node people.js add orville redenbacher 95
  thanks!

```


### Improve your app by adding data validation

- **Question**: What are some potential problems with the first version of this app? 

  - Users can write whatever they want. There are no 'checks'. It's risky to give users access to our 'raw' data structures. We should take advantage of our interfaces (cli for now and web forms later) to make sure the data we store is stored in a prescribed format.**

- **Activity #2**: make your app better by ensuring that both the first and last names are present, and that age is present and less than 110. Offer encouraging and informative feedback if the proper CL arguments were not supplied. 

```javascript
// add functionality to your app that makes sure first and last names are present, and that age is present and less than 110. 
```

##Common Encoding Formats 

- **Encoding**: The process you went through when you took your 'raw' data and put it into a machine-readable format.
- **Decoding**: The process you wnet through when you translated your data back into human-readable strings.

- A wise choice of encoding formats can make your programming tasks easier to accomplish.

- *Activity #3*: Share encodings via Slack

###Thought Exercise 

- **PROMPT**: I want to add functionality to my application that would allow me to search by name or age. Work with someone nearby. Think about how you would do this. Try it. 

```bash
node people.js get andrew
andrew fritz 28

node people.js get 95
orville redenbacher 95
mister smith 95

```

- Searching and sorting data is almost always a pain in the ass, often requiring the use of string methods and delimiters (more on this tomorrow)


###Popular Encoding Formats

- Three most popular ways to encode information: JSON, XML, CSV 

- **Activity #4**: Research JSON, XML, CSV. How are they the same? How are they different? List stengths/weaknesses of each.

CSV:
```CSV
  Abraham, Lincoln, 138
  George, Washington, 300
```
XML:
```XML
<People>
  <Person>
    <FirstName>Abraham</FirstName>
    <LasttName>Lincoln</LasttName>
    <Age>138</Age>
  </Person>
  <Person>
    <FirstName>George</FirstName>
    <LasttName>Washington</LasttName>
    <Age>300</Age>
  </Person>
</People>
```
JSON:
```Javascript
  [{"firstName":"Abraham",
  "lastName":"Lincoln",
  "age":"138"},
  {"firstName":"George",
  "lastName":"Washington",
  "age":"300"}]
```


##JSON Reigns Supreme

- JSON (JavaScript Object Notation) is the current data encoding standard of choice. It allows us to store complex data structures that can be interpreted by many other languages.

- JSON uses key-value pairs to organize data. 

**Useful JSON methods**

  -  ``` JSON.parse() ``` Use this method to convert the string version of the data into a JavaScript object. This makes it super easy to:
      -  loop through multiple objects
      -  ask for specific components of an object (via key/value pairs)
  
  -  ``` JSON.stringify() ``` Use this method to convert a JSON object into string format. This makes it possible to save your data in a file.

- We do: JSON Fruit example


- **Activity #5**: Rewrite your app using JSON. Add functionality to: 
    - search for people by name or age
  
    ```bash
    node people.js get george
    George Washington 300
    
    node people.js get 5
    Mary Olsen 5
    Kate Olsen 5
    
    ```
    - search for the oldest person in the list
    ```bash
    node people.js oldest 
    George Washington 300
    ```
    



