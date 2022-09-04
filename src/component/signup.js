import React from 'react'

const signup = ({visible,onClose}) => {
  if(!visible) return null;

  return (
    <div className=' w-1/3 inset-0 bg-opacity-60 shadow-2xl backdrop-blur-sm fixed flex justify-center rounded-xl 
      bg-gradient-to-r from-indigo-500 to-purple-500  items-center text-center mx-auto my-10 h-96'>
    <div className=' flex-col flex-wrap w-96  h-auto '>
        <h1 className='my-1 text-4xl font-bold'> Sign Up</h1>
      
        <input type="text" className='my-3 border-2 rounded-lg border-black p-1 text-indigo-600 font-semibold' placeholder="Enter your name" 
        name='name'/>
        <br />	
        <input type="text" className='my-3 border-2 rounded-lg border-black p-1 text-indigo-600 font-semibold' placeholder="Enter your E-mail" 
        name='Phone_number'/>
        <br />
        <input type="email" className='my-3 border-2 rounded-lg border-black p-1 text-indigo-600 font-semibold' placeholder="Enter your Password"
        name='email'/>
        <br />
        <input type="email" className='my-3 border-2 rounded-lg border-black p-1 text-indigo-600 font-semibold' placeholder="Renter your Password"
        name='email'/>
        <br />
        <button className='bg-gradient-to-r from-green-500 to-lime-500 w-auto text-lg px-2 rounded-lg font-bold hover:text-base active:bg-yellow-300' >Sign In</button>
    </div>  
    <div onClick={onClose} className='border-2 border-black float-right text-xl h-6 w-7 pb-7 bg-indigo-700 hover:text-base active:bg-indigo-400 rounded-lg cursor-pointer  mb-auto mr-2 mt-2'>X</div>
  </div>
  )
}

export default signup