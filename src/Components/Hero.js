import Image from "next/image";

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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-4 sm:mb-6">
            Halo, saya{" "}
            <span className="bg-linear-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
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
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-white font-medium bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-500/10 hover:shadow-xl hover:shadow-violet-500/20 transform hover:-translate-y-0.5 transition-all text-center text-sm sm:text-base"
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
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Rotating SVG frames for premium aesthetic */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "25s" }}>
              <svg className="w-full h-full text-zinc-100 dark:text-zinc-900 opacity-60 dark:opacity-30" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5 5" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="10 10" />
              </svg>
            </div>

            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "40s", animationDirection: "reverse" }}>
              <svg className="w-full h-full text-violet-500/20 dark:text-violet-400/10" viewBox="0 0 100 100" aria-hidden="true">
                <rect x="15" y="15" width="70" height="70" rx="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            {/* Profile Photo */}
            <div className="relative inline-block rounded-full bg-linear-to-tr from-gray-100 to-gray-100 p-1 sm:p-1.5 shadow-lg w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52">
              <Image
                src="/Profil.jpeg"
                alt="Riko Hermawan"
                fill
                className="rounded-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
