import Head from 'next/head';
import {AiFillLinkedin, AiFillGithub, AiFillMail, AiFillMessage} from 'react-icons/ai';
import Image from 'next/image';
import avatar from '../public/avatar.jpg';
import Link from 'next/link';
import wakify from '../public/wakify.png';
import acebook from '../public/acebook-signup.png';
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Moses Osho Portfolio</title>
        <meta name="description" content="Moses Osho's Software developer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/avatar.jpg" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <div className="relative top-0 right-100% px-5 py-5 ">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white dark:bg-gray-400 dark:text-gray-800 dark:hover:bg-white"
                >
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} 
                  className="h-6 w-6 right-0 " aria-hidden="true" />
                </button>
        </div>
        <section className='min-h-screen'>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Moses Osho</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Full-stack and Mobile App Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto'>I'm a software engineer based in London, UK specializing in building digitial solutions and mobile applications.</p>
          </div>
          <div className='text-5xl flex justify-center gap-20 py-3 text-gray-600'>
            <Link href='https://www.linkedin.com/in/moses-osho-161b20120/'><AiFillLinkedin /></Link>
            <Link href='https://github.com/itsmosho'><AiFillGithub /></Link>
            <Link href='mailto: mosho@live.co.uk?subject= &body= '><AiFillMail /></Link>
          </div>
          <div className='mx-auto w-80 h-80 mt-20 md:h-96 md:w-96'>
            <Image alt='avatar' className='rounded-full' src={avatar} />
          </div>
        </section>
          <br id='about'/>
        <section>
          <div>
          <br />
          <br />
            <h3 className='text-center text-teal-500 text-3xl py-1'>About</h3>
            <p className='text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            Hi! My name is Moses. <br />
            My interest in software development started back in 2010. <br /> Modding online games using Cheat Engine
            which gave me a real taste of developing at an early age - and to me it was just fun!
            <br/>
            Fast-forward to today, my quest for knowledge has led me to learning a plethora of skills: <br /> 
            music production, sound engineering and marketing as well as software development.
            <br/>
            To further grow as a developer, I attended and graduated from Makers Academy's software development bootcamp
            <br/>

            My goal is to build well tested, functional web and mobile applications that solve real world problems and provide users with an experience to remember!
            </p>
            <div className='text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            You can find out more about me on my <span className='text-blue-500'><a href="https://www.linkedin.com/in/moses-osho-161b20120/">LinkedIn</a></span>  page, 
            or check out my <span className='text-blue-500'><a href="https://github.com/itsmosho">GitHub</a></span> to see what I'm currently working on.
            </div>
          </div>
        </section>
        <br/>
        <section id='skills'>
        <div>
          <br />
          <br />
          <br />
            <h3 className='text-teal-500 text-center text-3xl py-1'>Skills</h3>
            <p className='text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>Some of my skills and technologies include: </p>
            <div className='text-center columns-2 text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            JavaScript<br/>
            Ruby<br/>
            React<br/>
            HTML<br/>
            CSS<br/>
            React Native<br/>
            Node.js<br/>
            Tailwind<br/>
            Next.js<br/>
            Express.js<br/>
            MongoDB<br/>
            PostgreSQL<br/>    
            </div>
          </div>
        </section>
        <br />
        <section id='projects'>
        <br />
          <div className='flex flex-col gap-10 py-10'>
            <h3 className='text-teal-500 text-center text-3xl py-1'>Projects</h3>
          </div>
          <div className=' flex-1'>
            <h4 className='text-red-400 text-center text-3xl py-1'>
            <Link href='https://github.com/itsmosho/wakify'> Wakify </Link></h4>
            <p className='text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            A mobile phone application that matches your mood to a Spotify playlist. Built with React Native, AsyncStorage, CSS. Tested with Cypress and Jest.</p>
            <div><Image 
            src={wakify} 
            className='rounded-lg object-cover' 
            width={'100%'} 
            height={'100%'} 
            alt='wakify'
            layout="responsive"/></div>
          </div>
          <br/>
          <div className='basis 1 flex-1'>
          <h4 className='text-red-400 text-center text-3xl py-1'><Link href='https://github.com/itsmosho/acebook'>
           Acebook </Link></h4>
          <p className='text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          A social media application similar to Facebook, with the ability to post, comment like posts and add friends.<br/> 
          Built with Node.js, MongoDB, Express, handlebars, HTML and CSS. Tested with Jest and cypress.</p>
            <div><Image 
            src={acebook}
             className='rounded-lg object-cover'
              width={'100%'}
               height={'100%'}
               alt='acebook'
                layout="responsive"/></div>
          </div>
          <br/>
          <div className='basis 1 flex-1'>
          <h4 className='text-red-400 text-center text-3xl py-1'><Link href='https://github.com/itsmosho/chitter-challenge'>
           Chitter </Link></h4>
          <p className='text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          A social media application similar to twitter.<br/>
          Built with Ruby, Sinatra, and PSQL. Tested with RSpec.</p>
          </div>
        </section>

      </main>
    </div>
  )
}
