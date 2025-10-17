"use client";

import { motion, useInView } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, timelineDot } from "@/lib/animations";
import { useRef } from "react";

const experiences = [
  {
    company: "Apps&Scripts Technologies",
    title: "Frontend Developer",
    period: "Dec 2023 - April 2025",
    description: "Built responsive web apps with React.js and Tailwind, boosting usability by 20%. Integrated Python automation workflows, saving team hours weekly and optimizing apps for mobile, which increased traffic by 15%.",
  },
  {
    company: "3MTT Nigeria",
    title: "Product Design Tutor",
    period: "Aug 2024 - Nov 2024",
    description: "Guided students in product design fundamentals and delivered hands-on lessons in HTML, CSS, & React.js. Mentored students on project workflows and job readiness, helping them ship functional projects and improve portfolio quality.",
  },
  {
    company: "Premium Print House Designs",
    title: "Graphic Designer",
    period: "April 2023 - June 2023",
    description: "Designed branding and marketing assets that increased client recognition by 20%. Collaborated on web layouts and digital graphics, improving user engagement and gaining design experience that now enhances my frontend work.",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center space-y-2 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Work Experience
          </motion.h2>
          <motion.p 
            className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My professional journey through the world of software development.
          </motion.p>
        </motion.div>
        <motion.div 
          ref={ref}
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ originY: 0 }}
          />
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.company} 
              className="relative mb-8 flex justify-between items-center w-full"
              variants={staggerItem}
            >
              <div className="hidden md:block md:w-5/12">
                {index % 2 === 0 && (
                  <motion.div 
                    className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    variants={fadeInLeft}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <h3 className="text-xl font-bold font-headline mt-1">{exp.title}</h3>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    <p className="mt-4 text-muted-foreground">{exp.description}</p>
                  </motion.div>
                )}
              </div>
              <motion.div 
                className="z-10 hidden md:flex items-center justify-center w-8 h-8 bg-primary rounded-full shrink-0"
                variants={timelineDot}
                initial="rest"
                whileHover="hover"
                animate="pulse"
              >
                <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
              </motion.div>
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                 <motion.div 
                    className="p-6 bg-card rounded-lg shadow-md md:hidden hover:shadow-lg transition-shadow duration-300"
                    variants={fadeInRight}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                 >
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <h3 className="text-xl font-bold font-headline mt-1">{exp.title}</h3>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    <p className="mt-4 text-muted-foreground">{exp.description}</p>
                 </motion.div>
                 {index % 2 !== 0 && (
                    <motion.div 
                        className="hidden md:block p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        variants={fadeInRight}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                        <h3 className="text-xl font-bold font-headline mt-1">{exp.title}</h3>
                        <p className="text-lg font-semibold text-primary">{exp.company}</p>
                        <p className="mt-4 text-muted-foreground">{exp.description}</p>
                    </motion.div>
                 )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
