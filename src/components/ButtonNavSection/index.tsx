import { Icon } from "@iconify/react";
type ButtonNavSectionProps = {
  title: string;
};
const ButtonNavSection = ({ title }: ButtonNavSectionProps) => {
  return (
    <div className="flex items-center gap-1 text-sm text-white md:text-xl lg:text-2xl xl:text-2xl">
      <Icon icon="mingcute:arrow-right-line" />
      <span>{title}</span>
    </div>
  );
};

export default ButtonNavSection;
