import { COMPANY } from '@/constants/base-constants'
import LegalPage from '@/ui/components/LegalPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Physician Code of Conduct | VelmoRx',
	description: 'Universal code of conduct for physicians practicing on the Bask platform.',
}

export default function PhysicianCodeOfConductPage() {
	return (
		<LegalPage
			title='Physician Code of Conduct'
			effectiveDate='September 30th, 2021'
		>
			<h2>Introduction</h2>
			<p>
				The Bask mission is to help as many people as possible with their
				healthcare needs and ultimately improve the way that people
				interact with the medical system when addressing certain health
				conditions. This document serves as the universal code of conduct
				for physician use of the Bask platform. Our goal is to align the
				values and philosophies of Bask HQ and the physicians who practice
				on the Bask Platform. This Code of Conduct will continue to be
				updated based on feedback from affiliated physicians in order to
				ensure patients are always receiving the highest quality of care.
			</p>

			<h2>Best Practices on the Platform</h2>
			<p>
				<strong>Be Patient:</strong> Telemedicine is a new experience for
				many patients. They may ask questions that seem obvious (e.g.,
				&quot;How does telemedicine work?&quot;). Please be sensitive to
				their concerns and work with them to determine the best course of
				treatment.
			</p>
			<p>
				<strong>Always Explain:</strong> Always provide a detailed
				explanation to a patient whether you find it appropriate to write a
				prescription or not. Patients are coming to the Bask Platform
				because they are in need of your guidance and care.
			</p>
			<p>
				<strong>Follow Up:</strong> The Bask Platform will automatically
				follow up with patients who receive treatment plans after 2 weeks,
				1 month, and every 3 months thereafter. If you think that a patient
				needs additional follow up, you can automate follow ups in the
				messaging system or contact the Bask Medical Ops Team.
			</p>
			<p>
				<strong>Document:</strong> Always thoroughly document your
				decisions. For example, if you approve a patient for treatment, and
				the Bask system flagged one or several of their responses as a
				potential contraindication or risk, please make sure to document
				your rationale (e.g., you spoke to them via phone, video, or
				message and received additional clarifying information).
			</p>
			<p>
				<strong>Check-in:</strong> The physicians with the highest rate of
				patient satisfaction check their messages at least once per day. If
				you will be unavailable for more than 48 hours, please give the
				Bask Medical Ops one week notice so that we can ensure your
				patient&apos;s receive timely responses to any question. In case of
				an emergency, please try to notify us as soon as possible.
			</p>

			<h2>Conduct Expectations on the Platform</h2>
			<p>
				<strong>Verify Identity:</strong>
				<br />
				<em>ID &amp; Photo Match:</em> The first step by any physician is to
				confirm the identity of the patient and ensure that the image
				uploaded matches the patient&apos;s government ID. This is also
				double-checked by automated software.
				<br />
				<em>Personal Information:</em> After you&apos;ve confirmed the ID
				matches the Face Photo, confirm that the basic information entered
				during the online visit (i.e., first name, last name, DOB) matches
				the information on the government ID.
			</p>
			<p>
				<strong>Follow State Protocols:</strong> The Bask Platform will
				always require you to confirm that you established a
				patient-physician relationship according to the state-specific
				requirement. Never provide any medical advice or treatment until
				you have adequately established a patient-physician relationship.
				When in doubt, please contact the Bask Medical Operations team or
				Bask&apos;s General Counsel.
			</p>
			<p>
				<strong>Treat &quot;Oldest&quot; First:</strong> Please always
				treat patients who entered the Bask Platform first. We pride
				ourselves on providing timely service to our patients. This can
				only be done if those who have been waiting longer are served
				first.
			</p>
			<p>
				<strong>One at a time:</strong> If another physician has started to
				treat a patient, do not attempt to provide additional treatment
				unless specifically asked for a second opinion. In addition,
				physicians should complete only one consult at a time before
				moving on to the next patient. Each consultation requires your
				undivided attention.
			</p>

			<h2>Safety, Security &amp; Privacy</h2>
			<p>
				<strong>Drug Interactions:</strong> Always pay attention to
				reported medications and be alert to drug interactions. Please
				make sure to always check a patient&apos;s previous plans on the
				Bask Platform before making a treatment decision.
			</p>
			<p>
				<strong>When There&apos;s Doubt, There is No Doubt:</strong> When in
				doubt about a specific drug interaction, please contact the Bask
				Medical Ops team, who will route your question to one of
				Bask&apos;s clinical directors. If anything is unclear from the
				visit, please follow up with the patient. It is always better to be
				100% certain that you have all the necessary information. Never
				create a prescription for a patient if you are unsure if
				it&apos;s safe. It is always better to get a second opinion or
				refer the patient to his/her in-person primary physician when in
				doubt.
			</p>
			<p>
				<strong>Pay Attention to Underlying Causes:</strong> Our
				patients&apos; mental health is as important to us as their
				physical health. Always follow up with patients who provide
				answers concerning their mental health. Please refer to the
				Emergency Plan located in the Bask&apos;s Manuals and Protocols
				folder for guidance on how to respond if a patient is experiencing
				a medical emergency.
			</p>
			<p>
				<strong>Consistently Review Protocols:</strong> Please reference
				the condition-specific Physician Protocols regularly. They contain
				the most important points on safe practices on the Bask Platform
				and should serve as a continuous reference for physicians. Most
				importantly, all medical decisions should be made solely at your
				discretion according to the standard of care.
			</p>
			<p>
				<strong>Never Share:</strong> Never share your Bask physician app
				password with anyone. Never share any patient information with
				anyone outside of Bask and only share information that is
				required for someone to complete their job.
			</p>
			<p>
				<strong>Secure PHI:</strong> Never share PHI using any software
				tool that is not HIPAA compliant. You may use password protected
				links to patient charts in Asana and email. Never work on the
				platform in open areas where someone may be able to see your
				screen and see PHI.
			</p>

			<h2>Ethical Expectations for Platform Physicians</h2>
			<p>
				Bask-affiliated physicians are expected to uphold the highest
				ethical standards called upon by the medical profession.
			</p>
			<p>
				<strong>Do No Harm:</strong> First, do no harm. The practice of
				medicine is a calling. Always put your patients&apos; safety
				first. Patient safety is the first and primary priority. You will
				always be compensated the exact same, regardless of whether a
				prescription is written.
			</p>
			<p>
				<strong>No Self-Referral:</strong> Patients that come through the
				Bask Platform should never be self referred to your own practice.
				If a referral is needed, please refer them to their primary
				healthcare provider or other outside physician.
			</p>
			<p>
				<strong>Sound Body &amp; Sound Mind:</strong> Never engage in the
				practice of medicine on our platform while under the influence of
				alcohol or other mind-altering substances.
			</p>
			<p>
				<strong>Keep Bask Informed:</strong> In case of a board complaint,
				hospital administrative action, malpractice suit or judgement, or
				any other administrative or disciplinary action against you
				(including a criminal charge or conviction related or unrelated to
				the practice of medicine), please promptly notify the Bask Medical
				Operations Team.
			</p>

			<p>Thank you.</p>

			<address>
				{COMPANY.legalName}
				<br />
				{COMPANY.address}
				<br />
				<a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`}>
					{COMPANY.phone}
				</a>
				<br />
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
			</address>

			<p>
				Services are provided via Bask Health Inc and Bask Health NY. View
				their applicable policies as well to stay informed on bask.health
				and bask.bio.
			</p>
		</LegalPage>
	)
}
