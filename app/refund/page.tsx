import { COMPANY } from '@/constants/base-constants'
import LegalPage from '@/ui/components/LegalPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Refund Policy | VelmoRx',
	description: 'Refund, cancellation, and satisfaction guarantee policy.',
}

const EFFECTIVE_DATE = 'August 28, 2026'

export default function RefundPolicyPage() {
	return (
		<LegalPage title='Refund Policy' effectiveDate={EFFECTIVE_DATE}>
			<h2>Prescription Not Approved</h2>
			<p>
				If, after your medical evaluation, your provider determines that a
				prescription is not appropriate for you, you will receive a full
				refund for that order automatically. No action is required on your
				part.
			</p>

			<h2>Patient Satisfaction Guarantee</h2>
			<p>
				We want you to be happy with your treatment plan. If you are
				unhappy with your results, contact us at {COMPANY.phone} and
				we&apos;ll work with you to make it right.
			</p>

			<h2>Cancelling Your Subscription</h2>
			<p>
				Month-to-month plans have no long-term contract — you may cancel
				your upcoming shipment at any time by calling {COMPANY.phone}.
				Subscribe-and-save plans carry the discounted term you selected at
				checkout; cancelling before that term ends may forfeit the
				associated discount.
			</p>

			<h2>Lost or Damaged Shipments</h2>
			<p>
				Each shipment is fully insured against loss or damage in transit.
				The only exception is when a patient provides incorrect shipping
				information. If your shipment is lost or arrives damaged, contact
				us at {COMPANY.phone} and we will arrange a replacement.
			</p>

			<h2>What Isn&apos;t Refundable</h2>
			<p>
				Once your prescription has been approved, compounded, and shipped,
				the cost of that specific medication order is not refundable except
				as described above (prescription not approved, lost/damaged
				shipment, or under the patient satisfaction guarantee), because
				compounded prescription medication cannot be resold or returned to
				inventory once dispensed for you individually.
			</p>

			<h2>How to Request a Refund</h2>
			<p>
				Call us at {COMPANY.phone} or email {COMPANY.email}. Approved
				refunds are issued to your original payment method. [TODO: указать
				точный срок обработки возврата в рабочих днях].
			</p>

			<h2>Contact Us</h2>
			<p>
				{COMPANY.legalName}
				<br />
				{COMPANY.address}
				<br />
				{COMPANY.phone} · {COMPANY.email}
			</p>
		</LegalPage>
	)
}
