import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaStar } from 'react-icons/fa'

import { LINK_QUIZ } from '@/constants/base-constants'
import { FiDollarSign, FiFileText, FiShield, FiTruck } from 'react-icons/fi'
import Benefit from '../components/Benefit'
import Container from '../components/Container'
import Countdown from '../components/Countdown'
import PartialStar from '../components/PartialStar'
import Section from '../components/Section'

const Hero = () => {
	return (
		<Section
			className='rounded-[50px]
						bg-linear-to-br
						from-[#DCF6EC]
						via-[#D3EDE3]
						to-[#C5E1D3] max-w-[98%] mx-auto'
		>
			{/* <Container> */}
			<div
				className='
						overflow-hidden
						
						p-4
						sm:p-6
						md:p-8
						lg:px-10
						lg:py-10
						xl:px-12
						xl:py-12
					'
			>
				<div
					className='
							mx-auto
							grid
							w-full
							max-w-[1200px]
							grid-cols-1
							items-center
							gap-8
							lg:grid-cols-[minmax(0,560px)_minmax(0,520px)]
							lg:justify-center
							lg:gap-14
							xl:gap-20
						'
				>
					<div className='w-full min-w-0'>
						<div
							className='
									mb-3
									flex
									flex-col
									gap-2
									sm:flex-row
									sm:items-center
									sm:gap-3
								'
						>
							<div className='flex shrink-0 gap-1'>
								<FaStar className='size-4 text-[#F5B832] sm:size-5' />
								<FaStar className='size-4 text-[#F5B832] sm:size-5' />
								<FaStar className='size-4 text-[#F5B832] sm:size-5' />
								<FaStar className='size-4 text-[#F5B832] sm:size-5' />

								<PartialStar percent={80} />
							</div>

							<p className='text-xs leading-tight sm:text-sm'>
								(4.8) Based on member-reported satisfaction ratings
							</p>
						</div>

						<h1
							className='
									mb-5
									font-serif
									text-[38px]
									leading-[0.98]
									sm:text-5xl
									md:text-6xl
									lg:text-[56px]
									xl:text-6xl
								'
						>
							Lock in <span className='italic text-[#0F7B5C]'>your best</span>
							<br />
							<span className='italic text-[#0F7B5C]'>GLP-1 price</span> — for
							life.
						</h1>

						<div className='w-full'>
							<div
								className='
										relative
										overflow-hidden
										rounded-2xl
										bg-white
										px-4
										py-4
										shadow-md
										sm:px-5
										sm:py-5
									'
							>
								<div className='flex items-center gap-2 pr-14 sm:gap-3 sm:pr-20'>
									<div className='shrink-0'>
										<p className='font-serif text-lg leading-none sm:text-xl'>
											Was{' '}
											<span className='line-through decoration-2'>$199</span>
										</p>

										<p className='font-serif text-lg leading-none text-[#0F7B5C] sm:text-xl'>
											Now starting at
										</p>
									</div>

									<p
										className='
												font-serif
												text-[42px]
												leading-none
												text-[#0F7B5C]
												sm:text-5xl
												md:text-[52px]
											'
									>
										$89
									</p>
								</div>

								<div className='mt-4'>
									<Countdown />
								</div>

								<Image
									src='/product-bundle.png'
									width={120}
									height={164}
									alt='GLP-1 medication'
									className='
											absolute
											bottom-2
											right-2
											h-auto
											w-[100px]
											sm:right-4
											sm:w-[55px]
											md:w-[120px]
										'
								/>
							</div>
						</div>

						<div className='space-y-1 mt-5'>
							<Benefit Icon={FiDollarSign}>
								Same price, every dose, every month.
							</Benefit>
							<Benefit Icon={FiShield}>
								Made in USA & Trusted by over 100,000
							</Benefit>
							<Benefit Icon={FiFileText}>
								Prescription & online medical visits included.
							</Benefit>
							<Benefit Icon={FiTruck}>
								Free shipping. Arrives in 1-2 days.
							</Benefit>
						</div>

						<div className='mt-4'>
							<div className='flex flex-col gap-3 sm:flex-row'>
								<Link
									href={LINK_QUIZ}
									className='
											flex
											flex-1
											items-center
											justify-between
											rounded-full
											bg-[#0F7B5C]
											py-2
											pl-5
											pr-2
											text-lg
											font-bold
											text-white
											transition-opacity
											hover:opacity-90
											sm:py-2.5
											sm:pl-6
											sm:text-xl
										'
								>
									Get Started
									<span
										className='
												flex
												size-9
												shrink-0
												items-center
												justify-center
												rounded-full
												bg-white
												sm:size-10
											'
									>
										<FaArrowRight className='size-4 text-[#0F7B5C]' />
									</span>
								</Link>

								<Link
									href={LINK_QUIZ}
									className='
											flex
											flex-1
											items-center
											justify-center
											rounded-full
											border
											border-gray-300
											bg-white
											px-6
											py-2
											text-lg
											font-bold
											text-[#0F7B5C]
											transition-colors
											hover:bg-[#0F7B5C]
											hover:text-white
											sm:py-2.5
											sm:text-xl
										'
								>
									See Pricing
								</Link>
							</div>

							<div
								className='
										mt-4
										grid
										gap-x-1
										gap-y-2.5
									  grid-cols-2
										sm:gap-x-8
									'
							>
								<Benefit className='text-xs sm:text-sm' classNameIcon='size-3'>
									$0 until a doctor approves you
								</Benefit>
								<Benefit className='text-xs sm:text-sm' classNameIcon='size-3'>
									No Hidden Fees
								</Benefit>
								<Benefit className='text-xs sm:text-sm' classNameIcon='size-3'>
									No Monthly Membership
								</Benefit>
								<Benefit className='text-xs sm:text-sm' classNameIcon='size-3'>
									Cancel Anytime
								</Benefit>
							</div>
						</div>
					</div>

					<div
						className='
								flex
								w-full
								items-end
								justify-center
								lg:h-full
								
							'
					>
						<div
							className='
									w-full
									max-w-[340px]
									overflow-hidden
									rounded-b-[42px]
									sm:max-w-[420px]
									md:max-w-[480px]
									lg:max-w-[395px]
								'
						>
							<Image
								src='/hero.png'
								width={576}
								height={854}
								alt='Woman showing weight loss progress'
								priority
								className='block h-auto w-full'
								style={{
									maskImage: `
											linear-gradient(
												to bottom,
												black 0%,
												black 86%,
												transparent 100%
											),
											linear-gradient(
												to right,
												transparent 0%,
												black 7%,
												black 93%,
												transparent 100%
											)
										`,
									maskComposite: 'intersect',

									WebkitMaskImage: `
											linear-gradient(
												to bottom,
												black 0%,
												black 86%,
												transparent 100%
											),
											linear-gradient(
												to right,
												transparent 0%,
												black 7%,
												black 93%,
												transparent 100%
											)
										`,
									WebkitMaskComposite: 'source-in',
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* </Container> */}
		</Section>
	)
}

export default Hero
