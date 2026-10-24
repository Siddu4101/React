import { useEffect, useState } from "react";

export default function UseEffectExample() {
  let [count, updateCount] = useState(0);

  /* use effect without  dependecy array */
  useEffect(() => {
    console.log(
      "Use effect without dep array and it acts as a normal fucntion which runs after each rerender completed",
    );
  });

  console.log("This is written after the useEffect function but prints before it that because useEffect runs after the render is complete")

  useEffect(() => {
    console.log(
      "Use effect with empty dep array and it runs only once when the first render is complete for subsequent render it won't be executed since no dep",
    );
  }, []);

  useEffect(() => {
    console.log(
      "Use effect with count as a dep and it runs when the count get changed",
    );
  }, [count]);

  function incrementCount(){
    updateCount(count + 1)
  }

  return (
    <>
      <h1>3.useEffect Example: Usage of the useffect</h1>
        <h3>The new count value is {count}</h3> <br />
      <button className="border-purple-800 border-2 bg-cyan-500 rounded-3xl p-2 m-2  accent-lime-500" onClick={incrementCount}>
        Increment count
      </button>
    </>
  );
}
