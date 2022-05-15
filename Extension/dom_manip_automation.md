# display all data-automation attributes.
```js
document.querySelectorAll('[data-automation]').forEach((e)=>(console.log(e.getAttribute('data-automation'))))
```
# give them a red border.
```js
document.querySelectorAll('[data-automation]').forEach((e)=>(e.style.border="2px solid red "))
```
> Note : This won't be applied on elements that have !important border rule in their scss/css
# give them tooltip (+ combine all )
- add the following css
- 
```css
.tooltipy {
  // position: relative;
  // display: inline-block;
  // border-bottom: 1px dotted black;
  border: 2px solid red !important;
}

.tooltipy .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltipy:hover .tooltiptext {
  visibility: visible;
}
```
- not working on buttons ? maybe
- 
```js
document.querySelectorAll('[data-automation]').forEach((e)=>{
  const TText = e.getAttribute('data-automation');
  const node = document.createElement("span")
  const textnode = document.createTextNode(TText);
  node.appendChild(textnode);
  node.classList.add("tooltiptext");
  e.classList.add("tooltipy"); // this is causing some issues.
  e.appendChild(node);
  console.log(TText);
})

```


