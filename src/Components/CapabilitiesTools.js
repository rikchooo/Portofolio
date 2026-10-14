export default function CapabilitiesTools() {
  const capabilities = [
    {
      title: "Frontend Development",
      description: "Building responsive, performant user interfaces with React, Next.js, and modern CSS frameworks.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Backend Development",
      description: "Designing robust APIs, database schemas, and server-side logic with Node.js, Express, and PostgreSQL.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: "Fullstack Architecture",
      description: "End-to-end application development from database design to deployment, ensuring scalability and maintainability.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Database Design",
      description: "Modeling efficient database schemas, optimizing queries, and managing migrations with Prisma and PostgreSQL.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
    },
    {
      title: "API Development",
      description: "Creating RESTful and GraphQL APIs with proper authentication, validation, and documentation.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      title: "DevOps & Deployment",
      description: "Setting up CI/CD pipelines, containerization with Docker, and deploying to cloud platforms like Vercel and AWS.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  const tools = [
    { name: "React", icon: "React" },
    { name: "Next.js", icon: "Next" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "TC" },
    { name: "Node.js", icon: "Node" },
    { name: "PostgreSQL", icon: "PG" },
    { name: "Prisma", icon: "Prisma" },
    { name: "Docker", icon: "Docker" },
    { name: "Git", icon: "Git" },
    { name: "Vercel", icon: "Vercel" },
  ];

  const certifications = [
    { title: "Meta Front-End Developer Certificate", issuer: "Meta / Coursera", year: "2023" },
    { title: "Bachelor of Information Technology", issuer: "Universitas Ibrahimy", year: "2022" },
  ];

  return (
    <section id="capabilities" className="py-16 md:py-24 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2 block">CAPABILITIES & TOOLS</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            What I Do & Use
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {/* Left Column: Core Capabilities */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-6">CORE CAPABILITIES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border/50 rounded-xl p-5 md:p-6 hover:border-border hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
                >
                  <div className="text-muted mb-4">
                    {cap.icon}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {cap.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tools & Technologies */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-6">TOOLS & TECHNOLOGIES</h3>
              <div className="bg-card border border-border/50 rounded-xl p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  {tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-lg bg-background border border-border/50 text-foreground font-bold text-sm md:text-base transition-all hover:border-border hover:scale-[1.02]"
                    >
                      {tool.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Education */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-6">CERTIFICATIONS & EDUCATION</h3>
              <div className="bg-card border border-border/50 rounded-xl p-5 md:p-6">
                <div className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-border/30 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{cert.title}</p>
                        <p className="text-xs text-muted">{cert.issuer}</p>
                      </div>
                      <span className="text-xs font-medium text-muted uppercase tracking-wider whitespace-nowrap">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}