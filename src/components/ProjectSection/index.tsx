import { projectELements } from "../../contants";
import ButtonNavSection from "../ButtonNavSection";

const ProjectSection = () => {
  const firstSixElements = projectELements.slice(0, 3);
  const secondSixElements = projectELements.slice(3, 6);
  return (
    <div className="max-w-maxWidthLayout px-[10px] mx-auto my-[50px] lg:my-[150px]">
      <ButtonNavSection title="Project" />
      <div className="mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="relative grid grid-cols-1 grid-rows-3 gap-[50px] lg:gap-[100px]">
          {firstSixElements.map((el, index) => {
            return (
              <div className="flex flex-col gap-8" key={index}>
                <img
                  className="h-[350px] md:h-[500px] lg:h-[650px]  object-cover"
                  src={el.image}
                  alt={el.title}
                />
                <div className="gap-4">
                  <p className="text-white md:text-xl">{el.subTitle}</p>
                  <p className="text-white md:text-xl opacity-70">{el.description}</p>
                </div>
                {/* <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] left-0 top-0"></div> */}
              </div>
            );
          })}
        </div>
        <div className="lg:mt-[130px] grid grid-cols-1 grid-rows-3 gap-[50px] lg:gap-[100px]">
          {secondSixElements.map((el, index) => {
            return (
              <div className="flex flex-col gap-8" key={index}>
              <img
                className="h-[350px] lg:h-[650px] bg-cover"
                src={el.image}
                alt={el.title}
              />
              <div className="gap-4">
                <p className="text-white">{el.subTitle}</p>
                <p className="text-white opacity-70">{el.description}</p>
              </div>
              {/* <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] left-0 top-0"></div> */}
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
