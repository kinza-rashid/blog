import React from 'react'
import {Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
    const path = useLocation().pathname;
  return (
    


<Navbar className='w-full ml-0 mr-0' fluid={true}>
    <span className="pl-2 pr-2 pt-1 pb-1.5 bg-linear-to-r from-zinc-800 via-violet-700 to-zinc-800 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Bytech
    </span>
   
    <TextInput type='text' laceholder='Search' rightIcon={AiOutlineSearch} className='hidden lg:inline'
   
    />
    <Button className='w-16 h-16 lg:hidden text-white' color="white">
        <AiOutlineSearch className='w-20 h-20 text-white' />
    </Button>
    <div className='flex gap-2 md:order-2'>
        <span className='self-center text-white pr-5' >
            <FaMoon />
        </span>
        <Link to="/signin">
            <Button  className='bg-linear-to-br from-violet-800 to-blue-500'  >Sign In</Button>
        </Link>
        <NavbarToggle/>


      
    </div>
    <NavbarCollapse>
        <NavbarLink active={path === "/"} href="/">Home</NavbarLink>
        <NavbarLink active={path === "/about"} href="/about">About</NavbarLink>
        <NavbarLink active={path=== "/dashboard"} href="/dashboard">Dashboard</NavbarLink>
        <NavbarLink active={path === "/projects"} href="/projects">Projects</NavbarLink>
        <NavbarLink active={path === "/signup"} href="/signup">Sign Up</NavbarLink>
       
    </NavbarCollapse>
   
</Navbar>


 
 


  )
}
