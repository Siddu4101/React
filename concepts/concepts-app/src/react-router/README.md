# 🌐 React Router

React Router is a third-party library used to handle navigation between components based on the current URL path, without reloading the whole browser page.

## 🚀 Installation

```bash
npm install react-router
```

## 🧭 Creating navigation links

Create links using `Link` and define route paths for each page.

You can also use `NavLink` instead of `Link`. It gives you access to `isActive`, which helps highlight the currently active menu item in the navbar.

Use `useParams()` to read dynamic route values from the URL.

```jsx
<nav className='bg-orange-600 p-7 text-white'>
  <Link className="bg-purple-800 m-2 p-3 rounded-4x border-2 rounded-4xl shadow-2xl" to="">HOME</Link>{" | "}
  <Link className="bg-purple-800 m-2 p-3 rounded-4x border-2 rounded-4xl shadow-2xl" to="/about">ABOUT</Link>{" | "}
  <Link className="bg-purple-800 m-2 p-3 rounded-4x border-2 rounded-4xl shadow-2xl" to="/contact">CONTACT</Link>{" | "}
  <Link className="bg-purple-800 m-2 p-3 rounded-4x border-2 rounded-4xl shadow-2xl" to="/user/Sid">USER</Link>{" | "}
</nav>

/* OR */

<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-purple-800 m-2 p-3 rounded-4x border-2 rounded-4xl"
      : "bg-gray-400 m-2 p-3 rounded-4x border-2 rounded-4xl"
  }
  to=""
>
  HOME
</NavLink>{" | "}

const params = useParams();
{params.userId}
```

> `params.userId` helps fetch the dynamic value from the URL path, such as `/user/Sid`.

## 🗂️ Defining routes

Based on the route path, you can decide which component should be shown in the UI. There are two common ways to define routes.

### 1) Direct route object creation

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/user/:userId",
        element: <User />
      }
    ]
  }
]);
```

This approach is a bit more complex, so many developers prefer the element-based route creation method.

### 2) Route creation via elements

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={Layout}>
      <Route path="" Component={Home} />
      <Route path="about" Component={About} />
      <Route path="contact" Component={Contact} />
      <Route path="user/:userId" Component={User} />
    </Route>
  )
);
```

> For the home page, an empty path is often used instead of `/`.

## ✅ Providing the router

Once the router is created, it must be passed to `RouterProvider` so React can render the correct component based on the current URL.

```jsx
<RouterProvider router={router} />
```

## 🏗️ Layout in React Router

A `Layout` component acts as a parent wrapper for the app. It usually contains reusable elements such as a navbar, header, footer, or sidebar, while the child component changes based on the matching route.

This helps keep repeated UI sections consistent across pages.

In this structure, the child page is rendered inside the layout at the `Outlet` position.

```jsx
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
```

## 📌 Summary

- `Link` is used for navigation.
- `NavLink` helps highlight the active route.
- `useParams()` gets dynamic values from the URL.
- `createBrowserRouter()` defines the routing structure.
- `RouterProvider` connects the router to the app.
- `Layout` keeps shared UI consistent across pages.
