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
    <div className='font-bold px-20 max-sm:px-3 text-lg flex justify-between'>
     <div> XERO<span className='text-orange-600'>TODO</span></div>
     {
      location.pathname==='/' ?
      <div className='flex gap-6 max-sm:gap-3'>
      <Link to="/login"><div className="bg-orange-600 text-white py-2 px-4 mt-4 max-sm:mt-2 rounded max-sm:text-sm max-sm:p-2 max-sm:font-semibold">LOG IN</div></Link>
      <Link to="/register"><div className="bg-orange-600 text-white py-2 px-4 mt-4 max-sm:mt-2 rounded max-sm:text-sm max-sm:p-2 max-sm:font-semibold">SIGN UP</div></Link>
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
