import {motion} from 'framer-motion';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useMediaQuery } from 'react-responsive';
import Reveal from './Reveal';
import { Link } from 'react-router-dom'



export default function Services(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: false, // Whether animation should happen only once
        });
      }, []);
    
      // Define media query hooks
      const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
      
    return(
        <div className='w-full h-full mt-[1.4rem] flex flex-col items-center justify-center relative z-[1]'>
        <div className='flex flex-col items-center justify-center gap-3 px-2'>

           <h1 className='text-6xl dancing-script-topic text-white links' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>My Services</h1> 

        <Reveal>
           <p className='text-white margarine-regular text-sm'>Transforming ideas into digital realities with top-notch development services.</p>
           </Reveal>

        <Reveal>
        <div className='mt-[1rem] flex items-center justify-center'>
           <p className='text-white margarine-regular text-sm sm:w-full md:w-full lg:w-[66%]'>With a deep passion for technology and a commitment to excellence, I offer a range of development services designed to help you achieve your digital goals. Whether you're looking to build a new application, improve your website, or create a custom solution, I’ve got you covered.</p>
           </div>
           </Reveal>
           </div>

        <div className='flex flex-col items-center justify-center gap-3 mt-[2rem] px-2'>
        <h2 className='text-2xl dancing-script-topic text-white playwrite-au-nsw-text' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>Service Offerings</h2>

<Reveal>

        <div className="flex flex-col items-center justify-center md:justify-center lg:justify-start md:flex-col lg:flex-row gap-4">
    <h3 className='text-white dancing-script-topic text-lg'>Full-Stack Web Development:</h3>
    <div className='w-[80%] '>
    <p className='text-white margarine-regular text-sm sm:w-full md:w-full lg:w-[66%]'>Creating robust, scalable web applications using React and Node.js. From dynamic front-end interfaces to powerful back-end systems, I build comprehensive solutions tailored to your needs.</p>
    </div>
  </div>
  </Reveal>


<Reveal>
  <div className="flex flex-col items-center justify-center md:justify-center lg:justify-start md:flex-col lg:flex-row gap-3">
    <h3 className='text-white dancing-script-topic text-lg'>Mobile App Development:</h3>
    <div>
    <p className='text-white margarine-regular text-sm sm:w-full md:w-full lg:w-[66%]'>Building seamless mobile applications with React Native for both iOS and Android. Delivering high-performance, cross-platform apps that provide an outstanding user experience.</p>
    </div>
  </div>
  </Reveal>

    
<Reveal>
  <div className="flex flex-col items-center justify-center md:justify-center lg:justify-start md:flex-col lg:flex-row gap-3">
    <h3 className='text-white dancing-script-topic text-lg'>API Development:</h3>
    <div>
    <p className='text-white margarine-regular text-sm sm:w-full md:w-full lg:w-[66%]'>Designing and implementing efficient and secure APIs with Node.js. Ensuring smooth integration and communication between your applications and third-party services.</p>
    </div>
  </div>
  </Reveal>



<Reveal>
  <div className="flex flex-col items-center justify-center md:justify-center lg:justify-start md:flex-col lg:flex-row gap-3">
    <h3 className='text-white dancing-script-topic text-lg'>Server-Side Rendering:</h3>
    <div>
    <p className='text-white margarine-regular text-sm sm:w-full md:w-full lg:w-[66%]'>Enhancing web application performance and SEO with Next.js. Providing fast load times and improved search engine visibility for your web projects.</p>
    </div>
  </div>
  </Reveal>


<Reveal>
  <div className="flex flex-col items-center justify-center md:justify-center lg:justify-start md:flex-col lg:flex-row gap-3">
    <h3 className='text-white dancing-script-topic text-lg'>UI/UX Design:</h3>
    <div>
    <p className='text-white margarine-regular text-sm sm:w-full md:w-full lg:w-[66%]'>Crafting engaging and user-friendly interfaces with modern design principles. Focusing on creating intuitive and visually appealing user experiences.</p>
    </div>
  </div>
  </Reveal>


<Reveal>
  <div className="flex flex-col items-center justify-center md:justify-center lg:justify-start md:flex-col lg:flex-row gap-3">
    <h3 className='text-white dancing-script-topic text-lg'>E-commerce Solutions:</h3>
    <div>
    <p className='text-white margarine-regular text-sm sm:w-full md:w-full lg:w-[66%]'>Developing secure and scalable e-commerce platforms.</p>
    </div>
  </div>
  </Reveal>
        </div>

<Reveal>

        <div className='w-full flex flex-col items-center justify-center mt-[2rem]'>
        <h2 className='text-white margarine-regular text-lg'>Ready to Get Started?</h2>
        <p className='text-white margarine-regular text-sm mt-2'>If you're ready to take your project to the next level, let's chat! Contact me today to discuss how we can work together to achieve your goals.</p>
        <Link to='/contact'>
          <p className='text-white margarine-regular text-xl mt-2'>
          Contact Me
          </p>
        </Link>
        </div>
  </Reveal>


        </div>
    )
}