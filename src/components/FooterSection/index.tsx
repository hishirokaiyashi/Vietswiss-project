// import { FaArrowRight, FaArrowUp } from "react-icons/fa6";
import ButtonNavSection from "../ButtonNavSection";

export default function Footer() {
  return (
		<div className='max-w-maxWidthLayout px-[10px] mx-auto py-[30px] xl:py-[100px] text-white'>
			<div className='flex flex-col xl:flex-row gap-[20px] justify-between my-[50px]'>
				{/* Left */}
				<div className='flex flex-col gap-[20px]  md:w-full md:gap-[30px] xl:max-w-[400px] lg:w-full flex-1'>
					<ButtonNavSection title='Contact' />
					<h3 className='text-xl text-center sm:text-3xl lg:text-3xl xl:text-left xl:text-5xl'>
						Let’s make great things together
					</h3>
					<span className='text-[#666970] text-md text-center md:text-xl lg:text-3xl xl:text-left'>
						Feel free to reach out if you want to collaborate with us, or simply have a
						chat.
					</span>
					<p className='text-xl text-center md:text-2xl lg:text-3xl xl:text-left'>
						hello@atwww.design
					</p>
				</div>
				{/* Right */}
				<div className='xl:self-end'>
					<div className='flex flex-col xl:flex-row items-start gap-[30px] xl:gap-[60px] xl:items-end justify-between text-md'>
						<div className='flex flex-col gap-[20px] md:w-full xl:items-end xl:flex-1'>
							<div className='flex flex-col gap-[20px] md:w-full'>
								<p className='text-[#666970] text-center md:text-xl lg:text-3xl md:text-center sm:text-center xl:text-left'>
									Lorem ipsum dolor sit amet consectetur. Quam ut dui fames.{' '}
								</p>
								<p className='text-[#666970] text-center md:text-xl lg:text-3xl xl:text-left'>
									Feugiat volutpat donec diam rhoncus vitae.
								</p>
							</div>
						</div>
						<div className='flex flex-col justify-center gap-[20px] w-full items-start xl:items-end xl:flex-1'>
							<div className='flex flex-col justify-center items-start gap-[20px] w-full'>
								<h4 className='w-full text-center xl:text-left md:text-xl lg:text-3xl'>
									Follow us
								</h4>
								<div className='flex  xl:justify-start justify-center w-full text-center md:text-xl lg:text-3xl gap-[20px] text-[#666970]'>
									<span>FB</span>
									<span>TW</span>
									<span>lg</span>
									<span>Li</span>
								</div>
								<div className='flex flex-col items-center justify-center w-full gap-2 text-center md:text-xl lg:text-3xl xl:items-start'>
									<span>Terms & Condition</span>

									<span>Instructions</span>

									<span>StyleGuideX</span>
								</div>
							</div>
						</div>
						<div className='flex flex-col w-full text-center  gap-[20px] xl:items-end flex-1'>
							<div className='flex flex-col items-center justify-center xl:justify-end xl:items-end w-full md:text-xl lg:text-3xl gap-[20px]'>
								<div className='text-[#666970]'>Hero</div>
								<div className='text-[#666970]'>Projects</div>
								<div className='text-[#666970]'>Manifesto</div>
								<div className='text-[#666970]'>About</div>
								<div>Contact</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex  xl:mt-[100px] text-[#666970] items-center justify-between md:text-xl lg:text-3xl'>
				<div className='flex flex-col items-center justify-center w-full gap-3 xl:justi xl:justify-between xl:flex-row text-md'>
					<span>CREATIVE, ATTRACTIVE, INTUITIVE 2022</span>
					<span className='text-sm text-green-400 md:text-xl lg:text-3xl'>
						MADE BY ATWWW.
					</span>
				</div>
		
			</div>
		</div>
  )
}
