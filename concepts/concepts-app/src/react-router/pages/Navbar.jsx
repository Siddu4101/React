import {Link, NavLink} from 'react-router-dom'

export default function Navbar(){
    return <>
        <h1 className='text-4xl  mb-3 p-3'>React touter example</h1>
        <nav className='bg-orange-600 p-7 text-white'>
            <NavLink className={({ isActive }) => isActive ? "bg-purple-800 m-2 p-3 rounded-4x border-2 rounded-4xl" : "bg-gray-400 m-2 p-3 rounded-4x border-2 rounded-4xl"} to="">HOME</NavLink>{" | "}
            <NavLink className={({ isActive }) => isActive ? "bg-purple-800 m-2 p-3 rounded-4x border-2 rounded-4xl" : "bg-gray-400 m-2 p-3 rounded-4x border-2 rounded-4xl"} to="/about">ABOUT</NavLink>{" | "}
            <NavLink className={({ isActive }) => isActive ? "bg-purple-800 m-2 p-3 rounded-4x border-2 rounded-4xl" : "bg-gray-400 m-2 p-3 rounded-4x border-2 rounded-4xl"} to="/contact">CONTACT</NavLink>{" | "}
            <NavLink className={({ isActive }) => isActive ? "bg-purple-800 m-2 p-3 rounded-4x border-2 rounded-4xl" : "bg-gray-400 m-2 p-3 rounded-4x border-2 rounded-4xl"} to="/user/Sid">USER</NavLink>{" | "}
        </nav>
    </>
}