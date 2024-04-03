import { Icon } from "@iconify/react";
type HandleDisplaySectionType = (display: boolean) => void;
const CookieSection = ({
  handleDisplaySection,
}: {
  handleDisplaySection: HandleDisplaySectionType;
}) => {
  const handleButtonCancel = () => {
    handleDisplaySection(false);
  };
  return (
    <div className="flex rounded-[0.625rem] bg-zinc-900 p-[1.75rem]  gap-4">
      <span className="text-white opacity-65">
        This website uses cookies to ensure you get the best experience.
      </span>

      <button
        type="button"
        onClick={handleButtonCancel}
        className="py-[0.75rem] px-[2.5rem] text-white bg-neutral-600 opacity-78 rounded-full"
      >
        Accept
      </button>
      <button
        onClick={handleButtonCancel}
        type="button"
        className="text-white py-[0.75rem] px-[1rem]"
      >
        <Icon icon="streamline:delete-1-solid" />
      </button>
    </div>
  );
};

export default CookieSection;
