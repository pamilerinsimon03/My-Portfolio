"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
    CodeXml, Server, Wind, FileCode, Database, BrainCircuit, Bot, DatabaseZap,
    Palette, PenTool, Image as ImageIcon, Layers, Video, Film, Headphones, MonitorPlay
} from "lucide-react";
import TailwindIcon from "@/components/icons/tailwind_css_symbol.svg";
import BootstrapIcon from "@/components/icons/bootstrap-line.svg";
import PythonIcon from "@/components/icons/python.svg";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, iconHover } from "@/lib/animations";
import { useRef } from "react";

// Custom Icon Components (if needed, reusing existing ones or Lucide)
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
        title: "Code",
        icon: <CodeXml className="h-6 w-6" />,
        skills: [
            { name: "React.js", icon: <ReactIcon className="h-8 w-8" /> },
            { name: "Next.js", icon: <CodeXml className="h-8 w-8" /> },
            { name: "TypeScript", icon: <FileCode className="h-8 w-8" /> },
            { name: "Python", icon: <PythonIcon className="h-8 w-8" /> },
            { name: "Tailwind CSS", icon: <TailwindIcon className="h-8 w-8" /> },
            { name: "PHP & MySQL", icon: <Database className="h-8 w-8" /> },
        ]
    },
    {
        title: "Design",
        icon: <Palette className="h-6 w-6" />,
        skills: [
            { name: "Figma", icon: <PenTool className="h-8 w-8" /> },
            { name: "Photoshop", icon: <ImageIcon className="h-8 w-8" /> },
            { name: "CorelDraw", icon: <Layers className="h-8 w-8" /> },
            { name: "UI/UX", icon: <Palette className="h-8 w-8" /> },
        ]
    },
    {
        title: "Production",
        icon: <Video className="h-6 w-6" />,
        skills: [
            { name: "Premiere Pro", icon: <Film className="h-8 w-8" /> },
            { name: "After Effects", icon: <MonitorPlay className="h-8 w-8" /> },
            { name: "Audio Editing", icon: <Headphones className="h-8 w-8" /> },
        ]
    }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
            My Multidisciplinary Skills
          </motion.h2>
          <motion.p 
            className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Merging logic, aesthetics, and storytelling.
          </motion.p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-3"
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
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-primary">
                        <CardHeader className="text-center pb-2">
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                                {category.icon}
                            </div>
                            <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div 
                                        key={skill.name} 
                                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer group"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                        transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <div className="text-primary group-hover:text-white transition-colors">
                                            {skill.icon}
                                        </div>
                                        <span className="font-medium group-hover:text-white transition-colors duration-300">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                 </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
