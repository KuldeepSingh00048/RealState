import React from 'react'

const signin = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className=' w-screen h-screen inset-0 bg-opacity-30 shadow-2xl backdrop-blur-sm fixed flex justify-center rounded-xl 
        items-center text-center mx-auto bg-violet-500'>
      <div className=' flex-col flex-wrap w-96 bg-gradient-to-r from-indigo-500 to-violet-500 h-auto rounded-2xl'>
        <h1 className='my-1 text-4xl font-bold'> Sign In</h1>

        <input type="text" className='my-3 border-2 rounded-lg border-black p-1  w-auto text-indigo-600 font-semibold' placeholder="Enter your name"
          name='name' />
        <br />
        <input type="email" className='my-3 border-2 rounded-lg border-black p-1 w-auto text-indigo-600 font-semibold' placeholder="Renter your Password"
          name='email' />
        <br />
        <button className='bg-gradient-to-r from-green-500 to-lime-500 w-auto text-lg px-2 rounded-lg font-bold hover:text-base active:bg-yellow-300 mb-2 ' >Sign In</button>
      </div>
      <div onClick={onClose} className='border-2 border-black float-right text-xl h-6 w-7 pb-7 bg-indigo-700 hover:text-base active:bg-indigo-400 rounded-lg cursor-pointer  mb-56 mr-2 mt-2'>X</div>
    </div>
  )
}

export default signin