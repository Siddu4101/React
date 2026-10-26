# React Context
The problem is consider u have 3 level nested component like parent -> child -> grandchild and you want to pass some data from parent to grandchild.
Without context, you would have to pass the data as props through each level of the component tree, even if u r not using it in the intermediate components. Context acts a global shared container to provide the data at the parent level and consume it directly in the grandchild component. This makes the code cleaner and easier to manage, especially when dealing with deeply nested components.

Context lets a component share data with its descendants without passing it through every intermediate component. It helps avoid **prop drilling**; it is not a global store, and only components inside the provider can read its value.

## Without context: pass props through each level

`UiWithoutContext` passes `user` to `NavBar`, which forwards it to `Profile` even though `NavBar` does not use it:

```jsx
// UiWithoutContext.jsx
const user = { name: "Siddu", role: "Software Engineer" };
<NavBar user={user} />

// NavBar.jsx
export default function NavBar({ user }) {
  return <Profile user={user} />;
}

// Profile.jsx
export default function Profile({ user }) {
  return <>{user.name} — {user.role}</>;
}
```

## With context: provide once, read where needed

1. **Create** Context creation: create a context using `React.createContext()` method and use this object to create the provider
2. **Provide** by context object u can get the provider which acts a wrapper `<UserContext.Provider value={user}>` for the components that need access to the context data and this data u will pass as value to the provider.
3. **Consume** by using the context object and the `useContext(UserContext)` u will get the access to the context data inside the components which were wrapped by provider and  you can consume it by the name you have given to the in the provider value.

```jsx
// UserContext.jsx
import { createContext } from "react";

export const UserContext = createContext({});
```

```jsx
// UiWithContext.jsx
const user = { name: "Siddu", role: "Software Engineer" };

<UserContext.Provider value={user}>
  <NavBar />
</UserContext.Provider>
```

`NavBar` no longer needs to receive or forward `user`. `Profile` reads it directly:

```jsx
// Profile.jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Profile() {
  const user = useContext(UserContext);
  return <>{user.name} — {user.role}</>;
}
```

`useContext(UserContext)` returns the value from the nearest matching provider above the component. If there is no provider, it returns the default `{}` passed to `createContext`.

