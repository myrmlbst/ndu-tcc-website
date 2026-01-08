import React, { useRef } from 'react';
// import { cn } from '../lib/utils';
import { motion, useMotionValue, useSpring } from "motion/react";


export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center dark:text-white">

      <CursorReactiveBackground />
      
      <div className="pointer-events-none absolute inset-0 -z-30 hidden dark:block bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950" />
      
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-1/4 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/30 dark:bg-pink-400/20 blur-3xl animate-first" />
        <div className="absolute right-[15%] top-[10%] h-64 w-64 rounded-full bg-fuchsia-500/20 dark:bg-fuchsia-400/20 blur-3xl animate-second" />
        <div className="absolute left-[10%] bottom-[5%] h-80 w-80 rounded-full bg-violet-500/20 dark:bg-violet-400/20 blur-3xl animate-third" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 dark:bg-rose-400/10 blur-3xl animate-fifth" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl p-8 border border-gray-300/70 bg-white/60 backdrop-blur-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/15 dark:bg-white/5">
          <div className="mx-auto max-w-3xl text-center">
            
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-white">
              NDU - The Computing Club
            </h1>
            <p className="mt-4 text-base text-gray-600 md:text-lg dark:text-gray-300">
              Creating the things you wished existed...
            </p>
            
          </div>
        </div>
      </div>

    </section>
  );
}


// blue blob that follows the user's cursor
function CursorReactiveBackground() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 });

  React.useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-3xl"
        style={{ left: springX, top: springY }}
      />
    </div>
  );
}
