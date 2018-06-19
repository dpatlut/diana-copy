> Framing: These are looser prompts than you've seen in the past. A goal of today's work is to try and understand how to take a loose prompt and turn it into a small application. TAKE YOUR TIME. WHITEBOARD. PSEUDO CODE. THINK BEFORE YOU START PROGRAMMING.

####Real-Time Update
- Create an HTML page with a `<p>` tag and a text input.  Add an event listener to the text input box that listens for the `keyup` event and updates the `<p>` to whatever is in the text input box.

 In other words, while the user is typing into the textbox the **same** text shows up in the p tag.

  - **Hint**: research how to use a "keydown" listener

####Task List

- Create a task list. A user should be presented with a text input with an accompanying button. When the button is clicked,
the item should be added to the list.
  - **Bonus**: make it so that an item can be "deleted" from the list by being clicked on.
  - **Bonus**: make it so that when a user presses the enter button, the item is added to the list as well.




####Calculator

- Create a Calculator. A user should see three inputs: one for the operation to be performed, and two for both numbers to be operated on. The answer should be appended to the DOM.
  - **Bonus**: Get rid of the text input for the operation, and research a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"> select </a> instead.


####Hamsters

  - Create an app that has three radio buttons, labeled 1, 2 and 3. There should be a button to click somewhere. When the button is clicked, a hamster picture will be shown on the DOM, depending on the value of the radio button at the time.
    - research <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/radio">radio</a> buttons.

   **Steps:** 
   ######Part I
	1. Find 3 images of a hamster on the internet
	2. Make an HTML page with an image tag.  
	3. Add 3 radio buttons with the labels first, second, and third.
	4. Make a function that will update the source of the hamster image to be the first, second, or third image, based on the value of the radio buttons.

	######Part II
	Add a button that will call this function.

	######Part III
	Have the radio buttons call the function on click.




####Bonus: StopWatch

- Create a stopwatch. A user should be able to start, stop, and reset the watch. Don't worry about minutes, just get a counter working.
  - You will need to research the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval"> setInterval </a> for this.
  - **Bonus**: make it so that a user can 'set' the timer with a text input.
  - **Bonus**: make a timer that counts down. Something fun should happen when it hits zero.
