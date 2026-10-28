import {createSlice} from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: "counterSlice", /* name used for the type defining for the actions (ex: counterSlice/increment) */

    initialState: { /* state */
        count: 0
    },

    reducers: {
        increment: function(state){ /* current state */
            state.count += 1
        },
        decrement: (state)=>{
            state.count -= 1 /* no need of the usestate redux handles it and updates in the ui if there is any change */
        },
        incrementByVal: function(state, action){ /* current state and parameter/payload */
            state.count += action.payload
        }
    }
})

export const {increment, decrement, incrementByVal} = CounterSlice.actions /* actions to use outside for update */
export const CounterSliceReducer = CounterSlice.reducer /* to register in the store */