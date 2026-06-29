export default function About() {
  const stats = [
    { value: "3+", label: "Tahun Pengalaman" },
    { value: "15+", label: "Proyek Selesai" },
    { value: "10+", label: "Klien Puas" },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Next.js API", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Tools & Design",
      skills: ["Git & GitHub", "Figma", "Docker", "VS Code", "Vercel / Netlify"],
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 bg-zinc-50 dark:bg-zinc-900/50 transition-colors border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-[10px] sm:text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2 sm:mb-3">
            Tentang Saya
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white px-4 sm:px-0">
            Mengenal Saya Lebih Dekat
          </p>
          <div className="w-10 h-0.5 sm:w-12 sm:h-1 bg-violet-600 dark:bg-violet-400 rounded-full mt-3 sm:mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-10 lg:gap-16 items-start">
          {/* Left: Bio & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6">
                Saya Riko Hermawan, lulusan baru (Fresh Graduate) S1 Teknologi Informasi dari Universitas Ibrahimy yang berpengalaman dalam membangun aplikasi web modern, cepat, aman, dan responsif.
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6 leading-relaxed">
                Sebagai seorang web developer dengan pengalaman yang solid, saya memiliki keahlian dalam menciptakan aplikasi web yang tidak hanya cepat dan aman, tetapi juga memiliki desain antarmuka yang responsif dan mudah digunakan. Saya berdedikasi untuk memberikan solusi teknologi yang inovatif dan berkualitas tinggi bagi setiap proyek yang saya kerjakan.
              </p>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8 leading-relaxed">
                Dalam setiap proyek, saya selalu berusaha memberikan yang terbaik dengan menggabungkan keahlian teknis saya, pemahaman mendalam tentang kebutuhan klien, serta komitmen terhadap kualitas dan hasil akhir. Saya sangat antusias untuk terus belajar dan berkembang dalam dunia teknologi. Dengan semangat yang tinggi dan kemampuan adaptasi yang cepat, saya siap menghadapi tantangan baru dan memberikan kontribusi yang berarti bagi setiap tim dan proyek yang saya ikuti.
              </p>
            </div>

            {/* Stats Grid - Stack vertically on smallest screens */}
            <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-zinc-200 dark:border-zinc-800">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-tr from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills Card Grid */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 md:gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 p-4 sm:p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-800 transition-all group"
              >
                <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {category.title}
                </h4>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold bg-zinc-100 hover:bg-violet-50 dark:bg-zinc-900 dark:hover:bg-violet-950/30 text-zinc-700 hover:text-violet-700 dark:text-zinc-300 dark:hover:text-violet-300 border border-zinc-200/40 dark:border-zinc-800/40 hover:border-violet-200 dark:hover:border-violet-900/50 transition-all cursor-default transform hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
