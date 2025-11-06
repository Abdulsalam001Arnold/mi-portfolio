

import React from "react";
import Reveal from "./Reveal";

export default function Experience() {
    return (
        <div className="w-full mt-[5rem] flex flex-col items-center justify-center relative z-[1]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl dancing-script-topic text-white links mb-[2rem]">
                Experience
            </h1>

            <div className="relative w-[90%] md:w-[70%] lg:w-[60%] border-l-[2px] border-gray-600 pl-6">
                {/* Dot indicator */}
                <span className="absolute -left-[8px] top-0 w-4 h-4 bg-green-500 rounded-full"></span>

                <Reveal>
                    <div className="mb-8">
                        <h2 className="text-white text-2xl font-semibold">Cloud Ethusiast</h2>
                        <p className="text-gray-400 text-lg mb-1">Full-stack web developer</p>
                        <p className="text-gray-500 text-sm mb-4">August 2024 - September 2025</p>
                        <p className="text-gray-300 leading-relaxed margarine-regular">
                            I began my journey at <span className="text-white font-medium">Cloud Enthusiast</span> as an intern,
                            where my dedication and performance quickly earned me a staffed position.
                            During my time there, I played a key role in building a
                            <span className="text-white font-medium">scalable web application</span>
                            from the ground up — handling both frontend and backend development.
                            <br />
                            I was actively involved in several <span className="text-white font-medium">debugging sessions</span>
                            to support the engineering team, ensuring high performance and stability across the system.
                            Through this experience, I gained hands-on expertise in scalable architecture,
                            problem-solving, and team collaboration within a real production environment.
                        </p>
                    </div>
                </Reveal>
            </div>


            <div className="relative mt-[2rem] w-[90%] md:w-[70%] lg:w-[60%] border-l-[2px] border-gray-600 pl-6">
                {/* Dot indicator */}
                <span className="absolute -left-[8px] top-0 w-4 h-4 bg-green-500 rounded-full"></span>

                <Reveal>
                    <div className="mb-8">
                        <h2 className="text-white text-2xl font-semibold">Bloomy Technologies</h2>
                        <p className="text-gray-400 text-lg mb-1">Full-stack Web Development Instructor / Mentor</p>
                        <p className="text-gray-500 text-sm mb-4">April 2025 - Present</p>
                        <p className="text-gray-300 leading-relaxed margarine-regular">
                            At <span className="text-white font-medium">Bloomy Technologies</span>,
                            I’ve had the privilege of mentoring and training aspiring developers in full-stack web development.
                            Over time, I’ve discovered a new passion for <span className="text-white font-medium">teaching and mentorship</span>,
                            producing outstanding students who consistently deliver exceptional results.
                            <br />
                            My efforts have been recognized across the organization, earning me a reputation as one of the
                            <span className="text-white font-medium">most effective and inspiring instructors</span> at Bloomy.
                            Guiding students to unlock their potential has become one of the most rewarding parts of my journey in tech.
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
