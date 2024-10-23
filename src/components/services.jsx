import {motion} from 'framer-motion';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useMediaQuery } from 'react-responsive';
import Reveal from './Reveal';
import { Link } from 'react-router-dom'
import { FaCode } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { GrSwift } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa6";

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


      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

      <motion.div className='px-4 border-[1.5px] shadow-md border-transparent rounded-[20px] hover:border-green-500 w-[18rem] transition-all duration-300 py-4 flex-col'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '2' : '2'}
      >
          <div className='flex-col gap-3'>
            <FaCode className='text-green-500 text-xl md:text-5xl lg:text-7xl'/>
            <div className='h-[4px] w-[26px] rounded-lg bg-green-500'></div>
          </div>

          <div className='mt-3 md:mt-4 lg:mt-7 flex-col items-center justify-center'>
          <h3 className='text-white mb-1 md:mb-3 lg:mb-4 dancing-script-topic text-lg md:text-xl lg:text-2xl'>Full-Stack Web Development:</h3>

          <p className='text-white margarine-regular text-sm md:text-lg lg:text-xl w-full'>Creating robust, scalable web applications using React and Node.js. From dynamic front-end interfaces to powerful back-end systems, I build comprehensive solutions tailored to your needs.</p>
          </div>
      </motion.div>


      <motion.div className='px-4 border-[1.5px] shadow-md border-transparent rounded-[20px] hover:border-green-500 w-[18rem] transition-all duration-300 py-4 flex-col'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '2' : '2'}
      >
          <div className='flex-col gap-3'>
          <div className='flex gap-2'>
          <TbBrandReactNative className='text-green-500 text-xl md:text-5xl lg:text-7xl'/>
          <SiKotlin className='text-green-500 text-xl md:text-5xl lg:text-7xl'/>
          <GrSwift className='text-green-500 text-xl md:text-5xl lg:text-7xl'/>
          </div>
            <div className='h-[4px] w-[26px] mt-3 rounded-lg bg-green-500'></div>
          </div>

          <div className='mt-3 md:mt-4 lg:mt-7 flex-col items-center justify-center'>
          <h3 className='text-white mb-1 md:mb-3 lg:mb-4 dancing-script-topic text-lg md:text-xl lg:text-2xl'>Mobile App Development:</h3>

          <p className='text-white margarine-regular text-sm md:text-lg lg:text-xl w-full'>As a versatile mobile developer, I build cross-platform using React Native leveraging the power of Typescript for spotless code. Additionally, I develop native features and enhance app performance using Swift for IOS and Kotlin for Android.</p>
          </div>
      </motion.div>

      <motion.div className='px-4 border-[1.5px] shadow-md border-transparent rounded-[20px] hover:border-green-500 w-[18rem] transition-all duration-300 py-4 flex-col'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '2' : '2'}
      >
          <div className='flex-col gap-3'>
            <FaServer className='text-green-500 text-xl md:text-5xl lg:text-7xl'/>
            <div className='h-[4px] w-[26px] rounded-lg bg-green-500'></div>
          </div>

          <div className='mt-3 md:mt-4 lg:mt-7 flex-col items-center justify-center'>
          <h3 className='text-white mb-1 md:mb-3 lg:mb-4 dancing-script-topic text-lg md:text-xl lg:text-2xl'>API Development:</h3>

          <p className='text-white margarine-regular text-sm md:text-lg lg:text-xl w-full'>Designing and implementing efficient and secure APIs with Node.js. Ensuring smooth integration and communication between your applications and third-party services.</p>
          </div>
      </motion.div>

      <motion.div className='px-4 border-[1.5px] shadow-md border-transparent rounded-[20px] hover:border-green-500 w-[18rem] transition-all duration-300 py-4 flex-col'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '2' : '2'}
      >
          <div className='flex-col gap-3'>
          <div className='flex'>
            <FaDatabase className='text-green-500 text-xl md:text-5xl lg:text-7xl'/>
            <SiMongodb className='text-green-500 text-xl md:text-5xl lg:text-7xl'/>
          </div>
            <div className='h-[4px] w-[26px] rounded-lg mt-3 bg-green-500'></div>
          </div>

          <div className='mt-3 md:mt-4 lg:mt-7 flex-col items-center justify-center'>
          <h3 className='text-white mb-1 md:mb-3 lg:mb-4 dancing-script-topic text-lg md:text-xl lg:text-2xl'> Database Management (MongoDB, 
            Mongoose):</h3>

          <p className='text-white margarine-regular text-sm md:text-lg lg:text-xl w-full'>Knowledgeable in designing and maintaining 
databases using MongoDB, with experience using 
Mongoose for schema-based data modeling and 
efficient querying.</p>
          </div>
      </motion.div>

      <motion.div className='px-4 border-[1.5px] shadow-md border-transparent rounded-[20px] hover:border-green-500 w-[18rem] transition-all duration-300 py-4 flex-col'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '2' : '2'}
      >
          <div className='flex-col gap-3'>
          <BsFillShieldLockFill className='text-green-500 text-xl md:text-5xl lg:text-7xl'/>
            <div className='h-[4px] w-[26px] rounded-lg mt-3 bg-green-500'></div>
          </div>

          <div className='mt-3 md:mt-4 lg:mt-7 flex-col items-center justify-center'>
          <h3 className='text-white mb-1 md:mb-3 lg:mb-4 dancing-script-topic text-lg md:text-xl lg:text-2xl'> Authentication & Authorization:</h3>

          <p className='text-white margarine-regular text-sm md:text-lg lg:text-xl w-full'>Expertise in implementing secure authentication 
methods using JWT, Firebase, Clerk, and social 
logins (Google, Facebook) via Passport.</p>
          </div>
      </motion.div>

      <motion.div className='px-4 border-[1.5px] shadow-md border-transparent rounded-[20px] hover:border-green-500 w-[18rem] transition-all duration-600 py-4 flex-col'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '2' : '2'}
      >
          <div className='flex-col gap-3'>
          <FaCodeBranch className='text-green-500 text-xl md:text-5xl lg:text-7xl'/>
            <div className='h-[4px] w-[26px] rounded-lg mt-3 bg-green-500'></div>
          </div>

          <div className='mt-3 md:mt-4 lg:mt-7 flex-col items-center justify-center'>
          <h3 className='text-white mb-1 md:mb-3 lg:mb-4 dancing-script-topic text-lg md:text-xl lg:text-2xl'>Version Control and Deployment:</h3>

          <p className='text-white margarine-regular text-sm md:text-lg lg:text-xl w-full'> Proficient in Git, utilizing it for version control and 
collaborating with other developers.
 Experience deploying and managing applications 
using cloud services like Firebase and AWS for 
hosting, authentication, and database management.</p>
          </div>
      </motion.div>
      </div>
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