'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";

const letters = ["G", "S", "A", "P"]; 

export default function AnimatedTitle() {
  const svgRefs = useRef<(SVGSVGElement | null | undefined)[]>([]);

  useEffect(() => {
    svgRefs.current.forEach((svg) => {
      if (!svg) return;
      gsap.set(svg, { autoAlpha: 0, scale: 0.5 });
    });
  }, []);

  const handleEnter = (index: number) => {
    const svg = svgRefs.current[index];
    if (!svg) return;
    gsap.to(svg, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.4,
      ease: "back.out(2)"
    });
  };

  const handleLeave = (index: number) => {
    const svg = svgRefs.current[index];
    if (!svg) return;
    gsap.to(svg, {
      autoAlpha: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "back.in(2)"
    });
  };

  return (
    <div className="flex gap-3 text-5xl text-white font-bold">
      {letters.map((letter, i) => (
        <span
          key={i}
          className="relative inline-block cursor-pointer"
          onMouseEnter={() => handleEnter(i)}
          onMouseLeave={() => handleLeave(i)}
        >
          {letter}
          <svg
            ref={(el: SVGSVGElement | null) => {
                svgRefs.current[i] = el;
              }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-12 h-12"
          >
            <circle cx="50" cy="50" r="40" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF00FF" />
                <stop offset="100%" stopColor="#00FF99" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      ))}
    </div>
  );
}
