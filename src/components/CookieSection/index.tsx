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
		<div className='relative flex flex-col xl:flex-row rounded-[0.625rem] bg-zinc-900 p-[1rem] sm:p-[1.5rem] xl:p-[1.75rem] lg:py-10 lg:gap-10 gap-4'>
			<span className='text-lg text-white sm:text-3xl xl:text-sm opacity-65'>
				This website uses cookies to ensure you get the best experience.
			</span>

			<button
				type='button'
				onClick={handleButtonCancel}
				className='py-[0.5rem] px-[0.25rem] sm:text-xl sm:py-[1rem] xl:text-sm lg:text-3xl lg:py-[2rem] xl:py-[12px] xl:px-[40px] text-white bg-neutral-600 opacity-78 rounded-full'
			>
				Accept
			</button>
			<button
				onClick={handleButtonCancel}
				type='button'
				className='absolute xl:static flex justify-center items-center rounded-full text-white right-[-10px] top-[0px] lg:block xl:block  py-[0.75rem] px-[1rem] '
			>
				<Icon icon='streamline:delete-1-solid' />
			</button>
		</div>
  )
};

export default CookieSection;
