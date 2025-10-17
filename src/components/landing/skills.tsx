"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CodeXml, Server, Wind, FileCode, Database, BrainCircuit, Bot, DatabaseZap } from "lucide-react";
import TailwindIcon from "@/components/icons/tailwind_css_symbol.svg";
import BootstrapIcon from "@/components/icons/bootstrap-line.svg";
import PythonIcon from "@/components/icons/python.svg";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, iconHover } from "@/lib/animations";
import { useRef } from "react";

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
    </svg>
);


const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: <ReactIcon className="h-8 w-8 text-primary" /> },
            { name: "JavaScript (ES6+)", icon: <CodeXml className="h-8 w-8 text-primary" /> },
            { name: "HTML5", icon: <FileCode className="h-8 w-8 text-primary" /> },
            { name: "CSS3", icon: <Wind className="h-8 w-8 text-primary" /> },
            { name: "Tailwind CSS", icon: <TailwindIcon className="h-8 w-8 text-primary" /> },
            { name: "Bootstrap", icon: <BootstrapIcon className="h-8 w-8 text-primary" /> },
        ]
    },
    {
        title: "Backend & Databases",
        skills: [
            { name: "Python", icon: <PythonIcon className="h-8 w-8 text-primary" /> },
            { name: "PHP", icon: <Server className="h-8 w-8 text-primary" /> },
            { name: "MySQL", icon: <Database className="h-8 w-8 text-primary" /> },
        ]
    },
    {
        title: "Other",
        skills: [
            { name: "Automation", icon: <Bot className="h-8 w-8 text-primary" /> },
            { name: "Data Analysis", icon: <DatabaseZap className="h-8 w-8 text-primary" /> },
            { name: "AI", icon: <BrainCircuit className="h-8 w-8 text-primary" /> },
        ]
    }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background">
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
            My Skillset
          </motion.h2>
          <motion.p 
            className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A collection of technologies I use to bring ideas to life.
          </motion.p>
        </motion.div>
        <motion.div 
          ref={ref}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
            {skillCategories.map((category, categoryIndex) => (
                 <motion.div
                    key={category.title}
                    variants={staggerItem}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                 >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
                            >
                                <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
                            </motion.div>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div 
                                    key={skill.name} 
                                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent/20 transition-colors cursor-pointer group"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                >
                                    <motion.div
                                        variants={iconHover}
                                        initial="rest"
                                        whileHover="hover"
                                        className="group-hover:text-primary transition-colors duration-300"
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <span className="font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                                </motion.div>
                            ))}
                        </CardContent>
                    </Card>
                 </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
