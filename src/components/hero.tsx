'use client';
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TextAnimation from './text';
import Photo from './Photo';
import SocialLinks from './SocialLinks';
import Reveal from './Reveal';
import NumberCounter from './count';
import {motion} from "framer-motion";
gsap.registerPlugin(useGSAP);


const Hero = function () {
  const container = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  useGSAP(() => {
    gsap.from(".hero-header", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-text", {
      y: 30,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".hero-icons .icons", {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      delay: 0.6,
      duration: 0.8,
      ease: "back.out(1.7)"
    });
  }, { scope: container });

  return (
    <div ref={container} className='w-full h-full mt-[1.4rem] flex flex-col items-center justify-center relative z-0'>
      <div className='flex w-full flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center gap-9'>

        <div className='flex flex-col items-center md:items-center lg:items-start justify-center sm:w-full md:w-full lg:w-[31rem]'>
          <Reveal>
            <h3 className='text-white font-light text-[11px] margarine-regular tracking-[2px] hero-header'>
              Software Developer
            </h3>
          </Reveal>

          <div className='sm:w-[60%] h-[10rem] md:h-[4rem] lg:h-[5rem] md:w-full lg:w-full px-5 md:px-0 lg:px-0 text-center md:text-center lg:text-start mb-1 mt-1'>
            <TextAnimation />
          </div>

          <Reveal>
            <div className='w-full md:w-full mt-6'>
              <p className='text-sm w-full text-center lg:text-start text-white playwrite-au-nsw-text hero-text'>
                Production-ready software engineered for real users, payments, and scale.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <SocialLinks/>
          </Reveal>
        </div>

        <div className='order-1 w-full md:w-fit lg:w-fit lg:order-none mb-8 lg:mb-0 flex-col items-center justify-center'>
          <Photo />
        </div>
      </div>

      <div className='w-full mt-[2rem] flex justify-center items-center text-white'>
        <Reveal>
          <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center gap-3 md:gap-10 lg:gap-20 px-3'>

            <div className='flex items-center justify-center gap-3'>
              <h4 ref={ref} className='text-6xl dancing-script-topic'>
                <NumberCounter inView={inView} targetNumber={3} duration={100} />
              </h4>
              <p className='text-xs margarine-regular'>Years of <br /> experience</p>
            </div>

            <div className='flex items-center justify-center gap-3'>
              <h4 className='text-6xl dancing-script-topic'>
                <NumberCounter inView={inView} targetNumber={27} duration={400} />
              </h4>
              <p className='text-xs margarine-regular'>Technologies <br /> mastered</p>
            </div>

          </div>
        </Reveal>
      </div>

      {/* Featured Project Callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='w-full max-w-4xl mt-[4rem] px-4'
      >
        <div className='bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 md:p-8 shadow-2xl'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
            <h3 className='text-green-400 text-sm font-semibold tracking-wider uppercase'>Featured Project</h3>
          </div>
          
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-3'>De-Gemini</h2>
          <p className='text-gray-300 text-lg mb-4 leading-relaxed'>
            A fully operational cleaning services platform serving thousands of active users with booking, payments, and postcode-based service location.
          </p>
          
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
            <div className='bg-gray-800/50 rounded-lg p-3 text-center'>
              <p className='text-2xl font-bold text-green-400'>1000+</p>
              <p className='text-xs text-gray-400 mt-1'>Active Users</p>
            </div>
            <div className='bg-gray-800/50 rounded-lg p-3 text-center'>
              <p className='text-2xl font-bold text-green-400'>Stripe</p>
              <p className='text-xs text-gray-400 mt-1'>Payment Integration</p>
            </div>
            <div className='bg-gray-800/50 rounded-lg p-3 text-center'>
              <p className='text-2xl font-bold text-green-400'>JWT</p>
              <p className='text-xs text-gray-400 mt-1'>Secure Auth</p>
            </div>
            <div className='bg-gray-800/50 rounded-lg p-3 text-center'>
              <p className='text-2xl font-bold text-green-400'>Production</p>
              <p className='text-xs text-gray-400 mt-1'>Ready</p>
            </div>
          </div>

          <Link href='/projects' className='inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors'>
            View All Projects 
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </Link>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <div className='flex flex-col md:flex-row gap-4 mt-[3rem] items-center justify-center'>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/Lanre-Hamid.pdf"
          download="Abdulsalam_Abdulhamid_CV.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-900 hover:text-green-300 text-green-500 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <span>Download CV</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
        </motion.a>

        <motion.button 
          className='bg-transparent text-white hover:bg-green-400 hover:text-white transition-all duration-200 border-2 border-green-400 p-3 px-6 rounded-xl font-bold'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href='https://calendly.com/abdulsalamabulhamidarnold/30min' target='_blank'>
            Book a Call
          </Link>
        </motion.button>
      </div>

      {/* Sticky CTA Bar for mobile */}
      <div className='fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-green-500/30 p-4 z-50 md:hidden'>
        <div className='flex gap-3 justify-center'>
          <Link 
            href='/contact'
            className='flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors'
          >
            Contact Me
          </Link>
          <a 
            href='/Lanre-Hamid.pdf'
            download
            className='flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors'
          >
            Get CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Hero);