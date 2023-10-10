import React from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = () => {


  return (
    <div className='font-bold px-20 flex justify-between'>
     <div> XERO<span className='text-orange-600'>TODO</span></div>
     <ExitToAppIcon style={{fontSize:"28px"}}/>
    </div>
  )
}

export default Header
