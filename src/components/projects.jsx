import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import { useMediaQuery } from 'react-responsive';
import Reveal from './Reveal';
import project from '../assets/project1.png'
import project3 from '../assets/project3.png'

import project2 from '../assets/project2.png'
import project4 from '../assets/project4.png'





export default function Project(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, 
        });
      }, []);
      const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    return(
        <div className='w-full h-full mt-[1.4rem] flex flex-col items-center justify-center relative z-[1]'>
            <h1 className='text-6xl dancing-script-topic text-white links'
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                Projects
            </h1>


            <Reveal>
            <div className='px-4 flex flex-col items-center justify-center'>
            <p className='text-[18px] margarine-regular mt-[2rem] sm:w-full md:w-full lg:w-[60%] text-white'>Here is a collection of projects that showcase my skills and experience in full-stack web development. From small personal projects to large-scale applications, each project reflects my dedication to building efficient, scalable, and user-friendly web solutions.</p>
            </div>
            </Reveal>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center mt-[4rem] gap-5 md:gap-9 lg:gap-14 px-2'>

            <Link to='https://login-nu-snowy.vercel.app'>
            <div className='flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[0.56rem] overflow-hidden sm:w-[17rem] md:w-[18rem] lg:w-[18rem] p-5 bg-[rgb(24,24,24)] text-white icon-box'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
          data-aos-offset={isBigScreen ? '10' : '2'}>
        <div className='relative'>
                <motion.img src={project4} alt='return of the city' className='w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                <div className='overlay'></div>
                </div>
                <div className="mt-[0.5rem]">

                <h4 className='text-xs'>Frontend</h4>
                <Reveal>
                  <h3 className="text-lg font-bold dancing-script-big">A frontend project based on login pages of some popular social media platforms.</h3>
                </Reveal>
                  
                  <Reveal>
                  <p><strong>Technologies Used:</strong> React, Tailwindcss, HTML, CSS</p>
                 </Reveal>
                </div>
                </div>
                </Link>


              <Link to='https://archbuild.vercel.app/'>
                <div className='flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[0.56rem] overflow-hidden sm:w-[17rem] md:w-[18rem] lg:w-[18rem] p-5 text-white icon-box'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
          data-aos-offset={isBigScreen ? '10' : '2'}>
        <div className='relative'>
                <motion.img src={project2} alt='return of the city' className='w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                <div className='overlay'>
                
                </div>
                </div>
                <div className="mt-[0.5rem]">

                <h4 className='text-xs uppercase dancing-script-topic mb-2'>Architectural website</h4>
                <Reveal>
                  <p className="text-sm font-extralight margarine-regular">A modern architectural website built with React, showcasing a variety of architectural projects with interactive features and a sleek design.Also involving: Responsive Design, Project Gallery, People's Gallery, Detailed Project Pages. Detailed People's Pages, Contact Form, Animation and Transitions.  </p>
                </Reveal>
                  
                  <Reveal>
                  <p className='mt-2'><strong>Technologies Used:</strong> React, CSS, HTML, Tailwind, API Integration, Framer-motion</p>
                 </Reveal>
                </div>
                </div>
                </Link>


                <Link to='https://archbuild-api.vercel.app/'>
                <div className='flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[0.56rem] overflow-hidden sm:w-[17rem] md:w-[18rem] lg:w-[18rem] p-5 text-white icon-box'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
          data-aos-offset={isBigScreen ? '10' : '2'}>
        <div className='relative'>
                <motion.img src={project3} alt='return of the city' className='w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                <div className='overlay'>
                
                </div>
                </div>
                <div className="mt-[0.5rem]">

                <h4 className='text-xs uppercase dancing-script-topic mb-2'>Node.js RESTful API for an architectural website</h4>
                <Reveal>
                  <p className="text-sm font-extralight margarine-regular">A robust and scalable RESTful API built with Node.js, providing endpoints for [employee list and info, list of projects and blogs].  </p>
                </Reveal>

                <h4 className='mt-4'>
                  Routes involved:
                </h4>

                <ul className='playwrite-au-nsw-text text-sm mt-1'>
                  <li>GET /api/peopleList</li>
                  <li>GET /api/peopleList/:id</li>
                  <li>GET /api/projectList</li>
                  <li>GET /api/projectList/:id</li>
                  <li>GET /api/itemList</li>
                  <li>GET /api/itemList/:id</li>
                </ul>
                  
                  <Reveal>
                  <p className='mt-2'><strong>Technologies Used:</strong>  Node.js, Express and vercel</p>
                 </Reveal>
                </div>
                </div>
                </Link>

            </div>
        </div>
    )
}