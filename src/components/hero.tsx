
'use client';
import React, { useRef } from 'react';
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { FaLinkedin, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TextAnimation from './text';
import Photo from './Photo';
import SocialLinks from './SocialLinks';
import Reveal from './Reveal';
import NumberCounter from './count';

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
                <NumberCounter inView={inView} targetNumber={2} duration={100} />
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
    </div>
  );
}
