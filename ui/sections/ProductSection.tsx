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
				<div className='mb-10'>
					<h2 className='text-4xl py-10 font-light tracking-tighter text-gray-900 mb-4 font-sans text-center'>
						Medications In Stock Ready to Ship
					</h2>
					<Products />
				</div>
				<TrustBar />
				<ButtonRatingBlock />
			</Container>
		</Section>
	)
}

export default ProductSection
