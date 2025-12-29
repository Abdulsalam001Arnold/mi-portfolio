'use client'

import { TiHtml5 } from "react-icons/ti";
import { BiLogoPostgresql } from "react-icons/bi";
import AnimatedTitle from "./Animated";
import React from "react";
import { TbBrandPrisma } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaStripe } from "react-icons/fa";
import { SiN8N, SiOpenai, SiAnthropic } from "react-icons/si";
import { MdAutoAwesome } from "react-icons/md";
import { SiJsonwebtokens } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { TbApi } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";
import { FaNode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Reveal from "./Reveal";
import { RiFirebaseFill } from "react-icons/ri";
import { SiClerk } from "react-icons/si";
import { SiPassport } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import Experience from "@/components/Experience";
import { motion } from "framer-motion";

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const Info = function () {
    const skillCategories = [
        {
            category: "Frontend",
            skills: [
                { Icon: FaReact, label: "React.js" },
                { Icon: RiNextjsFill, label: "Next.js" },
                { Icon: SiTypescript, label: "Typescript" },
                { Icon: RiTailwindCssFill, label: "Tailwindcss" },
                { Icon: TiHtml5, label: "HTML" },
                { Icon: IoLogoCss3, label: "CSS" },
            ]
        },
        {
            category: "Backend",
            skills: [
                { Icon: FaNode, label: "Node.js" },
                { Icon: SiExpress, label: "Express.js" },
                { Icon: IoLogoJavascript, label: "Javascript" },
                { Icon: TbApi, label: "Restful API" },
                { Icon: GrGraphQl, label: "GraphQL" }
            ]
        },
        {
            category: "Database",
            skills: [
                { Icon: SiMongodb, label: "MongoDB" },
                { Icon: SiMongoose, label: "Mongoose" },
                { Icon: TbBrandPrisma, label: "Prisma" },
                { Icon: GrMysql, label: "MySQL" },
                { Icon: BiLogoPostgresql, label: "PostgreSQL" }
            ]
        },
        {
            category: "AI & Automation",
            badge: "Latest Skill",
            skills: [
                { Icon: SiN8N, label: "n8n Workflows" },
                { Icon: MdAutoAwesome, label: "AI Automation" }
            ]
        },
        {
            category: "Mobile",
            skills: [
                { Icon: TbBrandReactNative, label: "React Native" },
                { Icon: SiExpo, label: "Expo" }
            ]
        },
        {
            category: "Auth & Payments",
            skills: [
                { Icon: SiClerk, label: "Clerk" },
                { Icon: RiFirebaseFill, label: "Firebase" },
                { Icon: SiPassport, label: "Passport.js" },
                { Icon: FaStripe, label: "Stripe" },
                { Icon: SiJsonwebtokens, label: "JWT" },
            ]
        },
        {
            category: "Other Tools",
            skills: [
                { Component: AnimatedTitle, label: "GSAP" },
                { Icon: SiRedux, label: "Redux" },
                { Icon: FaBootstrap, label: "Bootstrap" },
                { Icon: SiPostman, label: "Postman" },
                { Icon: SiJest, label: "Jest" }
            ]
        }
    ];

    return (
        <div className="w-full h-full mt-[1.4rem] flex flex-col items-center justify-center relative z-[1]">
            <h1 className="text-6xl dancing-script-topic text-white links">
                About me
            </h1>

            {/* Short Bio */}
            <div className="mt-[2rem] w-[90%] md:w-[80%] lg:w-[70%]">
                <Reveal>
                    <p className="text-white text-center text-lg md:text-xl leading-relaxed margarine-regular">
                        I build production-ready web & mobile software used by real users. I specialize in scalable frontend architecture, backend APIs, payments, and full-stack delivery.
                    </p>
                </Reveal>
            </div>

            <Experience/>

            {/* Skills Section - Grouped */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl margarine-regular text-white links mt-[4rem]"
            >
                Skills & Expertise
            </motion.h1>

            <div className="w-full max-w-6xl mt-[2rem] px-4">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 }}
                        className="mb-8"
                    >
                        <h3 className="text-green-400 text-xl font-semibold mb-4 playwrite-au-nsw-text">
                            {category.category}
                        </h3>

                        {category.badge && (
                            <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full animate-pulse">
                                {category.badge}
                            </span>
                        )}
                        <motion.div
                            variants={containerVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                        >
                            {category.skills.map((item, index) => {
                                // Extract the Component with capital C
                                const { Icon, label } = item;
                                
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariant}
                                        className="flex flex-col items-center justify-center"
                                    >
                                        <div className="icon-box p-4 w-full aspect-square flex items-center justify-center">
                                            {Icon ? (
                                                <Icon className="text-4xl md:text-5xl lg:text-6xl text-white" />
                                            ) : item.Component ? (
                                                <item.Component />
                                            ) : null}
                                        </div>
                                        <p className="text-[12px] md:text-[20px] playwrite-au-nsw-text text-white text-center mt-2">
                                            {label}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Process Section */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl margarine-regular text-white links mt-[4rem]"
            >
                My Process
            </motion.h1>

            <ol className="w-full flex flex-col items-center justify-center gap-3 mt-[2rem] px-2 text-[16px] md:text-[18px] lg:text-[20px]">
                <Reveal>
                    <li className="margarine-regular text-white">
                        <strong>Consultation:</strong> Understanding your needs and defining project scope.
                    </li>
                </Reveal>

                <Reveal>
                    <li className="margarine-regular text-white">
                        <strong>Planning:</strong> Creating a detailed project plan and timeline.
                    </li>
                </Reveal>

                <Reveal>
                    <li className="margarine-regular text-white">
                        <strong>Development:</strong> Building your solution with regular updates.
                    </li>
                </Reveal>

                <Reveal>
                    <li className="margarine-regular text-white">
                        <strong>Testing:</strong> Thoroughly testing to ensure everything works perfectly.
                    </li>
                </Reveal>

                <Reveal>
                    <li className="margarine-regular text-white">
                        <strong>Launch:</strong> Deploying the project and ensuring a smooth launch.
                    </li>
                </Reveal>

                <Reveal>
                    <li className="margarine-regular text-white">
                        <strong>Support:</strong> Providing ongoing support and maintenance.
                    </li>
                </Reveal>
            </ol>
        </div>
    );
}

export default React.memo(Info);