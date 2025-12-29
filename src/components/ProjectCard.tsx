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
    demoLink?: string;
    blogLink?: string;
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
                         githubLink,
                         demoLink,
                         blogLink
                     }: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const techRef = useRef<(HTMLSpanElement | null)[]>([]);

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
                techRef.current.filter(Boolean),
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
            className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden border border-purple-500/30 max-w-md mx-auto cursor-pointer hover:shadow-purple-500/20 hover:shadow-2xl hover:scale-[1.02] hover:border-purple-500/50 transition-all duration-300"
        >
            {/* Video/Image with Gradient Overlay */}
            <div className="relative w-full h-56 group">
                <video
                    src={video}
                    loop
                    muted
                    autoPlay
                    preload={"none"}
                    poster={poster}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Demo Link Badge (if available) */}
                {demoLink && (
                    <Link
                        href={demoLink}
                        target="_blank"
                        className="absolute top-3 right-3 bg-purple-600/90 hover:bg-purple-500 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 shadow-lg"
                    >
                        <span>🎥</span>
                        <span>Watch Demo</span>
                    </Link>
                )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Title & Tagline */}
                <div>
                    <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {title}
                    </h2>
                    <p className="text-green-400 text-sm font-semibold mt-1 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        {tagline}
                    </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-purple-500/50 pl-3">
                    {description}
                </p>

                {/* Role */}
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <h3 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                        <span className="text-purple-400">👤</span>
                        Role:
                    </h3>
                    <p className="text-gray-300 text-sm">{role}</p>
                </div>

                {/* Impact */}
                <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <h3 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                        <span className="text-green-400">📊</span>
                        Impact:
                    </h3>
                    <ul className="text-gray-300 text-sm space-y-1.5">
                        {impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-green-400 mt-0.5">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* What I Owned */}
                <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                    <h3 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                        <span className="text-blue-400">🛠️</span>
                        What I Owned:
                    </h3>
                    <ul className="text-gray-300 text-sm space-y-1.5">
                        {owned.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-blue-400 mt-0.5">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies */}
                <div>
                    <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                        <span className="text-purple-400">⚡</span>
                        Tech Stack:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, i) => (
                            <span
                                key={i}
                                ref={(el) => {
                                    techRef.current[i] = el;
                                }}
                                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 pt-2">
                    {/* Primary Link (Live Site) */}
                    <Link href={link} target="_blank" className="w-full">
                        <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 text-sm shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2">
                            <span>🚀</span>
                            <span>View Live Project</span>
                        </button>
                    </Link>

                    {/* Secondary Links Row */}
                    <div className="flex gap-2">
                        {githubLink && (
                            <Link href={githubLink} target="_blank" className="flex-1">
                                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-1.5">
                                    <span>💻</span>
                                    <span>GitHub</span>
                                </button>
                            </Link>
                        )}

                        {blogLink && (
                            <Link href={blogLink} target="_blank" className="flex-1">
                                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-1.5">
                                    <span>📖</span>
                                    <span>Docs</span>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;