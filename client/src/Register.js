import Axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const navigate=useNavigate();
  const[flag,setFlag]=useState(true)




  
const createUser=()=>{
  Axios.post('http://localhost:3000/register',{
    name,
    username,
    password
  }).then((result) => {
    alert("User Registration Successfull")
    console.log(result);
  }).catch((err) => {
    console.log(err.message);
  });
}

  

  const handleSubmit=()=>{
    if(!name || !password || !username || !confirmation){
      setFlag(false)
    }
    else{
      if(password===confirmation && password.length>8){
        createUser()
        navigate('/login')
      }
      else{
        alert('short password or password not matched');
      }
    }
  }






  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className=' p-6 rounded-3xl border max-sm:border-black border-orange-200 shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-semibold mb-4 text-center'>Signup To Register</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          className='bg-gray-800 rounded-lg outline-none px-4 py-2 w-full my-4'
          type='text'
          placeholder='Enter name'
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          className='bg-gray-800 rounded-lg outline-none px-4 py-2 w-full my-4'
          type='text'
          placeholder='Enter username'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className='bg-gray-800 rounded-lg outline-none px-4 py-2 w-full my-4'
          type='password'
          placeholder='Enter password'
        />
        <input
          onChange={(e) => setConfirmation(e.target.value)}
          className='bg-gray-800 rounded-lg outline-none px-4 py-2 w-full my-4'
          type='password'
          placeholder='Confirm password'
        />
        {!flag && (
          <p className='text-red-600 text-sm text-right mb-2'>
            *Please fill all fields
          </p>
        )}
        <button
          className='bg-orange-500 text-white py-2 px-6 bg-gray-800 rounded hover:bg-orange-700 w-full'
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div className='mt-4 text-center'>
          Already a user?{' '}
          <Link to='/login' className='text-purple-800'>
            Click here to log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register
