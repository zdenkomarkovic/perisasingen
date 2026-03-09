import { buildMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import SchluesseldienstInfo from "@/components/SchluesseldienstInfo";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Schlüsseldienst Singen – Schlüssel nachmachen & Türöffnung | Postarkade",
  description:
    "Schlüsseldienst Singen: Schlüssel nachmachen, Türöffnung & 24/7 Notdienst. Schuhreparaturen, Batteriewechsel mit Garantie, Gravuren und Stempel – Postarkade, Bahnhofstraße 15.",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <SchluesseldienstInfo />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
