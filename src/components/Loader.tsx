

"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
const Loader = () => {
    const loadingRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const loadingText = "Loading.....";
        const chars = loadingText.split("").map((char, index) => {
          const span = document.createElement("span");
          span.style.display = "inline-block";
          span.textContent = char;
          return span;
        });
    
        if (loadingRef.current) {
          loadingRef.current.innerHTML = "";
          chars.forEach((char) => loadingRef.current!.appendChild(char));
    
          const spans = loadingRef.current.querySelectorAll("span");
    
          gsap.from(spans, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
          });
        }
      }, []);
    
  return (
    <div className="w-full relative z-10 min-h-screen flex flex-col items-center justify-center inset-0">
      <div className="honeycomb">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p  ref={loadingRef} className="mt-[2rem]"></p>
    </div>
  );
}

export default React.memo(Loader);
