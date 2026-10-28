import { configureStore } from "@reduxjs/toolkit";
import { CounterSliceReducer } from "./CounterSlice" 

const CounterStore = configureStore({
    reducer:{ 
        counterReduxStore : CounterSliceReducer /* The key should be used to access the state/reducer in other components value is the reducer of the slice*/
    }
})

export default CounterStore