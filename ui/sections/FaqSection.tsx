import { faqItems } from '@/constants/questions'
import Container from '../components/Container'
import FaqBlock from '../components/FaqBlock'
import Section from '../components/Section'

const FaqSection = () => {
	return (
		<Section className='py-20 bg-white' id='faq'>
			<Container>
				<div className='mb-10'>
					<h2 className='text-[60px] text-center'>{"We've got you."}</h2>
					<p className='text-lg text-gray-600 text-center'>
						You have questions, we have answers.
					</p>
				</div>
				<FaqBlock items={faqItems} defaultOpenIndex={null} />
			</Container>
		</Section>
	)
}

export default FaqSection
