import { buildMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Startseite",
  description:
    "Schuh- und Schlüsseldienst Periša in Singen – Schuhreparaturen, Schlüssel nachmachen, Batteriewechsel mit Garantie, Gravuren, Stempel und 24/7 Notdienst. Postarkade, Bahnhofstraße 15.",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
