import CurrencyConvertor from "./component-reusage/CurrencyConvertor"
import { PasswordGenerator } from "./hooks/simpleProject/PasswordGenerator"
import UseCallBackExample from "./hooks/useCallBack/UseCallBackExample"
import UseEffectExample from "./hooks/useEffect/UseEffectExample"
import { UseRefExample } from "./hooks/useRef/UseRefExample"
import BackgrondChanger from "./hooks/useState/BackgroundChanger"
import UseStateExample from "./hooks/useState/UseStateHook"

import Layout from "./react-router/pages/LayOut"
import Home from "./react-router/pages/Home"
import Contact from "./react-router/pages/Contact"
import About from "./react-router/pages/About"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import User from "./react-router/pages/User"
import UiWithoutContext from "./context/withoutContext/UiWithoutContext"
import UiWithContext from "./context/withContext/UiWithContext"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={Layout}>
      <Route index Component={Home}/>
      <Route path="about" Component={About}/>
      <Route path="contact" Component={Contact}/>
      <Route path="user/:userId" Component={User}/>
    </Route>
  )
)

/* OR */

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//     {
//       path:"",
//       element: <Home/>
//     },
//     {
//       path:"/about",
//       element:<About/>
//     },
//     {
//       path:"/contact",
//       element: <Contact/>
//     },
//     {
//       path:"/user/:userId",
//       element: <User/>
//     }]
//   }
// ])

function App() {

  return (
    <>
    <h1 className="text-2xl font-bold">Hello</h1>
    <UseStateExample/><br /><br /><hr /><hr /><br/>
    <BackgrondChanger/><br /><br /><hr /><hr /><br/>
    <UseCallBackExample/> <br/><br/><hr /><hr /><br/>
    <UseEffectExample/> <br /><br /><hr /><hr /><br/>
    <UseRefExample/> <br /> <br /><hr /><hr /><br/>
    <PasswordGenerator/> <br /><br /><hr /><hr /><br/>
    <CurrencyConvertor/> <br /><br /><hr /><hr /><br/>
    {/* React router example */}
    <RouterProvider router={router}/> <br /><br /><hr /><hr /><br/>
    {/* Context usage example */}
    <UiWithoutContext/><br /><br /><br/>
    <UiWithContext/> <br /><br /><hr /><hr /><br/>
    </>
  )
}

export default App
