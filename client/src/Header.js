import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {

  const location =useLocation()
  


  return (
    <div className='font-bold px-20 flex justify-between'>
     <div> XERO<span className='text-orange-600'>TODO</span></div>
     {
      location.pathname==='/' ?
      <Link to="/register"><div className='font-medium bg-orange-600 py-1 px-2 rounded-2xl text-black cursor-pointer'>Signup/SignIn</div></Link>
      :
      location.pathname==='/home'?
      <Link to='/'><LogoutIcon/></Link>
      :
      <></>
     }
     
    </div>
  )
}

export default Header
