import { useRef, useState } from "react"

export function UseRefExample(){
    let [count, updateCount] = useState(0)

    let refCount = useRef(0)

    function updateStateCount(){
        updateCount(count + 1)
        console.log(`updated value of the state count var is ${count} \n this updates because of state`)
    }


    function updateRefCount(){
        refCount.current += 1
        console.log(`updated value of the ref count var is ${refCount.current} \n this updates but not rerenders the state in the ui untill other objects rerender the ui`)
    }


    let nameRef = useRef("")

    function focusTheNameText(){
        nameRef.current.select()
    }

    return <>
        <h1>4. useRef Example: the useRef doesn't update the state in the ui it updates in the backround only</h1>

        <h3>The count value from the useState {count}</h3>   <br/>
        <button className="border-amber-300 m-3 p-3 bg-red-500 rounded-3xl " onClick={updateStateCount}>update useState count</button>
        
        <h3>The count value from the useState {refCount.current}</h3>    
        <button className="border-amber-300 m-3 p-3 bg-red-500 rounded-3xl " onClick={updateRefCount}>update useRef count</button>

        <br />
        <input type="text" ref={nameRef} placeholder="enter your name" className="border-2 border-black cursor-pointer forced-color-adjust-auto"></input>
        <button className="border-amber-300 m-3 p-3 bg-red-500 rounded-3xl " onClick={focusTheNameText}>select the name text</button>
    </>
}