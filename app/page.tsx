import { buildMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import SchluesseldienstInfo from "@/components/SchluesseldienstInfo";
import BatteriewechselInfo from "@/components/BatteriewechselInfo";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Schlüsseldienst & Batteriewechsel Singen – Schlüssel nachmachen | Postarkade",
  description:
    "Schlüsseldienst Singen: Schlüssel nachmachen, Türöffnung & 24/7 Notdienst. Batteriewechsel Singen für Uhren, Fernbedienungen & Auto-Schlüssel mit Garantie. Schuhreparaturen, Gravuren – Postarkade, Bahnhofstraße 15.",
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
        <BatteriewechselInfo />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
