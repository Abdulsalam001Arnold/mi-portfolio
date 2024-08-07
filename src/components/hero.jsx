import TextAnimation from '../components/text'
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';
import Photo from './Photo';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

import NumberCounter from './count'

export default function Hero() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.1, // Trigger when 10% of the component is in view
      });
    
    return(
        <div className='w-full h-full mt-[1.4rem] flex flex-col items-center justify-center relative z-[1]'>
            <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center gap-9'>


            <div className='flex flex-col items-center md:items-center lg:items-start justify-center md:justify-normal lg:justify-normal sm:w-full md:w-full lg:w-[31rem]'>
            <Reveal>
                <h3 className='text-white font-light text-[11px] margarine-regular tracking-[2px]'>
                    Software Developer
                </h3>
                </Reveal>
                

                <div className='sm:w-[60%] md:w-full lg:w-full px-5 md:px-0 lg:px-0 text-center md:text-center lg:text-start'>
                <TextAnimation />
                </div>

                <Reveal>
                <div className='w-full md:w-full'>
                <p className='text-sm w-full text-center mt-[1rem] text-white playwrite-au-nsw-text'>
                I build responsive, user-friendly web applications using modern technologies and I believe in writing clean, maintainable code and delivering products that not only meet but exceed client expectations.
                </p>
                </div>
                </Reveal>


                <Reveal>
                <div className='flex w-full items-center md:items-center lg:items-start justify-center md:justify-normal lg:justify-normal gap-4 mt-[1rem]'>
                <Link to='https://github.com/Abdulsalam001Arnold'>
                    <div className='icons p-2'>
                    <IoLogoGithub className='' />
                    </div>
                    </Link>


                    <Link to='/contact'>
                    <div className='icons p-2'>
                    <FaWhatsapp className='' />
                    </div>
                    </Link>


                    <Link to='https://www.linkedin.com/in/abdulhamid-abdulsalam-460a55321'>
                    <div className='icons p-2'>

                    <FaLinkedin className='' />
                    </div>
                    </Link>


                    <Link to='https://x.com/Abdul_Lanre001?t=QlSIMl2t1xF1zpa8Xn6wuA&s=08'>
                    <div className='icons p-2'>
                    <BsTwitterX className='' />
                    </div>
                    </Link>
                </div>
                </Reveal>
            </div>
            
            <div className='order-1 lg:order-none mb-8 lg:mb-0'>
            <Photo/>
            </div>


            </div>


            {/* container */}
            <div className='w-full mt-[2rem] flex justify-center items-center text-white'>
            <Reveal>
            <div className='w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-5 md:gap-10 lg:gap-20'>

            <div className='flex items-center justify-center w-fit gap-3'>
                <h4 ref={ref} className='text-6xl dancing-script-topic'><NumberCounter inView={inView} targetNumber={2} duration={100}/></h4>
                <p className='text-xs margarine-regular'>
                    Years of <br/> experience
                </p>
            </div>

            <div className='flex items-center justify-center w-fit gap-3'>
                <h4 className='text-6xl dancing-script-topic'><NumberCounter inView={inView} targetNumber={4} duration={200}/></h4>
                <p className='text-xs margarine-regular'>
                    Major projects<br/>completed
                </p>
            </div>

            <div className='flex items-center justify-center w-fit gap-3'>
                <h4 className='text-6xl dancing-script-topic'><NumberCounter inView={inView} targetNumber={9} duration={400}/></h4>
                <p className='text-xs margarine-regular'>
                    Technologies <br/> mastered
                </p>
            </div>

            <div className='flex items-center justify-center w-fit gap-3'>
                <h4 className='text-6xl dancing-script-topic'><NumberCounter inView={inView} targetNumber={289} duration={4000}/></h4>
                <p className='text-xs margarine-regular'>
                    Codes<br/> committed
                </p>
            </div>
            </div>
            </Reveal>
            </div>
        </div>

    )
}