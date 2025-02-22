"use client"

import { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import SplitText from "../components/splitText"

export default function MainPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
      <Navbar />
      <main className="h-screen flex items-center justify-center">
        {isMounted ? (
          <SplitText
            text="Hi! I am Prathamesh!"
            className="text-3xl font-semibold text-center text-black dark:text-white"
            delay={100}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        ) : (
          <div className="text-3xl font-semibold text-center text-black dark:text-white">
            Hi! I am Prathamesh!
          </div>
        )}
      </main>
    </>
  );
}