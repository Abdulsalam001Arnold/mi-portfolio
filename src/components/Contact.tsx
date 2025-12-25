"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = function(){
    return (
        <div className="w-full h-full mt-[1.4rem] flex flex-col items-center justify-center relative z-[1]">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl dancing-script-topic text-white links tracking-[2px]"
            >
                Contact Me
            </motion.h1>

            {/* Clear CTA at the top */}
            <Reveal>
                <div className="mt-[2rem] px-4 max-w-3xl mx-auto">
                    <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 backdrop-blur-md border-2 border-green-500 rounded-2xl p-6 md:p-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 playwrite-au-nsw-text">
                            Looking for full-time, contract, or freelance work
                        </h2>
                        <p className="text-xl text-white mb-4 margarine-regular">
                            Let's build something great together
                        </p>
                        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
                            <a
                                href="mailto:abdulsalamabdulhamidlanre@gmail.com"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                Email Me
                            </a>
                            <a
                                href="https://calendly.com/abdulsalamabulhamidarnold/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                Schedule a Call
                            </a>
                        </div>
                        <p className="text-sm text-gray-300 mt-4 margarine-regular">
                            abdulsalamabdulhamidlanre@gmail.com
                        </p>
                    </div>
                </div>
            </Reveal>

            <Reveal>
                <div className="px-4 flex flex-col items-center justify-center mt-[3rem]">
                    <h1 className="playwrite-au-nsw-text text-2xl text-white">
                        Get in Touch
                    </h1>
                    <p className="text-[18px] margarine-regular mt-[0.3rem] sm:w-full md:w-full lg:w-[60%] text-white text-center">
                        Whether you have a project in mind, a question to ask, or simply want to connect, feel free to reach out.
                    </p>
                </div>
            </Reveal>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white playwrite-au-nsw-text text-xl mt-[2rem]"
            >
                Contact Information
            </motion.h2>

            <div className="text-white px-4 flex flex-col items-center justify-center mt-[2rem]">
                <ul className="text-[18px] margarine-regular px-2 lg:px-4 flex flex-col items-center justify-center gap-1 md:gap-2 lg:gap-5">
                    <Reveal>
                        <Link href={"mailto:abdulsalamabdulhamidlanre@gmail.com"}>
                            <li className="hover:text-green-400 transition-colors">
                                Email: abdulsalamabdulhamidlanre@gmail.com
                            </li>
                        </Link>
                    </Reveal>

                    <Reveal>
                        <li>
                            <Link
                                href="https://github.com/Abdulsalam001Arnold"
                                target="_blank"
                                className="hover:text-green-400 transition-colors"
                            >
                                Github: Abdulsalam001Arnold
                            </Link>
                        </li>
                    </Reveal>
                </ul>
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white playwrite-au-nsw-text text-xl mt-[2rem]"
            >
                Connect with me
            </motion.h2>

            <div className="text-white px-2 flex flex-col items-center justify-center mt-[2rem]">
                <ul className="text-[18px] margarine-regular px-3 flex flex-col items-center justify-center gap-5">
                    <Reveal>
                        <li>
                            <Link
                                href="https://github.com/Abdulsalam001Arnold"
                                target="_blank"
                                className="hover:text-green-400 transition-colors"
                            >
                                Github: Abdulsalam001Arnold
                            </Link>
                        </li>
                    </Reveal>

                    <Reveal>
                        <li>
                            <Link
                                href="https://x.com/Abdul_Lanre001?t=qx5JMSagM_F_vAwG7i-Y5Q&s=08"
                                target="_blank"
                                className="hover:text-green-400 transition-colors"
                            >
                                Twitter: @Abdul_Lanre001
                            </Link>
                        </li>
                    </Reveal>

                    <Reveal>
                        <li>
                            <Link
                                href="https://www.instagram.com/devlifediariez?igsh=cXQ1ZHg1N28xcDJ0"
                                target="_blank"
                                className="hover:text-green-400 transition-colors"
                            >
                                Instagram: @devlifediariez
                            </Link>
                        </li>
                    </Reveal>

                    <Reveal>
                        <li>
                            <Link
                                href="https://www.tiktok.com/@devlifediaries?_t=ZS-8zNKxTobQQy&_r=1"
                                target="_blank"
                                className="hover:text-green-400 transition-colors"
                            >
                                Tiktok: @devlifediaries
                            </Link>
                        </li>
                    </Reveal>

                    <Reveal>
                        <li>
                            <Link
                                href="https://www.linkedin.com/in/abdulhamid-abdulsalam-ba3634331"
                                target="_blank"
                                className="hover:text-green-400 transition-colors"
                            >
                                LinkedIn: AbdulHamid Abdulsalam
                            </Link>
                        </li>
                    </Reveal>
                </ul>
            </div>
        </div>
    );
}

export default React.memo(Contact);