# Redux Toolkit

## What is Redux Toolkit?

Redux Toolkit (RTK) is the recommended way to write Redux logic. It helps manage shared application state in React apps, especially when that state needs to be read and updated by multiple components.

Context and Redux Toolkit can both share data with components. Redux Toolkit also gives you a consistent structure for organizing state and updates: feature-based slices, generated actions, reducers, and a central store. Components can select the part of the store they need with `useSelector` and update it by dispatching actions with `useDispatch`.

## The main parts

1. **Store** 🗄️ — Holds the application's shared state and acts as the single source of truth.
2. **Slice** 🍰 — Groups the state and the reducer logic for one feature, such as a counter. `createSlice` also generates action creators for its reducers.
3. **Action** 📩 — Describes an event or change to make. An action has a `type` and may have a `payload` containing data for the reducer. These are created by redux based on the reducer and exorted to call the reducer via these action name.
4. **Reducer** 🔄 — Describes how state changes in response to an action. A reducer receives the current state and, when needed, the action; Redux Toolkit uses Immer so reducers can use simple mutation-style syntax while still producing immutable state updates no need of the useState simple object can also works fine and reflect .

## Set up Redux Toolkit

Install Redux Toolkit and React Redux:

```bash
npm install @reduxjs/toolkit react-redux
```

- `@reduxjs/toolkit` provides helpers such as `createSlice` and `configureStore`.
- `react-redux` connects the Redux store to React with `Provider` and hooks such as `useSelector` and `useDispatch`.

## 1. Create a slice

A slice contains:

- `name` — Identifies the slice and is used to form action types.
- `initialState` — The starting state for this feature.
- `reducers` — Functions that describe how the state changes. A reducer can read `state` and, if it needs input, `action.payload`.


```jsx
import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
  name: 'counterSlice', // Name of the slice used for the type defining for the actions(ex: counterSlice/increment)

  initialState: { // The counter's starting state
    count: 0
  },

  reducers: {
    increment: function (state) { // state is the current slice state
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByVal: function (state, action) { // action.payload contains the value to add as a arg
      state.count += action.payload
    }
  }
})

export const { increment, decrement, incrementByVal } = CounterSlice.actions // The actions are created auto exporting to use in different cmponent which are under provider tag
export const CounterSliceReducer = CounterSlice.reducer //for store creation
```

`CounterSlice.actions` contains the action creators generated for the reducer functions. Export them to dispatch actions from components. Export `CounterSlice.reducer` to register the slice in the store.

For example, `incrementByVal(5)` creates an action whose payload is `5`. The `incrementByVal` reducer uses that value to update the count.

## 2. Create the store

Use `configureStore` to create the store and register each slice reducer. The key you choose here becomes the key used to access that slice's state in the child of the provider:

```jsx
import { configureStore } from '@reduxjs/toolkit'
import { CounterSliceReducer } from './CounterSlice'

const CounterStore = configureStore({
  reducer: {
    counterReduxStore: CounterSliceReducer //The key is used in providers child to access the store and by that u can aceess and update/reducer call of the reducer present in the value
  }
})

export default CounterStore
```

Because the reducer is registered as `counterReduxStore`, the counter state is available at `state.counterReduxStore` store. The `count` property is at `state.counterReduxStore.count`.

## 3. Provide the store to React

Wrap the components that need access to the store in React Redux's `Provider`, and pass the store through its `store` prop:

```jsx
import { Provider } from 'react-redux'
import CounterStore from './CounterStore'
import CounterApp from './CounterApp'

export default function CounterStoreProvider() {
  return (
    <Provider store={CounterStore}>
      <CounterApp />
    </Provider>
  )
}
```

`CounterApp` and its descendants can now read from and dispatch updates to `CounterStore`.

## 4. Read and update state in a component

Use `useSelector` to read the state you need. Its selector receives the whole Redux state and returns the specific value for the component. The component updates when that selected value changes.

Use `useDispatch` to get the `dispatch` function, then dispatch an action creator from the slice:

```jsx
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByVal } from './CounterSlice'

export default function CounterApp() {
  const count = useSelector((state) => state.counterReduxStore.count)
  const dispatch = useDispatch()

  return (
    <>
      <h2>The counter value is {count}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByVal(5))}>Increment by 5</button>
    </>
  )
}
```

- `useSelector((state) => state.counterReduxStore.count)` reads `count`. The path uses the store key (`counterReduxStore`) followed by the slice state property (`count`).
- `dispatch(increment())` and `dispatch(decrement())` dispatch actions without extra data.
- `dispatch(incrementByVal(5))` dispatches an action with `5` in its payload, which the reducer uses to update the count.
