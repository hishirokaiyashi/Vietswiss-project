// import { FaArrowRight, FaArrowUp } from "react-icons/fa6";
import ButtonNavSection from "../ButtonNavSection";

export default function Footer() {
  return (
    <div className="max-w-maxWidthLayout px-[10px] mx-auto py-[100px] text-white">
      <div className="flex gap-[20px] justify-between my-[50px]">
        {/* Left */}
        <div className="flex flex-col gap-[20px] md:gap-[40px] md:max-w-[400px] flex-1">
          <ButtonNavSection title="Contact" />
          <h3 className="text-5xl">Let’s make great things together</h3>
          <span className="text-[#666970] text-md">
            Feel free to reach out if you want to collaborate with us, or simply
            have a chat.
          </span>
          <p className="text-2xl">hello@atwww.design</p>
        </div>
        {/* Right */}
        <div className="self-end">
          <div className="flex gap-[60px] items-end justify-between text-md">
            <div className="flex flex-col  gap-[20px] items-end  flex-1">
              <div className="flex flex-col gap-[20px]">
                <h4>Our Address</h4>
                <p className="text-[#666970]">
                  Lorem ipsum dolor sit amet consectetur. Quam ut dui fames.{" "}
                </p>
                <p className="text-[#666970]">
                  Feugiat volutpat donec diam rhoncus vitae.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-end flex-1">
              <div className="flex flex-col gap-[20px]">
                <h4>Follow us</h4>
                <div className="flex gap-[20px] text-[#666970]">
                  <span>FB</span>
                  <span>TW</span>
                  <span>lg</span>
                  <span>Li</span>
                </div>
                <div>Terms & Condition</div>
                <div>Instructions</div>
                <div>StyleGuideX</div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-end flex-1">
              <div className="flex flex-col gap-[20px]">
                <div className="text-[#666970]">Hero</div>
                <div className="text-[#666970]">Projects</div>
                <div className="text-[#666970]">Manifesto</div>
                <div className="text-[#666970]">About</div>
                <div>Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-[100px] text-[#666970] items-center justify-between">
        <div className="uppercase text-md flex gap-2">
         <span>CREATIVE, ATTRACTIVE, INTUITIVE 2022</span> 
          <span className="text-green-400 text-sm">MADE BY ATWWW.</span>
        </div>
        {/* <div className="border border-[#666970]-400 p-4 rounded-full ">
          <FaArrowUp color="#666970" size={18} />
        </div> */}
      </div>
    </div>
  );
}
