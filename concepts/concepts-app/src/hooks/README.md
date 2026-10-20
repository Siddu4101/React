React does the rendering part on it's own, so if u try to use the normal var it won't trigger a re-render when the value changes. That's why we use hooks like useState to manage state in functional components.

Hooks: Functions that let you use state and other React features in functional components.

1. UseState: Allows you to add state to functional components.
    [variable, setVariable] = useState(initialValue)

    // variable: current state value
    // setVariable: function to update the state value

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

## Virtual DOM

The **Virtual DOM** is a lightweight representation of the actual DOM. React optimizes updates by comparing the new Virtual DOM with the previous one and applying only the necessary changes to the real DOM. This process, called **reconciliation**, helps improve performance by minimizing direct DOM manipulations.