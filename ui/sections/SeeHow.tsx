'use client'

import BeforeAfter from '../components/BeforeAfter'
import ButtonRatingBlock from '../components/ButtonRatingBlock'
import Container from '../components/Container'
import Section from '../components/Section'
import TrustBar from '../components/TrustBar'
import WeightLossCalculator from '../components/WeightLossCalculator'

// Weight-loss calculator temporarily hidden for review (2026-08-31).
// Flip back to true to restore it (and the two-column grid below).
const SHOW_WEIGHT_LOSS_CALCULATOR = false

const SeeHow = ({}) => {
	return (
		<Section className='py-5 md:py-10'>
			<Container className='max-w-7xl'>
				<h2 className='font-roboto text-[32px] font-bold leading-[1.1] tracking-[0.24px]  sm:text-[44px] lg:text-[60px] lg:leading-[60px] text-center mb-5'>
					Finally Lose Weight Without Fighting Hunger, Dieting Harder, or
					Feeling Miserable
				</h2>
				<div
					className={
						SHOW_WEIGHT_LOSS_CALCULATOR
							? 'md:grid md:grid-cols-[1.2fr_0.8fr] md:gap-5 md:items-stretch mb-5'
							: 'mx-auto mb-5 max-w-xl'
					}
				>
					<BeforeAfter />

					{SHOW_WEIGHT_LOSS_CALCULATOR && <WeightLossCalculator />}
				</div>
				<TrustBar />
				<ButtonRatingBlock />
			</Container>
		</Section>
	)
}

export default SeeHow
