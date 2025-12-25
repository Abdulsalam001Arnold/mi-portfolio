"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

type ProjectCardProps = {
    video: string;
    poster: string;
    title: string;
    tagline: string;
    description: string;
    role: string;
    impact: string[];
    owned: string[];
    technologies: string[];
    link: string;
    githubLink?: string;
};

const ProjectCard = ({
                         video,
                         poster,
                         title,
                         tagline,
                         description,
                         role,
                         impact,
                         owned,
                         technologies,
                         link,
                         githubLink
                     }: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const techRef = useRef<HTMLDivElement[] | HTMLSpanElement[]>([]);

    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { y: 80, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power4.out",
                }
            );
        }

        if (techRef.current.length > 0) {
            gsap.fromTo(
                techRef.current,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                    delay: 0.8,
                }
            );
        }
    }, []);

    return (
        <div
            ref={cardRef}
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden border border-white/20 max-w-md mx-auto cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
        >
            {/* Video/Image */}
            <div className="relative w-full h-56">
                <video
                    src={video}
                    loop
                    muted
                    autoPlay
                    preload={"none"}
                    poster={poster}
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out w-full h-full"
                />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Title & Tagline */}
                <div>
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <p className="text-green-400 text-sm font-semibold mt-1">{tagline}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

                {/* Role */}
                <div>
                    <h3 className="text-white font-semibold text-sm mb-1">Role:</h3>
                    <p className="text-gray-300 text-sm">{role}</p>
                </div>

                {/* Impact */}
                <div>
                    <h3 className="text-white font-semibold text-sm mb-2">Impact:</h3>
                    <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                        {impact.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* What I Owned */}
                <div>
                    <h3 className="text-white font-semibold text-sm mb-2">What I Owned:</h3>
                    <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                        {owned.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Technologies */}
                <div>
                    <h3 className="text-white font-semibold text-sm mb-2">Tech Stack:</h3>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, i) => (
                            <span
                                key={i}
                                ref={(el) => {
                                    if (el) {techRef.current[i] = el};
                                }}
                                className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium shadow-md"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                    <Link href={link} target="_blank" className="flex-1">
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                            👉 Live Site
                        </button>
                    </Link>
                    {githubLink && (
                        <Link href={githubLink} target="_blank" className="flex-1">
                            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                                GitHub
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;