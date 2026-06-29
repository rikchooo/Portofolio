import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Experience from "@/Components/Experience";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
