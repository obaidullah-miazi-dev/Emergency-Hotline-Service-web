Q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans-1: 
--getElementById : finds one element from html which have an unique id.
--getElementByClassName: finds those multiple elements which have same class.
--querySelector: finds first matched element.
--querySelectorall: finds all matched elements.
and query selector and queryselectorall use css selector.






Q-2: How do you create and insert a new element into the DOM?

Ans-2: 
Here is the explaination how i create and insert a new element into the DOM--
1. create an element using document.createElement('tag-name')
2. now adding content to the element using innerText or innerHtmL etc.
3. and now append the element to the parent/main-page using appendChild or append().







Q-3: What is Event Bubbling and how does it work?

Ans-3: 
when you click on an element , the event first work/run on that element then go to the parent then grandparent and like this going....

and its called bubbling cause its look like bubbling.







Q-4: What is Event Delegation in JavaScript? Why is it useful?

Ans-4: 
event delegation is adding a eventlistener on parent element instead adding multiple eventlistener on each child element.

--and the benifits of using event delegation is 
its reduce memory consumption
its easier to manage
and if i add a new child its work also







Q-5: What is the difference between preventDefault() and stopPropagation() methods?

Ans-5:
preventDefault stop browsers default behavior like stop form submission automatically etc
and stopPropagation stop events bubbling and works on child 


