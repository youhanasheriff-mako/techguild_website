import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ValueProps } from "@/components/ValueProps";
import { Features } from "@/components/Features";
import { Events } from "@/components/Events";
import { BlogPreview } from "@/components/BlogPreview";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <NavBar />
      <main>
        <Hero />
        <Stats />
        <ValueProps />
        <Features />
        <Events />
        <BlogPreview />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
