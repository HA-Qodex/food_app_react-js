import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='text-gray-600 pr-4'>
    <NavLink to='/' className='nav-link'>Home</NavLink>
    <NavLink to='/menu' className='nav-link'>Menu</NavLink>
    <NavLink to='/about-us' className='nav-link'>About</NavLink>
    <NavLink to='/services' className='nav-link'>Services</NavLink>
    </nav>
  )
}

export default NavBar; 
