import React, { useState } from 'react'
import { FcHome } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import Signup from './signup'
import Signin from './signin'


const Navbar = () => {
    const[sign,setSign]=useState(false)
    const closeSign = ()=> setSign(false)
    return (
    <>
    <nav className=' flex flex-wrap h-auto pt-4 pb-4 rounded-xl border-b-2 border-b-purple-300 shadow-md m-4 border-2'>
       <div className=' flex flex-wrap'>< FcHome className='h-10 w-10 ml-4 '/><h3 className=' font-extrabold my-3 px-4 text-xl text-purple-800'>Rent a Property</h3></div>
        <ul className='flex-wrap flex  ml-auto'>
            <li className=' mx-4 px-2 py-3 cursor-pointer font-semibold text-purple-600 hover:text-purple-500 '><NavLink className='text-xl font-bold hover:font-medium hover:border-b-2 hover:border-purple-500' to='/'>Home</NavLink></li>
            <li className=' mx-4 px-2 py-3 cursor-pointer font-semibold text-purple-600 hover:text-purple-500 '><NavLink className='text-xl font-bold hover:font-medium hover:border-b-2 hover:border-purple-500' to='/about'>About Us</NavLink></li>
            <li className=' mx-4 px-2 py-3 cursor-pointer font-semibold text-purple-600 hover:text-purple-500 '><NavLink className='text-xl font-bold hover:font-medium hover:border-b-2 hover:border-purple-500' to='/rent'>Rent Home</NavLink></li>
            <li className=' mx-4 px-2 py-3 cursor-pointer font-semibold text-purple-600 hover:text-purple-500 '><NavLink className='text-xl font-bold hover:font-medium hover:border-b-2 hover:border-purple-500'  to='/buy'>Buy a House</NavLink></li>
        </ul>
        <div className=' px-4 py-3 ml-auto'>
            <button onClick={()=> setSign(true)} className='mx-2 bg-indigo-500 border-indigo-500  border-2 px-2  font-bold text-white rounded-lg hover:bg-white hover:text-indigo-500 text-xl'>Sign Up</button>
            <button  className='mx-2 bg-violet-600 border-violet-600  border-2 px-2  font-bold text-white rounded-lg hover:bg-white hover:text-violet-600 text-xl'>Sign In</button>
        </div>
        <Signup onClose={closeSign} visible={sign}/>
    </nav>
    </>
    )
}

export default Navbar