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
        threshold: 0.6, // Trigger when 60% of the component is in view
      });
    
    return(
        <div className='w-full h-full mt-[1.4rem] flex flex-col items-center justify-center relative z-0'>
            <div className='flex w-full flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center gap-9'>

            <div className='flex flex-col items-center md:items-center lg:items-start justify-center md:justify-normal lg:justify-normal sm:w-full md:w-full lg:w-[31rem]'>
            <Reveal>
                <h3 className='text-white font-light text-[11px] margarine-regular tracking-[2px]'>
                    Software Developer
                </h3>
                </Reveal>
                

                <div className='sm:w-[60%] h-[10rem] md:h-[4rem] lg:h-[5rem] md:w-full lg:w-full px-5 md:px-0 lg:px-0 text-center md:text-center lg:text-start mb-1 md:mb-1 lg:mb-1 mt-1 md:mt-1 lg:mt-1'>
                <TextAnimation />
                </div>

                <Reveal>
                <div className='w-full md:w-full mt-2'>
                <p className='text-sm w-full text-center text-white playwrite-au-nsw-text'>
                I build responsive, user-friendly web and mobile applications using modern technologies and I believe in writing clean, maintainable code and delivering products that not only meet but exceed client expectations.
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


                    <Link to='https://www.linkedin.com/in/abdulhamid-abdulsalam-ba3634331'>
                    <div className='icons p-2'>

                    <FaLinkedin className='' />
                    </div>
                    </Link>


                    <Link to='https://x.com/Abdul_Lanre001?t=qx5JMSagM_F_vAwG7i-Y5Q&s=08'>
                    <div className='icons p-2'>
                    <BsTwitterX className='' />
                    </div>
                    </Link>
                </div>
                </Reveal>
            </div>
            
            <div className='order-1 w-full md:w-fit lg:w-fit lg:order-none mb-8 lg:mb-0 flex-col items-center justify-center'>
            <Photo/>
            </div>
            </div>


            {/* container */}
            <div className='w-full mt-[2rem] flex justify-center items-center text-white'>
            <Reveal>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-3 md:gap-10 lg:gap-20 px-3'>

            <div className='flex items-center justify-center gap-3'>
                <h4 ref={ref} className='text-6xl dancing-script-topic'><NumberCounter inView={inView} targetNumber={2} duration={100}/></h4>
                <p className='text-xs margarine-regular'>
                    Years of <br/> experience
                </p>
            </div>

            <div className='flex items-center justify-center gap-3'>
                <h4 className='text-6xl dancing-script-topic'><NumberCounter inView={inView} targetNumber={4} duration={200}/></h4>
                <p className='text-xs margarine-regular'>
                    Major projects<br/>completed
                </p>
            </div>

            <div className='flex items-center justify-center gap-3'>
                <h4 className='text-6xl dancing-script-topic'><NumberCounter inView={inView} targetNumber={10} duration={400}/></h4>
                <p className='text-xs margarine-regular'>
                    Technologies <br/> mastered
                </p>
            </div>

            <div className='flex items-center justify-center gap-3'>
                <h4 className='text-6xl dancing-script-topic'><NumberCounter inView={inView} targetNumber={189} duration={4000}/></h4>
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