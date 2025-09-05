

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
    githubUrl: "https://omnicrypto.onrender.com/",
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
        className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out flex flex-col"
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
                  <div className="relative group cursor-zoom-in">
                    <Image
                      src={image}
                      alt={`${project.title} Picture ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto aspect-[3/2] object-cover"
                      data-ai-hint={project.dataAiHint}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="h-12 w-12 text-white" />
                    </div>
                  </div>
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
            <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2 bg-card/50 p-4 mt-auto">
          <Button variant="outline" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button asChild>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
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

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on. Each one represents a challenge I was excited to tackle.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
