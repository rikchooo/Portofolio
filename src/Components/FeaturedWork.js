import Image from "next/image";

export default function FeaturedWork() {
  const projects = [
    {
      title: "Finance Dashboard",
      category: "Fullstack Web Application",
      description: "A comprehensive analytics dashboard for financial data visualization with real-time charts, team workspace management, and automated reporting.",
      image: "/projects/E-CommerceDashboard.png",
      tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    },
    {
      title: "E-Learning Platform",
      category: "Frontend Application Development",
      description: "Modern learning platform with interactive courses, quizzes, and certification. Built for seamless user experience and scalable architecture.",
      image: "/projects/LearningPlatform.png",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    },
    {
      title: "Registration System",
      category: "Fullstact Web Application",
      description: "Student registration system for educational institution with online registration, document upload, and verification status tracking.",
      image: "/projects/RegistrationSystem.png",
      tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Express.js"],
    },
  ];

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2 block">FEATURED WORK</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Selected Projects
            </h2>
          </div>
          <a
            href="#work"
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors uppercase tracking-wider"
          >
            EXPLORE ALL PROJECTS
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-border hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-border/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Arrow button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  <button className="w-10 h-10 rounded-full bg-foreground/90 text-background flex items-center justify-center hover:bg-foreground hover:scale-110 transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-muted transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
                  {project.category}
                </p>

                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-border/50 text-muted hover:text-foreground hover:bg-border transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}