import Hero from "@/components/Hero";
import TeamAccordion from "@/components/TeamAccordion";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TeamAccordion />
      <About />
      <Footer />
    </main>
  );
}
