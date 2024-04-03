import { Icon } from "@iconify/react";

const ContactSection = () => {
  return (
    <div className="max-w-maxWidthLayout px-[10px] mx-auto text-white flex flex-col items-center justify-center gap-[50px] lg:gap-[87px]">
      <p className="text-xl lg:text-sm">They just us</p>
      <div className="max-w-[810px] text-center ">

          <h3 className="text-xl md:text-2xl lg:text-4xl otherPhone:sm">
            Webflow, Figma, Adobe XD, Memberstack, Zapier, YouTube, Facebook,
            Google, Tesla Space, Amazon Fashion, Stripe, Framer, Notion,
            Dribbble, Atwww
          </h3>

      </div>
      <button className="flex items-center gap-2 p-[10px]" type="button">
        <Icon
          className="text-[#075919]"
          icon="material-symbols:circle-outline"
        />
        <span className=" text-xl md:text-lg lg:text-sm">Contact us</span>
      </button>
    </div>
  );
};

export default ContactSection;
