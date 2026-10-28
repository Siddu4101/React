import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByVal } from "./CounterSlice"



export default function CounterApp(){
    const count = useSelector(state => state.counterReduxStore.count) /* the state.{storeKeyName}.{sliceStateName} */
    const dispatch = useDispatch()

    return<>
    <h1 className="text-3xl">React Redux example</h1> <br />
    <h2 className="text-xl">An alternative and better solution for the context along with var share it handles the updates too via actions and reducers</h2>
    <h3 className="p-3 m-3 text-2xl border-2 w-fit ">The counter value is {count}</h3>

    <button className="p-3 m-2 border-2 bg-violet-600 border-red-500 rounded-3xl text-white" onClick={()=>dispatch(increment())}>Increment</button>
    <button className="p-3 m-2 border-2 bg-violet-600 border-red-500 rounded-3xl text-white" onClick={()=>dispatch(decrement())}>Decrement</button>
    <button className="p-3 m-2 border-2 bg-violet-600 border-red-500 rounded-3xl text-white" onClick={()=>dispatch(incrementByVal(5))}>Increment by 5</button>
    </>
}