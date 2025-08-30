"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function Contact() {

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <Card>
                <CardContent className="p-6 flex items-center gap-4">
                    <Mail className="h-8 w-8 text-primary"/>
                    <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <a href="mailto:pamilerinsimon03@gmail.com" className="text-muted-foreground hover:text-primarybreak-all">Email me Here</a>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6 flex items-center gap-4">
                    <Phone className="h-8 w-8 text-primary"/>
                    <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <a href="tel:+2348146649679" className="text-muted-foreground hover:text-primary">+234 8146649679</a>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6 flex items-center gap-4">
                    <Linkedin className="h-8 w-8 text-primary"/>
                    <div>
                        <h3 className="text-lg font-semibold">LinkedIn</h3>
                              <Link href="https://www.linkedin.com/in/simonpamilerin/" target="_blank" className="text-muted-foreground hover:text-primary break-all">
                                My Linkedin Page
                              </Link>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardContent className="p-6 flex items-center gap-4">
                    <Github className="h-8 w-8 text-primary"/>
                    <div>
                        <h3 className="text-lg font-semibold">GitHub</h3>
                        <Link href="https://github.com/pamilerinsimon03" target="_blank" className="text-muted-foreground hover:text-primary break-all">
                            My GitHub Page
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
