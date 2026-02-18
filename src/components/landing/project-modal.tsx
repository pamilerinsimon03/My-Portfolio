"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Github, ExternalLink, X } from "lucide-react";
import { Project } from "@/constants/projects";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 border-0 bg-background/95 backdrop-blur-xl md:rounded-2xl overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">{project.title} Case Study</DialogTitle>
        
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-50">
           <DialogClose asChild>
              <Button variant="outline" size="icon" className="rounded-full bg-background/50 backdrop-blur-md hover:bg-background/80 border-0 shadow-lg">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
           </DialogClose>
        </div>

        <ScrollArea className="flex-1 h-full w-full">
            <div className="flex flex-col">
                {/* Hero / Header Section */}
                <div className="relative w-full h-[40vh] md:h-[50vh]">
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" /> 
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="container mx-auto max-w-4xl"
                        >
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="default" className="bg-primary/90 hover:bg-primary text-white border-0">
                                    {project.category.toUpperCase()}
                                </Badge>
                                {project.subCategory && (
                                    <Badge variant="secondary" className="bg-secondary/80 backdrop-blur-sm text-foreground">
                                        {project.subCategory}
                                    </Badge>
                                )}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 text-white leading-tight drop-shadow-lg">
                                {project.title}
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light drop-shadow-md">
                                {project.description}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto max-w-4xl px-4 md:px-6 py-12 space-y-16">
                    
                    {/* Role & Stack Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-secondary/5 rounded-xl border border-border/50">
                        {project.role && (
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">My Role</h4>
                                <p className="text-lg font-medium">{project.role}</p>
                            </div>
                        )}
                         {project.stack && (
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Tools & Tech</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <Badge key={tech} variant="outline" className="border-primary/20 bg-primary/5">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="md:col-span-2 flex gap-4 pt-2">
                            {project.githubUrl && (
                                <Button variant="outline" asChild className="gap-2">
                                    <Link href={project.githubUrl} target="_blank">
                                        <Github className="w-4 h-4" />
                                        Source Code
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Case Study Content Blocks */}
                    <div className="space-y-12">
                         {/* The Challenge */}
                        {project.challenge && (
                            <section>
                                <h3 className="text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-primary rounded-full block" />
                                    The Challenge
                                </h3>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    {project.challenge}
                                </p>
                            </section>
                        )}

                        {/* The Process */}
                        {project.process && (
                            <section>
                                <h3 className="text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-primary rounded-full block" />
                                    The Process
                                </h3>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    {project.process}
                                </p>
                            </section>
                        )}

                        {/* Custom Galleries (New Implementation) */}
                        {project.caseStudygallery && project.caseStudygallery.map((gallery, idx) => (
                             <section key={idx} className="my-8">
                                {gallery.title && <h4 className="text-xl font-bold mb-4">{gallery.title}</h4>}
                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {gallery.images.map((img, imgIdx) => (
                                            <CarouselItem key={imgIdx} className="md:basis-1/2 lg:basis-1/2">
                                                <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-border/50 bg-black/5">
                                                     {/* Blurred Background Layer */}
                                                    <Image
                                                        src={img}
                                                        alt="Background blur"
                                                        fill
                                                        className="object-cover blur-2xl opacity-40 scale-110"
                                                        aria-hidden="true"
                                                    />
                                                    {/* Main Image Layer */}
                                                    <Image
                                                        src={img}
                                                        alt={`${gallery.title || 'Project'} image ${imgIdx + 1}`}
                                                        fill
                                                        className="object-contain z-10"
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="hidden md:block">
                                        <CarouselPrevious className="-left-4" />
                                        <CarouselNext className="-right-4" />
                                    </div>
                                </Carousel>
                             </section>
                        ))}


                        {/* Middle Gallery - Fallback for legacy projects without caseStudygallery */}
                        {!project.caseStudygallery && project.images.length > 1 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                {project.images.slice(1, 3).map((img, idx) => (
                                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                        <Image
                                            src={img}
                                            alt={`${project.title} detail ${idx + 2}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                         {/* The Solution */}
                         {project.solution && (
                            <section>
                                <h3 className="text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-primary rounded-full block" />
                                    The Solution
                                </h3>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    {project.solution}
                                </p>
                            </section>
                        )}

                        {/* The Results */}
                        {project.results && (
                            <section>
                                <h3 className="text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-primary rounded-full block" />
                                    The Results
                                </h3>
                                <div className="p-6 bg-primary/5 border border-primary/10 rounded-xl">
                                     <p className="text-lg leading-relaxed font-medium">
                                        {project.results}
                                    </p>
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="pt-12 pb-8 flex justify-center">
                         <p className="text-sm text-muted-foreground italic">
                            End of Case Study
                         </p>
                    </div>

                </div>
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
