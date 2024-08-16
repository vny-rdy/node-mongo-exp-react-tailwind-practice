import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <div>
      <nav className="flex gap-10 bg-black text-white">
      <NavLink className={(e)=>{return e.isActive?"bg-red-400":""}} to="/"><li className='p-5'>Home</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"bg-red-400":""}} to="/about"><li className='p-5'>About</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"bg-red-400":""}} to="/login"><li className='p-5'>Login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
