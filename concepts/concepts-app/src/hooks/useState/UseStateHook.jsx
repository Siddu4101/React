import { useState } from "react";

function UseStateExample() {
//   let count = 0;
  let [count, updateCount] = useState(0);
  console.log(`The new counter val is ${count}`);
  return (
    <>
      <h1>1. UseStateExample: Update the counter using useState hook and also multiple updates on single click</h1>
      <h1>Hey the new counter value is {count}</h1>
      <button onClick={incrementVla} className="rounded-sm border-2 m-1 p-1 bg-green-500" >Increment</button>
      <button onClick={decrementVal} className="rounded-sm border-2 m-1 p-1 bg-red-500" >Increment</button>
      <br/>
      <button onClick={incrementVlaTwice} className="rounded-sm border-2 m-1 p-1 bg-green-500" >Increment by 2</button>
      <button onClick={decrementValTwice} className="rounded-sm border-2 m-2 p-1 bg-red-500">Decrement by 2</button>
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

  /* multiple increments and decrements */
  function incrementVlaTwice(){
    // updateCount(count + 1) /* for multiple update this won't work use callback with prev val */
    // updateCount(count + 1)
    updateCount(prvCount => prvCount + 1)
    updateCount(prvCount => prvCount + 1)
    console.log("updated the count twice by increment ", count)
  }

  function decrementValTwice(){
    // updateCount(count - 1)
    // updateCount(count - 1)
    updateCount(prvCount=>prvCount - 1)
    updateCount(prvCount=>prvCount - 1)
    console.log("updated count twice by decrementing ", count)
  }
}

export default UseStateExample;
