import { useState } from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import CookieSection from "../components/CookieSection";
import Footer from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import IntergateSection from "../components/IntergateSection";
import IntroduceSection from "../components/IntroduceSection";
import ManifestoSection from "../components/ManifestoSection";
import OurTeamSection from "../components/OutTeamSection";
import ProjectSection from "../components/ProjectSection";
import { interGateElements } from "../contants";

const Home = () => {
  const [displayCookieSection, setDisplayCookieSection] = useState(true);
  const handleDisplayCookieSection = () => {
    setDisplayCookieSection(false);
  };
  return (
    <div className="bg-black relative">
      <HeroSection />
      <ProjectSection />
      <ContactSection />
      <ManifestoSection />
      {interGateElements.map((el, _) => {
        return (
          <div className="px-[10px] py-[40px] lg:px-[20px] xl:px-[147px] lg:py-[54px]" key={el.number}>
            <IntergateSection
              name={el.key}
              image={el.image}
              number={el.number}
              description={el.description}
              title={el.title}
            />
          </div>
        );
      })}
      <AboutSection />
      <OurTeamSection />
      <div className="max-w-maxWidthLayout px-[10px] mx-auto">
        <div className="xl:flex xl:justify-end">
          <IntroduceSection />
        </div>
        <div className="flex justify-start">
          <IntroduceSection />
        </div>
      </div>
      <Footer />
      {displayCookieSection && (
        <div className="fixed max-w-[587px] z-1 bottom-[10px] left-1/2 transform -translate-x-1/2">
          <CookieSection handleDisplaySection={handleDisplayCookieSection} />
        </div>
      )}
    </div>
  );
};

export default Home;
