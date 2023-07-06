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
      href: 'https://clever-syrniki-712962.netlify.app',
    },
    {
      id: 2,
      src: Form,
      href: 'https://form-gender5486.netlify.app',
    },
    {
      id: 3,
      src: Shop,
      href: 'https://vermillion-shopping.netlify.app',
    },
    {
      id: 4,
      src: Blog,
      href: 'https://bucolic-blog.netlify.app',
    },
  ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {portfolios.map(({ id, src, href }) => (

            <div key={id} className='shadow-md shadow-gray-600 rounded-lg w-fit'>

              <img src={src} alt={src} className='rounded-md duration-200 hover:scale-105' />

              <div className='flex items-center justify-center'>
                <button className='w-1/4 px-auto py-1 m-3 duration-200 hover:scale-105' ><a href={href} target='_blank' rel="noreferrer">Demo</a></button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Portfolio
