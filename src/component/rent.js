import React, { useState } from 'react';
import { FcMoneyTransfer } from "react-icons/fc";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineMoving } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoBedSharp } from "react-icons/io5";
import { GiTap } from "react-icons/gi";
import { AiOutlineAreaChart } from "react-icons/ai";
import HData from './housedata.js';
const Rent = () => {
  const [items, setItems] = useState(HData);
  const [house,setHouse] = useState(HData)
  const filterRent = (rent) => {
    const data = HData.filter((curdata) => {
      return curdata.hrtype === rent || curdata.allrent===rent;
    });
    setHouse(data)
    // setItems(data)
  }

 const filterType = (type) => {
    const data = house.filter((curdata) => {
      return curdata.htype === type || curdata.alltype===type;
    });
    setHouse(data)
    // setItems(data)
  }
  function Search(){
    // window.alert('hello')
    setItems(house)
    // setItems=house
  }

  return (
    <>
      <nav className='flex-col justify-center text-center p-2 font-extrabold text-4xl'>
        <h2 className=' font-comic  font-semibold'>Search Property Rent</h2>
        <section className=' p-3 justify-center  '>
          <ul className='bg-white flex flex-wrap w-fit rounded-xl  mx-auto p-auto mt-4 '>
            <li className=' flex-col mx-2 px-4 text-center justify-center border-r-2  '>
              <div className='flex text-base font-normal mr-12 '><BiCurrentLocation className=' mx-auto  h-7 w-7 ' /> Location</div>
              {/* <label for='location' className='p-2 text-sm'>Greater Noida, UP</label> */}
              <div className=' font-extrabold  text-sm mt-2 mr-4 float-right border-b-purple-900 border-b-2 rounded-xl hover:border-b-black text-purple-900 hover:text-black '>Greater Noida, UP</div>
            </li>
            <li className=' flex-col mx-2 py-0 px-4 text-center justify-center border-r-2  '>
              <div className='flex text-base font-normal mr-2 '><MdOutlineMoving className=' m-auto h-8 w-7' />Move In Date</div>
              <input className='text-sm w-auto float-right font-bold border-b-purple-900 border-b-2 rounded-xl hover:border-b-black text-purple-900 hover:text-black' type="Date" name="myDOB" id="dob" />
              {/* <div className=' font-extrabold  text-sm   border-b-purple-900 border-b-2 rounded-xl hover:border-b-black text-purple-900 hover:text-black '>Move In Date</div> */}

              {/* <h2 className='flex text-sm'>Select Move-inDate<MdOutlineArrowDropDown className='h-5 w-7'/></h2> */}
            </li>
            <li className=' flex-col mx-2 py-0 px-4 text-center justify-center border-r-2  '>
              <div className='flex text-base font-normal mr-12 '><FcMoneyTransfer className=' mx-auto h-8 w-7' />Price</div>
              <select name='Rs.---' className=' font-extrabold  text-sm  float-right border-b-purple-900 border-b-2 rounded-xl hover:border-b-black text-purple-900 hover:text-black '
                onChange={(e) => {
                  const rent = e.target.value
                  filterRent(rent)
                }}>
                <option disabled selected className='text-sm w-auto text-black font-bold '>Rs.---</option>
                <option value='All' className='text-sm text-left text-black font-bold  '>All</option>
                <option value='Rs.8 K - Rs.10 K' className='text-sm text-left text-black font-bold  '>Rs.8 K - Rs.10 K</option>
                <option value='Rs.10 K - Rs.18 K' className='text-sm text-left text-black font-bold  '>Rs.10 K - Rs.18 K</option>
                <option value='Rs.18 K - Rs.25 K' className='text-sm text-left text-black font-bold  '>Rs.18 K - Rs.25 K</option>
                <option value='Rs.25 K - Rs.35 K' className='text-sm text-left text-black font-bold  '>Rs.25 K - Rs.35 K</option>
              </select>
            </li>
            <li className=' flex-col mx-2 py-0 px-4 text-center justify-center border-r-2 '>
              <div className='flex text-base font-normal mr-12 '><GoHome className=' mr-2 mb-1 h-7 w-7' />Property Type</div>
              <select name='Property Type' className=' font-extrabold  text-sm  float-right border-b-purple-900 mr-12 border-b-2 rounded-xl hover:border-b-black text-purple-900 hover:text-black '
                onChange={(e) => {
                  const type = e.target.value
                  filterType(type)
                }}
              >
                <option disabled selected className='text-sm w-auto text-black font-bold '>Property Type</option>
                <option value='All' className='text-sm text-left text-black font-bold  '>All</option>
                <option value='1-BHK' className='text-sm text-left text-black font-bold  '>1-BHK</option>
                <option value='2-BHK' className='text-sm text-left text-black font-bold  '>2-BHK</option>
                <option value='3-BHK' className='text-sm text-left text-black font-bold  '>3-BHK</option>
              </select>

              {/* <h2 className='flex text-sm'>Property Type<MdOutlineArrowDropDown className='h-5 w-7'/></h2> */}
            </li>
            <li className=' flex-col mx-2 py-2 px-4 text-center justify-center'>
              <button onClick={Search} className='border-2 text-xl text-white rounded-lg px-2 py-1 bg-indigo-500 border-indigo-500  font-normal hover:bg-white hover:text-indigo-500 hover:font-semibold active:bg-purple-700'>Search</button>
            </li>
          </ul>
        </section>
      </nav>
      <div className='h-96 flex gap-16 flex-wrap overflow-hidden overflow-y-auto rounded-xl p-2 border-2 justify-center bg-gray-100'>
        {
          items.map((elem) => {
            const { id, himage, hrent, hname, hlocation, hbed, hbath, harea } = elem;
            return (
              <div className=' flex border-b-2 h-48  bg-white rounded-xl w-auto border-b-indigo-500'>
                <div className=''>
                  <img className=' h-40 w-60 rounded-xl hover:h-44 hover:w-72 ' src={himage} />
                </div>
                <div className='w-60 border-b-2'>
                  <div className='flex px-2'>
                    <h1 className=' py-2  text-violet-600 font-extrabold text-lg'>Rs. {hrent}</h1>
                  </div>
                  <h1 className='px-2 font-extrabold text-lg'>{hname}</h1>
                  <div className='px-2  text-xs text-gray-700 font-semibold'>{hlocation}</div>
                  <div className='flex px-2'>
                    <div className='px-1 my-2 py-2 border-t-2  flex text-xs font-semibold text-gray-700'><IoBedSharp className=' mr-1 h-5 w-4 text-purple-900' /> {hbed}  </div>
                    <div className='px-1 my-2 py-2 border-t-2  flex text-xs font-semibold text-gray-700'><GiTap className=' mr-1 h-5 w-4 text-purple-900' /> {hbath}  </div>
                    <div className='px-1 my-2 py-2 border-t-2  flex text-xs font-semibold text-gray-700'><AiOutlineAreaChart className=' mr-1 h-5 w-4 text-purple-900' /> {harea} </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Rent






























































// import React, { useState } from 'react';
// import { IoBedSharp } from "react-icons/io5";
// import { GiTap } from "react-icons/gi";
// import { AiOutlineAreaChart } from "react-icons/ai";
// // import HData from './housedata.js';
// const Rent = (props) => {
//   const[items,setItems]= useState(elements);
//   return (
//     <>
//     <div className='h-96 flex gap-16 flex-wrap overflow-hidden overflow-y-auto rounded-xl p-2 border-2 justify-center bg-gray-100'>
//     {
//       items.map((elem)=>{
//         const { id,himage,hrent,hname,hlocation,hbed,hbath,harea } =elem;
//         return(
//           <div className=' flex border-b-2 bg-white rounded-xl w-auto border-b-indigo-500'>
//         <div className=''>
//           <img className=' h-40 w-60 rounded-xl hover:h-48 hover:w-72 ' src={himage}/>
//         </div>
//         <div className='w-60 '>
//         <div className='flex px-2'>
//           <h1 className=' py-2  text-violet-600 font-extrabold text-lg'>Rs. {hrent}</h1>
//           <div className=' pt-4 pr-4  text-xs'>/month</div>
//         </div>
//         <h1 className='px-2 font-extrabold text-lg'>{hname}</h1>
//         <div className='px-2  text-xs text-gray-700 font-semibold'>{hlocation}</div>
//         <div className='flex px-2'>
//         <div className='px-1 my-2 py-2 border-t-2  flex text-xs font-semibold text-gray-700'><IoBedSharp className=' mr-1 h-5 w-4 text-purple-900' /> {hbed}  </div>
//         <div className='px-1 my-2 py-2 border-t-2  flex text-xs font-semibold text-gray-700'><GiTap className=' mr-1 h-5 w-4 text-purple-900' /> {hbath}  </div>
//         <div className='px-1 my-2 py-2 border-t-2  flex text-xs font-semibold text-gray-700'><AiOutlineAreaChart className=' mr-1 h-5 w-4 text-purple-900' /> {harea} </div>
//         </div>
//         </div>
//           </div>
//           )
//         })
//       }
//     </div>
//     </>
//   )
// }

// export default Rent