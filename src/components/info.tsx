
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

      <div className="flex flex-col items-center md:items-center lg:items-start justify-center md:justify-normal lg:justify-normal mt-[3rem] px-4 text-[16px] md:text-[20px] lg:text-[25px]">
        <Reveal>
          <h1 className="text-white margarine-regular">
            Hello, I'm <span className="green">Abdulhamid Abdulsalam</span> – a
            Passionate Full-Stack Web Developer.
          </h1>
        </Reveal>
        <h1 className="text-xl dancing-script-topic text-white links mt-[1rem] text-[16px] md:text-[20px] lg:text-[25px]">
          My Journey
        </h1>
        <Reveal>
          <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] mt-[0.4rem]">
          I’m a full-stack web developer with a strong focus on building scalable, performant, and user-centric web applications. My journey began two years ago, and since then I’ve dedicated myself to constant growth, solving real-world problems, and keeping pace with the ever-evolving tech landscape.{" "}
            <FaFaceSmileBeam className="text-white inline" />.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] mt-[1rem]">
          Along the way, I became self-taught in TypeScript and Next.js, mastering them through hands-on projects and real-world challenges. These technologies have become some of my strongest tools for delivering production-ready applications and clean, maintainable code.
          </p>
        </Reveal>

        <Reveal>
          <div className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] mt-[1rem]">
          One of the pivotal milestones in my journey was a 6-month internship with a tech company, where I built critical platform features including:

          <ul className="flex flex-col gap-[10px]">
            <li>APIs for Google and Facebook sign-up.</li>
            <li>OAuth authentication flows.</li>
            <li>A file upload system for user-generated content.</li>
            <li>A profile-fetching API for efficient user access and updates.</li>
          </ul>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] px-1 mt-[1rem]">
          My performance led directly to a full-time role, where I’ve continued to design, develop, and ship impactful features while collaborating with teams to build reliable systems at scale.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] px-1 mt-[1rem]">
          In parallel, I’ve worked as a Coding/IT Instructor, where I teach and mentor aspiring developers. My ability to simplify complex concepts, debug effectively, and guide learners has helped students grow in confidence and even land their first roles. This role sharpened my communication skills and opened doors to freelance and mentorship opportunities.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] px-1 mt-[1rem]">
          Today, I see myself not just as a developer, but as a problem solver and continuous learner. From crafting robust APIs to building intuitive interfaces, I thrive at the intersection of frontend precision and backend logic. My next chapter is about expanding further into advanced system design, cloud services, and AI-powered applications.
          </p>
        </Reveal>
      </div>

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
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={isBigScreen ? "10" : "1"}>
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
