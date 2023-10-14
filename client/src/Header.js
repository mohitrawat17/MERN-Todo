import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {

  const location =useLocation()
  
  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('Token');
    // Other logout actions
  };

  return (
    <div className='font-bold px-20 flex justify-between'>
     <div> XERO<span className='text-orange-600'>TODO</span></div>
     {
      location.pathname==='/' ?
      <div className='flex gap-6'>
      <Link to="/login"><div className='font-medium bg-orange-600 py-1 px-2 rounded-2xl text-black cursor-pointer'>LOG IN</div></Link>
      <Link to="/register"><div className='font-medium bg-orange-600 py-1 px-2 rounded-2xl text-black cursor-pointer'>SIGN UP</div></Link>
      </div>
      :
      location.pathname==='/home'?
      <Link to='/' onClick={handleLogout}><LogoutIcon/></Link>
      :
      <></>
     }
     
    </div>
  )
}

export default Header
