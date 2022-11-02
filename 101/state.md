# Ever wondered what will happen if we setState inside a useEffect multiple times ?
- the ans is that the last setState will decide the state of that state(variable) after useEffect ends.
- it won't change every time setState gets called !
- it waits until useEffect completion to finally update the state ?
- This is what I learned today !
```jsx
import React from 'react';
import {useState,useEffect} from 'react';
export function App(props) {
  const [state , setState] = useState(0);
  const [state2,setState2] = useState(true);
  useEffect(()=>{if(!state2){setState(1);setState(2);setState(3);}},[state2])
  return (
    <div className='App'>
      <h1>{state}</h1>
      <button onClick={()=>{setState2((s)=>(!s))}}>hey</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// Log to console
console.log('Hello console')
```
