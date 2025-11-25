
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


export default function Hero() {
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
            <div className='w-full md:w-full mt-2'>
              <p className='text-sm w-full text-center text-white playwrite-au-nsw-text hero-text'>
                I build responsive, user-friendly web and mobile applications using modern technologies and I believe in writing clean, maintainable code and delivering products that not only meet but exceed client expectations.
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
                <NumberCounter inView={inView} targetNumber={4} duration={200} />
              </h4>
              <p className='text-xs margarine-regular'>Major projects<br />completed</p>
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
        <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Abdulsalam-Hamid-Lanre-FS.pdf"
            download="Abdulsalam_Abdulhamid_CV.pdf"
            className="inline-flex items-center mt-[3rem] gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-900 hover:text-green-300 text-green-500 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
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


        <motion.button className={'bg-transparent text-white hover:bg-green-400 hover:text-white transition-all duration-200 border-1 border-green-400 p-5 w-[10rem] mt-[3rem]'}
        whileHover={{ scale: 1.1 }}
        >
            <Link href={'https://calendly.com/abdulsalamabulhamidarnold/30min'} target='_blank' className='font-bold py-2 px-4 rounded-full mt-[3rem]'>
                Book a Call
            </Link>
        </motion.button>
    </div>
  );
}
