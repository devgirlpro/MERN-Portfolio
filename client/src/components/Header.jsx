import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
         {/* <h1 className='text-secondary text-xl font-semibold' >Azadeh Galidari</h1>
         <h1 className='text-secondary text-xl font-semibold' >Fullstack Web Developer</h1>
         <h1 className='text-secondary text-xl font-semibold' >Portfolio</h1> */}
         <nav className=' bg-primary'>
            <ul className='p-5 bg-primary flex  justify-end ml-5' >
                <li className='text-secondary text-xl font-semibold'>
                    <Link to="/" >Home</Link>
                </li>
                <li className='text-secondary text-xl font-semibold ml-5'>
                    <Link to="/about">About me</Link>
                </li>
                <li className='text-secondary text-xl font-semibold ml-5'>
                    <Link to="/resume">Resume</Link>
                </li>
                <li className='text-secondary text-xl font-semibold ml-5'>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className='text-secondary text-xl font-semibold ml-5'>
                    <Link to="/contact">Contact me</Link>
                </li>
                <li className='text-secondary text-xl font-semibold ml-5'>
                    <Link to="/learn">Learn with me</Link>
                </li>
            </ul>
         </nav>
    </>
  )
}

export default Header