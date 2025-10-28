import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  style?: React.CSSProperties;
}

export function TypewriterText({
  text,
  speed = 100,
  className = '',
  cursorClassName = 'inline-block w-0.5 h-6 bg-purple-500 ml-1',
  showCursor = true,
  style
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className} style={style}>
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className={cursorClassName}
        />
      )}
    </span>
  );
}
