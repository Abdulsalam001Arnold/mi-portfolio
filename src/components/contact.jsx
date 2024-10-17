import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import { useMediaQuery } from 'react-responsive';
import Reveal from './Reveal';


export default function Contact(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, 
        });
      }, []);
      const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
    return(
        <div className="w-full h-full mt-[1.4rem] flex flex-col items-center justify-center relative z-[1]">
        <h1 className='text-6xl dancing-script-topic text-white links tracking-[2px]'
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                Contact Me
            </h1>


        <Reveal>
            <div className="px-4 flex flex-col items-center justify-center mt-[3rem]">
    <h1 className='playwrite-au-nsw-text text-2x text-white'>Get in Touch</h1>
    <p className='text-[18px] margarine-regular mt-[0.3rem] sm:w-full md:w-full lg:w-[60%] text-white'>I’d love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.</p>
  </div>
  </Reveal>


    <h2 className='text-white playwrite-au-nsw-text text-xl mt-[2rem]'data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        Contact Information
    </h2>

    <div className='text-white px-4 flex flex-col items-center justify-center mt-[2rem]'>

    <ul className='text-[18px] margarine-regular px-2 lg:px-4 flex flex-col items-center justify-center gap-1 md:gap-2 lg:gap-5'>

    <Reveal>
        <li>
            Email: abdulsalamabdulhamidlanre@gmail.com
        </li>
        </Reveal>

        <Reveal>
        <li>
        <Link to='https://github.com/Abdulsalam001Arnold'>
            Github: Abdulsalam001Arnold
            </Link>
        </li>
        </Reveal>


        <Reveal>
        <li>
        <Link to='https://github.com/Abdulsalam001Arnold'>
            Phone: +234 811 461 0449
            </Link>
        </li>
        </Reveal>
    </ul>

    </div>


    <h2 className='text-white playwrite-au-nsw-text text-xl mt-[2rem]'data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        Connect with me
    </h2>

    <div className='text-white px-2 flex flex-col items-center justify-center mt-[2rem]'>

    <ul className='text-[18px] margarine-regular px-3 flex flex-col items-center justify-center gap-5'>

    <Reveal>
        <li>
        <Link to='https://github.com/Abdulsalam001Arnold'>
            Github: Abdulsalam001Arnold
            </Link>
        </li>
        </Reveal>

        <Reveal>
        <li>
        <Link to='https://x.com/Abdul_Lanre001?t=qx5JMSagM_F_vAwG7i-Y5Q&s=08'>
            Twitter: @Abdul_Lanre001
            </Link>
        </li>
        </Reveal>


        <Reveal>
        <li>
            WhatsApp: +234 811 461 0449
        </li>
        </Reveal>

        <Reveal>
        <li>
        <Link to='https://www.linkedin.com/in/abdulhamid-abdulsalam-ba3634331'>
            LinkedIn: AbdulHamid Abdulsalam
            </Link>
        </li>
        </Reveal>
    </ul>

    </div>


    <div className="px-2">
    <h2 className='text-white playwrite-au-nsw-text text-2xl mt-[2rem]'data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>Let's Collaborate!</h2>

    <Reveal>        
    <p className='text-[18px] margarine-regular mt-[0.3rem] sm:w-full md:w-full lg:w-[60%] text-white'>If you have any questions, projects, or just want to say hi, don’t hesitate to send me a message. I’m always open to new opportunities and collaborations.</p>
    </Reveal>
  </div>

        </div>
    )
}