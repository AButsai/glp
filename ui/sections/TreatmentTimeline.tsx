'use client'

import Image from 'next/image'
import Container from '../components/Container'
import Section from '../components/Section'
import TreatmentTimelineBlock from '../components/TreatmentTimelineBlock'

const TreatmentTimeline = ({}) => {
	return (
		<Section
			className='mt-10 rounded-4xl bg-gray-200 py-10 md:py-[120px] lg:py-[144px] w-full max-w-[99%] mx-auto'
			id='how'
		>
			<Container className='flex flex-col gap-5 items-center lg:flex-row'>
				<div className=''>
					<h2 className='font-roboto text-[32px] font-bold leading-[1.1] tracking-[0.24px]  sm:text-[44px] lg:text-[60px] lg:leading-[60px] text-center md:text-left'>
						Get your weight loss meds in 1-2 days
					</h2>
					<p className='font-roboto text-[16px] leading-[1.5] text-[#4b5563] lg:text-[20px] lg:leading-[28px] mx-auto text-center mb-5'>
						Direct healthcare, without the long wait times or doctor denials.
					</p>
					<TreatmentTimelineBlock />
				</div>
				<div className='rounded-4xl overflow-hidden w-full max-w-[512px]'>
					<Image src={'/phone.png'} width={1080} height={1252} alt='' />
				</div>
			</Container>
		</Section>
	)
}

export default TreatmentTimeline
