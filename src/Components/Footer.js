export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Proyek", href: "#projects" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 py-10 sm:py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
        {/* Logo/Name */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-1 group">
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">RH</span>
          </a>
          <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-500 mt-1">
            Membangun masa depan digital dengan rapi.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] sm:text-xs font-medium text-zinc-500 hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 text-center md:text-right">
          &copy; {currentYear} Riko Hermawan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
