import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background subtle elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--card-bg)_0%,var(--background)_70%)]"></div>
        {/* Thin border lines */}
        <div className="absolute top-1/2 left-1/4 w-px h-[60%] bg-border/30 -translate-y-1/2 hidden lg:block"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-[60%] bg-border/30 -translate-y-1/2 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start relative z-10 w-full">
        {/* Left Content Area */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0">
          {/* Label */}
          <span className="text-xs font-bold uppercase tracking-widest text-muted mb-6 sm:mb-8">
            DIGITAL EXPERIENCES THAT INSPIRE
          </span>

          {/* Headline */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.05] tracking-tight text-foreground mb-6 sm:mb-8 max-w-xl">
            <span className="block">WEB</span>
            <span className="block">DEVELOPER</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-muted max-w-xl mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
            I build modern, responsive web experiences that combine clean code with intuitive functionality. From dynamic websites to full-stack applications, every detail is crafted to deliver seamless user experiences, performance, and real-world impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#work"
              className="px-7 py-4 rounded-xl bg-foreground text-background font-medium text-sm uppercase tracking-wider hover:bg-muted hover:text-foreground transition-all flex items-center justify-center gap-2"
            >
              VIEW MY WORK
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-7 py-4 rounded-xl font-medium text-sm uppercase tracking-wider border border-border bg-transparent hover:bg-card hover:border-foreground/20 transition-all flex items-center justify-center gap-2"
            >
              DOWNLOAD RESUME
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Availability badge - mobile only */}
          <div className="lg:hidden mt-10 pt-8 border-t border-border/30 w-full max-w-xl">
            <div className="flex items-center justify-center gap-2 text-xs text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Available for freelance projects
            </div>
          </div>
        </div>

        {/* Right Visual Area */}
        <div className="lg:col-span-5 relative flex items-end justify-center">
          <div className="relative w-full max-w-lg">
            {/* Decorative circle */}
            <div className="absolute -top-10 -right-10 w-72 h-72 border border-border/20 rounded-full hidden lg:block"></div>
            <div className="absolute -top-20 -right-20 w-96 h-96 border border-border/10 rounded-full hidden lg:block"></div>

            {/* Small indicator dots */}
            <div className="absolute -top-4 -right-4 flex gap-1 lg:flex">
              <div className="w-1.5 h-1.5 rounded-full bg-muted/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-muted/30"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-muted/20"></div>
            </div>

            {/* Profile Photo */}
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-card border border-border/30">
              <Image
                src="/Profil.jpeg"
                alt="Riko Hermawan"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent"></div>
            </div>

            {/* Availability badge - desktop */}
            <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:bottom-8 lg:w-64 hidden lg:block">
              <div className="bg-card/90 backdrop-blur-sm border border-border/30 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Available for freelance</p>
                    <p className="text-[10px] text-muted">Selective projects — Q1 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}