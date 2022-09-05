import React from 'react'
import { Routes, Route } from "react-router-dom";
// import './component/style.css';
import Navbar from './component/navbar'
import Home from './component/home'
import About from './component/about'
import Rent from './component/rent'
import Buy from './component/buy'
const App = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-indigo-500 to-purple-500 sticky  top-0 h-auto pt-6 pb-2'>
        <div className=' border-2 bg-gray-50  mx-8 rounded-xl'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/rent' element={<Rent />} />
            <Route path='/buy' element={<Buy />} />
            {/* <Route path='/signin' element={<Signin />} /> */}
            {/* <Route path='/project' element={<Project/>} /> */}
          </Routes>
        </div>
        <footer className=' mt-2 h-auto'>
          <div className='text-center text-sm text-gray-50'>Copyright © 2nd Sept, 2022 Kuldeep Singh &nbsp; &nbsp; &nbsp;&nbsp; | &nbsp;  <a className='text-sky-800 cursor-pointer font-bold' target="_blank" href='https://www.reunionhq.in/'>&nbsp;Reunion</a>  &nbsp;|&nbsp; &nbsp; &nbsp;   
          Edit this page on <a className='text-sky-800 font-bold cursor-pointer' target="_blank" href='https://github.com/KuldeepSingh00048/RealState'>&nbsp;GitHub</a></div>
        </footer>
      </div>
    </>
  )
}

export default App;
