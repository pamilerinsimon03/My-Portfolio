"use client";

import { motion, AnimatePresence } from "framer-motion";
import { loaderVariants, progressVariants } from "@/lib/animations";
import { useEffect, useState } from "react";

interface PageLoaderProps {
  onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a bit before completing
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        variants={loaderVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"
          animate={{
            background: [
              "linear-gradient(45deg, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05), hsl(var(--primary) / 0.05))",
              "linear-gradient(45deg, hsl(var(--accent) / 0.1), hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))",
              "linear-gradient(45deg, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05), hsl(var(--primary) / 0.05))"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="flex flex-col items-center space-y-6 md:space-y-8 relative z-10 px-4">
          {/* Enhanced Animated Logo/Initials */}
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.div 
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center relative overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 20px hsl(var(--primary) / 0.3)",
                  "0 0 40px hsl(var(--primary) / 0.6)",
                  "0 0 20px hsl(var(--primary) / 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="text-2xl md:text-3xl font-bold text-primary-foreground relative z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                OP
              </motion.span>
              
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Enhanced floating particles */}
            {[
              { top: "10px", left: "70px", size: "w-3 h-3" },
              { top: "30px", left: "60px", size: "w-2 h-2" },
              { top: "50px", left: "30px", size: "w-4 h-4" },
              { top: "30px", left: "0px", size: "w-2 h-2" },
              { top: "10px", left: "10px", size: "w-3 h-3" },
              { top: "-10px", left: "40px", size: "w-2 h-2" }
            ].map((particle, i) => (
              <motion.div
                key={i}
                className={`absolute ${particle.size} bg-primary/40 rounded-full`}
                style={particle}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          {/* Enhanced Loading Text */}
          <motion.div
            className="text-center space-y-2 md:space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.h2 
              className="text-xl md:text-2xl font-headline font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading Portfolio
            </motion.h2>
            <motion.p 
              className="text-sm md:text-base text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            >
              Preparing amazing experience...
            </motion.p>
          </motion.div>

          {/* Enhanced Progress Bar */}
          <div className="w-64 md:w-80 h-1.5 md:h-2 bg-muted/50 rounded-full overflow-hidden border border-primary/20">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full relative"
              variants={progressVariants}
              initial="initial"
              animate="animate"
              style={{ width: `${progress}%` }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* Enhanced Progress Percentage */}
          <motion.span
            className="text-base md:text-lg font-semibold text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
