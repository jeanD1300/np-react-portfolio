import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 mr-auto ml-auto md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white sm:mt-24' >I'm a junior front-end developer. </h2>
          <p className='text-gray-300 py-4 max-w-md'>I have some experience in web development and front-end. I am passionate about building applications using React, Tailwind CSS, and other technologies. I am eager to expand my knowledge and continuously improve my skills.</p>
          <div>
          <br/>
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='pl-3 group-hover:rotate-90 duration-300'>
                <BsArrowRightCircle size={20}/>
              </span>
            </Link>
          </div>
        </div>
        <img src='https://images.unsplash.com/photo-1484665739383-a1069a82d4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxwcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' className='rounded-3xl w-1/4 ml-4 mx-3 sm:w-2/4'/>
      </div>
    </div>
  )
}

export default Home
