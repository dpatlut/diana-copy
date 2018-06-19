/*
 * Cruise Control
 * 
 * Define the Question and Game constructor functions properly.
 * Create question objects using the given data and constructor function.
 * Create a game object using the Game constructor function.
 *
 *
 * In the object-oriented world, there are nouns (objects) 
 * that have adjectives (properties) and verbs (methods).
 * There is no data and there are no functions.
 * In other words, remember that in a Object-oriented style,
 * methods on objects should be used in lieu of self-contained functions whenever possible.
 * The same applies to object properties which should be used to access data.
 *
 * MVP:
 * The user should see a a board of question cards.
 * The user should see a different question on each card.
 * The user should be able to input their answer for each card.
 * The user should be rewarded with a matching image of Tom cruise,
 * if they answer correctly.
 * The user should be notified if they answer incorrectly.
 * 
 * Bonuses:
 * The user should have a 60 second time limit.
 * The user should see an opening screen that prompts them to click to begin.
 * The user should see a picture of a sad Tom Cruise if they lose.
 * The user should see a beautifully styled game.
 * Use the animate.css library to add animations to the game.
 */


var questions = [
	"What movie was Tom Cruise a pilot in?",
	"What movie was Tom Cruise a Race Car Drive in?",
	"What movie was Tom Cruise a Vampire in?",
	"What movie was Tom Cruise a Samurai in?",
	"What movie was Tom Cruise a Bartender in?",
	"What Tom Cruise movie is the line 'you can't handle the truth'",
	"What movie did Tom Cruise play a high school football player?",
	"What movie did Tom Cruise play a Sports Agent?",
	"What movie did Tom Cruise play a Greaser?"
];
var answers   = [
	"Top Gun",
	"Days of Thunder",
	"Interview With the Vampire",
	"The Last Samurai",
	"Cocktail",
	"A Few Good Men",
	"Risky Business",
	"Jerry Macguire",
	"The Outsiders"
];
var imgUrls   = [
	"http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/aww/2015/07/03/1435896771258_TOMCRUISETOPGUN1980S.jpg",
	"https://cdn3.thedissolve.com/features/381/fullwidth.e6ae7694.jpg",
	"http://filmfestivalflix.com/wp-content/uploads/2013/08/tclestat.jpg",
	"http://spinoff.comicbookresources.com/wp-content/uploads/2014/11/tom-cruise-the-last-samurai-.jpg",
	"http://www2.pictures.zimbio.com/mp/aKSAGHfATQ_x.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/e9/b5/63/e9b563832c24b28901627b807d605c5d.jpg",
	"http://www.heavyeggs.com/uploads/files/2010/October/15/a95/866/99a57b4b8d4692b9e2563c18328b0120eb/1287168242t-risky-business_l.jpg",
	"http://www.film.com/wp-content/uploads/2012/06/19-jerry-maguire.jpg",
	"http://data3.whicdn.com/images/47853617/thumb.png"
];

// Fill tomQuestions with question objects
var tomQuestions = [];

// Use this constructor function to create question objects
var Question = function Question(question, answer, imgUrl){

};

/* The Game constructor expects an Array of Question objects
 * See below to see how it is used and make sure that game objects
 * have the required functionality. See the main prompt for more information.
 */
var Game = function Game(questions){

};







var game = new Game(tomQuestions);
game.render();
