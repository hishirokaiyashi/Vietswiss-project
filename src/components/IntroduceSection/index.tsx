import React, { useState } from "react";
import Thomas from "../../assets/images/Introduce/Thomas.png";
import { Icon } from "@iconify/react/dist/iconify.js";
const IntroduceSection = () => {
  const [expandingDiscription, setExpandingDiscription] = useState(false);
  return (
    <div className="">
      <span className="text-white">CEO & ART DIRECTOR</span>
      <div className="flex flex-col xl:flex-grow">
        <div className="relative xl:w-1/2">
          <div className="flex justify-center">
            <img
              src={Thomas}
              className="h-[500px] w-full xl:w-[400px] object-cover "
              alt="Thomas"
            />
          </div>
          <div className="absolute top-1/2 items-center text-center w-full xl:top-[50px] xl:right-0 flex gap-4 xl:gap-14 flex-col max-w-[80px]">
            <p className="text-white text-2xl whitespace-nowrap xl:text-5xl">Thomas Elliot</p>
            <button
              type="button"
              onClick={() => setExpandingDiscription(!expandingDiscription)}
              className=" p-4 xl:p-10 rounded-full w-fit text-white border"
            >
              {expandingDiscription ? (
                <Icon icon="ic:baseline-minus" />
              ) : (
                <Icon icon="ic:baseline-plus" />
              )}
            </button>
          </div>
        </div>
        {expandingDiscription && (
          <div className="w-1/2 flex flex-col justify-end gap-2 text-white ">
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm opacity-60 w-full xl:max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur. Hendrerit bibendum
                commodo lacus egestas mi velit commodo facilisis. Odio sit nibh
                neque egestas nisl. Non scelerisque leo tortor faucibus eu
                sodales aliquam. Aliquam orci ut congue sem ullamcorper proin
                nulla erat venenatis. Eleifend neque ac facilisis.
              </p>
              <div className="flex gap-4">
                <p>lg</p>
                <p>tw</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroduceSection;
