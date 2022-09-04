import React from 'react'
import About from '../images/about.png'
const about = () => {
  return (
    <>
    <div className='flex flex-wrap h-5/6   justify-center items-center'>
    <div className=' flex-col mx-10 p-10'>
    <h1 className='text-5xl text-violet-600 font-bold font-Comic'>Discover your perfect home </h1>
    <br/> 
    <div className='px-2 text-base text-violet-600 font-semibold font-verdana'>with the most complete source of homes for Sale & Real Estate near you</div>
    </div>
    <img className=' mx-10 h-80 w-96 my-7 rounded-xl' src={About} />
    </div>
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    </>
  )
}

export default about