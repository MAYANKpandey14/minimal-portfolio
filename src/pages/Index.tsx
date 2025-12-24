
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import Booker from "@/components/Booker";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background subtle tech patterns */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/5 to-transparent opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-accent/5 to-transparent opacity-50 blur-3xl"></div>
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
