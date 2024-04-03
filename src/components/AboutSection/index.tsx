import { Icon } from "@iconify/react/dist/iconify.js";
import About from "../../assets/images/About/About.png";
import WorksMarquee from "../../assets/images/About/WorksMarquee.png";
import ButtonNavSection from "../ButtonNavSection";
const AboutSection = () => {
  return (
    <div className="py-[100px] xl:py-[150px]">
      <div className="relative">
        <img
          src={About}
          alt="About"
          className="w-full object-cover opacity-65 h-[350px] lg:h-[800px]"
        />
        <button className="absolute top-1/2 left-1/2 p-4 sm:p-10 lg:p-16 xl:p-16 rounded-full font-medium bg-white text-black">
          About
        </button>
      </div>
      <div className="max-w-[1266px] px-[10px] mx-auto py-[100px]">
        <div className="flex justify-between">
        
          <ButtonNavSection title="About" />
          <div className="flex justify-center items-centerem sm:text-xl gap-2">
     
              <Icon
                className="text-[#075919]"
                icon="material-symbols:circle-outline"
              />
        
            <span className="text-white  lg:text-center lg:text-lg xl:text-sm">Discover all templates</span>
          </div>
        </div>
        <h4 className="mt-[50px] max-w-[560px] text-sm sm:text-xl lg:text-2xl xl:text-3xl text-white">
          Lorem ipsum dolor sit amet consectetur. Duis congue adipiscing velit
          tellus sit volutpat sed. Ac tellus imperdiet in pellentesque dignissim
          sollicitudin viverra lorem. Nulla vulputate eget cursus dictumst.
        </h4>
      </div>
      <div className="relative">
        <img
          src={WorksMarquee}
          alt="WorksMarquee"
          className="w-full object-cover opacity-65 h-[400px] xl:h-[900px]"
        />

      </div>
    </div>
  );
};

export default AboutSection;
