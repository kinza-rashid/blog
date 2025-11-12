import React from 'react'
import { Button } from 'flowbite-react'
import { TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (

    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
      <div className='flex-1 p-3'>
      <Button> Kinza Blog</Button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime obcaecati, perferendis voluptatibus laudantium aliquid debitis cupiditate sequi recusandae sed nihil eligendi unde officiis officia corporis deleniti velit quibusdam voluptate! Ipsam, ipsa dolor ullam iste, quia dignissimos odit maxime expedita qui eos, quaerat fugit voluptatum?
      </p>
      </div>


      <div className='flex-1 p-3'>

        <form className='flex flex-col gap-4'>
          <div>
          <label htmlFor="">Your Name</label>
        
          <TextInput type="text" placeholder="Enter your name" />
          </div>
           <div>
          <label htmlFor="">Email</label>
        
          <TextInput type="text" placeholder="abc@gmail.com" />
          </div>
           <div>
          <label htmlFor="">Password</label>
        
          <TextInput type="text" placeholder="Enter your password" />
          </div>
          <Button className='bg-linear-to-br from-violet-700 to-blue-600'  type="submit">Sign Up</Button>
       </form>
       <div className='flex gap-2 mt-4'>
        <span>You have account ? </span>
        <Link to="/signin">Sign In</Link>
       </div>
       
      </div>
      <div>

       </div>
         </div>
    </div>


  )
}
