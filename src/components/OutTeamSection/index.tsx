import React from "react";
import ButtonNavSection from "../ButtonNavSection";

const OurTeamSection = () => {
  return (
    <div className="max-w-maxWidthLayout mx-auto">
      <ButtonNavSection title="Out team" />
      <div className="pb-[100px] pt-[50px] flex flex-col justify-center items-center xl:max-w-[740px] text-7xl text-white">
        <p className="text-lg sm:text-4xl">
        Discover our team
        </p>
        <p className="text-lg sm:text-4xl lg:text-center xl:indent-16 ">
        Let’s make great stuff together
        </p>
      </div>
    </div>
  );
};

export default OurTeamSection;
