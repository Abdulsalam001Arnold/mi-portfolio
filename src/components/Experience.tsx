import React from "react";
import Reveal from "./Reveal";

export default function Experience() {
    return (
        <div className="w-full mt-[5rem] flex flex-col items-center justify-center relative z-[1]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl dancing-script-topic text-white links mb-[2rem]">
                Experience
            </h1>

            <div className="relative w-[90%] md:w-[70%] lg:w-[60%] border-l-[2px] border-gray-600 pl-6">
                <span className="absolute -left-[8px] top-0 w-4 h-4 bg-green-500 rounded-full"></span>

                <Reveal>
                    <div className="mb-8">
                        <h2 className="text-white text-2xl font-semibold">Cloud Enthusiast</h2>
                        <p className="text-gray-400 text-lg mb-1">Full-stack Web Developer</p>
                        <p className="text-gray-500 text-sm mb-4">August 2024 - September 2025</p>

                        <ul className="text-gray-300 leading-relaxed margarine-regular space-y-2 list-disc list-inside">
                            <li>Built production apps with user authentication, payments, and real-world reliability</li>
                            <li>Owned frontend delivery from UI to backend integration</li>
                            <li>Actively participated in debugging sessions to support engineering team</li>
                            <li>Gained hands-on expertise in scalable architecture and production workflows</li>
                        </ul>
                    </div>
                </Reveal>
            </div>

            <div className="relative mt-[2rem] w-[90%] md:w-[70%] lg:w-[60%] border-l-[2px] border-gray-600 pl-6">
                <span className="absolute -left-[8px] top-0 w-4 h-4 bg-green-500 rounded-full"></span>

                <Reveal>
                    <div className="mb-8">
                        <h2 className="text-white text-2xl font-semibold">Bloomy Technologies</h2>
                        <p className="text-gray-400 text-lg mb-1">Full-stack Web Development Instructor / Mentor</p>
                        <p className="text-gray-500 text-sm mb-4">April 2025 - Present</p>

                        <ul className="text-gray-300 leading-relaxed margarine-regular space-y-2 list-disc list-inside">
                            <li>Mentored and trained developers on full-stack workflows</li>
                            <li>Produced outstanding students with consistent exceptional results</li>
                            <li>Recognized as one of the most effective instructors at Bloomy Technologies</li>
                            <li>Developed curriculum and teaching methods for practical software development</li>
                        </ul>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}