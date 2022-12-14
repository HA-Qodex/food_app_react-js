import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

function NavBar() {
  return (
    <motion.nav
    initial={{opacity:0, x:200}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:200}}
    className='text-gray-600 pr-4'>
    <NavLink to='/' className='nav-link'>Home</NavLink>
    <NavLink to='/menu' className='nav-link'>Menu</NavLink>
    <NavLink to='/about-us' className='nav-link'>About</NavLink>
    <NavLink to='/services' className='nav-link'>Services</NavLink>
    </motion.nav>
  )
}

export default NavBar; 
