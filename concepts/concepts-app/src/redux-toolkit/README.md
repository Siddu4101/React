1. What is Redux Toolkit?
Redux Toolkit is a library that, helps to manage state in complex react applications.
We can say it is a alternative to context api, but it is more powerful and provides a better way to manage state in react applications.
With context you need to decide how to structure your state and how to update it, but with redux toolkit each feature has its own slice of state and the reducers and actions, and also supports selective subscription through useSelector hook so components can subscribe to specific parts of the store.

There are manily 4 parts of redux toolkit:
1. Store: Holds the shared data and state of the application. It is a single source of truth for the entire application.
2. Slice: A slice is a collection of reducer logic and actions for a specific feature of the application. Each slice has its own state, reducers, and actions.
3. Action: Describes an event/change you want to make. Actions are plain JavaScript objects that have a type property and an optional payload property. 
4. Reducer: A reducer is a pure function that takes the current state and an action as arguments and returns a new state. Reducers specify how the application's state changes in response to actions sent to the store.

Example:

1. Install:
```bash
npm install @reduxjs/toolkit react-redux

```
@reduxjs/toolkit: creates the store, slices, reducers, and actions.
react-redux: connects Redux to React through Provider and hooks such as useSelector and useDispatch.

2. creaete the slice:
slice will have 3 sections:
1. name: name of the slice
2. initialState: initial state of the slice where we define the properties of the state and their initial values.
3. reducers: an object that contains the reducer functions for the slice. Each reducer function takes the current state and an action(optional for input arguments) as arguments and returns a new state.

and u will export the reducer of the slice to use it in the store creation and actions(reducers functions exported as a function for outside use and actions created by redux inbuilt).

```jsx
import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'sliceName',
  initialState: {
    property1: value1,
    property2: value2,
  },
  reducers: {
    actionName: (state, action) => {
      // update the state based on the action
    },
    actionName2: (state) => {
      // update the state
    },
  },
});
export const {actionName, actionName2} = slice.actions; /* actions created by redux inbuilt */
export default slice.reducer;
```

3. create the store:
The store is created using the `configureStore` function. It takes an object as an argument that contains the reducer(s) for the store.
```jsx
const store = configureStore({
  reducer: {
    sliceName: sliceReducer,
  },
});
```

4. Provide the store to the application:
The store is provided to the application using the `Provider`. The `Provider` component used as wrapper to the components where we want to share the data by making the store available to all components inside the provider.
```jsx
import { Provider } from 'react-redux';

<Provider store={store}>
  <App />
</Provider>
```

5. Use the store in components:
To  use the store in components, we can use the `useSelector` and `useDispatch` hooks provided by react-redux.
1. `useSelector`: This hook allows us to access the state from the store. We can pass a selector function to the `useSelector` hook that takes the state as an argument and returns the specific part of the state we want to access.
```jsx
const state = useSelector((state) => state.sliceName); /* sliceName is the name/key of the reducer passed in the store configuration from that u can access the state defined in the slice of that reducer */
```

2. `useDispatch`: This hook allows us to dispatch actions to the store. We can use the `useDispatch` hook to get the dispatch function and then call it with an action to update the state.
```jsx
const dispatch = useDispatch();
dispatch(sliceActions.actionName(payload)); /* actionName is the name of the reducer function defined in the slice and payload is the data we want to send to the reducer function */
```
