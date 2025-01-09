import { Avatar, IconButton, TextField } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#17f33886] drop-shadow-md border-b-[1px]  border-[#16f502] px-[10px] flex items-center                justify-between py-[10px]'>
        <h1 className='logo text-[20px] '>
        AniLet
        </h1>
        <div className=' gap-10 pr-[10px] flex items-center'>

        {/* <div className='menyu'>
          <label className='bg-white rounded-l-[10px]  drop-shadow-md  h-[40px] px-4  flex items-center' htmlFor="">
            <img className='w-[20px]' src="   https://cdn-icons-png.flaticon.com/512/622/622669.png " alt="" />
            <input type="text" />
          </label>
        </div> */}
            {/* <div className='gap-10 flex menyu'>
                <NavLink>Home</NavLink>
                <NavLink>Abaut</NavLink>
                <NavLink>Layki</NavLink>
                <NavLink>Contakt</NavLink>
            </div> */}
        <Avatar   sx={{ width: 40, height: 40 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            {/* <div className='menyu'>

            </div>
            <IconButton aria-label="delete"> */}
        {/* <button className='button'>
            <img className='w-[20px]' src="   https://cdn-icons-png.flaticon.com/512/5259/5259008.png " alt="" />
        </button> */}
{/* </IconButton> */}

        </div>
        {/* <div className='w-[460px] fixed top-0    flex flex-col right-0 bg-red-800'>
            <label htmlFor="">
                <input type="text" />
            </label>
            <div className='flex flex-col'>
                <NavLink>Home</NavLink>
                <NavLink>Abaut</NavLink>
                <NavLink>Layki</NavLink>
                <NavLink>Contact</NavLink>
            </div>
        </div> */}
    </div>
  )
}


export default Navbar
