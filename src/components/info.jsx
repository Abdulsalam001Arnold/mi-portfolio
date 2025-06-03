import { TiHtml5 } from "react-icons/ti";
import React, { useEffect } from "react";
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

      <div className="flex flex-col items-center md:items-center lg:items-start justify-center md:justify-normal lg:justify-normal mt-[3rem] px-4">
        <Reveal>
          <h1 className="text-white margarine-regular">
            Hello, I'm <span className="green">Abdulhamid Abdulsalam</span> – a
            Passionate Full-Stack Web Developer.
          </h1>
        </Reveal>
        <h1 className="text-xl dancing-script-topic text-white links mt-[1rem]">
          My Journey
        </h1>
        <Reveal>
          <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] mt-[0.4rem]">
          I’m a full-stack web developer with a knack for building robust and scalable web applications. My journey in web development started two years ago, and since then, I’ve remained committed to honing my skills, solving real-world problems, and staying current with evolving industry trends.{" "}
            <FaFaceSmileBeam className="text-white inline" />.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] mt-[1rem]">
          One of the most pivotal moments in my journey was my 6-month internship with a tech company, where I was entrusted with building critical platform features. I developed APIs for Google and Facebook sign-up, integrated OAuth authentication flows, and implemented a file upload system that handled user-generated content efficiently. I also built a profile-fetching API to streamline user access and updates.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] mt-[1rem]">
          Due to my extraordinary performance and contributions, I was offered a full-time staff role immediately after the internship. Since then, I’ve continued to deliver production-ready features, support my teammates, and contribute to larger system designs that drive real impact.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] px-1 mt-[1rem]">
          In parallel, I also took up a role as a Coding/IT Instructor, where my teaching style and debugging expertise helped students gain confidence and clarity. This role expanded my communication skills, allowed me to connect with learners and professionals, and even led to private freelance deals and mentorship opportunities. <br/>
          <p className="text-white margarine-regular sm:w-full md:w-full lg:w-[76%] px-1 mt-[1rem]">
          Looking back — from my early days learning HTML to now being deeply involved in full-stack systems, API development, and architectural design — I’m proud of how far I’ve come. I continue to grow through a cycle of learning, executing, and mentoring, with more exciting projects ahead.
          </p>
          </p>
        </Reveal>
      </div>

      <h1
        className="text-2xl margarine-regular text-white links mt-[4rem]"
        data-aos={isBigScreen ? "fade-up" : "fade-up"}
        data-aos-offset={isBigScreen ? "10" : "2"}>
        My Process
      </h1>

      <ol className="w-full flex flex-col items-center justify-center gap-3 mt-[2rem] px-2">
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
        data-aos-offset={isBigScreen ? "10" : "2"}>
        Skills & Expertise
      </h1>

      <Reveal>
        <p className="text-xs margarine-regular text-white mt-[1rem]">
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
          data-aos-offset={isBigScreen ? "10" : "2"}>
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
          data-aos-offset={isBigScreen ? "10" : "2"}>
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
          data-aos-offset={isBigScreen ? "10" : "2"}>
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
          data-aos-offset={isBigScreen ? "10" : "2"}>
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
          data-aos-offset={isBigScreen ? "10" : "2"}>
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
          data-aos-offset={isBigScreen ? "10" : "2"}>
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
          data-aos-offset={isBigScreen ? "10" : "2"}>
          <div className="icon-box p-5">
            <SiClerk className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Clerk</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={isBigScreen ? "10" : "2"}>
          <div className="icon-box p-5">
            <FaNode className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Node.js</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={isBigScreen ? "10" : "2"}>
          <div className="icon-box p-5">
            <SiExpress className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Express.js</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={isBigScreen ? "10" : "2"}>
          <div className="icon-box p-5">
            <SiMongoose className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Mongoose.js</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={isBigScreen ? "10" : "2"}>
          <div className="icon-box p-5">
            <SiPassport className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Passport js</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={isBigScreen ? "10" : "2"}>
          <div className="icon-box p-5">
            <SiMongodb className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Mongodb</p>
        </li>

        <li
          className="flex flex-col items-center justify-center"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={isBigScreen ? "10" : "2"}>
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
          data-aos-offset={isBigScreen ? "10" : "2"}>
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
          data-aos-offset={isBigScreen ? "10" : "2"}>
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
          data-aos-offset={isBigScreen ? "10" : "2"}>
          <div className="icon-box p-5">
            <RiNextjsFill className="text-white text-[6rem]" />
          </div>
          <p className="text-[9px] playwrite-au-nsw-text text-white">Next.js</p>
        </li>
      </ul>
    </div>
  );
}
