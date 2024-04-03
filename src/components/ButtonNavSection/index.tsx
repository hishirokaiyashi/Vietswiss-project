import { Icon } from "@iconify/react";
type ButtonNavSectionProps = {
  title: string;
};
const ButtonNavSection = ({ title }: ButtonNavSectionProps) => {
  return (
    <div className="flex gap-1 text-white text-sm items-center">
      <Icon icon="mingcute:arrow-right-line" />
      <span>{title}</span>
    </div>
  );
};

export default ButtonNavSection;
