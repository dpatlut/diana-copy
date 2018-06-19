#The DOM

##Drawing the DOM tree
![](http://www.cs.toronto.edu/~shiva/cscb07/img/dom/treeStructure.png)
![](http://www.cs.toronto.edu/~shiva/cscb07/img/dom/treeStructureAlternate.png)

The DOM (Document Object Model) is a set of JavaScript objects (nodes) that represent each element on the page. Each tag on the page corresponds to a JavaScript DOM object. 

- The document itself is a document node
- All HTML elements are element nodes
- All HTML attributes are attribute nodes (but not part of the offical DOM tree)
- Text inside HTML elements are text nodes
- Comments are comment nodes

What's awesome is that we can use JavaScript to:
- examine the state of the element 
- change the state of the element 


##Accessing elements in the DOM tree
![](http://courses.cs.washington.edu/courses/cse154/12au/lectures/slides/images/figure_5_dom.png)


1) **```document.getElementById```** returns the DOM object for an element with a given id

    ```
     var element = document.getElementById("id");
     console.log(element.id); 
     console.log(element.tagName);
     console.log(element.src);
     console.log(element.className);
     console.log(element.href);
     console.log(element.innerText); //  text presented to user
     console.log(element.textContent); // raw text


    ```
    
2) **```document.querySelector```**  returns the first element that matches a specified CSS selector in the document

    ```document.querySelector("p");``` gets the first ```<p>``` element in the document
    
    ```document.querySelector("p.example");``` gets the first ```<p>``` element in the document with ```class="example"```
    
    ```document.querySelector("#demo");``` gets the first element with ```id="demo"```
    

3) **```document.getElementsByClassName``** returns a "live" NodeList object of all elements in the document with the specified class name, as a NodeList object 

    ```
    var elements = document.getElementsByClassName("p");
    console.log(elements[0]);
    console.log(elements[1]);
    ```


4) **```document.querySelectorAll```** returns a static NodeList object that contains all of the nodes that match the CSS selector. You can then access each individual node:

    ```
    var elements = document.querySelectorAll("p");
    console.log(elements[0]);
    console.log(elements[1]);
    ```

##Labeling the DOM tree
![](http://i.msdn.microsoft.com/dynimg/IC5683.gif)

You can use the following node properties to navigate between nodes with JavaScript:

- ```parentNode```
- ```childNodes[nodenumber]``` (an array)
- ```firstChild```
- ```lastChild```
- ```nextSibling```
- ```previousSibling```


-Example: ```document.getElementById("intro").childNodes[0].nodeValue ``

