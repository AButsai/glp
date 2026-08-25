import Section from '@/ui/components/Section'
import FaqSection from '@/ui/sections/FaqSection'
import HelpYou from '@/ui/sections/HelpYou'
import Hero from '@/ui/sections/Hero'
import MarqueeCenter from '@/ui/sections/MarqueeCenter'
import ProductSection from '@/ui/sections/ProductSection'
import ReviewsSection from '@/ui/sections/ReviewsSection'
import SeeHow from '@/ui/sections/SeeHow'
import TreatmentTimeline from '@/ui/sections/TreatmentTimeline'

export default function Home() {
	return (
		<>
			<Hero />
			<MarqueeCenter />
			<ProductSection />
			<Section className='mt-10 rounded-tl-4xl rounded-tr-4xl 	bg-linear-to-br from-[#DCF6EC] via-[#D3EDE3] to-[#C5E1D3] shadow-[0_-8px_12px_-6px_rgba(0,0,0,0.25)] pt-20 overflow-hidden'>
				<HelpYou />
				<TreatmentTimeline />
				<ReviewsSection />
			</Section>
			<SeeHow />
			<FaqSection />
		</>
	)
}
