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
    <div className='flex justify-center items-center h-[550px]'>
      <div className='flex flex-col items-center border p-5 border-orange-200 rounded-3xl w-5/12'>
        <h1 className='text-xl'>Signup To Register</h1>

        {/* name */}
        <input
          onChange={(e) => setName(e.target.value)}
          className="rounded-2xl outline-none px-3 py-2 w-full my-4 bg-gray-800" type='text' placeholder='Enter name' />

          {/* username */}
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-2xl outline-none px-3 py-2 w-full my-4 bg-gray-800" type='text' placeholder='Enter username' />

          {/* password */}
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-2xl outline-none px-3 py-2 w-full my-4 bg-gray-800" type='password' placeholder='Enter password' />

          {/* password confirmation */}
        <input
          onChange={(e) => setConfirmation(e.target.value)}
          className="rounded-2xl outline-none px-3 py-2 w-full mt-4 mb-2 bg-gray-800" type='password' placeholder='Confirm password' />

          {/* flag */}
        
          {
            flag ?
            <></>
              :
              
              <p className='text-red-600 text-right mr-5 w-full'>
              *Please fill all fields
              </p>
          }
        

        {/* submit */}
        <button className='bg-orange-600 py-1 px-2 rounded-2xl text-gray-900 font-semibold'
        onClick={handleSubmit}
        >
          Submit</button>

      </div>
    </div>
  )
}

export default Register
