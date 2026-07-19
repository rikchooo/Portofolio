import Image from "next/image";

export default function Projects() {
  const projectList = [
    {
      title: "E-Commerce Dashboard",
      description: "Dashboard analitik data E-Commerce real-time dengan integrasi bagan interaktif, manajemen workspace tim, dan ekspor laporan otomatis.",
      image: "/projects/project1.png",
      tags: ["React.js", "Tailwind CSS", "MySQL", "Express.js"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "E-Learning Platform",
      description: "Platform pembelajaran online dengan fitur kursus interaktif, kuis, dan sertifikasi. Dirancang untuk pengalaman belajar modern dan efisien.",
      image: "/projects/project2.png",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "registration information system",
      description: "Sistem informasi pendaftaran santri baru di pondok pesantren delima tanjung rejo dengan fitur pendaftaran online, upload dokumen, dan status verifikasi.",
      image: "/projects/project3.png",
      tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Express.js"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-zinc-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-[10px] sm:text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2 sm:mb-3">
            Portofolio
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white px-4 sm:px-0">
            Proyek Pilihan Terbaru
          </p>
          <div className="w-10 h-0.5 sm:w-12 sm:h-1 bg-violet-600 dark:bg-violet-400 rounded-full mt-3 sm:mt-4"></div>
        </div>

        {/* Projects Grid - Stack on mobile, 2 columns on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projectList.map((project, idx) => (
            <article
              key={idx}
              className="group flex flex-col bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-800 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-2 sm:mb-2.5">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-bold bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200/30 dark:border-zinc-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {/* Github icon */}
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors ml-auto"
                  >
                    {/* External Link icon */}
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
