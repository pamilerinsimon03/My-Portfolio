"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";


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
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm shadow-sm">
      <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
        <span className="font-headline font-semibold text-lg">Olaniran Pamilerin</span>
      </Link>
      <nav className="ml-auto hidden md:flex items-center gap-4 sm:gap-6">
        <a onClick={() => scrollTo("projects")} className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 cursor-pointer">
          Projects
        </a>
        <a onClick={() => scrollTo("experience")} className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 cursor-pointer">
          Experience
        </a>
        <a onClick={() => scrollTo("skills")} className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 cursor-pointer">
          Skills
        </a>
        <Button onClick={() => scrollTo("contact")}>Contact</Button>
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
    </header>
  );
}
