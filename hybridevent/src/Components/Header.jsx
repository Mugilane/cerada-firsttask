import React from 'react'

const Header = () => {
  return (
    <>
      <nav class="bg-transparent text-white">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
          <img src="https://icsap.co.in/assets/logo-icsap-ffCoeNzf.png" alt="" className='lg:w-40 bg-white md:w-20 smw' />
          <div class="hidden md:flex space-x-4 lg:text-xl text-white gap-6 p-1 font-serif md:text-xs md:gap-1">
            <a href="#home" class="hover:text-green-300 hover:underline hover:underline-offset-6 ">Home</a>
            <a href="#about" class="hover:text-green-300 hover:underline hover:underline-offset-6 ">About</a>
            <a href="#services" class="hover:text-green-300 hover:underline hover:underline-offset-6 ">Session Track</a>
            <a href="#services" class="hover:text-green-300 hover:underline hover:underline-offset-6 ">Paper Submission</a>
            <a href="#services" class="hover:text-green-300 hover:underline hover:underline-offset-6 ">Publication</a>
            <a href="#contact" class="hover:text-green-300 hover:underline hover:underline-offset-6 ">Registration</a>
            <a href="#contact" class="hover:text-green-300 hover:underline hover:underline-offset-6 ">Venue</a>
            <a href="#contact" class="hover:text-green-300 hover:underline hover:underline-offset-6 ">FAQ</a>
            <a href="#contact" class="hover:text-green-300 hover:underline hover:underline-offset-6 ">Contact</a>
          </div>
          <button id='menu-button' class="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header