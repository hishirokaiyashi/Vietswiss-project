import ButtonNavSection from "../ButtonNavSection";

const OurTeamSection = () => {
  return (
		<div className='mx-auto max-w-maxWidthLayout'>
			<ButtonNavSection title='Out team' />
			<div className='pb-[50px] lg:pb-[80px] xl:pb-[100px] pt-[50px] flex flex-col justify-center items-center xl:justify-normal xl:items-start xl:max-w-[740px] text-7xl text-white'>
				<p className='text-2xl sm:text-4xl lg:text-6xl'>Discover our team</p>
				<p className='text-2xl sm:text-4xl lg:text-6xl lg:text-center xl:text-start xl:indent-16 '>
					Let’s make great stuff together
				</p>
			</div>
		</div>
  )
};

export default OurTeamSection;
