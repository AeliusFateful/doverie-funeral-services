import dynamic from "next/dynamic";
import { SiteHeader } from "../components/site-header";
import { Hero } from "../components/hero";
import { Process } from "../components/process";
import { Services } from "../components/services";
import { Products } from "../components/products";
import { About } from "../components/about";
import { Reviews } from "../components/reviews";
import { Contact } from "../components/contact";
import { SiteFooter } from "../components/site-footer";

const MissionVideo = dynamic(
  () => import("../components/mission-video").then((m) => m.MissionVideo),
  {
    loading: () => (
      <div className="section-py mx-auto max-w-site px-5 md:px-8">
        <div className="aspect-video animate-pulse rounded-lg bg-muted/20" />
      </div>
    ),
  },
);

const WhyUs = dynamic(
  () => import("../components/why-us").then((m) => m.WhyUs),
  {
    loading: () => (
      <div className="section-py mx-auto max-w-site px-5 md:px-8">
        <div className="min-h-96 animate-pulse rounded-lg bg-muted/20" />
      </div>
    ),
  },
);

const Faq = dynamic(() => import("../components/faq").then((m) => m.Faq), {
  loading: () => (
    <div className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
      <div className="min-h-175 animate-pulse rounded-lg bg-muted/20" />
    </div>
  ),
});

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Process />
        <Services />
        <Products />
        <MissionVideo />
        <WhyUs />
        <About />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
