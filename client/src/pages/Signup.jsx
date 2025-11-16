import React from 'react'
import { Alert, Button } from 'flowbite-react'
import { TextInput } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { set } from 'mongoose'

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("null");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim()
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      setErrorMessage("Please fill all the fields");
      return;
    } else{
      setErrorMessage(null);
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup",{
        method: "POST",
        headers:{
          "Content-Type":"application/json" 
      },
      body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data.success)
     if(data.success === false){
      setErrorMessage(data.message);
     }
     setLoading(false);
     if(res.ok){
      navigate("/signin")
     }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
      
    }
  //  console.log(formData);
    // Here you can add code to send formData to your backend API
  }
  return (

    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
      <div className='flex-1 p-3'>
      <Button> Kinza Blog</Button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime obcaecati, perferendis voluptatibus laudantium aliquid debitis cupiditate sequi recusandae sed nihil eligendi unde officiis officia corporis deleniti velit quibusdam voluptate! Ipsam, ipsa dolor ullam iste, quia dignissimos odit maxime expedita qui eos, quaerat fugit voluptatum?
      </p>
      </div>


      <div className='flex-1 p-3'>

        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
          <label htmlFor="">Your Name</label>
        
          <TextInput type="text" placeholder="Enter your name"onChange={handleChange} id='username' />
          </div>
           <div>
          <label htmlFor="">Email</label>
        
          <TextInput type="email" placeholder="abc@gmail.com" onChange={handleChange} id='email'/>
          </div>
           <div>
          <label htmlFor="">Password</label>
        
          <TextInput type="password" placeholder="Enter your password" onChange={handleChange} id='password'/>
          </div>
          <Button className='bg-linear-to-br from-violet-700 to-blue-600'  type="submit" disabled={loading}>
           {
            loading ? (
              <>
              <spinner size='sm'/>
              <span>Loading ... </span>
              </>
            ) : 'Sign Up'
            
           }
            
            </Button>
       </form>
       <div className='flex gap-2 mt-4'>
        <span>You have account ? </span>
        <Link to="/signin">Sign In</Link>
       </div>
       {
        errorMessage && (
          <Alert color="failure" className='mt-4'>
          {errorMessage}
          </Alert>
        )
       }
       
      </div>
      <div>

       </div>
         </div>
    </div>


  )
}
