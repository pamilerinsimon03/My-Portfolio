export type Category = 'dev' | 'design' | 'video';

export interface Project {
  title: string;
  description: string;
  images: string[];
  category: Category;
  stack?: string[]; // Optional for design/video
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  // Development Projects
  {
    title: "DFMS (University of Ibadan)",
    description: "Built secure, searchable file management system, with the purpose of reducing academic record retrieval time by 90%.",
    images: [
      "/images/Dashboard.png",
      "/images/Log in.png",
      "/images/Admin Dashboard.png",
      "/images/Admin Verifications Page.png",
    ],
    category: 'dev',
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
    category: 'dev',
    stack: ["Python", "AI", "ML", "APIs"],
    liveUrl: "https://omnicrypto.onrender.com/",
    githubUrl: "https://github.com/pamilerinsimon03/OmniCrypto-Demo",
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
    category: 'dev',
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
    category: 'dev',
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://pamilerin-portfolio.vercel.app/",
    githubUrl: "https://github.com/pamilerinsimon03/My-Portfolio",
  },

  // Design Projects (Mock Data)
  {
    title: "Brand Identity - Nexus Tech",
    description: "Complete brand identity design including logo, color palette, and typography for a tech startup.",
    images: [
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    ],
    category: 'design',
    liveUrl: "#",
  },
  {
    title: "Social Media Kit - Fresh Eats",
    description: "Instagram and Facebook post templates for a healthy food delivery service.",
    images: [
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2000&auto=format&fit=crop"
    ],
    category: 'design',
    liveUrl: "#",
  },

  // Video Projects (Mock Data)
  {
    title: "Commercial Edit - 'City Life'",
    description: "Fast-paced commercial edit for a lifestyle brand, featuring dynamic transitions and sound design.",
    images: [
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" 
    ],
    category: 'video',
    liveUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
  },
  {
    title: "Short Form - Tech Reviews",
    description: "Engaging short-form content for TikTok/Reels focusing on gadget reviews.",
    images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
    ],
    category: 'video',
    liveUrl: "https://vimeo.com/channels/staffpicks/910903328",
  }
];
