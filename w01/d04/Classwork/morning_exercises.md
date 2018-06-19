#Morning Exercises

###Goals

* Use while loops and control flow to solve complex problems
* Learn to break the problem down into logical steps

## Hipster Borough-meter

- Write a command line application that takes one string - one of the five boroughs of New York City - as an argument. Log a different judgement of the hipster-osity of each borough.
- If the user enters a string that is not one of the NYC boroughs, log "What even is that?"
- Bonus: Accept both capitalized and lowercase input.

#### Example:

```bash
$ node hipboro.js "manhattan"
> Ugh so 2000 and late.
```

##Lockpickers

- Write a command line application that takes 4 numbers as arguments. Use these numbers to try to unlock a lock you have preprogrammed. The lock combo should be 4 digits long. The person trying to open the lock should be told which numbers they entered are correct, and which numbers are not.
- Bonus: If they manage to crack the lock, send them a congratulatory message.
- Bonus PART DOS: If the user does NOT enter four numbers, give them an error message...

#### Example Results:

```bash
> First number right!
> Second number wrong.
> Third number wrong.
> Fourth number right!

```

```
> First number right!
> Second number right!
> Third number right!
> Fourth number right!
> UNLOCKED YOU'RE RICH!!
```

#Bonus

##Prime Numbers
- Use a while loop to loop through and print the numbers 1-100
- If a number is a prime number, print "Divide this!", as well as the number itself

####Example:
```bash
1
Divide this!
2
Divide this!
3
Divide this!
4
5
Divide this!
6
7
Divide this!
8
9
10
```