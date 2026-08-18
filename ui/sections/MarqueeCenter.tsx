'use client'

import { itemsCenter } from '@/constants/marquee-constants'
import Container from '../components/Container'
import Marquee from '../components/Marquee'
import Section from '../components/Section'

const MarqueeCenter = ({}) => {
	return (
		<>
			<p className='uppercase text-sm text-center text-gray-600'>
				{"we've been featured all over"}
			</p>
			<Section className='bg-gray-200 p-5'>
				<Container>
					<Marquee items={itemsCenter} mode='img' />
				</Container>
			</Section>
		</>
	)
}

export default MarqueeCenter
