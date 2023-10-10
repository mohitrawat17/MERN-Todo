import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex justify-center items-center h-[550px]'>
    <div className='flex flex-col items-center border p-5 border-orange-200 rounded-3xl w-5/12'>
       <h1 className='text-xl'>Login To Enter</h1>
       <input  className="rounded-2xl outline-none px-3 py-2 w-full my-4 bg-gray-800" type='text' placeholder='Enter username'/>
       <input  className="rounded-2xl outline-none px-3 py-2 w-full my-4 bg-gray-800" type='password'placeholder='Enter password'/>
       <Link to='/home'><button className='bg-orange-600 py-1 px-2 rounded-2xl text-gray-900 font-semibold'>Login</button></Link>
    </div>
  </div>
  )
}

export default Login
