'use client'

import Container from '../components/Container'
import Reviews from '../components/Reviews'
import Section from '../components/Section'

const ReviewsSection = ({}) => {
	return (
		<Section className='pt-20'>
			<Container>
				<div className='mb-12'>
					<h2 className='font-roboto text-[30px] font-bold leading-[1.1] tracking-[0.24px]  sm:text-[44px] lg:text-[60px] lg:leading-[60px] text-center'>
						125k+ Happy Customers :)
					</h2>
					<p className='text-lg text-gray-600 text-center'>
						{"Real results, real people. Discover how we've transformed lives."}
					</p>
				</div>
			</Container>
			<div className='w-full px-5'>
				<Reviews />
			</div>
		</Section>
	)
}

export default ReviewsSection
