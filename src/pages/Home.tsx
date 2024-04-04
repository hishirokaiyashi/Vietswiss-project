import { useEffect, useState } from 'react'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import CookieSection from '../components/CookieSection'
import Footer from '../components/FooterSection'
import HeroSection from '../components/HeroSection'
import IntergateSection from '../components/IntergateSection'
import IntroduceSection from '../components/IntroduceSection'
import ManifestoSection from '../components/ManifestoSection'
import OurTeamSection from '../components/OutTeamSection'
import ProjectSection from '../components/ProjectSection'
import { interGateElements } from '../contants'
import DiscoverSection from '../components/DiscoverSection'
import Thomas from '../assets/images/Introduce/Thomas.png'
import Edison from '../assets/images/Introduce/Edison.png'
import { Icon } from '@iconify/react'

const Home = () => {
	const [displayCookieSection, setDisplayCookieSection] = useState(true)
	const handleDisplayCookieSection = (data: boolean) => {
		setDisplayCookieSection(data)
  }
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
  }

  const backToTop = () => {
		document.documentElement.style.scrollBehavior = 'smooth'
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
  }

  useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
  }, [])
	return (
		<div className='relative bg-black'>
			<HeroSection />
			<ProjectSection />
			<ContactSection />
			<ManifestoSection />
			{interGateElements.map((el) => {
				return (
					<div
						className='max-w-maxWidthLayout px-[10px] mx-auto py-[40px] lg:py-[54px]'
						key={el.number}
					>
						<IntergateSection
							name={el.key}
							image={el.image}
							number={el.number}
							description={el.description}
							title={el.title}
						/>
					</div>
				)
			})}
			<DiscoverSection />
			<AboutSection />
			<OurTeamSection />
			<div className='max-w-maxWidthLayout px-[10px] mx-auto flex flex-col gap-4 sm:gap-6'>
				<div className='xl:flex xl:justify-end'>
					<IntroduceSection
						rank='CEO & ART DIRECTOR'
						image={Thomas}
						name='Thomas'
						description='Lorem ipsum dolor sit amet consectetur. Hendrerit bibendum commodo
								lacus egestas mi velit commodo facilisis. Odio sit nibh neque
								egestas nisl. Non scelerisque leo tortor faucibus eu sodales
								aliquam. Aliquam orci ut congue sem ullamcorper proin nulla erat
								venenatis. Eleifend neque ac facilisis.'
					/>
				</div>
				<div className='xl:justify-start xl:flex'>
					<IntroduceSection
						rank='CEO & ART DIRECTOR'
						image={Edison}
						name='Edison'
						description='Lorem ipsum dolor sit amet consectetur. Hendrerit bibendum commodo
								lacus egestas mi velit commodo facilisis. Odio sit nibh neque
								egestas nisl. Non scelerisque leo tortor faucibus eu sodales
								aliquam. Aliquam orci ut congue sem ullamcorper proin nulla erat
								venenatis. Eleifend neque ac facilisis.'
					/>
				</div>
			</div>
			<Footer />
			{displayCookieSection && (
				<div className='fixed px-[10px] w-full xl:max-w-[587px] z-1 bottom-0 top-1/2 xl:top-auto xl:bottom-[10px] left-1/2 transform -translate-x-1/2 '>
					<CookieSection
						handleDisplaySection={(data) => handleDisplayCookieSection(data)}
					/>
				</div>
			)}
			<button
				onClick={backToTop}
				type='button'
				className={`${
					showButton ? 'inline-block' : 'hidden'
				} fixed bottom-[40px] right-[20px] sm:right-[40px] xl:text-2xl lg:right-[40px] xl:right-[40px] p-3 bg-brand-green text-white font-medium text-xl md:text-5xl lg:text-6xl leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out`}
			>
				<Icon icon='formkit:arrowup' />
			</button>
		</div>
	)
}

export default Home
