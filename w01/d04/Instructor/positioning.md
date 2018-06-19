#CSS Positioning
####*or*
##How to Put the Elements of Your Blog Wherever You Want


###Learning Objectives

- Explain Normal Document Flow in HTML.
- Use the float and position properties to arrange elements
- Create page degins to specifications

##Part One - Normal Document Flow

#### What is document flow, how do websites achieve certain layout effects?
- **Normal Document Flow**: How a page is presented when you do nothing to it with regard to structural styling.

- Check out: http://cdn.tutsplus.com/webdesign/uploads/legacy/tuts/367_doc_flow/demo2.html Use the Chrome developer tools to sope out the Normal Document Flow. Discuss the concept of document flow. How can we change it? What does the code look like for this? Look at a blog example. It's a waterfall. 

- HTML elements have a default ```display``` property: ```block```, ```inline```, or ```none```

- **Block-level Elements**: A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can):
  - ```<div>```, ```<header>```, ```<footer>```, ```<article>```, ```<section>``` ( tags often used as a container for other HTML elements)
  - ```<h1>``` .. ```<h6>```
  - ```<p>```
  - ```<form>```
  - etc.

- **Inline Elements**: An inline element does not start on a new line and only takes up as much width as necessary.
  - ```<span>```
  - ```<img>```
  - ```<a>```

- Elements such as ```script``` won't display at all 

##Part Two - Review of Positioning Basics

- What are the ways we can manipulate the position of elements?  **Padding, Margins, and Borders**
- The Box Model:
![](http://www.turnwall.com/wp-content/uploads/2014/06/box-model-css.png?670861) 
- The horizontal position and size of a block-level element is "normally" determined by setting property values:
  * ```margin-left```, ```margin-right```, ```margin-top```, ```margin-bottom```
  * ```border-left```,  ```border-right```, etc.
  * ```padding-left```, ```padding-right```, etc.
  * ```width``` 
  * ```max-width```, ```min-width```
  * ```border-width```
  * ```padding```
  * etc. 
  
- Set these properties by specifying the size in pixels (```10px```), percentages (```60%```), or ```auto```

Example with padding: http://cdn.tutsplus.com/webdesign/uploads/legacy/tuts/367_doc_flow/demo4.html 



###Part Three - Float Positioning

- CSS allows you to set a position property. We can use this property to change positioning! Wee! 
    - ```position:static```
    - ```position:relative```
    - ```position:absolute```
    - ```float```

- Explanation of ```float``` positioning, which pulls an element out of the Normal Document Flow
  - The ```float``` property can be used to wrap text around images
    -  ```float: right```: ![](http://xhtml.com/510ACA5B-DC0D-4E03-B6BF-861FD62E91F3/float-right.gif)
    - ```float: left```: ![](http://xhtml.com/510ACA5B-DC0D-4E03-B6BF-861FD62E91F3/float-left.gif)

- Every HTML elements that follows a floating element will flow around it. To avoid this, use the ```clear``` property. 
- ```clear: left;``` will "turn off" the left floating of elements



###Part Four - More Positioning Options


- **```position:relative```** Position adjusts according to where the element would have been in the Normal Document Flow. Space the element would have occupied stays "reserved" within document flow. Other elements don't collapse around it. Relative positioning behaves the same way as static positioning unless you add properties: ```top```, ```bottom```, ```left```, ```right```

- **```position:absolute```** Removes the element from the Normal Document Flow and positions it relative to its parent element. Other elements collapse around it (and appear hidden "behind" the element that has absolute positioning). 

- **```position: fixed```**

- **```z-index```** Assigns an element a "layer number". Higher numbers appear in front of lower numbers. Think Photoshop layers. Requires use of the ```position``` property.



####Resources
  - http://learnlayout.com/
  - http://www.barelyfitz.com/screencast/html-training/css/positioning/
