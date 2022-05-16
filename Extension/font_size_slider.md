# hehe
```js
document.querySelector('input[type="range"]').addEventListener('input', e => document.querySelector('div').style.fontSize = e.target.value + 'em');
```
# select all + rem
```js
document.querySelector('input[type="range"]').addEventListener('input', e => document.querySelectorAll('*').forEach((el)=>{el.style.fontSize = e.target.value + 'rem'}));
```
# index
```html
 <input type="range" defaultValue="1" min="1" max="2" step="0.5" id="slider" />
```
