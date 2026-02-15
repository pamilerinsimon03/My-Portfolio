import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Olaniran Pamilerin. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/pamilerinsimon03" target="_blank"><Github className="h-5 w-5"/></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/simonpamilerin" target="_blank"><Linkedin className="h-5 w-5"/></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:pamilerinsimon03@gmail.com"><Mail className="h-5 w-5"/></Link>
            </Button>
        </div>
      </div>
    </footer>
  )
}
