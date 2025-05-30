import React from 'react';
import Nandhu from '../assets/Nandhu.jpg';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <div className='bg-gradient-to-br from-black via-gray-900 to-black text-white text-center py-20 px-4'>
      <img
        src={Nandhu}
        alt="Nandakishor"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover shadow-lg border-4 border-blue-500 transform transition-transform duration-300 hover:scale-105'
      />
      
      <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
        Hi, I'm{' '}
        <span className='bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>
          Nandakishor
        </span>
      </h1>

      <h2 className='text-xl md:text-2xl font-medium text-gray-300 mb-6'>
        <Typewriter
          words={['Full-Stack Developer', 'Mobile Service Engineer', 'Content Creator']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      <p className='max-w-xl mx-auto text-gray-400 text-lg'>
        I specialize in building fast, responsive, and user-friendly websites & applications – plus I fix phones and create tech content!
      </p>

      <div className='mt-10 flex flex-wrap justify-center gap-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full shadow-md'>
          Contact With Me
        </button>
        <button className='bg-gradient-to-r from-pink-500 to-yellow-400 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full shadow-md'>
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
