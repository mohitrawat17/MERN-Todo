import React from 'react'
import pic from './images/todo.png'

const HomePage = () => {
  return (
    <div className='flex my-5'>
    <p className='w-4/6'>This option tells Git to reset both the staging area and the working directory. It discards all changes, both staged and unstaged, in your working directory. This means any changes you made to tracked files will be lost irretrievably.</p>
      <img src={pic} className='w-2/6' alt="image"/>
    </div>
  )
}

export default HomePage
