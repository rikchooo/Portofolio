import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Statistics from "@/Components/Statistics";
import FeaturedWork from "@/Components/FeaturedWork";
import CapabilitiesTools from "@/Components/CapabilitiesTools";
import DesignProcess from "@/Components/DesignProcess";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Statistics />
        <FeaturedWork />
        <CapabilitiesTools />
        <DesignProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}