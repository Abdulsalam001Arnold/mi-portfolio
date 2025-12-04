
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

type ProjectCardProps = {
 video: string;
 poster: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
};

const ProjectCard = ({ video, poster, title, description, technologies, link }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement[] | HTMLSpanElement[]>([]);

  useEffect(() => {
    if (cardRef.current) {
      // Animate card entrance
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

    // Animate technologies with stagger
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
      {/* Image */}
      <div className="relative w-full h-56">
        <video
          src={video}
          loop
          muted
          autoPlay

          preload={"none"}
          poster={poster}
          className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-gray-300">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) {techRef.current[i] = el};
              }}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link href={link} target="_blank">
        <h2 className="mt-3 text-white underline-offset-1">
          Click to: Visit website
        </h2>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
