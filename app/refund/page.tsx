import { COMPANY } from '@/constants/base-constants'
import LegalPage from '@/ui/components/LegalPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Refund Policy | VelmoRx',
	description: 'VelmoRx Refund Policy.',
}

const EFFECTIVE_DATE = 'August 31, 2026'

export default function RefundPolicyPage() {
	return (
		<LegalPage title='Refund Policy' effectiveDate={EFFECTIVE_DATE}>
			<p>
				Unfortunately we cannot accept returns of prescription products for
				reuse or resale, and all sales are final. However, if you feel we
				have made an error in the filling of your prescription, please
				contact us at{' '}
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
			</p>
			<address>
				VelmoRX
				<br />
				{COMPANY.legalName}
				<br />
				<a href='https://velmorx.com/'>https://velmorx.com/</a>
				<br />
				<a href='https://start.velmorx.com/'>
					https://start.velmorx.com/
				</a>
				<br />
				<br />
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
				<br />
				<a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`}>
					{COMPANY.phone}
				</a>
				<br />
				<br />
				{COMPANY.address}
			</address>
		</LegalPage>
	)
}
