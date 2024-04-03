import ButtonNavSection from "../ButtonNavSection";

type IntergateSectionProps = {
  image: string;
  title: string;
  description: string;
  number: string;
  name: string;
};
const IntergateSection = ({
  image,
  name,
  title,
  description,
  number,
}: IntergateSectionProps) => {
  return (
    <div className={`${name=== "CREATIVE" ? "border-y-[1px] border-gray-800" : ""} lg:py-6`}>
      <ButtonNavSection title={name} />
      <div className="flex flex-col lg:flex-col xl:flex-row justify-between items-center">
        <div className="p-[30px] xl:p-[60px]">
          <img
            className="h-[100px] lg:h-[200px] lg:w-[200px] object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="relative text-white max-w-[600px]">
          <p className="absolute top-[6px] text-sm">{number}</p>
          <h3 className="text-lg lg:text-3xl indent-6 lg:indent-12">{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default IntergateSection;
