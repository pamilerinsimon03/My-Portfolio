"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, waveEntrance, iconHover } from "@/lib/animations";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email",
      content: "Email me Here",
      href: "mailto:pamilerinsimon03@gmail.com",
      isExternal: false
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Phone",
      content: "+234 8146649679",
      href: "tel:+2348146649679",
      isExternal: false
    },
    {
      icon: <Linkedin className="h-8 w-8 text-primary" />,
      title: "LinkedIn",
      content: "My Linkedin Page",
      href: "https://www.linkedin.com/in/simonpamilerin/",
      isExternal: true
    },
    {
      icon: <Github className="h-8 w-8 text-primary" />,
      title: "GitHub",
      content: "My GitHub Page",
      href: "https://github.com/pamilerinsimon03",
      isExternal: true
    }
  ];

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center space-y-2 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you.
          </motion.p>
        </motion.div>
        <motion.div 
          ref={ref}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={waveEntrance}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                    <CardContent className="p-6 flex items-center gap-4 h-full">
                        <motion.div
                          variants={iconHover}
                          initial="rest"
                          whileHover="hover"
                          className="group-hover:text-primary transition-colors duration-300"
                        >
                          {method.icon}
                        </motion.div>
                        <div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{method.title}</h3>
                            {method.isExternal ? (
                              <Link 
                                href={method.href} 
                                target="_blank" 
                                className="text-muted-foreground hover:text-primary break-all transition-colors duration-300"
                              >
                                {method.content}
                              </Link>
                            ) : (
                              <a 
                                href={method.href} 
                                className="text-muted-foreground hover:text-primary break-all transition-colors duration-300"
                              >
                                {method.content}
                              </a>
                            )}
                        </div>
                    </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
