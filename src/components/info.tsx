
'use client'

import { TiHtml5 } from "react-icons/ti";
import AnimatedTitle from "./Animated";
import React, { useEffect, useState } from "react";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import AOS from "aos";
import { TbBrandReactNative } from "react-icons/tb";
import "aos/dist/aos.css"; // Import AOS styles
import { useMediaQuery } from "react-responsive";
import Reveal from "./Reveal";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";
import { SiClerk } from "react-icons/si";
import { SiPassport } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import Experience from "@/components/Experience";

export default function Info() {
  const [offset, setOffset] = useState(2)
  useEffect(() => {
    setOffset(10)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);

  // Define media query hooks
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <div className="w-full h-full mt-[1.4rem] flex flex-col items-center justify-center relative z-[1]">
      <h1 className="text-6xl dancing-script-topic text-white links">
        About me
      </h1>

        <div className="mt-[2rem]">
            <h1 className="text-xl dancing-script-topic text-white links mt-[1rem] text-[16px] md:text-[20px] lg:text-[25px]">
                My Journey
            </h1>

            <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] mt-[0.4rem]">
                From curious beginner to instructor — my journey in tech has been all about
                learning, building, and sharing knowledge.
            </p>

            {/* Timeline Container */}
            <div className="relative mt-10 pl-6 space-y-12">
                {/* Codar Institute */}
                <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-[8px] top-[-12px] w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <h2 className="text-white text-xl font-semibold">Codar Institute, Lagos</h2>
                    <p className="text-gray-400 text-sm mb-1">2023 - 2024</p>
                    <p className="text-gray-300 leading-relaxed margarine-regular">
                        I began my coding journey at <span className="text-white font-medium">Codar Institute</span>,
                        where I learned the fundamentals of web development and built a solid
                        foundation in HTML, CSS, and JavaScript. This period sparked my passion
                        for creating things that live on the web.
                    </p>
                </div>

                {/* Self-taught Growth */}
                <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-[8px] top-[-12px] w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <h2 className="text-white text-xl font-semibold">Self-taught Developer</h2>
                    <p className="text-gray-400 text-sm mb-1">2024</p>
                    <p className="text-gray-300 leading-relaxed margarine-regular">
                        After my foundation at Codar, I continued to learn independently — diving
                        deep into <span className="text-white font-medium">React, TypeScript, and Next.js</span>.
                        I spent months researching, building projects, and debugging through
                        real-world challenges. This is where I transformed curiosity into skill.
                    </p>
                </div>

                {/* Internship - Cloud Enthusiast */}
                <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-[8px] top-[-12px] w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                    <h2 className="text-white text-xl font-semibold">Cloud Enthusiast</h2>
                    <p className="text-gray-400 text-sm mb-1">Intern → Developer | 2024 - 2025</p>
                    <p className="text-gray-300 leading-relaxed margarine-regular">
                        I joined <span className="text-white font-medium">Cloud Enthusiast</span> as an intern,
                        and through dedication and results, I earned a full-time role. During this
                        period, I built scalable apps, contributed to the backend, and was deeply
                        involved in team debugging sessions — leveling up as a true software
                        engineer.
                    </p>
                </div>

                {/* Bloomy Technologies */}
                <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-[8px] top-[-12px] w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                    <h2 className="text-white text-xl font-semibold">Bloomy Technologies</h2>
                    <p className="text-gray-400 text-sm mb-1">Instructor / Mentor | 2025 - Present</p>
                    <p className="text-gray-300 leading-relaxed margarine-regular">
                        Transitioning into a mentor role, I’ve helped aspiring developers unlock
                        their potential and land their first opportunities. Teaching at
                        <span className="text-white font-medium"> Bloomy</span> revealed a new passion —
                        guiding others through code while refining my own understanding of software
                        design and communication.
                    </p>
                </div>

                {/* Ongoing Growth */}
                <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-[8px] top-[-12px] w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
                    <h2 className="text-white text-xl font-semibold">Still Growing...</h2>
                    <p className="text-gray-400 text-sm mb-1">Present & Beyond</p>
                    <p className="text-gray-300 leading-relaxed margarine-regular">
                        My journey is far from over — I’m continuously expanding my expertise in
                        <span className="text-white font-medium"> cloud services, system design, and AI-powered applications</span>.
                        Every project sharpens my craft and prepares me for greater challenges ahead.
                    </p>
                </div>
            </div>
        </div>


        <Experience/>
      <h1
        className="text-2xl margarine-regular text-white links mt-[4rem]"
        data-aos={isBigScreen ? "fade-up" : "fade-up"}
        data-aos-offset={offset}>
        My Process
      </h1>

      <ol className="w-full flex flex-col items-center justify-center gap-3 mt-[2rem] px-2 text-[16px] md:text-[20px] lg:text-[25px]">
        <Reveal>
          <li className="margarine-regular text-white">
            <strong>Consultation:</strong> Understanding your needs and defining
            project scope.
          </li>
        </Reveal>

        <Reveal>
          <li className="margarine-regular text-white">
            <strong>Planning:</strong> Creating a detailed project plan and
            timeline.
          </li>
        </Reveal>

        <Reveal>
          <li className="margarine-regular text-white">
            <strong>Development:</strong> Building your solution with regular
            updates.
          </li>
        </Reveal>

        <Reveal>
          <li className="margarine-regular text-white">
            <strong>Testing:</strong> Thoroughly testing to ensure everything
            works perfectly.
          </li>
        </Reveal>

        <Reveal>
          <li className="margarine-regular text-white">
            <strong>Launch:</strong> Deploying the project and ensuring a smooth
            launch.
          </li>
        </Reveal>

        <Reveal>
          <li className="margarine-regular text-white">
            <strong>Support:</strong> Providing ongoing support and maintenance.
          </li>
        </Reveal>
      </ol>

      <h1
        className="text-2xl margarine-regular text-white links mt-[4rem]"
        data-aos={isBigScreen ? "fade-up" : "fade-up"}
        data-aos-offset={offset}>
        Skills & Expertise
      </h1>

      <Reveal>
        <p className="text-xs margarine-regular text-white mt-[1rem] text-[16px] md:text-[20px] lg:text-[25px]">
          I have extensive experience in the following technologies and tools:
        </p>
      </Reveal>

      <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-[4rem] gap-4 md:gap-7 lg:gap-14">
        <li
          className="flex flex-col items-center justify-center"
          >
          <div className="icon-box p-5">
            <TiHtml5 className="text-white text-[7rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">HTML</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <IoLogoCss3 className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">
            Basic CSS
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <RiTailwindCssFill className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">
            Tailwindcss
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <FaBootstrap className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">
            Bootstrap
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <IoLogoJavascript className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">
            Modern Javascript
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <SiTypescript className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">
            Typescript
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <RiFirebaseFill className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">
            Firebase
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <SiClerk className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Clerk</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <AnimatedTitle/>
          </div>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <FaNode className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Node.js</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <SiExpress className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Express.js</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <SiMongoose className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Mongoose.js</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <SiPassport className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Passport js</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <SiMongodb className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Mongodb</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <FaReact className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">
            React.js
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <SiRedux className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">
            Redux
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <TbBrandReactNative className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">
            React Native
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          <div className="icon-box p-5">
            <RiNextjsFill className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Next.js</p>
        </li>
      </ul>
    </div>
  );
}
