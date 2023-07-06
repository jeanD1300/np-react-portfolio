import React from 'react'
import Quiz from '../assets/Quiz.png'
import Form from '../assets/Form.png'
import Shop from '../assets/Shop.png'
import Blog from '../assets/Blog.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Quiz,
      href: 'https://github.com/',
    },
    {
      id: 2,
      src: Form,
      href: 'https://github.com/',
    },
    {
      id: 3,
      src: Shop,
      href: 'https://github.com/',
    },
    {
      id: 4,
      src: Blog,
      href: 'https://github.com/',
    },
  ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {portfolios.map(({ id, src, href }) => (

            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

              <img src={src} alt={src} className='rounded-md duration-200 hover:scale-105' />

              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' ><a href={href} target='_blank' rel="noreferrer">Demo</a></button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Code</button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Portfolio
