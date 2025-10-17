"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, buttonHover, shimmerVariants } from "@/lib/animations";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="w-full flex items-center" style={{ height: 'calc(100vh - 4rem)' }}>
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center h-full">
          <motion.div 
            className="flex flex-col justify-center space-y-8"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-8">
              <motion.h1 
                className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Hi, I'm Olaniran Pamilerin
              </motion.h1>
              <motion.p 
                className="text-primary font-semibold text-xl md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                A Frontend Developer & Python Programmer
              </motion.p>
              <motion.p 
                className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                I build responsive apps and automation workflows, translating complex needs into simple, intuitive solutions.
              </motion.p>
            </div>
            <motion.div 
              className="flex flex-col gap-4 min-[400px]:flex-row mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <motion.div
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="relative cursor-hover"
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollTo('projects')}
                  className="relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 ripple"
                >
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    variants={shimmerVariants}
                    initial="rest"
                    whileHover="hover"
                  />
                </Button>
              </motion.div>
              <motion.div
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="cursor-hover"
              >
                <Button 
                  size="lg" 
                  variant="secondary" 
                  onClick={() => scrollTo('contact')}
                  className="relative overflow-hidden ripple"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center justify-center space-y-10 relative"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="w-96 h-96 rounded-full bg-primary/40 blur-2xl absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ y }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.p 
              className="font-headline text-2xl font-semibold tracking-wide mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Key Skills
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center max-w-lg"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                "React.js", "Next.js", "JavaScript", "Python", "Tailwind CSS", 
                "TypeScript", "Bootstrap", "PHP", "MySQL", "HTML", "CSS"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={staggerItem}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="outline" 
                    className="text-base px-4 py-2 border-primary/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
