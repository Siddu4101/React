React does the rendering part on it's own, so if u try to use the normal var it won't trigger a re-render when the value changes. That's why we use hooks like useState to manage state in functional components.

Hooks: Functions that let you use state and other React features in functional components.

1. UseState: Allows you to update and manage the state and re-render the component when the state changes.
    [variable, setVariable] = useState(initialValue)

    // variable: current state value
    // setVariable: function to update the state value
    // setVariable(prevValue => newValue) // callback form to get the previous state and update it mainly for multiple updates at once 

```jsx
import { useState } from "react";

function UseStateExample() {
//   let count = 0; /* without state it won't trigger re-render */
  let [count, updateCount] = useState(0);
  console.log(`The new counter val is ${count}`);
  return (
    <>
      <h1>Hey the new counter value is {count}</h1>
      <button className="btn" onClick={incrementVla}>Increment</button> <br />
      <br />
      <button className="btn" onClick={decrementVal}>Decrement</button>
    </>
  );

  function incrementVla() {
    console.log("Increment called");
    // count++
    updateCount(count + 1);
  }

  function decrementVal() {
    console.log("Decrement called");
    // count--
    updateCount(count - 1);
  }

}

export default UseStateExample;
```

NOTE:
When u want to update the state multiple times on a single change like btn click then u need to use the callback function which gives you the previous state of the var and that u can update if u just update it directly on the var it won't work 

Example:
```jsx
  function incrementVal(){
    updateCount(count + 1);
    updateCount(count + 1); /* This won't work as expected if called multiple times in a row but count remains as 1 itself as it try to get the current value of count each time instead of the updated one */
  }

  function incrementVla() {
    updateCount(prevCount => prevCount + 1);
    updateCount(prevCount => prevCount + 1);/*this will make it 2 as callback gets the previous state each time and updates it*/
  }
```

## Virtual DOM

The **Virtual DOM** is a lightweight representation of the actual DOM. React optimizes updates by comparing the new Virtual DOM with the previous one and applying only the necessary changes to the real DOM. This process, called **reconciliation**, helps improve performance by minimizing direct DOM manipulations.


## Getting the event in React
Like normal JS we won't get the elements direclt on the event it will return a SyntheticEvent which is a wrapper around the native event provided by React. so u need to get the event by accessing `event.target` or `event.currentTarget` depending on your use case.
Example:
```jsx
<>
  <button
    onClick={(event) => {
      console.log(event.currentTarget.innerHTML);
    }}
  >
    Click me
  </button>
</>
```


2. useCallBack: 
The **useCallback** hook returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is useful to prevent unnecessary re-creations of functions, especially when passing them as props to child components.
Basically it won't recreate the function on every render unless its dependencies change.

This is mainly helpful when u r passing the function as a prop to child components to prevent unnecessary re-renders of those child components.(This we will see in the next examples with useMemo and React.memo)

Example:
```jsx
import { useCallback, useState } from "react"

export default function UseCallBackExample(){
    let [count, updateCount] = useState(0)

    const increment = () => {
    console.log("Incrementing count by 1 ")
    updateCount(count + 1)
   }

   const greet = useCallback(()=>{
    console.log("This won't rerendere everytime when anything changes as no dependecy")
   },[])


   const greetWithRendere = useCallback(()=>{ /* This is actually useless as it will still re-render whenever count changes and rerender happens for each state change of the count via useState */
    console.log("This will rerendere everytime when count changes as it is a dependecy")
   },[count])

   return <>
    <h1>3. Use call back Hook example</h1>
    <h3>The new count value is {count}</h3>
    <button onClick={increment} className="border-pink-400 border-2 bg-pink-300 rounded-xl p-2 m-2">increment</button>
    <button onClick={greet} className="border-pink-400 border-2 bg-pink-300 rounded-xl p-2 m-2">Greet</button>
    <button onClick={greetWithRendere} className="border-pink-400 border-2 bg-pink-300 rounded-xl p-2 m-2">greetWithReRender</button>
   </> 


}
```