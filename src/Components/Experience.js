export default function Experience() {
  const experiences = [
    {
      period: "2025 - Sekarang",
      role: "Owner Frontend Developer",
      company: "Posnod Learning Platform",
      description:
        "Memimpin pengembangan antarmuka pengguna untuk produk SaaS utama perusahaan yaitu platform pembelajaran online. Bertanggung jawab atas standardisasi komponen Next.js, React, TailwindCSS peningkatan performa pemuatan halaman sebesar 35%, serta mentoring developer junior.",
    },
    {
      period: "2023 - 2025",
      role: "Frontend Developer",
      company: "Posnod Learning Platform",
      description:
        "Mengembangkan dan merancang web yang responsif dan interaktif. Bekerja dengan Next.js, dan Tailwind CSS. Berhasil mengintegrasikan berbagai API pihak ketiga.",
    },
    {
      period: "2022 - 2023",
      role: "Fullstack Web Developer",
      company: "Job Freelance",
      description:
        "Mengembangkan dan merancang lebih dari 5 situs web klien yang responsif dan interaktif. Bekerja dengan React, Next.js, dan Tailwind CSS. Berhasil mengintegrasikan berbagai API pihak ketiga dan gerbang pembayaran.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 bg-zinc-50 dark:bg-zinc-900/50 transition-colors border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-[10px] sm:text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2 sm:mb-3">
            Pengalaman
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white px-4 sm:px-0">
            Perjalanan Karir Profesional
          </p>
          <div className="w-10 h-0.5 sm:w-12 sm:h-1 bg-violet-600 dark:bg-violet-400 rounded-full mt-3 sm:mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-5 md:ml-6 flex flex-col gap-8 sm:gap-10 md:gap-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 md:pl-10 group">
              {/* Timeline dot - Larger on mobile */}
              <div className="absolute -left-2 top-1.5 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-violet-600 dark:group-hover:border-violet-400 group-hover:scale-110 transition-all duration-300"></div>

              {/* Card wrapper */}
              <div className="bg-white dark:bg-zinc-950 p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-800 transition-all">
                {/* Meta details - Stack vertically on mobile */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-2 mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5 sm:mt-1">
                      {exp.company}
                    </p>
                  </div>

                  {/* Period tag */}
                  <span className="inline-flex px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-900/50 self-start sm:self-center">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
