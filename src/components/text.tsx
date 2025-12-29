'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextAnimation = () => {
    const [text, setText] = useState('');
    const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [showTitle, setShowTitle] = useState(false);
    const name = "Lanre Abdulsalam";
    const typingSpeed = 80;
    const eraseSpeed = 50;
    const pauseDuration = 3000;
    const titleDelay = 3000;

    const positions = useMemo(() => [
        {
            role: "Full-Stack Engineer",
            emoji: "💻",
            gradient: "from-blue-400 via-cyan-400 to-teal-400"
        },
        {
            role: "AI Automation Engineer",
            emoji: "🤖",
            gradient: "from-purple-400 via-pink-400 to-rose-400"
        },
        {
            role: "Mobile App Developer",
            emoji: "📱",
            gradient: "from-green-400 via-emerald-400 to-teal-400"
        },
        {
            role: "Tech Innovator",
            emoji: "⚡",
            gradient: "from-yellow-400 via-orange-400 to-red-400"
        }
    ], []);

    const currentPosition = positions[currentPositionIndex];

    useEffect(() => {
        let timer: any;
        const baseText = `Hey there! 👋 I'm `;
        const fullText = baseText + name;

        if (isTyping) {
            if (text.length < fullText.length) {
                timer = setTimeout(() => {
                    setText(prev => prev + fullText[prev.length]);
                }, typingSpeed);
            } else {
                // Text fully typed, show the title after delay
                timer = setTimeout(() => {
                    setShowTitle(true);
                    setTimeout(() => {
                        setIsTyping(false);
                    }, pauseDuration);
                }, titleDelay);
            }
        } else {
            // Erase everything
            if (text.length > 0) {
                timer = setTimeout(() => {
                    setText(prev => prev.slice(0, -1));
                }, eraseSpeed);
            } else {
                // Reset for next cycle
                setShowTitle(false);
                setIsTyping(true);
                setCurrentPositionIndex((prev) => (prev + 1) % positions.length);
            }
        }

        return () => clearTimeout(timer);
    }, [text, currentPositionIndex, isTyping, positions, name, titleDelay, pauseDuration, typingSpeed, eraseSpeed]);

    return (
        <div className="flex flex-col items-start gap-4 min-h-[200px]">
            {/* Main typing text */}
            <motion.div
                className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
        <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
          {text}
        </span>
                <motion.span
                    className="text-green-400"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                >
                    |
                </motion.span>
            </motion.div>

            {/* Sliding title that appears after 3 seconds */}
            <AnimatePresence mode="wait">
                {showTitle && (
                    <motion.div
                        key={currentPositionIndex}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.6
                        }}
                        className="flex items-center gap-3 pl-2"
                    >
                        {/* Emoji with bounce animation */}
                        <motion.span
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="text-4xl md:text-5xl"
                        >
                            {currentPosition.emoji}
                        </motion.span>

                        {/* Role with gradient and glow effect */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "auto" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="overflow-hidden"
                        >
                            <h2
                                className={`text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r ${currentPosition.gradient} bg-clip-text text-transparent drop-shadow-lg`}
                            >
                                {currentPosition.role}
                            </h2>
                        </motion.div>

                        {/* Animated underline */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${currentPosition.gradient} rounded-full origin-left`}
                            style={{ width: '60%', transform: 'translateY(8px)' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Decorative particles/dots */}
            <AnimatePresence>
                {showTitle && (
                    <div className="flex gap-2 mt-2">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.6 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.7 + (i * 0.1),
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 1
                                }}
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentPosition.gradient}`}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Subtle background glow effect */}
            <AnimatePresence>
                {showTitle && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className={`absolute -z-10 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-r ${currentPosition.gradient}`}
                        style={{ top: '-100px', left: '-100px' }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default React.memo(TextAnimation);