"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
import Reveal from "./Reveal";

export default function Contact() {
  const [offset, setOffset] = useState(2)
  useEffect(() => {
    setOffset(10)
  }, [])
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <div className="w-full h-full mt-[1.4rem] flex flex-col items-center justify-center relative z-[1]">
      <h1
        className="text-6xl dancing-script-topic text-white links tracking-[2px]"
        data-aos={isBigScreen ? "fade-up" : "fade-up"}
        data-aos-offset={offset}
        >
        Contact Me
      </h1>

      <Reveal>
        <div className="px-4 flex flex-col items-center justify-center mt-[3rem]">
          <h1 className="playwrite-au-nsw-text text-2x text-white">
            Get in Touch
          </h1>
          <p className="text-[18px] margarine-regular mt-[0.3rem] sm:w-full md:w-full lg:w-[60%] text-white">
            I’d love to hear from you! Whether you have a question, a project
            idea, or just want to connect, feel free to reach out.
          </p>
        </div>
      </Reveal>

      <h2
        className="text-white playwrite-au-nsw-text text-xl mt-[2rem]"
        data-aos={isBigScreen ? "fade-up" : "fade-up"}
        data-aos-offset={offset}>
        Contact Information
      </h2>

      <div className="text-white px-4 flex flex-col items-center justify-center mt-[2rem]">
        <ul className="text-[18px] margarine-regular px-2 lg:px-4 flex flex-col items-center justify-center gap-1 md:gap-2 lg:gap-5">
          <Reveal>
            <Link href={"mailto:abdulsalamabdulhamidlanre@gmail.com"}>
              <li>Email: abdulsalamabdulhamidlanre@gmail.com</li>
            </Link>
          </Reveal>

          <Reveal>
            <li>
              <Link
                href="https://github.com/Abdulsalam001Arnold"
                target="_blank">
                Github: Abdulsalam001Arnold
              </Link>
            </li>
          </Reveal>
        </ul>
      </div>

      <h2
        className="text-white playwrite-au-nsw-text text-xl mt-[2rem]"
        data-aos={isBigScreen ? "fade-up" : "fade-up"}
        data-aos-offset={offset}>
        Connect with me
      </h2>

      <div className="text-white px-2 flex flex-col items-center justify-center mt-[2rem]">
        <ul className="text-[18px] margarine-regular px-3 flex flex-col items-center justify-center gap-5">
          <Reveal>
            <li>
              <Link
                href="https://github.com/Abdulsalam001Arnold"
                target="_blank">
                Github: Abdulsalam001Arnold
              </Link>
            </li>
          </Reveal>

          <Reveal>
            <li>
              <Link
                href="https://x.com/Abdul_Lanre001?t=qx5JMSagM_F_vAwG7i-Y5Q&s=08"
                target="_blank">
                Twitter: @Abdul_Lanre001
              </Link>
            </li>
          </Reveal>

          <Reveal>
            <li>
              <Link
                href="https://www.instagram.com/devlifediariez?igsh=cXQ1ZHg1N28xcDJ0"
                target="_blank">
                Instagram: @devlifediariez
              </Link>
            </li>
          </Reveal>

          <Reveal>
            <li>
              <Link
                href="https://www.tiktok.com/@devlifediaries?_t=ZS-8zNKxTobQQy&_r=1"
                target="_blank">
                Tiktok: @devlifediaries
              </Link>
            </li>
          </Reveal>

          <Reveal>
            <li>
              <Link
                href="https://www.linkedin.com/in/abdulhamid-abdulsalam-ba3634331"
                target="_blank">
                LinkedIn: AbdulHamid Abdulsalam
              </Link>
            </li>
          </Reveal>
        </ul>
      </div>

      <div className="px-2">
        <h2
          className="text-white playwrite-au-nsw-text text-2xl mt-[2rem]"
          data-aos={isBigScreen ? "fade-up" : "fade-up"}
          data-aos-offset={offset}>
          Let's Collaborate!
        </h2>

        <Reveal>
          <p className="text-[18px] margarine-regular mt-[0.3rem] sm:w-full md:w-full lg:w-[60%] text-white">
          Whether you have a project in mind, a question to ask, or simply want to connect, feel free to reach out. I’m always open to meaningful conversations, new opportunities, and impactful collaborations
          </p>
        </Reveal>
      </div>

    </div>
  );
}
