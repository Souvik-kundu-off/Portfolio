import { NavBar } from "@/components/sections/NavBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Demos } from "@/components/sections/Demos";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-orange focus:text-bg-base focus:px-4 focus:py-2 focus:rounded-sm focus:font-body focus:text-sm"
      >
        Skip to main content
      </a>
      <NavBar />
      <main id="main-content">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Demos />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
