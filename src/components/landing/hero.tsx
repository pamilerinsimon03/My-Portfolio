"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function Hero() {

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="w-full pt-32 md:pt-40 lg:pt-48 border-b">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24 pb-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm Olaniran Pamilerin
              </h1>
              <p className="text-primary font-semibold text-xl md:text-2xl">A Frontend Developer & Python Programmer</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I build responsive apps and automation workflows, translating complex needs into simple, intuitive solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" onClick={() => scrollTo('projects')}>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary" onClick={() => scrollTo('contact')}>
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 relative">
            <div className="w-72 h-72 rounded-full bg-primary/20 blur-3xl absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <p className="font-headline text-lg font-semibold tracking-wide">Key Skills</p>
            <div className="flex flex-wrap gap-3 justify-center max-w-md">
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">React.js</Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">Next.js</Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">JavaScript</Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">Python</Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">Tailwind CSS</Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">TypeScript</Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">Bootstrap</Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">PHP</Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">MySQL</Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">HTML</Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">CSS</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
