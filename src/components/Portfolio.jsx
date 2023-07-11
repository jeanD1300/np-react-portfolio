import React from 'react'
import Quiz from '../assets/Quiz.png'
import quiznapat from '../assets/quiznapat.png'
import Form from '../assets/Form.png'
import Formio from "../assets/form-hook.png"
import Shop from '../assets/Shop.png'
import digitalclock from "../assets/digitalclock.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Quiz,
      href: 'https://quiz-reacttest11.netlify.app',
      title: 'Quiz Test'
    },
    {
      id: 2,
      src: Formio,
      href: 'https://easily-formwth-hook.netlify.app',
      title: "Form with IO"
    },
    {
      id: 3,
      src: digitalclock,
      href: 'https://digitalclock-withjs.netlify.app/',
      title: "Digital Clock"
    },
    {
      id: 4,
      src: quiznapat,
      href: 'https://clever-syrniki-712962.netlify.app/',
      title: "Napat's Quiz"
    },
    {
      id: 5,
      src: Shop,
      href: 'https://chop-shopping.netlify.app',
      title: "Chop Shop"
    }, {
      id: 6,
      src: Form,
      href: 'https://form-validate-np1300.netlify.app/',
      title: "Validate Form"
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

          {portfolios.map(({ id, src, href, title }) => (

            <div key={id} className='shadow-md shadow-gray-600 rounded-lg w-fit'>

              <a href={href}  target='_blank' rel="noreferrer" >
                <img src={src} alt={src} className='rounded-md duration-200 hover:scale-105' />
              </a>
              <div className='flex items-center justify-center'>
                <button className='w-3/4 px-auto py-1 m-3 duration-200 hover:scale-105' ><a href={href} target='_blank' rel="noreferrer">{title}</a></button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Portfolio
