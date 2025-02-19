import mercImage from './merc.jpg';
import { Avatar } from '@mui/material'
import React from 'react'
import "./Navbar.css"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {task, auth}=useSelector(store=>store)
  console.log("Auth state:", auth);
  return (
    <div className='container z-10 sticky left-0 tight-0 top-0 py-3 px-5 
    lg:px-10, flex justify-between items-center'>

        <p className='font-bold text-lg'>Merc Task Manager</p>

        <div className='flex items-center gap-5'>
            <p>{auth.user?.fullName}</p>
            {/* sx={{backgroundColor:"#b0cfff"}} className='bg-[#b0cfff]' */}
            <Avatar src={mercImage}>H</Avatar>
        </div>
        
    </div>
  )
}

export default Navbar