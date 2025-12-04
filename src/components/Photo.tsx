"use client";

import image from "../assets/images/my-pic-removebg-preview.png";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = function () {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex justify-center items-center"
      >
        {/* image container */}
        <motion.div
          className="absolute flex justify-center items-center rounded-full overflow-hidden
            w-[220px] h-[220px] md:w-[238px] md:h-[238px] lg:w-[280px] lg:h-[300px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
        >
          <Image
            src={image}
            alt="me"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* animated circle (fixed center) */}
        <motion.svg
          className="w-[270px] h-[270px] md:w-[310px] md:h-[310px] lg:w-[378px] lg:h-[378px]"
          fill="transparent"
          viewBox="0 0 600 600"   // square canvas
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="300"   // center horizontally
            cy="300"   // center vertically
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72",
                "4 250 22 22",
              ],
              rotate: [120, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default React.memo(Photo);