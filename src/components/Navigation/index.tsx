import { Icon } from '@iconify/react'
import { useState} from 'react'
import { listLiELements } from '../../contants'
import { AnimatePresence, motion } from 'framer-motion'
const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isHover, setIsHover] = useState(false)
	const handleDisplayMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<div
				className={`${
					!isOpen ? 'py-[54px]' : ''
				} max-w-maxWidthLayout px-[10px] w-full mx-auto`}
			>
				<div className={`justify-between hidden mx-auto xl:flex `}>
					<div className='w-1/2'>
						<img
							className='h-[50px]'
							src='/src/assets/images/Nav/Logo.png'
							alt='NOURISH-LOGO'
						/>
					</div>
					<div className='grid w-1/2 grid-cols-2 text-xs text-white cursor-pointer'>
						<ul className='w-1/2 h-[1rem] flex justify-end gap-8'>
							<li className='h-full p-0 m-0 border-r border-solid border-r-white'></li>
							<li>FB</li>
							<li>IN</li>
							<li>DE</li>
						</ul>
						<div className='flex justify-end cursor-default'>
							<ul
								onMouseEnter={() => setIsHover(true)}
								onMouseLeave={() => setIsHover(false)}
								className='relative flex flex-col items-end gap-4 group w-fit sm:text-xl'
							>
								<li className='relative flex items-center justify-center gap-1 hover:cursor-pointer '>
									<Icon icon='mingcute:arrow-right-line' />
									<span>Home</span>

									<span
										style={{
											transform: isHover ? 'scaleX(1)' : 'scaleX(0)',
										}}
										className='absolute h-1 transition-transform duration-300 ease-out origin-left scale-x-0 bg-white rounded-full -bottom-2 -left-2 -right-2'
									/>
								</li>
								<AnimatePresence>
									{isHover && (
										<motion.div
											initial={{ opacity: 0, y: 15 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 15 }}
											style={{ translateX: '-50%' }}
											transition={{ duration: 0.3, ease: 'easeOut' }}
											className='absolute text-black bg-white left-1/2 top-12'
										>
											<div className='absolute left-0 right-0 h-6 bg-transparent -top-6' />
											<div className='absolute top-0 w-4 h-4 rotate-45 -translate-x-1/2 -translate-y-1/2 bg-brand-green left-1/2' />
											{/* <FlyoutContent /> */}
											<div className='flex flex-col gap-2 p-3 font-semibold text-white shadow-xl cursor-pointer bg-brand-green text-end w-50'>
												<li className='block text-sm hover:underline'>
													PROJECTS
												</li>
												<li className='block text-sm hover:underline'>
													MANIFESTO
												</li>
												<li className='block text-sm hover:underline'>
													ABOUT
												</li>
												<li className='block text-sm hover:underline'>
													CONTACT
												</li>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</ul>
						</div>
					</div>
				</div>
				<div className='flex justify-between xl:hidden'>
					{!isOpen && (
						<>
							<div className={`${isOpen ? 'opacity-0' : 'block'} w-1/2`}>
								<img
									className='h-[50px]'
									src='/src/assets/images/Nav/Logo.png'
									alt='NOURISH-LOGO'
								/>
							</div>
							<div
								className='flex flex-col  cursor-pointer text-[2rem] text-black p-0 md:p-[0.475rem] lg:p-[0.325rem] xl:p-[0.5rem] md:bg-white md:rounded lg:bg-white lg:rounded xl:bg-white xl:rounded 
'
								onClick={handleDisplayMenu}
							>
								<Icon icon='heroicons:bars-3-bottom-right' />
							</div>
						</>
					)}
					<div
						className={`
							${isOpen ? 'z-[1] left-0 ' : 'left-[calc(-100vw_-_40px)]  '}
						bg-brand-green m-0 absolute h-[100vh] w-full flex flex-col opacity-100 gap-4 transition-all duration-[0.5s] ease-[ease]`}
					>
						<ul className='flex flex-col justify-between w-full gap-4 p-2 font-semibold md:gap-8'>
							<li className='flex items-center justify-end py-2 h-fit'>
								<button
									type='button'
									onClick={() => setIsOpen(false)}
									className='p-2 text-white border rounded-full bg-brand-green'
								>
									<Icon icon='ph:x' color='white' />
								</button>
							</li>
							{listLiELements.map((el, index) => {
								return (
									<li key={index} className='flex items-center justify-center w-full p-0 text-center text-white bg-brand-green'>
										<span>{el.title}</span>
									</li>
								)
							})}
						</ul>
						<ul className='h-[1rem] flex justify-center gap-8 text-white font-semibold'>
							<li className='h-full p-0 m-0 border-r border-solid border-r-white'></li>
							<li>FB</li>
							<li>IN</li>
							<li>DE</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navigation
