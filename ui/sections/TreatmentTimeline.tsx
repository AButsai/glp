'use client'

import Image from 'next/image'
import Container from '../components/Container'
import Section from '../components/Section'
import TreatmentTimelineBlock from '../components/TreatmentTimelineBlock'

const TreatmentTimeline = ({}) => {
	return (
		<Section
			className='mt-10 rounded-4xl bg-gray-200 py-[120px] lg:py-[144px] w-full max-w-[98%] mx-auto'
			id='how'
		>
			<Container className='flex flex-col gap-5 items-center lg:flex-row'>
				<div className='px-12'>
					<h2 className='text-[60px] leading-none font-extralight font-sans mb-8'>
						Get your weight loss meds in 1-2 days
					</h2>
					<p className='text-lg mb-8'>
						Direct healthcare, without the long wait times or doctor denials.
					</p>
					<TreatmentTimelineBlock />
				</div>
				<div className='rounded-4xl overflow-hidden w-full max-w-[512px]'>
					<Image src={'/phone.avif'} width={1080} height={1252} alt='' />
				</div>
			</Container>
		</Section>
	)
}

export default TreatmentTimeline
