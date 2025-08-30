const experiences = [
  {
    company: "Apps&Scripts Technologies",
    title: "Frontend Developer",
    period: "Dec 2023 - April 2025",
    description: "Built responsive web apps with React.js and Tailwind, boosting usability by 20%. Integrated Python automation workflows, saving team hours weekly and optimizing apps for mobile, which increased traffic by 15%.",
  },
  {
    company: "3MTT Nigeria",
    title: "Product Design Tutor",
    period: "Aug 2024 - Nov 2024",
    description: "Guided students in product design fundamentals and delivered hands-on lessons in HTML, CSS, & React.js. Mentored students on project workflows and job readiness, helping them ship functional projects and improve portfolio quality.",
  },
  {
    company: "Premium Print House Designs",
    title: "Graphic Designer",
    period: "April 2023 - June 2023",
    description: "Designed branding and marketing assets that increased client recognition by 20%. Collaborated on web layouts and digital graphics, improving user engagement and gaining design experience that now enhances my frontend work.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            My professional journey through the world of software development.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative mb-8 flex justify-between items-center w-full">
              <div className="hidden md:block md:w-5/12">
                {index % 2 === 0 && (
                  <div className="p-6 bg-card rounded-lg shadow-md">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <h3 className="text-xl font-bold font-headline mt-1">{exp.title}</h3>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    <p className="mt-4 text-muted-foreground">{exp.description}</p>
                  </div>
                )}
              </div>
              <div className="z-10 hidden md:flex items-center justify-center w-8 h-8 bg-primary rounded-full shrink-0">
                <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
              </div>
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                 <div className="p-6 bg-card rounded-lg shadow-md md:hidden">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <h3 className="text-xl font-bold font-headline mt-1">{exp.title}</h3>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    <p className="mt-4 text-muted-foreground">{exp.description}</p>
                 </div>
                 {index % 2 !== 0 && (
                    <div className="hidden md:block p-6 bg-card rounded-lg shadow-md">
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                        <h3 className="text-xl font-bold font-headline mt-1">{exp.title}</h3>
                        <p className="text-lg font-semibold text-primary">{exp.company}</p>
                        <p className="mt-4 text-muted-foreground">{exp.description}</p>
                    </div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
