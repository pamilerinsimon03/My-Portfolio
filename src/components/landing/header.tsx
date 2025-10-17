"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { fadeInUp, buttonHover, iconHover, shimmerVariants } from "@/lib/animations";


function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          variants={iconHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center"
        >
          <Button variant="outline" size="icon" className="relative overflow-hidden">
            <motion.div
              initial={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export function Header() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    setIsMounted(true);
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center shadow-sm"
      style={isMounted ? {
        backgroundColor: `rgba(var(--background), ${headerOpacity.get()})`,
        backdropFilter: `blur(${headerBlur.get()}px)`,
      } : {
        backgroundColor: `rgba(var(--background), 0.8)`,
        backdropFilter: `blur(8px)`,
      }}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
          <span className="font-headline font-semibold text-lg">Olaniran Pamilerin</span>
        </Link>
      </motion.div>
      <nav className="ml-auto hidden md:flex items-center gap-4 sm:gap-6">
        <motion.a 
          onClick={() => scrollTo("projects")} 
          className="text-sm font-medium hover:text-primary cursor-pointer relative group"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
        <motion.a 
          onClick={() => scrollTo("experience")} 
          className="text-sm font-medium hover:text-primary cursor-pointer relative group"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Experience
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
        <motion.a 
          onClick={() => scrollTo("skills")} 
          className="text-sm font-medium hover:text-primary cursor-pointer relative group"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Skills
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
        <motion.div
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="relative magnetic"
        >
          <Button 
            onClick={() => scrollTo("contact")}
            className="relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 ripple"
          >
            <span className="relative z-10">Contact</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              variants={shimmerVariants}
              initial="rest"
              whileHover="hover"
            />
          </Button>
        </motion.div>
        <ThemeToggle />
      </nav>
       <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-auto md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-6">
            <div className="p-4 border-b flex justify-between items-center">
                <Link href="#" className="flex items-center gap-2" prefetch={false} onClick={() => setOpen(false)}>
                    <LogoIcon className="h-6 w-6 text-primary" />
                    <span className="font-headline font-semibold text-lg">Olaniran Pamilerin</span>
                </Link>
            </div>
            <nav className="flex flex-col gap-2 p-4 text-lg font-medium flex-grow">
                <a onClick={() => scrollTo("projects")} className="text-muted-foreground hover:text-primary py-2 cursor-pointer">
                Projects
                </a>
                <a onClick={() => scrollTo("experience")} className="text-muted-foreground hover:text-primary py-2 cursor-pointer">
                Experience
                </a>
                <a onClick={() => scrollTo("skills")} className="text-muted-foreground hover:text-primary py-2 cursor-pointer">
                Skills
                </a>
                <a onClick={() => scrollTo("contact")} className="text-muted-foreground hover:text-primary py-2 cursor-pointer">
                    Contact
                </a>
            </nav>
            <Separator />
            <div className="p-4 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://github.com/pamilerinsimon03" target="_blank"><Github className="h-5 w-5"/></Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://www.linkedin.com/in/olaniranpamilerin" target="_blank"><Linkedin className="h-5 w-5"/></Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="mailto:pamilerinsimon03@gmail.com"><Mail className="h-5 w-5"/></Link>
                    </Button>
                </div>
                <ThemeToggle />
            </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
}
