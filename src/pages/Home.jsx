import React, { useState } from 'react'
import img from "../img/i (1).webp"
import img2 from "../img/ea18c8c7b11d8767ecc69a3877657f02.png"
function Home() {
  let [yurak,setYurak]=useState(true)
  let data=[1,2,3,4,5,6,7,8,9,1,0]
  console.log(data);
  data.map((data)=>{
    console.log(data);
  })
  function yuraklr(e){
      if(yurak){
        setYurak(false)
      }else{
        setYurak(true)
      }
  }
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
     { yurak &&<div onClick={()=>{yuraklr()}} className='absolute top-2 right-2'>
        <img className='w-[30px]' src="   https://cdn-icons-png.flaticon.com/512/508/508837.png " alt="" />
      </div>}
     {!yurak&& <div onClick={()=>{yuraklr()}} className='absolute top-2 right-2'>
        <img className='w-[30px]' src="    https://cdn-icons-png.flaticon.com/512/508/508735.png " alt="" />
      </div>}
      <div className='absolute text-[#030303] py-1 bottom-0 bg-[#ffffff29] w-full px-2'>
      <p className='font-[700] -tracking-2 text-[16px]'>Nomi</p>
      <p className='font-[600] -tracking-[0.1px] leading-5 text-[13px]'>Olmas qirolning qayta tugilishi va sarguzashtlari</p>
      </div>
    </div>
   ))}
    </div>
    </>
  )
}

export default Home