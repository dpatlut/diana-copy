# CSS Review

## 1) HTML Basic Tags vs. HTML5 Semantic Tags

* Semantic tags are more specific than basic tags
	* Basic Tag Examples - div, span
	* Semantic Tag Examples - nav, article, aside, footer, etc.
* Using semantic tags will help machine browsers and other users to understand your markup more efficiently. 
	* For example instead of putting a navigation bar inside of your div tag you can put it inside a nav tag. This lets the browser know that what is inside the nav tag is most likely indended to be a nav bar. 
* Semantic tags are not necessary when writing code but encouraged if used properly. 
* Click here for some documentation by [HTML5 Doctor](http://html5doctor.com/lets-talk-about-semantics/)


## 2) Pseudo Classes

* Pseudo Classes are keywords added to selectors that specifies a special state to a targeted element
* Examples: 
	* clicking on a link to change colors (active)
	* hovering over a button (hover)
* Not all pseudo classes require the user to take an action.
	* For example using "nth child" will select the second child of a container element and implement the special state automatically. In this scenario the user does not have to do anything for the special state to take place. 

## 3) CSS Resets

* All browsers will render your HTML markup differently. 
* Resets provide a consistent baseline to work from
* When linking a CSS reset stylesheet to your file, place it above your own style sheets
	* To make sure we don't override our own css desires
* In class we learned about [Normalize.css](http://cdnjs.com/libraries/normalize)



## 4) CSS Selectors

* Selectors allow you to target specific HTML elements, and you can stylize them or use them in your JS and jQuery files. 


```
# = id
. = class
<tag name> = element
```

* To select child elements you can use > 
	* This is similar to using pseudo classes

```
section > article{
	color: blue;
}
```

* You can list out multiple selectors and style them once

```
h1, h2, h3, h4{
	font-size: 1.25em;
}
```


## 5) CSS Grids

* Grid systems are a layout framework for cross browser consistency
* Ideal for a responsive design
* Versatile and Productive
* Based on a column and row box model
* Lowers or eliminates the need for media queries
* Some CSS frameworks that utilize the grid format are
	* Skeleton
	* Bootstrap
	* Foundation

## 6) CSS Specificity

* Determines which css rule is applied by the browser
* If two selectors are on the same element the one with higher hierarchy overrides. 
* If the two selectors have the same hierarchical level, the selector that comes later will take precedent. 
* The main hierarchy levels are
	* Inline
	* ID's
	* Classes
	* Elements
* If you have something specific that you want to override all others you can use the (!important) selector. 