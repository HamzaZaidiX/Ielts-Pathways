
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  delay?: number;
}

const TypewriterText = ({
  texts,
  className,
  delay = 3000
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (!isDeleting && displayText === texts[currentTextIndex]) {
      // Wait before starting to delete
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(75);
      }, delay);
    } else if (isDeleting && displayText === '') {
      // Done deleting, move to next text
      setIsDeleting(false);
      setTypingSpeed(150);
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    } else {
      // Handle typing or deleting
      timer = setTimeout(() => {
        if (isDeleting) {
          setDisplayText(prevText => prevText.substring(0, prevText.length - 1));
        } else {
          setDisplayText(prevText => texts[currentTextIndex].substring(0, prevText.length + 1));
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [texts, currentTextIndex, displayText, isDeleting, typingSpeed, delay]);

  return (
    <span className={cn("typewriter relative", className)}>
      {displayText}<span className="typewriter-cursor animate-cursor">|</span>
    </span>
  );
};

export default TypewriterText;