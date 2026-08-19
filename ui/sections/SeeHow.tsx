'use client'

import BeforeAfter from '../components/BeforeAfter'
import ButtonRatingBlock from '../components/ButtonRatingBlock'
import Container from '../components/Container'
import Section from '../components/Section'
import TrustBar from '../components/TrustBar'
import WeightLossCalculator from '../components/WeightLossCalculator'

const SeeHow = ({}) => {
	return (
		<Section className='py-5 md:py-10'>
			<Container className='max-w-7xl'>
				<h2 className='text-4xl font-bold text-center mb-8 md:text-6xl'>
					Finally Lose Weight Without Fighting Hunger, Dieting Harder, or
					Feeling Miserable
				</h2>
				<div className='md:grid md:grid-cols-[1.2fr_0.8fr] md:gap-5 md:items-stretch mb-5'>
					{/* Image */}
					<BeforeAfter />
					{/* Calc */}

					<WeightLossCalculator />
				</div>
				<TrustBar />
				<ButtonRatingBlock />
			</Container>
		</Section>
	)
}

export default SeeHow
