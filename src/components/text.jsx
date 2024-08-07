import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TextAnimation = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = `<div class='playwrite-au-nsw-text'><h1 class='text-white'>Hi, I'm <span class='green'>Abdulhamid Abdulsalam.</span></h1> <br/> <h3 class='text-white'>I'm a <span class='green'>full-stack developer</span></h3> </div>`;
  const typingSpeed = 10; // Speed of typing in milliseconds
  const erasingSpeed = 100; // Speed of erasing in milliseconds
  const cursorBlinkSpeed = 200; // Speed of cursor blinking in milliseconds

  useEffect(() => {
    let timer;
    if (isTyping) {
      if (text.length < fullText.length) {
        timer = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(true);
        }, 1000); // Wait for 1 second before starting to erase
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(fullText.slice(0, text.length - 1));
        }, erasingSpeed);
      } else {
        setIsTyping(true);
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Wait for 1 second before starting to type
      }
    }

    return () => clearTimeout(timer);
  }, [text, isTyping, fullText]);

  return (
    <div className=''>
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <motion.div
          style={{ fontSize: '24px', fontWeight: 'bold' }}
          animate={{ opacity: [0, 1], transition: { duration: 0.5 } }}
          dangerouslySetInnerHTML={{ __html: text }} // Use this without children
        />
        <motion.div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginLeft: '2px',
            display: 'inline-block',
          }}
          animate={{
            opacity: [0, 1, 0],
            transition: { duration: cursorBlinkSpeed / 1000, repeat: Infinity },
          }}
        >
          |
        </motion.div>
      </div>
    </div>
  );
};

export default TextAnimation;
