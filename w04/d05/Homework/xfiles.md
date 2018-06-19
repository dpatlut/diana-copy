# Weekend Exercises

## The X writeFiles

Write an application which takes the `sightings.json` file from yesterday as input and creates a new HTML file with each sighting listed. You may format the data however you like, but your HTML must contain the following information:

1. The date and time of the sighting
2. The location of the sighting
3. The shape of the UFO
4. The duration of the sighting
5. When a user clicks on a sighting, display a modal with all of that sighting's information, including the account

## Mad Libs

Write a mad libs command line game. That takes strings as arguments. The
game should:

- Have a template which is stored in an EJS file
- Take at least 6 words from the player
- If the player runs the game with `/help`, the game logs what types of
  words need to be passed through
```
$ node madlibs.js /help
> Please provide a noun, an adjective, a verb, a verb, a noun, and a color.
```

### Bonus

Make another mad libs game and store it in a separate HTML file from your
first mad lib. The user should be able to select which mad lib game they
want to play by passing it in as the first argument when running the
game. Make sure your `/help` command still works!

```
$ node madlibs.js funWithJavascript /help
> Please provide a noun, an adjective, a verb, a verb, a noun, and a color.
```

