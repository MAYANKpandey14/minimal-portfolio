import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import Booker from "@/components/Booker";
import Footer from "@/components/Footer";
import SEOHead from "@/components/optimized/SEOHead";
import { siteContent } from "@/data/content";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SEOHead
        title={siteContent.seo.title}
        description={siteContent.seo.description}
        canonical={`${siteContent.seo.siteUrl}/`}
        structuredData={siteContent.structuredData}
      />

      {/* Organic Grain Texture Overlay */}
      <svg
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.015]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Decorative Organic Floating Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-accent/10 blur-[100px] animate-float" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-primary/10 blur-[90px] animate-float" style={{ animationDuration: '16s', animationDelay: '-4s' }}></div>
      </div>

      <Header />

      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <HireMe />
        <section id="book" className="section-container">
          <div className="text-center mb-10">
            <h2 className="section-heading">Schedule a Meeting</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Ready to discuss your project? Pick a time that works for you.
            </p>
          </div>
          <Booker eventSlug="30min" calUsername="mayankpandey404" />
        </section>
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
