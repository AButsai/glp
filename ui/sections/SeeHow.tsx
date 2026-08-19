'use client'

import BeforeAfter from '../components/BeforeAfter'
import Container from '../components/Container'
import GuaranteeBar from '../components/GuaranteeBar'
import LinkQuiz from '../components/LinkQuiz'
import Section from '../components/Section'
import TrustBar from '../components/TrustBar'
import TrustRating from '../components/TrustRating'
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
				<div className='mt-8 flex items-stretch justify-center gap-4'>
					<LinkQuiz
						title='Get started'
						className='bg-black text-white rounded-4xl p-5 text-xl hover:bg-[#0F7B5C] lg:w-50'
					/>
					<LinkQuiz
						title='See pricing'
						className='bg-white text-black rounded-4xl p-5 text-xl border border-gray-300 hover:bg-[#0F7B5C] lg:w-50 hover:text-white'
					/>
				</div>
				<div className='my-5'>
					<GuaranteeBar />
				</div>
				<TrustRating />
			</Container>
		</Section>
	)
}

export default SeeHow
