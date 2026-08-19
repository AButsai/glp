import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaStar } from 'react-icons/fa'

import { LINK_QUIZ } from '@/constants/base-constants'
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
			<Container>
				{/* Hero background */}
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
					{/* Centered content */}
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
						{/* Left */}
						<div className='w-full min-w-0'>
							{/* Rating */}
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

									<PartialStar />
								</div>

								<p className='text-xs leading-tight sm:text-sm'>
									(4.4) Based on member-reported satisfaction ratings
								</p>
							</div>

							{/* Title */}
							<h1
								className='
									mb-5
									font-serif
									text-[38px]
									leading-[0.98]
									sm:text-5xl
									md:text-6xl
									lg:text-[56px]
									xl:text-7xl
								'
							>
								The only GLP-1
								<br />
								company who{' '}
								<span className='italic text-[#0F7B5C]'>
									locks your price
								</span>{' '}
								in for life.
							</h1>

							{/* Price / Timer */}
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
										<Countdown targetDate='2026-08-21T07:42:36+03:00' />
									</div>

									<Image
										src='/inj_sema.avif'
										width={80}
										height={182}
										alt='GLP-1 medication'
										className='
											absolute
											bottom-2
											right-2
											h-auto
											w-[42px]
											sm:right-4
											sm:w-[55px]
											md:w-[65px]
										'
									/>
								</div>

								<p className='mt-1 text-right text-[11px] sm:text-sm'>
									Compound GLP-1 & GLP-1 + GIP
								</p>
							</div>

							{/* CTA */}
							<div className='mt-4'>
								<Link
									href={LINK_QUIZ}
									className='
										flex
										w-full
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

								{/* Benefits */}
								<div
									className='
										mt-4
										grid
										grid-cols-1
										gap-x-6
										gap-y-2.5
										min-[380px]:grid-cols-2
										sm:gap-x-8
									'
								>
									<Benefit>Cancel Anytime</Benefit>
									<Benefit>Same price every month</Benefit>
									<Benefit>Trusted by over 100,000</Benefit>
									<Benefit>Made in USA</Benefit>
								</div>
							</div>
						</div>

						{/* Right image */}
						<div
							className='
								flex
								w-full
								items-end
								justify-center
								lg:h-full
								lg:justify-end
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
									lg:max-w-[520px]
								'
							>
								<Image
									src='/hero_img_6.avif'
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
			</Container>
		</Section>
	)
}

export default Hero
