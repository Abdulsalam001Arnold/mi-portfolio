import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();

  return (
    <motion.nav className="bg-[rgb(29,28,34)] p-4"
     initial={{y: -100, opacity: 0.32}}
    animate={{ y: 0, opacity: 1,}}
    transition={{ease: 'easeOut',type: 'string', stiffness: 500,duration:0.5}}>
      <div className="container mx-auto flex justify-between items-center">

      <Link to='/'>
        <div className="text-white text-xl font-bold"><h1 className='text-6xl dancing-script-topic inline'>Abdulhamid</h1> <span className='text-3xl green'>.</span></div>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`fixed inset-y-0 right-0 bg-[rgb(29,28,34)] p-4 transform ${
            isOpen ? 'translate-x-0 z-50' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:transform-none lg:relative lg:flex lg:items-center lg:w-auto w-full lg:space-x-6`}
        >
          <div className="flex justify-between items-center">
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <ul className="lg:flex lg:space-x-6 text-white text-center lg:text-left">
            <li className='flex flex-col items-center justify-center gap-1 text-6xl md:text-4xl lg:text-[14px] mb-6 md:mb-5 lg:mb-0'>
            <Link
      to="/"
      className={`block py-2 px-4 links relative margarine-regular`}
    >
      Home
      <span
        className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'hover:w-full w-0'}`}
      ></span>
    </Link>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 text-6xl md:text-4xl lg:text-[14px] mb-6 md:mb-5 lg:mb-0'>
            <Link
      to="/about"
      className={`block py-2 px-4 links relative margarine-regular`}
    >
      About
      <span
        className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'hover:w-full w-0'}`}
      ></span>
    </Link>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 text-6xl md:text-4xl lg:text-[14px] mb-6 md:mb-5 lg:mb-0'>
              <Link to="/projects" className={`block py-2 px-4 links relative margarine-regular`}>My Projects
                <span className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/projects' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>

            <li className='flex flex-col items-center justify-center gap-1 text-6xl md:text-4xl lg:text-[14px]'>
              <Link to="/services" className={`block py-2 px-4 links relative margarine-regular`}>Services
                <span className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/services' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>

            <li className='flex flex-col items-center justify-center gap-1 text-6xl md:text-4xl lg:text-[14px]'>
              <Link to="/contact" className={`block py-2 px-4 links relative margarine-regular`}>Contact
                <span className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;





