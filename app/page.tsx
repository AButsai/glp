import Section from '@/ui/components/Section'
import HelpYou from '@/ui/sections/HelpYou'
import Hero from '@/ui/sections/Hero'
import MarqueeCenter from '@/ui/sections/MarqueeCenter'
import SeeHow from '@/ui/sections/SeeHow'

export default function Home() {
	return (
		<>
			<Hero />
			<MarqueeCenter />
			<SeeHow />
			<Section className='rounded-tl-4xl rounded-tr-4xl bg-green-200 shadow-[0_-8px_12px_-6px_rgba(0,0,0,0.25)] pt-20 overflow-hidden'>
				<HelpYou />
			</Section>
		</>
	)
}
