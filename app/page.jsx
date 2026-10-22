import IconSprite from "@/components/IconSprite";
import Hero from "@/components/Hero";
import AboutWork from "@/components/AboutWork";
import CaseStudies from "@/components/CaseStudies";
import Results from "@/components/Results";
import CreativeProjects from "@/components/CreativeProjects";
import ExperienceToolkit from "@/components/ExperienceToolkit";
import Contact from "@/components/Contact";
import PhotoSet from "@/components/PhotoSet";
import Interactions from "@/components/Interactions";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <IconSprite />
      <div className="wrap">
        <Hero />
        <AboutWork />
        <CaseStudies />
        <Results />
        <CreativeProjects />
        <ExperienceToolkit />
        <Contact />
      </div>
      <PhotoSet />
      <Interactions />
    </>
  );
}
