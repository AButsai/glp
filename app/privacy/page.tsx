import { COMPANY } from '@/constants/base-constants'
import LegalPage from '@/ui/components/LegalPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Privacy Policy | VelmoRx',
	description:
		'VelmoRx Notice of Privacy Practices for Protected Health Information (PHI).',
}

const EFFECTIVE_DATE = 'August 28, 2026'

export default function PrivacyPolicyPage() {
	return (
		<LegalPage title='Privacy Policy' effectiveDate={EFFECTIVE_DATE}>
			<p>
				This Notice of Privacy Practices (&quot;Notice&quot;) describes how{' '}
				{COMPANY.legalName} (&quot;we&quot;, &quot;us&quot;, or
				&quot;our&quot;) may use and disclose your Protected Health
				Information (PHI) to carry out treatment, payment, or healthcare
				operations and for other purposes that are permitted or required by
				law. This Notice also describes your rights regarding your PHI. We
				are required by law to maintain the privacy of your PHI, provide you
				with this Notice of our legal duties and privacy practices, and to
				abide by the terms of this Notice.
			</p>

			<h2>Uses and Disclosures of PHI</h2>
			<p>We may use and disclose your PHI for the following purposes:</p>
			<ol>
				<li>
					<strong>Treatment:</strong> We may use and disclose your PHI to
					provide, coordinate, or manage your healthcare and related
					services. This may include communication with other healthcare
					providers about your treatment and coordinating your care with
					other providers.
				</li>
				<li>
					<strong>Payment:</strong> We may use and disclose your PHI to
					obtain payment for healthcare services provided to you. This may
					include contacting your insurance company to verify your coverage,
					billing and collection activities, and sharing PHI with other
					healthcare providers, insurance companies, or collection agencies.
				</li>
				<li>
					<strong>Healthcare Operations:</strong> We may use and disclose
					your PHI for healthcare operations, including quality assessment,
					improvement activities, case management, accreditation, licensing,
					credentialing, and conducting or arranging for medical reviews,
					audits, or legal services.
				</li>
				<li>
					<strong>As Required by Law:</strong> We may use and disclose your
					PHI when required to do so by federal, state, or local law.
				</li>
				<li>
					<strong>Public Health and Safety:</strong> We may use and disclose
					your PHI to prevent or control disease, injury, or disability, to
					report child abuse or neglect, to report reactions to medications
					or problems with products, and to notify persons who may have been
					exposed to a communicable disease or may be at risk of spreading a
					disease or condition.
				</li>
				<li>
					<strong>Health Oversight Activities:</strong> We may disclose your
					PHI to health oversight agencies for activities authorized by law,
					such as audits, investigations, inspections, and licensure.
				</li>
				<li>
					<strong>Judicial and Administrative Proceedings:</strong> We may
					disclose your PHI in response to a court or administrative order,
					subpoena, discovery request, or other lawful process.
				</li>
				<li>
					<strong>Law Enforcement:</strong> We may disclose your PHI for law
					enforcement purposes, such as to report certain types of wounds or
					injuries, or to comply with a court order, warrant, or other legal
					process.
				</li>
				<li>
					<strong>Research:</strong> We may use and disclose your PHI for
					research purposes when the research has been approved by an
					institutional review board and privacy protections are in place.
				</li>
				<li>
					<strong>Organ and Tissue Donation:</strong> If you are an organ
					donor, we may disclose your PHI to organizations that handle organ
					procurement, transplantation, or donation.
				</li>
				<li>
					<strong>Workers&apos; Compensation:</strong> We may disclose your
					PHI for workers&apos; compensation or similar programs that provide
					benefits for work-related injuries or illnesses.
				</li>
				<li>
					<strong>Military and Veterans:</strong> If you are a member of the
					armed forces, we may disclose your PHI as required by military
					authorities.
				</li>
				<li>
					<strong>Inmates:</strong> If you are an inmate, we may disclose
					your PHI to the correctional institution or law enforcement
					official having custody of you.
				</li>
			</ol>

			<h2>Your Rights Regarding PHI</h2>
			<p>You have the following rights with respect to your PHI:</p>
			<ol>
				<li>
					<strong>Right to Inspect and Copy:</strong> You have the right to
					inspect and copy your PHI that we maintain, with certain
					exceptions. To request access, submit a written request to our
					Privacy Officer. We may charge a reasonable fee for the costs of
					copying, mailing, or other supplies associated with your request.
				</li>
				<li>
					<strong>Right to Amend:</strong> You have the right to request an
					amendment to your PHI if you believe it is incorrect or incomplete.
					To request an amendment, submit a written request to our Privacy
					Officer, specifying the information you believe is incorrect and
					why. We may deny your request if we believe the information is
					accurate and complete, or if we did not create the information.
				</li>
				<li>
					<strong>Right to an Accounting of Disclosures:</strong> You have
					the right to request an accounting of disclosures of your PHI made
					by us in the past six years, except for disclosures made for
					treatment, payment, or healthcare operations, and certain other
					disclosures. To request an accounting, submit a written request to
					our Privacy Officer.
				</li>
				<li>
					<strong>Right to Request Restrictions:</strong> You have the right
					to request a restriction on our use or disclosure of your PHI for
					treatment, payment, or healthcare operations. We are not required
					to agree to your request but will consider it. To request a
					restriction, submit a written request to our Privacy Officer,
					specifying the restriction you are requesting and to whom it
					applies.
				</li>
				<li>
					<strong>Right to Request Confidential Communications:</strong> You
					have the right to request that we communicate with you about your
					PHI in a certain way or at a certain location. To request
					confidential communications, submit a written request to our
					Privacy Officer, specifying how or where you wish to be contacted.
				</li>
				<li>
					<strong>Right to a Paper Copy of This Notice:</strong> You have the
					right to receive a paper copy of this Notice, even if you have
					agreed to receive it electronically. To obtain a paper copy of
					this Notice, contact our Privacy Officer.
				</li>
				<li>
					<strong>Right to be Notified of a Breach:</strong> You have the
					right to be notified in the event that we discover a breach of
					your PHI.
				</li>
			</ol>

			<h2>Transmission of PHI</h2>
			<p>
				We are committed to protecting the privacy of your PHI and will
				ensure that any electronic transmission of PHI complies with the
				Health Insurance Portability and Accountability Act (HIPAA) Privacy
				Rule (45 CFR 164). This includes the use of Secure-Socket Layer (SSL)
				or equivalent technology for the transmission of PHI, as well as
				adherence to all applicable security standards for online
				transmissions of PHI.
			</p>

			<h2>Changes to This Notice</h2>
			<p>
				We reserve the right to change this Notice and the revised Notice
				will be effective for PHI we already have about you, as well as any
				information we receive in the future. We will post a copy of the
				current Notice in our office and on our website. The Notice will
				contain the effective date on the first page.
			</p>

			<h2>Complaints</h2>
			<p>
				If you believe your privacy rights have been violated, you may file
				a complaint with our Privacy Officer or with the Secretary of the
				Department of Health and Human Services. You will not be retaliated
				against for filing a complaint.
			</p>

			<h2>Contact Information</h2>
			<p>
				To exercise any of your rights, or if you have any questions about
				this Notice or our privacy practices, please contact our Privacy
				Officer at:
			</p>
			<p>
				{COMPANY.legalName}
				<br />
				{COMPANY.address}
				<br />
				{COMPANY.domain}
				<br />
				{COMPANY.email}
				<br />
				{COMPANY.phone}
			</p>
			<p>
				This Notice is provided in accordance with the Notice of Privacy
				Practices for Protected Health Information from the Department of
				Health and Human Services&apos; Model and is applicable across all
				US states. Rights of Specific Jurisdictions within the US: certain
				states may have additional privacy protections that apply to your
				PHI. The following is an example of specific rights in the state of
				California. If you reside in a state with additional privacy
				protections, you may have additional rights related to your PHI.
			</p>

			<h2>California Residents</h2>
			<ol>
				<li>
					<strong>Right to Access:</strong> In addition to the rights
					described above, California residents have the right to request
					access to their PHI in a readily usable electronic format, as well
					as any additional information required by California law. To
					request access, submit a written request to our Privacy Officer.
				</li>
				<li>
					<strong>Right to Restrict Certain Disclosures:</strong> California
					residents have the right to request restrictions on certain
					disclosures of their PHI to health plans if they paid
					out-of-pocket for a specific healthcare item or service in full.
					To request such a restriction, submit a written request to our
					Privacy Officer.
				</li>
				<li>
					<strong>Confidentiality of Medical Information Act (CMIA):</strong>{' '}
					California residents are protected by the Confidentiality of
					Medical Information Act (CMIA), which provides additional privacy
					protections for medical information. We are required to comply
					with CMIA in addition to HIPAA.
				</li>
				<li>
					<strong>Marketing and Sale of PHI:</strong> California residents
					have the right to request that their PHI not be used for marketing
					purposes or sold to third parties without their authorization. To
					request a restriction on the use of your PHI for marketing or the
					sale of your PHI, submit a written request to our Privacy Officer.
				</li>
				<li>
					<strong>Minor&apos;s Rights:</strong> If you are a minor (under the
					age of 18), you have the right to request that certain information
					related to certain sensitive services, such as reproductive
					health, mental health, or substance use disorder treatment, not be
					disclosed to your parent or guardian without your consent. To
					request a restriction on the disclosure of such information,
					submit a written request to our Privacy Officer.
				</li>
			</ol>
			<p>
				If you reside in a state other than California, please consult your
				state&apos;s specific privacy laws for information about any
				additional rights you may have regarding your PHI. You may also
				contact our Privacy Officer for more information about your rights
				under specific state laws.
			</p>

			<h2>State-Specific Provisions</h2>
			<p>
				In addition to the privacy practices described in our Notice of
				Privacy Practices for Protected Health Information, we comply with
				applicable state-specific privacy laws related to PHI. The following
				are examples of a few states with additional privacy protections:
			</p>

			<h3>New York</h3>
			<p>
				For residents of New York, we comply with the New York State
				Confidentiality of Information Law, which provides additional
				privacy protections for HIV-related information, mental health
				records, and genetic testing results. We will obtain written consent
				before disclosing such information, even for treatment, payment, or
				healthcare operations.
			</p>

			<h3>Texas</h3>
			<p>
				For residents of Texas, we comply with the Texas Medical Privacy
				Act, which offers privacy protections beyond HIPAA, including
				requiring consent for certain disclosures of PHI, additional
				safeguards for electronic PHI, and specific requirements for the
				destruction of PHI. We also adhere to Texas&apos;s specific privacy
				protections for mental health records and substance use treatment
				records.
			</p>

			<h3>Florida</h3>
			<p>
				For residents of Florida, we comply with Florida&apos;s privacy
				laws, which offer additional protections for mental health records,
				HIV/AIDS-related information, and substance abuse treatment records.
				We will obtain written consent before disclosing such information,
				even for treatment, payment, or healthcare operations. We also
				implement specific security measures to protect electronic PHI, as
				required by Florida law.
			</p>

			<h3>Illinois</h3>
			<p>
				For residents of Illinois, we comply with Illinois&apos;s specific
				privacy laws related to mental health records, HIV/AIDS-related
				information, and genetic testing results. We will obtain written
				consent before disclosing such information, even for treatment,
				payment, or healthcare operations. In addition, we will notify
				patients of any unauthorized access to their electronic PHI, as
				required by Illinois law.
			</p>

			<h3>Massachusetts</h3>
			<p>
				For residents of Massachusetts, we comply with Massachusetts&apos;s
				specific privacy laws related to mental health records,
				HIV/AIDS-related information, and genetic testing results. We will
				obtain written consent before disclosing such information, even for
				treatment, payment, or healthcare operations. We also implement
				specific security measures to protect electronic PHI, as required by
				Massachusetts law.
			</p>

			<h3>California</h3>
			<p>
				For residents of California, we comply with the Confidentiality of
				Medical Information Act (CMIA), as well as California&apos;s
				specific privacy laws related to marketing, sale of PHI, and
				minors&apos; rights. We will obtain written consent before
				disclosing certain information and adhere to additional privacy
				protections, as required by California law.
			</p>
		</LegalPage>
	)
}
