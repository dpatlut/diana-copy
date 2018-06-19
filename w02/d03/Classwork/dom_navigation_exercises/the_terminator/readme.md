## The Terminator

In the 1984 film, The Terminator, a ruthless non-feeling cyborg assassin travels back in time to 1980s Los Angeles to find and terminate Sarah Conner, the woman who will give birth to and raise a son who will someday lead mankind in the War Against the Machines. Trouble is, there are a slew of Sarah Connors in Los Angeles, and the terminator doesn't know which one he's after. There are also some meddlesome cops (and a handsome future soldier) that the Terminator has to deal with. You've been tasked with modeling this scenario.

#### Exercise Objectives
- use JavaScript to query the DOM and manipulate particular elements.
- gain familiarity working with the Chrome JavaScript console.
- gain familiarity working with debugger

#### Directions

1. Work within the Chrome Developer console. Once you have a working line of code, copy it over into your `scripts/main.js` file.
2. Query the DOM for the h1 and store it in a variable called `topLevelHeader`.
3. Query the DOM for the list item with the class of `cop`, and store the element in a variable called `cop`.
4. Query the DOM for the element with id of `the-one-true-sarah-connor`, and save it in a variable called `theOneTrueSarahConnor`
5. Query the DOM for all elements that have the class `victim`, and save the elements in a variable called `poorSouls`.
6. Iterate through `poorSouls`, ```console.log``` each poor soul.

#### MDN Links

Querying:
- [document.querySelector(cssSelectorString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [document.querySelectorAll(cssSelectorString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [document.getElementById(idString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [document.getElementByClassName(classNameString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementByClassName)

Elements:
- [element.id]()
- [element.className(classNameString)](https://developer.mozilla.org/en-US/docs/Web/API/Element.className)
- [element.outerHTML]()
- [element.innerHTML]()
- [element.attributes]()
- [element.hasAttribute()]()

Nodes: (Elements vs. Nodes)
- [ParentNode.children](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children)
- [ParentNode.firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild)
- [ParentNode.lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild)
- [ParentNode.childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount)
- [node.childNodes]()
- [node.parentNode]()
- [node.nextSibling]()
- [node.previousSibling]()
- [node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node.textContent)

