import { ReactNode } from 'react'
import Container from './Container'
import Section from './Section'

interface Props {
	title: string
	effectiveDate?: string
	children: ReactNode
}

const LegalPage = ({ title, effectiveDate, children }: Props) => {
	return (
		<Section className='py-16'>
			<Container className='max-w-3xl'>
				<h1 className='font-roboto text-[32px] font-bold leading-[1.1] tracking-[0.24px] sm:text-[44px]'>
					{title}
				</h1>
				{effectiveDate && (
					<p className='mt-3 text-sm text-[#667085]'>
						Effective date: {effectiveDate}
					</p>
				)}
				<div
					className='
						mt-8
						space-y-5
						font-roboto
						text-[15px]
						leading-[1.6]
						text-[#344054]

						[&_h2]:mt-8
						[&_h2]:text-xl
						[&_h2]:font-semibold
						[&_h2]:text-[#111827]

						[&_h3]:mt-5
						[&_h3]:text-base
						[&_h3]:font-semibold
						[&_h3]:text-[#111827]

						[&_ul]:list-disc
						[&_ul]:space-y-1.5
						[&_ul]:pl-5

						[&_ol]:list-decimal
						[&_ol]:space-y-1.5
						[&_ol]:pl-5

						[&_a]:text-[#0F7B5C]
						[&_a]:underline
					'
				>
					{children}
				</div>
			</Container>
		</Section>
	)
}

export default LegalPage
