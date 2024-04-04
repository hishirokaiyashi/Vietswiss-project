import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'

type InTroduceSectionProps = {
	rank: string
	image: string
	description: string
	name?: string
}
const IntroduceSection = ({ rank, name, image, description }: InTroduceSectionProps) => {
	const [expandingDiscription, setExpandingDiscription] = useState(false)
	return (
		<div className='flex flex-col gap-2'>
			<span className='text-xl text-center text-white sm:text-center sm:text-2xl '>
				{rank}
			</span>
			<div className='flex flex-col justify-center lg:flex-row xl:flex-row xl:gap-4'>
				<div className='relative w-full '>
					<div className='flex justify-center'>
						<img
							src={image}
							className='h-[350px] sm:h-[400px] lg:h-[550px] w-full xl:w-[400px] object-cover '
							alt={name}
						/>
					</div>
					<div className='absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 items-center text-center w-full xl:top-1/2 xl:right-0 flex gap-4 lg:gap-10 xl:gap-14 flex-col max-w-[80px]'>
						<p className='text-2xl text-white whitespace-nowrap sm:text-4xl lg:text-5xl xl:text-5xl'>
							Thomas Elliot
						</p>
						<button
							type='button'
							onClick={() => setExpandingDiscription(!expandingDiscription)}
							className='p-4 text-2xl text-white border rounded-full xl:p-10 w-fit sm:text-4xl lg:text-5xl xl:text-xl'
						>
							{expandingDiscription ? (
								<Icon icon='ic:baseline-minus' />
							) : (
								<Icon icon='ic:baseline-plus' />
							)}
						</button>
					</div>
				</div>

				<div
					className={`${
						expandingDiscription ? 'transition-opacity ' : 'opacity-0'
					} flex flex-col justify-end w-full gap-2 text-white `}
				>
					<div className='flex flex-col items-center justify-center w-full gap-2 xl:items-start'>
						<p className='mt-[10px] text-white text-sm md:text-xl text-center xl:text-start opacity-60 w-full xl:max-w-[300px]'>
							{description}
						</p>
						<div className='flex gap-4 text-sm md:text-xl'>
							<p>lg</p>
							<p>tw</p>
						</div>
					</div>
				</div>
				{/* {expandingDiscription && (
					<div className='flex flex-col justify-end w-full gap-2 text-white '>
						<div className='flex flex-col items-center justify-center w-full gap-2 xl:items-start'>
							<p className='mt-[10px] text-white text-sm md:text-xl text-center xl:text-start opacity-60 w-full xl:max-w-[300px]'>
								{description}
							</p>
							<div className='flex gap-4 text-sm md:text-xl'>
								<p>lg</p>
								<p>tw</p>
							</div>
						</div>
					</div>
				)} */}
			</div>
		</div>
	)
}

export default IntroduceSection
