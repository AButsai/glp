'use client'

import ButtonRatingBlock from '../components/ButtonRatingBlock'
import Container from '../components/Container'
import Products from '../components/Products'
import Section from '../components/Section'
import TrustBar from '../components/TrustBar'

const ProductSection = ({}) => {
	return (
		<Section className='py-16'>
			<Container>
				<div className='mb-10 flex flex-col items-center gap-3 text-center'>
					<h2 className='font-roboto text-[32px] font-bold leading-[1.1] tracking-[0.24px]  sm:text-[44px] lg:text-[60px] lg:leading-[60px] text-center'>
						Medications In Stock Ready to Ship
					</h2>
					<p className='max-w-[560px] font-roboto text-[16px] leading-[1.5] text-[#4b5563] lg:text-[20px] lg:leading-[28px] mx-auto text-center mb-5'>
						All-inclusive pricing you can trust: your monthly fee covers medical
						oversight, medication and 24/7 support. Same price every month. No
						price hike. Cancel Anytime.
					</p>
					<Products />
				</div>
				<TrustBar />
				<ButtonRatingBlock />
			</Container>
		</Section>
	)
}

export default ProductSection
