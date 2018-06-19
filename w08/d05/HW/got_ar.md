# Game of Active Records

* Mr. Martin needs help to continue writing his book series. Unfortunately one of the side effects of writing 27,328 pages of fantasy novels is not being able to follow every single detail. Lets build an app that will help him keep track of the multiple characters and the houses they belong to. 

* We provided you a seed file with two houses and two characters. Make sure to create your directory structure to the model we covered Thursday and Friday. It may look similar to:

```
root
	app.rb
	db
	models
	lib
	views
```
#### Houses / Characters

***Here are some characters and their houses, feel free to add more if you'd like***

* Jon - Stark
* Sansa - Stark
* Jaime - Lannister
* Renly - Baratheon
* Cersei - Stark
* Roose - Bolton
* Ramsay - Bolton
* Margery - Tyrell
* Bran - Stark
* Rhaegar - Targaryen
* Dany - Targaryen
* Robb - Stark
* Oberyn - Martell
* Loras - Tyrell
* Viserys - Targaryen
* Mormont - Castle Black


#### User Stories

***Users Should Be Able To***

1. See a list of all the houses
2. See a list of all the characters
3. Add a new character to a house
4. Add a new house
5. Move characters between houses
6. Delete a character
7. Delete a house
	8. If a house is deleted destroy all characters within
	
#### Requirements

* Active Record
	* belongs_to
	* has_many
* Postgres
	* House Table
	* Character Table
* erb files
	* Multiple files such as index, show, erb
* RESTful routes

#### Bonus

* Use "many to many" in active record for characters that belong to many houses
	* Sansa belongs to stark, lannister, bolton
	* Arya belongs to stark, Many Faced God
	* Jon belongs to stark, Castle Black	
	