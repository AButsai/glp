import { COMPANY } from '@/constants/base-constants'
import Container from '@/ui/components/Container'
import LinkQuiz from '@/ui/components/LinkQuiz'
import Section from '@/ui/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Log In | VelmoRx',
	description: 'Log in to your VelmoRx Patient Portal.',
}

export default function LoginPage() {
	return (
		<Section className='py-24'>
			<Container className='max-w-xl text-center'>
				<h1 className='font-roboto text-[32px] font-bold leading-[1.1] tracking-[0.24px] sm:text-[44px]'>
					Patient Portal
				</h1>
				<p className='mt-4 font-roboto text-[15px] leading-[1.6] text-[#344054]'>
					Our online patient portal is coming soon. Once you have an active
					VelmoRx membership, you&apos;ll be able to log in here to message
					your provider, manage your prescriptions, and update your account.
				</p>
				<p className='mt-4 font-roboto text-[15px] leading-[1.6] text-[#344054]'>
					Already a member and need help with your account in the meantime?
					Email us at{' '}
					<a className='text-[#0F7B5C] underline' href={`mailto:${COMPANY.email}`}>
						{COMPANY.email}
					</a>
					.
				</p>
				<LinkQuiz
					title='2-MINUTE ASSESSMENT'
					className='mt-8 inline-flex min-h-[52px] items-center justify-center rounded-full px-8 text-sm font-bold uppercase tracking-wide'
				/>
			</Container>
		</Section>
	)
}
