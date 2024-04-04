import { useState } from 'react'
import { projectELements } from '../../contants'
import ButtonNavSection from '../ButtonNavSection'

const ProjectSection = () => {
	const [isHovered, setIsHovered] = useState<number>()
	const firstSixElements = projectELements.slice(0, 3)
	const secondSixElements = projectELements.slice(3, 6)
	const handleHoverImage = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		data: number
	) => {
		setIsHovered(data)
	}
	return (
		<div className='max-w-maxWidthLayout px-[10px] mx-auto my-[50px] lg:my-[150px]'>
			<ButtonNavSection title='Project' />
			<div className=' mt-[20px] xl:mt-[100px] lg:mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
				<div className='relative group hover:cursor-pointer hover ease-in grid grid-cols-1 grid-rows-3 gap-[50px] lg:gap-[100px]'>
					{firstSixElements.map((el, index) => {
						return (
							<div
								className='relative flex flex-col gap-8 transition-opacity duration-300 opacity-35 hover:opacity-100'
								key={index}
                onMouseOver={(event) => handleHoverImage(event, el.key)}
                onMouseLeave={()=> setIsHovered(undefined)}
              >
                
								<img
									className='h-[350px] md:h-[500px] lg:h-[650px] object-cover'
									src={el.image}
									alt={el.title}
								/>
								<div className='gap-4'>
									<p className='text-white md:text-xl'>{el.subTitle}</p>
									<p className='text-white md:text-xl opacity-70'>
										{el.description}
									</p>
								</div>
								<button
									className={`${
										isHovered === el.key && 'opacity-100'
									} opacity-0 transition-opacity duration-300 absolute p-12 md:p-14 lg:p-16 xl:p-16 flex justify-center items-center h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2`}
								>
									<span>OPEN</span>
								</button>
							</div>
						)
					})}
				</div>
				<div className='lg:mt-[130px] group hover:cursor-pointer grid grid-cols-1 grid-rows-3 gap-[50px] lg:gap-[100px]'>
					{secondSixElements.map((el, index) => {
						return (
							<div
								className='relative flex flex-col gap-8 transition-opacity duration-300 group opacity-35 hover:opacity-100'
								key={index}
								onMouseOver={(event) => handleHoverImage(event, el.key)}
								onMouseLeave={() => setIsHovered(undefined)}
							>
								<img
									className='h-[350px] lg:h-[650px] bg-cover'
									src={el.image}
									alt={el.title}
								/>
								<div className='gap-4'>
									<p className='text-white'>{el.subTitle}</p>
									<p className='text-white opacity-70'>{el.description}</p>
								</div>
								<button
									className={`${
										isHovered === el.key && 'opacity-100'
									} opacity-0 transition-opacity duration-300 absolute p-12 md:p-14 lg:p-16 xl:p-16 flex justify-center items-center h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2`}
								>
									<span>OPEN</span>
								</button>
								{/* <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] left-0 top-0"></div> */}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default ProjectSection
