"use client"

import React, { useState, useRef } from "react"
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import { Github, ExternalLink, ZoomIn, ChevronLeft, ChevronRight, Play, Code, Palette, Video, Layers } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, buttonHover } from "@/lib/animations";
import { projects as allProjects, Project, Category } from "@/constants/projects";
import { cn } from "@/lib/utils";

// --- Components ---

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
        <div className="relative w-full max-w-screen-xl max-h-screen flex items-center justify-center">
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
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProjectCardDev({ project }: { project: Project }) {
  const [isFullScreenOpen, setIsFullScreenOpen] = React.useState(false);
  const [initialImageIndex, setInitialImageIndex] = React.useState(0);
  
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
      <Card 
        className="overflow-hidden transition-all duration-300 ease-in-out flex flex-col h-full hover:shadow-xl"
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
                <CarouselItem key={index}>
                    <div className="relative group cursor-zoom-in" onClick={() => handleImageClick(index)}>
                        <Image
                            src={image}
                            alt={`${project.title} Picture ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                             <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
                        </div>
                    </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.images.length > 1 && (
                <>
                    <CarouselPrevious className="left-2 bg-black/50 text-white hover:bg-black/70 border-none" />
                    <CarouselNext className="right-2 bg-black/50 text-white hover:bg-black/70 border-none" />
                </>
            )}
          </Carousel>
          <div className="p-6 space-y-4">
            <div>
                 <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
                 <p className="text-muted-foreground line-clamp-3">{project.description}</p>
            </div>
            {project.stack && (
                <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:bg-secondary/80 transition-colors">
                        {tech}
                    </Badge>
                ))}
                </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2 bg-secondary/10 p-4 mt-auto">
          {project.githubUrl && (
              <Button variant="outline" size="sm" asChild className="gap-2">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                </Link>
              </Button>
          )}
          {project.liveUrl && (
              <Button size="sm" asChild className="gap-2">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                </Link>
              </Button>
          )}
        </CardFooter>
      </Card>
      <FullScreenImageViewer 
        images={project.images}
        initialIndex={initialImageIndex}
        open={isFullScreenOpen}
        onOpenChange={setIsFullScreenOpen}
      />
    </>
  )
}

function ProjectCardDesign({ project }: { project: Project }) {
    const [isFullScreenOpen, setIsFullScreenOpen] = React.useState(false);

    return (
        <>
        <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setIsFullScreenOpen(true)}
        >
            <div className="aspect-[4/3] w-full relative">
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold font-headline translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                    <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">{project.description}</p>
                </div>
            </div>
        </motion.div>
        
        <FullScreenImageViewer 
            images={project.images}
            initialIndex={0}
            open={isFullScreenOpen}
            onOpenChange={setIsFullScreenOpen}
        />
        </>
    );
}

function ProjectCardVideo({ project }: { project: Project }) {
    const [isPlaying, setIsPlaying] = useState(false); // Placeholder for actual video playing logic

    // In a real scenario, you might embed a YouTube/Vimeo player here when clicked.
    // For now, we'll link to the url or just show the thumbnail.
    
    return (
        <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <div className="relative aspect-video w-full overflow-hidden">
                 <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                             <Play className="w-8 h-8 text-white fill-current" />
                        </div>
                    </Link>
                )}
            </div>
            <CardContent className="p-4 flex-grow">
                 <h3 className="text-lg font-bold font-headline mb-2">{project.title}</h3>
                 <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
            </CardContent>
        </Card>
    );
}


// --- Main Projects Component ---

export function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | Category>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeTab === 'all' 
    ? [
        ...allProjects.filter(p => p.category === 'dev').slice(0, 3),
        ...allProjects.filter(p => p.category === 'design').slice(0, 3),
        ...allProjects.filter(p => p.category === 'video').slice(0, 3)
      ]
    : allProjects.filter(p => p.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Work', icon: Layers },
    { id: 'dev', label: 'Development', icon: Code },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'video', label: 'Video', icon: Video },
  ];

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
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
              Selected Works
            </motion.h2>
            <motion.p 
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A showcase of my projects across development, design, and video production.
            </motion.p>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <Button
                        key={tab.id}
                        variant={activeTab === tab.id ? "default" : "outline"}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={cn(
                            "rounded-full px-6 transition-all duration-300",
                            activeTab === tab.id && "ring-2 ring-primary ring-offset-2 ring-offset-background"
                        )}
                    >
                        <Icon className="w-4 h-4 mr-2" />
                        {tab.label}
                    </Button>
                )
            })}
        </motion.div>

        {/* Gallery */}
        <div ref={ref} className="min-h-[400px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                        "grid gap-8",
                        // Adjust grid columns based on active tab for optimal storage
                        activeTab === 'design' 
                            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" 
                            : "grid-cols-1 md:grid-cols-2"
                    )}
                >
                    {filteredProjects.map((project, index) => (
                         <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                         >
                            {project.category === 'dev' && <ProjectCardDev project={project} />}
                            {project.category === 'design' && <ProjectCardDesign project={project} />}
                            {project.category === 'video' && <ProjectCardVideo project={project} />}
                         </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    No projects found in this category yet.
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
