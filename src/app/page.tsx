import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Projects } from "@/components/landing/projects";
import { Experience } from "@/components/landing/experience";
import { Skills } from "@/components/landing/skills";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
