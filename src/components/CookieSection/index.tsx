import { Icon } from "@iconify/react";
// type HandleDisplaySectionType = (display: boolean) => void;
// : {
//   handleDisplaySection: HandleDisplaySectionType;
// }
type HandleDisplaySectionType = {
  handleDisplaySection : (data:boolean) => void
}
// type handleDisplayCookieSectionType = () => void
const CookieSection = ({ handleDisplaySection }:HandleDisplaySectionType) => {
  const handleButtonCancel = () => {
    handleDisplaySection(false);
  };
  return (
    <div className="relative flex flex-col  xl:flex-row rounded-[0.625rem] bg-zinc-900 p-[1rem] sm:p-[1.5rem] xl:p-[1.75rem]  gap-4">
      <span className="text-white text-lg sm:text-xl xl:text-sm opacity-65">
        This website uses cookies to ensure you get the best experience.
      </span>

      <button
        type="button"
        onClick={handleButtonCancel}
        className="py-[0.5rem] px-[0.25rem] sm:text-xl sm:py-[1rem] xl:py-[0.75rem] xl:px-[2.5rem] text-white bg-neutral-600 opacity-78 rounded-full"
      >
        Accept
      </button>
      <button
        onClick={handleButtonCancel}
        type="button"
        className="absolute xl:static flex justify-center items-center rounded-full bg-white xl:bg-white xl:text-black  right-[-10px] top-[-10px] lg:block xl:block text-black py-[0.75rem] px-[1rem]"
      >
        <Icon icon="streamline:delete-1-solid" />
      </button>
    </div>
  );
};

export default CookieSection;
