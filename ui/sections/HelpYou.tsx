'use client'

import { videoTestimonials } from '@/constants/video-testimonials'
import Image from 'next/image'
import ButtonRatingBlock from '../components/ButtonRatingBlock'
import Container from '../components/Container'
import HelpYouImage from '../components/HelpYouImage'
import Section from '../components/Section'
import VideoTestimonialsSlider from '../components/VideoTestimonialsSlider'

const HelpYou = ({}) => {
	return (
		<Section className='pt-20 relative' id='reviews'>
			<Container>
				<h2 className='font-roboto text-[32px] font-bold leading-[1.1] tracking-[0.24px]  sm:text-[44px] lg:text-[60px] lg:leading-[60px] text-center'>
					{
						"We'll help you turn off hunger signals and feel full faster GLP-1 Treatment."
					}
				</h2>
				<p className='text-center text-lg my-8 max-w-[768px] mx-auto w-full'>
					{
						"There's no shame in using medical weight loss to support your health when traditional methods aren't cutting it. VelmoRx is one of the only providers with a full nursing team dedicated to supporting your weight loss — so you're never left guessing, stuck waiting, or on your own."
					}
				</p>
				<p className='text-[28px] text-center leading-[1.2] max-w-[768px] mx-auto w-full'>
					{
						'Watch what our customers have to say about losing weight with VelmoRx:'
					}
				</p>
				<Image
					src={'/dwnarrow.avif'}
					width={80}
					height={124}
					alt=''
					className='mx-auto mt-10'
				/>

				<VideoTestimonialsSlider items={videoTestimonials} />

				<div className='mt-10 w-full max-w-4/5 mx-auto'>
					<p className='text-3xl text-center'>
						Ready to lose 15% of your body weight?
					</p>
				</div>

				<ButtonRatingBlock />
			</Container>
			<HelpYouImage
				src='/product-1.png'
				className='top-0 left-1/2 -translate-1/2 rotate-85 lg:left-[40.5%]'
			/>
			<HelpYouImage
				src='/product-2.png'
				className='top-[31%] -left-[30px] -rotate-20 lg:top-[11.5%] lg:left-[50px]'
			/>
			<HelpYouImage
				src='/product-1.png'
				className='top-[31%] -right-[70px] rotate-30 lg:top-[31%] lg:right-[25px] lg:rotate-50'
			/>
		</Section>
	)
}

export default HelpYou
