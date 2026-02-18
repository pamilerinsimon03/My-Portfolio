export type Category = 'dev' | 'design' | 'video';
export type SubCategory = 'Marketing & Social' | 'Product & Print';

export interface Project {
  title: string;
  description: string;
  images: string[];
  category: Category;
  subCategory?: SubCategory; // For design projects
  stack?: string[]; // Optional for design/video
  liveUrl?: string;
  githubUrl?: string;
  
  // Case Study Fields
  challenge?: string;
  role?: string;
  process?: string;
  solution?: string;
  results?: string;
  
  // Additional Media
  caseStudygallery?: {
    title?: string;
    images: string[];
  }[];
}

export const projects: Project[] = [
  // --- Development Projects ---
  {
    title: "DFMS (University of Ibadan)",
    description: "Built secure, searchable file management system, with the purpose of reducing academic record retrieval time by 90%.",
    images: [
      "/images/Dashboard.png",
      "/images/Log in.png",
      "/images/Admin Dashboard.png",
      "/images/Admin Verifications Page.png",
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

  // --- Design Projects (Case Studies) ---
  {
    title: "Apps&Scripts Technologies: Training & Service Brand Campaign",
    description: "Social Media Visual System to promote diverse technical courses and agency services.",
    images: [
      "/images/design/apps-scripts/card/1-school-of-data.jpg",
      "/images/design/apps-scripts/card/2-whatsapp-promo.jpg",
      "/images/design/apps-scripts/card/3-website-service.jpg",
      "/images/design/apps-scripts/card/4-data-science.jpg",
      "/images/design/apps-scripts/card/5-advert-flyer.jpg"
    ],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Figma", "CorelDraw", "Brand Strategy"],
    challenge: "Apps&Scripts Technologies needed a cohesive, professional visual identity to promote diverse technical courses (Data Science, UI/UX, Python) and agency services. The challenge was creating a system that could easily adapt to educational content, promotional offers, and technical tips while maintaining strong brand recognition across a high-volume social media schedule.",
    role: "Lead Brand Designer & Content Strategist",
    process: "The design focused on creating a modular template system to handle educational infographics (e.g., 'A 5 Reasons to Learn Python' series), course promotional flyers, and inspirational quotes. This involved setting clear guidelines for typography, color-coding course categories, and utilizing geometric shapes to anchor technical concepts. I leveraged my background as a Course Instructor/Python Programmer to ensure technical and educational accuracy in all campaign assets.",
    solution: "A defined visual system and asset library that included template grids for all social media sizes, a revised color palette for better contrast, and a set of custom icons representing core courses. The visual language uses geometric shapes to represent structure and efficiency (like programming/data), softened by a warm color palette to convey accessibility in learning.",
    results: "The cohesive visual identity contributed to a significant increase in engagement and a 40% rise in lead generation for premium courses within the first 60 days of the new campaign.",
    caseStudygallery: [
      {
        title: "Campaign Showcase & Collateral",
        images: [
            "/images/design/apps-scripts/showcase/december-promo.jpg",
            "/images/design/apps-scripts/showcase/uiux-infographic.jpg",
            "/images/design/apps-scripts/card/1-school-of-data.jpg",
            "/images/design/apps-scripts/card/2-whatsapp-promo.jpg",
            "/images/design/apps-scripts/card/3-website-service.jpg",
            "/images/design/apps-scripts/card/4-data-science.jpg",
            "/images/design/apps-scripts/card/5-advert-flyer.jpg"
        ]
      },
      {
        title: "Educational Series: 5 Reasons to Learn Python",
        images: [
            "/images/design/apps-scripts/5-reasons/1.png",
            "/images/design/apps-scripts/5-reasons/2.png",
            "/images/design/apps-scripts/5-reasons/3.png",
            "/images/design/apps-scripts/5-reasons/4.png",
            "/images/design/apps-scripts/5-reasons/5.png",
            "/images/design/apps-scripts/5-reasons/6.png",
            "/images/design/apps-scripts/5-reasons/7.png",
        ]
      }
    ],
    liveUrl: "#",
  },
  {
    title: "Simply Royal Foods Wellness Content",
    description: "Consistent visual theme for wellness/hydration challenges.",
    images: [
      "/images/design/simply-royal/hydration-week-2.png",
      "/images/design/simply-royal/dehydration-facts.png",
      "/images/design/simply-royal/fruit-combinations.jpg",
      "/images/design/simply-royal/product-flyer.jpg",
      "/images/design/simply-royal/routine-checks.jpg"
    ],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Adobe Photoshop", "Social Media Strategy", "Canva"],
    challenge: "The challenge was the launch of a multi-week Wellness Challenge, beginning with 'Hydration Week' as a 7-day push to encourage user habit formation. Simply Royal Foods lacked a consistent visual theme to launch the campaign.",
    role: "Content Creator & Strategist",
    process: "I analyzed successful wellness campaigns to understand engagement drivers. I developed a scalable template system and content framework that ensured daily posts maintained brand consistency while reducing content production time by 47%. The content was highly actionable and culturally specific, outlining daily goals (e.g., 'Drink at least 8 cups of water daily'), health benefits, and local additions (e.g., 'Incorporate cucumber, watermelon, or zobo (hibiscus tea) to enhance hydration').",
    solution: "A suite of 30 unique social media posts, along with story templates and trackers. The design achieved the desired health and vitality look by using a core color palette of deep blues and vibrant greens, focusing on the visual theme of water and fresh produce.",
    results: "The campaign saw a 25% increase in follower engagement and over 500 active participants in the challenge. The templates significantly reduced the time required for daily content creation.",
    caseStudygallery: [
      {
        title: "Hydration Week & Wellness Content",
        images: [
            "/images/design/simply-royal/hydration-week-2.png",
            "/images/design/simply-royal/dehydration-facts.png",
            "/images/design/simply-royal/fruit-combinations.jpg",
            "/images/design/simply-royal/routine-checks.jpg",
            "/images/design/simply-royal/webinar-promo.png",
            "/images/design/simply-royal/eid-el-maulud.jpg"
        ]
      }
    ],
    liveUrl: "#",
  },
  {
    title: "iReinvent Product & Print Design",
    description: "High-quality physical print assets (journals, quote cards).",
    images: [
      "/images/design/ireinvent/mockup-main.png",
      "/images/design/ireinvent/journal-cover.jpg",
      "/images/design/ireinvent/journal-mockup.png",
      "/images/design/ireinvent/quote-card-1.jpg",
      "/images/design/ireinvent/quote-card-cover-design-2.jpg"
    ],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["InDesign", "Print Production", "Custom Grid Development"],
    challenge: "This project was for Dr. Adekunbi Omotoso, CEO of Apps&Scripts Technologies, a key figure dedicated to empowering women and families through digital literacy. The challenge was to create a premium, cloth-bound physical journal that not only maximized writing space but also served as a fun and fabulous companion to the user's reinvention journey through daily reflection.",
    role: "Print Designer",
    process: "I worked closely with local printers to select the right paper stock and binding materials. The design process involved multiple iterations of the page layout to ensure optimal line spacing and margins for writing.",
    solution: "A beautiful, cloth-bound journal with gold foil stamping. The interior pages feature a custom grid system and carefully selected typography for readability. We also produced a set of companion quote cards, featuring inspirational quotes and actionable prompts, to serve as a bonus set of physical assets.",
    results: "The first print run sold out within two weeks. Customers praised the tactile quality of the journal and the thoughtfulness of the design layout, particularly the 'Action Prompt' features on the quote cards which encouraged deep reflection.",
    caseStudygallery: [
      {
        title: "Product Design & Print Assets",
        images: [
            "/images/design/ireinvent/mockup-main.png",
            "/images/design/ireinvent/journal-cover.jpg",
            "/images/design/ireinvent/journal-back-cover.png",
            "/images/design/ireinvent/journal-mockup.png",
            "/images/design/ireinvent/quote-card-1.jpg",
            "/images/design/ireinvent/quote-card-cover-design-2.jpg",
            "/images/design/ireinvent/quote-card-white.jpg"
        ]
      }
    ],
    liveUrl: "#",
  },
  {
    title: "G100 Children's Digital Safety Month Campaign",
    description: "Data visualization and infographics for online safety.",
    images: [
      "/images/design/g100/dashboard-safety.jpg",
      "/images/design/g100/online-safety-stats.jpg",
      "/images/design/g100/safety-infographic.jpg",
      "/images/design/g100/digital-girl-campaign.jpg",
      "/images/design/g100/nav-speakers.jpg",
      "/images/design/g100/outreach-event.jpg"
    ],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Canva", "Data Visualization", "Infographic Design"],
    challenge: "G100 needed to communicate complex data about digital safety risks to a general audience, specifically parents and students (secondary school level) in collaboration with partners like Apps&Scripts and EvolveGirl Africa. The challenge was to make the information accessible and engaging without oversimplifying the seriousness of the topic.",
    role: "Information Designer & Data Storyteller",
    process: "I started by breaking down the raw data into key narratives. I then sketched out various visualization concepts, focusing on clarity and impact. The final designs successfully used color coding and iconography to guide the viewer through the information.",
    solution: "A series of infographics and social media cards that broke down key statistics and safety tips, covering Phishing Scams, Malware, Cyberbullying, and Inappropriate Content. The design used a clean, authoritative style with a high-contrast color scheme for readability.",
    results: "The infographics were shared widely by partner organizations and educational institutions, helping to raise awareness about critical digital safety issues. The campaign provided critical information, highlighting statistics such as 95% of teenagers owning a smartphone and the fact that 30% of children have been cyberbullied (lifetime). It was also featured in a Secondary School Outreach Event held on September 30, 2024, at the American Corner in Ibadan.",
    caseStudygallery: [
      {
        title: "Digital Safety Campaign Assets",
        images: [
            "/images/design/g100/dashboard-safety.jpg",
            "/images/design/g100/online-safety-stats.jpg",
            "/images/design/g100/safety-infographic.jpg",
            "/images/design/g100/digital-girl-campaign.jpg",
            "/images/design/g100/nav-speakers.jpg",
            "/images/design/g100/outreach-event.jpg"
        ]
      }
    ],
    liveUrl: "#",
  },
  
  // --- Product & Print (Individual) ---
  {
    title: "Adeniks Business Card",
    description: "Brand identity card design.",
    images: ["/images/design/product-print/adeniks-front.jpg", "/images/design/product-print/adeniks-back.jpg"],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["CorelDraw", "Print"],
  },
  {
    title: "Jerry's Business Card",
    description: "Professional business card.",
    images: ["/images/design/product-print/jerry-front.png", "/images/design/product-print/jerry-back.png"],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["Photoshop", "Print"],
  },
  {
    title: "Yeye Business Card",
    description: "Business card design.",
    images: ["/images/design/product-print/yeye-front.jpg", "/images/design/product-print/yeye-back.jpg"],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["Design", "Print"],
  },
  {
    title: "Wedding Invitation",
    description: "Elegant wedding IV design.",
    images: ["/images/design/product-print/wedding-iv-front.jpg", "/images/design/product-print/wedding-iv-back.jpg"],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["Photoshop", "Print"],
  },
  {
    title: "Digital Explore Journal",
    description: "Journal and workbook design.",
    images: [
        "/images/design/product-print/digital-explore-journal.jpg", 
        "/images/design/product-print/digital-explore-journal-mockup.jpg",
        "/images/design/product-print/digital-explore-workbook-mockup.jpg"
    ],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["InDesign", "Mockup"],
  },
  {
    title: "Scaling Globally Book Cover",
    description: "Book cover design and mockup.",
    images: [
        "/images/design/product-print/scaling-globally-cover.png",
        "/images/design/product-print/scaling-globally-mockup.png"
    ],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["Photoshop", "Book Design"],
  },
  {
    title: "Omoalot Brand Identity",
    description: "Corporate ID and Letterhead.",
    images: [
        "/images/design/product-print/omoalot-id.jpg",
        "/images/design/product-print/omoalot-letterhead.jpg"
    ],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["CorelDraw", "Branding"],
  },
  {
    title: "Dharraz Label",
    description: "Product label design.",
    images: ["/images/design/product-print/dharraz-label.png"],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["Design", "Packaging"],
  },
  {
    title: "Kwits Label",
    description: "Product label design.",
    images: ["/images/design/product-print/kwits-label.png"],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["Design", "Packaging"],
  },
  {
    title: "Corporate ID Card",
    description: "Identity card design.",
    images: ["/images/design/product-print/id-card-generic.jpg"],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["Design", "Identity"],
  },
  {
    title: "Corporate Letterhead",
    description: "Professional letterhead design.",
    images: ["/images/design/product-print/letterhead-generic.jpg"],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["Design", "Stationery"],
  },
  {
    title: "Pretty Tee Letterhead",
    description: "Brand letterhead design.",
    images: ["/images/design/product-print/pretty-tee-letterhead.jpg"],
    category: 'design',
    subCategory: 'Product & Print',
    stack: ["Design", "Stationery"],
  },

  //Marketing Graphics
  {
    title: "Webinar Announcement",
    description: "Event publicity design.",
    images: ["/images/design/marketing-misc/webinar-speakers.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Canva", "Social Media"],
  },
  {
    title: "Campus Collective Networking Flyer",
    description: "Community event promotion.",
    images: ["/images/design/marketing-misc/campus-collective-1.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Photoshop", "Event Design"],
  },
   {
    title: "Campus Collective Importance of Good UI",
    description: "Community event promotion.",
    images: ["/images/design/marketing-misc/campus-collective-2.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Photoshop", "Event Design"],
  },
  {
    title: "Children's Day Creative",
    description: "Seasonal social media content.",
    images: ["/images/design/marketing-misc/childrens-day.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Canva", "Social Media"],
  },
  {
    title: "Fashion Project Promotion",
    description: "Fashion brand marketing asset.",
    images: ["/images/design/marketing-misc/fashion-project.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Photoshop", "Branding"],
  },
  {
    title: "NOAN Campaign Flyer",
    description: "Association event publicity.",
    images: ["/images/design/marketing-misc/noan-flyer.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["CorelDraw", "Print Design"],
  },
  {
    title: "Summer Training Program",
    description: "Educational program advertisement.",
    images: ["/images/design/marketing-misc/summer-training.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Canva", "EdTech"],
  },
  {
    title: "TalentHUB Event Flyer",
    description: "Corporate event publicity.",
    images: ["/images/design/marketing-misc/talenthub-partner.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Photoshop", "Corporate"],
  },
  {
    title: "Tour Flyer",
    description: "Travel and tour promotion.",
    images: ["/images/design/marketing-misc/tour-flyer.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Photoshop", "Travel"],
  },
  {
    title: "UI/UX Bootcamp Promotion",
    description: "Course enrollment drive.",
    images: ["/images/design/marketing-misc/uiux-bootcamp.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Figma", "Marketing"],
  },
  {
    title: "NIWIIT Event Flyer",
    description: "Promotional graphic.",
    images: ["/images/design/marketing-misc/cf-flyer.jpg"],
    category: 'design',
    subCategory: 'Marketing & Social',
    stack: ["Design"],
  },

  // --- Video Projects ---
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
