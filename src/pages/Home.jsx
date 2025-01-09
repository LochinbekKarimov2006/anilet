import React from 'react'
import img from "../img/i (1).webp"
import img2 from "../img/ea18c8c7b11d8767ecc69a3877657f02.png"
function Home() {
  let data=[1,2,3,4,5,6,7,8,9,1,0]
  console.log(data);
  data.map((data)=>{
    console.log(data);
  })
  return (
    <>
    <div className='p-2'>
      <img className='rounded-[10px]' src={img2} alt="" />
    </div>
    <h2 className='text-[24px] font-[600] px-2'>Animelar</h2>
    <div className='grid grid-cols-2 p-2 gap-x-[5%] gap-y-[30px]'>
   {data.map((malumod)=>(
    <div className='w-full relative'>
      <img className='w-full rounded-[10px]' src={img} alt="" />
      <div>
      <p>anime</p>
      </div>
    </div>
   ))}
    </div>
    </>
  )
}

export default Home