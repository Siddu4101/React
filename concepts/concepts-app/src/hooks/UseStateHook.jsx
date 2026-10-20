import { useState } from "react";

function UseStateExample() {
//   let count = 0;
  let [count, updateCount] = useState(0);
  console.log(`The new counter val is ${count}`);
  return (
    <>
      <h1>Hey the new counter value is {count}</h1>
      <button onClick={incrementVla} className="rounded-sm border-2 m-1 p-1 bg-green-500" >Increment</button>
      <button onClick={decrementVal} className="rounded-sm border-2 m-2 p-1 bg-red-500">Decrement</button>
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
