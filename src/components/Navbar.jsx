import React from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


const NavBar = () => {
  return (
    <div className='border-b'>
      <Container>
        <div className='flex justify-between items-center py-7 '>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <ul className='flex text-lg gap-12'>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
            <div className='flex gap-6 '>
                <div className='flex justify-between py-2.5 pl-5 pr-17 relative bg-[#F5F5F5]'>
                    <input type="text" className='text-[12px]' placeholder='What are you looking for?'/>
                    <FaMagnifyingGlass className='absolute top-3 right-3'/>
                </div>
                <div className='flex gap-4 items-center'>
                    <FaRegHeart  className='text-xl'/>
                    <IoCartOutline className='text-2xl'/>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default NavBar
