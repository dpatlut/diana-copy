#DOM Events
![finite state machine](https://i-msdn.sec.s-msft.com/dynimg/IC171571.gif)


**Purpose**: This lesson will let you make your web application respond dynamically to user input. 

**Objectives**:
  - Connect HTML, CSS, and JavaScript in an interactive way
  - Apply multiple types of event listeners to multiple types of elements

**Bonus**: optional Javascript Review Session: Friday 3 - 5pm with Paul... cover JavaScript basics/assessment topics


##Event-driven Programming
 - the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads https://en.wikipedia.org/wiki/Event-driven_programming
 - widely used in graphical user interfaces
  

##Waiting for Events - Event-driven Programming is Asynchronous 
JavaScript is a very useful language for creating web-based applications, most which ask for (and respond to) user input. This style of programming is known as *Event-driven Programming*. 

To accomodate this, web applications tyically listen for events. When an event is *fired* applications automatically trigger procedures (callbacks) to respond to that user input.

Applications cannot rely upon events firing in order (*or, that the evenr will fire at all!*)


##Adding an Event Listener to a DOM Element

 - Use the ```addEventListener``` method!
 
  ```javascript
    document.getElementById("intro").addEventListener("click", displayMessage);
    
    function displayMessage(event) {
    	console.log("A "+event.type+" event just ocurred!")
    	document.querySelector("p.message").innerHTML = "Whoah! DOM events actually work!";
    }
  ```
  
 - You can add and event listener to any HTML DOM object:
 
      - HTML elements
      - the HTML document
      - the window object
      - xmlHttpRequest objects (used when your webpage needs to use the internet without refreshing)

```javascript
    window.addEventListener("resize", function(event){
    	console.log("A "+event.type+" event just ocurred!");
    	var w = window.innerWidth;
    	var h = window.innerHeight;
    	document.querySelector("p.message").innerHTML = "You've just resized the window to "+w+"px  x  "+h+"px!";
    });
```

##Useful User Input Tags
 - Button:
 
       ```html
       <button type="button">Click Me!</button>
       ```
 
 - Input 
    -html 
       ```html
       <input type="text" id="myInput">
       ```
    -Javascript
    
      ```javascript
        var input = document.querySelector("#myInput");
        console.log(input.value);
      ```
 

##Keyboard Events

Somtimes it's useful to get a bit more information about a keyboard event

```javascript
window.addEventListener("keydown", dealWithKeyboard, false);
window.addEventListener("keypress", dealWithKeyboard, false);
window.addEventListener("keyup", dealWithKeyboard, false);
 
function dealWithKeyboard(e) {
    // gets called when any of the keyboard events are overheard
}
```

Good Keyboard event resource: http://www.kirupa.com/html5/keyboard_events_in_javascript.htm 

##Event Propogation

Understand event propogation (capture vs bubble)

```javascript
document.getElementById("button1").addEventListener("click", displayMessage, false);  // allow the event to bubble
```
vs.
```javascript
document.getElementById("button1").addEventListener("click", displayMessage, true);  // capture the event
```


##Other Events that Can Trigger a Callback

Lots and lots of events: https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events

Good mouse-generated events resource: https://dzone.com/articles/all-mouse-events-javascript

##More About Event Properties

Inside of an event listener: ```console.log(event)``` to see all of the information contained in an event object

