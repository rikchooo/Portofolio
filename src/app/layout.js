import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "@/Styles/global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Riko Hermawan | Portofolio Web Developer & Fresh Graduate",
  description: "Portofolio profesional Riko Hermawan, seorang lulusan baru (Fresh Graduate) S1 Teknologi Informasi dari Universitas Ibrahimy yang berpengalaman dalam membangun aplikasi web modern.",
};

export default function RootLayout({ children }) {
  // Applies the saved/system theme before hydration to avoid a flash of the
  // wrong theme (FOUC). Runs synchronously before React loads.
  const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
