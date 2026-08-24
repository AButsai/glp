import { faqItems } from '@/constants/questions'
import Container from '../components/Container'
import FaqBlock from '../components/FaqBlock'
import Section from '../components/Section'

const FaqSection = () => {
	return (
		<Section className='py-20 bg-white' id='faq'>
			<Container>
				<div className='mb-5'>
					<h2 className='font-roboto text-[32px] font-bold leading-[1.1] tracking-[0.24px]  sm:text-[44px] lg:text-[60px] lg:leading-[60px] text-center'>
						{"We've got you."}
					</h2>
					<p className='font-roboto text-[16px] leading-[1.5] text-[#4b5563] lg:text-[20px] lg:leading-[28px] mx-auto text-center'>
						You have questions, we have answers.
					</p>
				</div>
				<FaqBlock items={faqItems} defaultOpenIndex={null} />
			</Container>
		</Section>
	)
}

export default FaqSection
