import {
	COMPANY,
	PARTNER_PHARMACY,
	PROVIDER_GROUP,
} from '@/constants/base-constants'
import LegalPage from '@/ui/components/LegalPage'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Terms & Conditions | VelmoRx',
	description: 'Terms and conditions for using the VelmoRx platform.',
}

const EFFECTIVE_DATE = 'August 28, 2026'

export default function TermsPage() {
	return (
		<LegalPage title='Terms & Conditions' effectiveDate={EFFECTIVE_DATE}>
			<p>
				These Terms &amp; Conditions (&quot;Terms&quot;) govern your access
				to and use of the website, quiz, and patient portal operated by{' '}
				{COMPANY.legalName} (&quot;VelmoRx&quot;, &quot;we&quot;,
				&quot;us&quot;, or &quot;our&quot;). By using our site or services,
				you agree to these Terms. If you do not agree, please do not use our
				services.
			</p>

			<h2>1. Eligibility</h2>
			<p>
				You must be at least 18 years old and a legal resident of a U.S.
				jurisdiction where our affiliated medical providers are licensed to
				practice and our pharmacy partners are authorized to dispense, in
				order to use our services. See our{' '}
				<Link href='/#faq'>FAQ</Link> for current state availability.
			</p>

			<h2>2. What VelmoRx Is — and Isn&apos;t</h2>
			<p>
				VelmoRx is a telehealth platform. We are not a pharmacy and we do
				not practice medicine. We connect you with independent, licensed
				healthcare providers who evaluate your intake information and
				determine, in their independent medical judgment, whether a
				prescription is appropriate. If a prescription is issued, it is
				compounded and dispensed by a U.S.-based, state-licensed 503A
				compounding pharmacy — currently {PARTNER_PHARMACY.name},{' '}
				{PARTNER_PHARMACY.address}. Our current affiliated provider group is{' '}
				{PROVIDER_GROUP.name}, {PROVIDER_GROUP.address}.
			</p>

			<h2>3. Medical Disclaimer</h2>
			<p>
				Compounded medications are not approved by the FDA, and the FDA
				does not review compounded medications for safety, effectiveness,
				or manufacturing quality. Compounded medications are not generic
				versions of, and are not equivalent to, any branded medication.
				Nothing on this site is medical advice, and no patient-provider
				relationship is created until a licensed provider accepts you as a
				patient. A prescription is never guaranteed — your provider may
				decline to prescribe if treatment is not appropriate for you, in
				which case you will receive a full refund for that order.
			</p>

			<h2>4. Your Account &amp; Intake Information</h2>
			<p>
				You agree to provide accurate, current, and complete information
				during the health questionnaire and intake process, and to keep
				your account credentials confidential. Providing false or
				misleading health information may result in denial or cancellation
				of treatment.
			</p>

			<h2>5. Pricing, Billing &amp; Cancellation</h2>
			<p>
				Pricing is disclosed at checkout and billed monthly unless you
				select a discounted multi-month plan. There is no long-term
				contract on month-to-month plans; you may cancel your upcoming
				shipment at any time by calling {COMPANY.phone}. Subscribe-and-save
				plans carry the discounted term you agreed to at checkout. See our{' '}
				<Link href='/refund'>Refund Policy</Link> for details on refunds and
				our patient satisfaction guarantee.
			</p>

			<h2>6. Shipping</h2>
			<p>
				Medication is shipped by our pharmacy partner in temperature-
				controlled packaging once your prescription is approved. Shipping
				timelines are described in our <Link href='/#faq'>FAQ</Link>.
				Risk of loss for a package passes to the carrier, and shipments are
				insured against loss in transit as described in our FAQ.
			</p>

			<h2>7. Prohibited Uses</h2>
			<ul>
				<li>Providing false identity or health information.</li>
				<li>Using the service if you are not a legal resident of an eligible state.</li>
				<li>
					Reselling, redistributing, or using medication for anyone other
					than the patient it was prescribed to.
				</li>
				<li>
					Attempting to interfere with, reverse-engineer, or misuse the
					website, quiz, or patient portal.
				</li>
			</ul>

			<h2>8. Intellectual Property</h2>
			<p>
				All content on this site — including text, graphics, logos, and
				software — is owned by or licensed to VelmoRx and is protected by
				applicable intellectual property laws. You may not copy,
				reproduce, or create derivative works from our content without
				written permission.
			</p>

			<h2>9. Limitation of Liability</h2>
			<p>
				To the fullest extent permitted by law, VelmoRx and its affiliated
				providers and pharmacy partners are not liable for indirect,
				incidental, or consequential damages arising from your use of the
				service. Nothing in these Terms limits liability that cannot be
				limited under applicable law, including liability for a
				provider&apos;s or pharmacy&apos;s own negligence in the delivery of
				care.
			</p>

			<h2>10. Governing Law</h2>
			<p>[TODO: указать штат/юрисдикцию для governing law — заполнить перед публикацией].</p>

			<h2>11. Changes to These Terms</h2>
			<p>
				We may update these Terms from time to time. The &quot;Effective
				date&quot; above reflects the most recent revision. Continued use of
				the service after changes take effect constitutes acceptance of the
				revised Terms.
			</p>

			<h2>12. Contact Us</h2>
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
