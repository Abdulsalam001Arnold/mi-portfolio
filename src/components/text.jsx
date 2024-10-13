import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const TextAnimation = () => {
  const [text, setText] = useState('');
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const name = "Abdulhamid Abdulsalam";
  const typingSpeed = 100; // Speed of typing in milliseconds
  const eraseSpeed = 1000; // Speed of erasing in milliseconds
  const pauseDuration = 15000; // Pause before erasing

  const positions = useMemo(() => [
    "Full-stack web Developer",
    "Mobile Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ], []);


  useEffect(() => {
    const currentPosition = positions[currentPositionIndex];
    let timer;
    const baseText = `Hi, I'm ${name}. I'm a `;
    
    if (isTyping) {
      if (text.length < baseText.length + currentPosition.length) {
        timer = setTimeout(() => {
          setText(prev => prev + (baseText + currentPosition)[prev.length]);
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(true);
        }, pauseDuration);
      }
    } else {
      if (text.length > baseText.length) {
        timer = setTimeout(() => {
          setText(prev => prev.slice(0, -1));
        }, eraseSpeed);
      } else {
        setIsTyping(true);
        setCurrentPositionIndex((prev) => (prev + 1) % positions.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, currentPositionIndex, isTyping, positions, name]);

  return (
    <div className="text-white text-3xl font-bold">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity }}
      >
        |
      </motion.span>
    </div>
  );
};

export default TextAnimation;
