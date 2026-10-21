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


   const greetWithRendere = useCallback(()=>{
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