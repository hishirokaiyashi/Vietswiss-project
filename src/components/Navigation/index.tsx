import { Icon } from "@iconify/react";

const Navigation = () => {
  return (
    <div className="max-w-maxWidthLayout px-[10px] w-full mx-auto">
      <div className="mx-auto flex justify-between">
        <div className="w-1/2">
          <img
            className="h-[50px]"
            src="/src/assets/images/Nav/Logo.png"
            alt="NOURISH-LOGO"
          />
        </div>
        <div className="w-1/2 grid grid-cols-2 text-white text-xs cursor-pointer">
          <ul className="w-1/2 h-[1rem] flex justify-end gap-8">
            <li className="h-full m-0 p-0 border-r-white border-r border-solid"></li>
            <li>FB</li>
            <li>IN</li>
            <li>DE</li>
          </ul>
          <div className="flex justify-end cursor-default">
            <ul className="flex flex-col items-end gap-4 group w-fit ">
              <li className="flex items-center justify-center hover:cursor-pointer gap-1 ">
                <Icon icon="mingcute:arrow-right-line" />
                <span>Home</span>
              </li>
              <li className="hidden group-hover:block">PROJECTS</li>
              <li className="hidden group-hover:block">MANIFESTO</li>
              <li className="hidden group-hover:block">ABOUT</li>
              <li className="hidden group-hover:block">CONTACT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
