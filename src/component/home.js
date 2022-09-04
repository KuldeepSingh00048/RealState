import React from 'react'
import Home from '../images/home.jpg'

const home = () => {
  return (
    <>
      <div className='flex flex-wrap  p-2 h-5/6  m-1 justify-center items-center'>
        <div className=' mx-10 p-10'>
          <h1 className='text-5xl text-violet-600 font-bold font-Comic'>Discover your perfect home </h1>
          <br />
      <div className='px-2 text-base text-violet-600 font-semibold font-verdana'>with the most complete source of homes for Sale & Real Estate near you</div>
      </div>
        <img className='flex mx-10 h-80 w-96 my-5  rounded-xl' src={Home} />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </>
  )
}

export default home