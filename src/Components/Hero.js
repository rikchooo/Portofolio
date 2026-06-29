export default function Hero() {
  return (
<section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-zinc-950 transition-colors"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]"></div>

        {/* Glowing gradient blobs - smaller on mobile */}
        <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: "8s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDuration: "12s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-900/50 mb-4 sm:mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-violet-600 dark:bg-violet-400 animate-ping"></span>
            <span className="text-[10px] sm:text-xs font-semibold text-violet-700 dark:text-violet-300">Tersedia untuk Proyek Baru</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-4 sm:mb-6">
            Halo, saya{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Riko Hermawan
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-4 sm:mb-6">
            Fullstack Web Developer & UI/UX Designer
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Membangun pengalaman digital berkinerja tinggi, bersih, dan profesional. Fokus saya adalah mengubah ide kompleks menjadi produk web yang interaktif, responsif, dan mudah digunakan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#projects"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-white font-medium bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-500/10 hover:shadow-xl hover:shadow-violet-500/20 transform hover:-translate-y-0.5 transition-all text-center text-sm sm:text-base"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transform hover:-translate-y-0.5 transition-all text-center text-sm sm:text-base"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Visual/Graphics Area - Hidden on smallest screens for better mobile UX */}
        <div className="lg:col-span-5 flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Rotating SVG frames for premium aesthetic */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "25s" }}>
              <svg className="w-full h-full text-zinc-100 dark:text-zinc-900 opacity-60 dark:opacity-30" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5 5" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="10 10" />
              </svg>
            </div>

            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "40s", animationDirection: "reverse" }}>
              <svg className="w-full h-full text-violet-500/20 dark:text-violet-400/10" viewBox="0 0 100 100">
                <rect x="15" y="15" width="70" height="70" rx="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            {/* Core glowing card containing avatar/initials */}
            <div className="absolute inset-6 sm:inset-8 rounded-3xl bg-gradient-to-tr from-violet-600/10 to-indigo-600/10 dark:from-violet-500/5 dark:to-indigo-500/5 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 shadow-2xl">
              {/* Profile Photo Mockup */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 p-[2px] sm:p-[3px] shadow-lg mb-4 sm:mb-6">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-zinc-950 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-tr from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    RH
                  </span>
                </div>
              </div>

              {/* Small interactive specs inside graphic - Hidden on mobile, shown on larger screens */}
              <div className="hidden sm:block text-center">
                <p className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200">Based in Indonesia</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Ready for global remote work</p>
              </div>

              {/* Float-in cards inside graphics area - Only shown on larger screens */}
              <div className="hidden sm:block absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform">
                <span className="text-lg sm:text-xl">🚀</span>
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">Keahlian Utama</p>
                  <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Next.js & React</p>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform">
                <span className="text-lg sm:text-xl">💻</span>
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">Desain</p>
                  <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Tailwind & Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
