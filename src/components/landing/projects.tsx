

"use client"

import React from "react"
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import { Github, ExternalLink, ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, cardHover, buttonHover, iconHover } from "@/lib/animations";
import { useRef } from "react";

const projects = [
  {
    title: "DFMS (University of Ibadan)",
    description: "Built secure, searchable file management system, with the purpose of reducing academic record retrieval time by 90%.",
    images: [
      "/images/Dashboard.png",
      "/images/Log in.png",
      "/images/Admin Dashboard.png",
      "/images/Admin Verifications Page.png",
    ],
    stack: ["PHP", "MySQL", "HTML", "CSS", "JS"],
    liveUrl: "https://dfms.infinityfreeapp.com/",
    githubUrl: "#",
  },
  {
    title: "OmniCrypto Bot",
    description: "Developed Python-based crypto trading assistant using AI + APIs (CoinGecko), improving trading signal accuracy and decision-making efficiency.",
    images: [
      "/images/Screenshot 2025-06-02 100149.png",
      "/images/Screenshot 2025-06-02 100158.png",
      "/images/Screenshot 2025-06-02 100210.png",
    ],
    stack: ["Python", "AI", "ML", "APIs"],
    liveUrl: "https://omnicrypto.onrender.com/",
    githubUrl: "https://github.com/pamilerinsimon03/OmniCrypto-Demo",
  },
  {
    title: "Cloudber",
    description: "Built access Intelligence platform for IAM/DevSecOps/GRC UI, improving risk visibility and compliance with interactive dashboards.",
    images: [
      "/images/Cloudber Home.png",
      "/images/Logs.png",
      "/images/Labs.png",
      "/images/AutoAudit.png",
      "/images/AccessIntel.png"
    ],
    stack: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://cloudber.vercel.app/",
    githubUrl: "https://github.com/olufemzy/Cloudber",
  },
  {
    title: "Portfolio Website",
    description: "This very website! A responsive and performant portfolio to showcase my projects and skills.",
    images: [
      "/images/Screenshot 2025-08-30 025738.png",
      "/images/Screenshot 2025-08-30 025959.png"
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://pamilerin-portfolio.vercel.app/",
    githubUrl: "https://github.com/pamilerinsimon03/My-Portfolio",
  },
];

type Project = typeof projects[0];

function FullScreenImageViewer({ images, initialIndex, open, onOpenChange }: { images: string[], initialIndex: number, open: boolean, onOpenChange: (open: boolean) => void }) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  React.useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
    }
  }, [open, initialIndex]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-0 bg-transparent max-w-[90vw] h-auto flex items-center justify-center">
        <DialogTitle className="sr-only">Project Image Viewer</DialogTitle>
        <Image
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            width={1600}
            height={900}
            className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
        />
        {images.length > 1 && (
            <>
                <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/75" onClick={goToPrevious}>
                    <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/75" onClick={goToNext}>
                    <ChevronRight className="h-8 w-8" />
                </Button>
            </>
        )}
      </DialogContent>
    </Dialog>
  );
}


function ProjectCard({ project }: { project: Project }) {
  const [isFullScreenOpen, setIsFullScreenOpen] = React.useState(false);
  const [initialImageIndex, setInitialImageIndex] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, playOnInit: false })
  );

  const handleMouseEnter = () => {
    if (plugin.current) {
        plugin.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (plugin.current) {
        plugin.current.stop();
    }
  };

  const handleImageClick = (index: number) => {
    setInitialImageIndex(index);
    setIsFullScreenOpen(true);
  }


  return (
    <>
      <motion.div
        ref={ref}
        variants={staggerItem}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover="hover"
        className="h-full"
      >
        <Card 
          className="overflow-hidden transition-all duration-300 ease-in-out flex flex-col h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        <CardContent className="p-0 flex-grow">
          <Carousel 
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index} onClick={() => handleImageClick(index)}>
                  <motion.div 
                    className="relative group cursor-zoom-in"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} Picture ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto aspect-[3/2] object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ZoomIn className="h-12 w-12 text-white" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.images.length > 1 && (
                <>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </>
            )}
          </Carousel>
          <div className="p-6">
            <motion.h3 
              className="text-xl font-bold font-headline mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.title}
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {project.description}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {project.stack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge variant="secondary" className="cursor-pointer">{tech}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2 bg-card/50 p-4 mt-auto">
          <motion.div
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Button variant="outline" asChild className="ripple">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github className="mr-2 h-4 w-4" />
                </motion.div>
                GitHub
              </Link>
            </Button>
          </motion.div>
          <motion.div
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Button asChild className="ripple">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                </motion.div>
                Live Demo
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
        </Card>
      </motion.div>
      <FullScreenImageViewer 
        images={project.images}
        initialIndex={initialImageIndex}
        open={isFullScreenOpen}
        onOpenChange={setIsFullScreenOpen}
      />
    </>
  )
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <motion.h2 
              className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My Projects
            </motion.h2>
            <motion.p 
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Here are some of the projects I've worked on. Each one represents a challenge I was excited to tackle.
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          ref={ref}
          className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
