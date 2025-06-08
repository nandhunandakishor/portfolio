import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-black text-white px-6 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-50 shadow-md'>
      <div className='container mx-auto py-4 flex justify-between items-center'>
        <div className='text-xl font-bold'>Nandakishor</div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 items-center'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#services" className='hover:text-gray-400'>Services</a>
          <a href="#projects" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transition-transform duration-300 transform hover:scale-105'>
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-black px-6 pb-4 space-y-4'>
          <a href="#home" onClick={toggleMenu} className='block hover:text-gray-400'>Home</a>
          <a href="#about" onClick={toggleMenu} className='block hover:text-gray-400'>About Me</a>
          <a href="#services" onClick={toggleMenu} className='block hover:text-gray-400'>Services</a>
          <a href="#projects" onClick={toggleMenu} className='block hover:text-gray-400'>Projects</a>
          <a href="#contact" onClick={toggleMenu} className='block hover:text-gray-400'>Contact</a>
          <button className='w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transition-transform duration-300 transform hover:scale-105'>
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
