import { COMPANY } from '@/constants/base-constants'
import LegalPage from '@/ui/components/LegalPage'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Terms of Service | VelmoRx',
	description: 'Terms of Service for the VelmoRx websites and services.',
}

const EFFECTIVE_DATE = 'August 31, 2026'

export default function TermsPage() {
	return (
		<LegalPage title='Terms of Service' effectiveDate={EFFECTIVE_DATE}>
			<p>
				<strong>
					AMONG OTHER ACTIVITIES, VELMORX&apos;S SERVICES ENABLE COORDINATION
					AND COMMUNICATION WITH A HEALTH CARE PROVIDER. IT DOES NOT REPLACE
					YOUR RELATIONSHIP WITH ANY PHYSICIAN. THESE SERVICES MIGHT NOT BE
					APPROPRIATE FOR ALL MEDICAL CONDITIONS OR CONCERNS. IF YOU HAVE A
					MEDICAL EMERGENCY, IMMEDIATELY CALL YOUR DOCTOR OR DIAL 911.
				</strong>
			</p>

			<p>
				<strong>
					PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BECAUSE THEY SET
					FORTH THE IMPORTANT TERMS YOU WILL NEED TO KNOW ABOUT THE SERVICES.
				</strong>
			</p>

			<p>
				<strong>
					YOU UNDERSTAND THAT BY ACCESSING OR USING THE SITES OR SERVICES, YOU
					ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE
					LEGALLY BOUND BY AND COMPLY WITH THESE TERMS OF USE. IF YOU DO NOT
					OR CANNOT AGREE WITH ANY PART OF THESE TERMS OF USE, YOU MAY NOT USE
					THE SITES OR ANY SERVICES PROVIDED ON OR THROUGH THE SITES.
				</strong>
			</p>

			<p>
				<strong>
					THE TERMS OF USE ARE SUBJECT TO CHANGE AS PROVIDED HEREIN.
				</strong>
			</p>

			<h2>Introduction</h2>
			<p>
				{COMPANY.legalName}, and their respective affiliates (collectively,
				&quot;VelmoRX&quot;, &quot;we&quot;, &quot;us&quot;, or
				&quot;our&quot;) own and operate the websites located at{' '}
				<a href='https://velmorx.com/'>https://velmorx.com/</a>,{' '}
				<a href='https://start.velmorx.com/'>
					https://start.velmorx.com/
				</a>{' '}
				(collectively, the &quot;Websites,&quot; and collectively with any
				affiliated mobile application (&quot;App&quot;), the
				&quot;Sites&quot;). The Sites are intended to facilitate the
				provision of the Services to registered users. The &quot;Services&quot;
				may include (i) providing individuals with information on health care
				and wellness (&quot;Content&quot;); (ii) providing individuals with
				pharmacy services; (iii) providing individuals with access to
				technology-oriented tools for smoking cessation; (iv) development and
				gathering of health care records and health care information with
				retention of the same for use in health care provider appointments,
				communications, and pharmacy services; (v) administrative support in
				connection with scheduling, payment for health care provider
				services, and payment for pharmacy services; and (vi)
				telecommunications support for using the Services as a means of
				direct access to health care providers provided by Beluga Health,
				P.A. and similar affiliated professional entities for communication,
				consultations, assessments, and treatment by such health care
				organizations and their providers.
			</p>
			<p>
				These terms and conditions of use (&quot;Terms of Use&quot;)
				describe your rights and responsibilities with regard to the VelmoRX
				Sites that you may use to receive Services. Your access to and use of
				the Sites is subject to these Terms of Use, our{' '}
				<Link href='/privacy'>Privacy Policy</Link>, as well as all
				applicable laws and regulations. In these Terms of Use, the terms
				&quot;you&quot; and &quot;yours&quot; refer to the person using the
				Services. Even though you may have arrived to the Sites through a
				website or mobile application operated or controlled by a third
				party, including by an affiliate of VelmoRX, you understand and agree
				that these Terms of Use are entered into between you and VelmoRX. If
				you do not accept and agree to be bound by these Terms of Use, you
				are not authorized to access or otherwise use the Sites, Services or
				any information or Content provided through the Sites or Services.
				The Sites and Services are continually under development, and
				VelmoRX reserves the right to review or remove any part of these
				Terms of Use in its sole discretion at any time and without prior
				notice to you. You should check the Terms of Use from time to time
				when you use the Sites or Services to determine if any changes have
				been made. Any changes to these Terms of Use are effective upon
				posting to the Sites. Unless otherwise indicated, any new Content
				added to the Services is also subject to these Terms of Use upon
				posting to the Sites. If you disagree with these Terms of Use, your
				sole and exclusive remedy is to discontinue your use of the Sites
				and/or Services. Your continued use after a change has been posted
				constitutes your acceptance of the changes.
			</p>
			<p>
				Use of these terms is accepting use of Bask Health Inc&apos;s
				platform and its applicable privacy policy located on the Bask
				Health website (bask.health, bask.bio).
			</p>

			<h2>Availability</h2>
			<p>
				Certain of our Services are currently only available to individuals
				located in certain states.
			</p>

			<h2>Eligibility</h2>
			<p>In order to qualify to use the Services, the following must be true:</p>
			<ul>
				<li>You are age 18 or over.</li>
				<li>
					You are located in a State Where We Operate (depending on the type
					of Services).
				</li>
				<li>You agree to be legally bound by and comply with these Terms of Use.</li>
			</ul>
			<p>
				You understand and agree that satisfying the above requirements does
				not guarantee that you will receive Services through VelmoRX. In
				addition to the above requirements, VelmoRX and certain affiliated
				professional entities reserve the right to change or include new
				requirements as deemed appropriate in their sole discretion without
				providing prior notice to you.
			</p>

			<h2>Requirements for use</h2>
			<p>
				You must have compatible computing and/or mobile devices, access to
				the Internet, and certain necessary software in order to use the
				Sites. Fees and charges may apply to your use of the mobile services
				and to the Internet.
			</p>

			<h2>Special consent to telehealth services</h2>
			<p>
				Telemedicine involves the delivery of health care services using
				electronic communications, information technology, or other means
				between a health care provider and a patient who are not in the same
				physical location. Telemedicine may be used for diagnosis,
				treatment, follow-up and/or related patient education, and may
				include, but is not limited to:
			</p>
			<ul>
				<li>
					Electronic transmission of medical records, photo images, personal
					health information, or other data between a patient and health
					care provider;
				</li>
				<li>
					Interactions between a patient and health care provider via audio,
					video, and/or data communications; and
				</li>
				<li>Use of output data from medical devices, sound, and video files.</li>
			</ul>
			<p>
				The electronic systems used in the Services will incorporate network
				and software security protocols to protect the privacy and security
				of health information and imaging data, and will include measures to
				safeguard the data to ensure its integrity against intentional or
				unintentional corruption.
			</p>
			<p>
				Please see our{' '}
				<Link href='/telehealth-consent'>Consent to Telehealth</Link>{' '}
				available for a description of the risks and benefits of
				telemedicine. The Consent to Telehealth is hereby incorporated into
				these Terms of Use by reference and constitutes a part of these
				Terms of Use.
			</p>

			<h2>Privacy policy</h2>
			<p>
				VelmoRX understands the importance of confidentiality and privacy
				regarding your health information. Please see: (1) our{' '}
				<Link href='/privacy'>Privacy Policy</Link> available on the Sites
				for a description of how we may collect and use your personal
				information, and (2) the VelmoRX Professionals Notice of Privacy
				Practices applicable to Beluga Health, P.A. and similar affiliated
				professional entities for a description of how these entities may
				use and disclose your medical information and how you may access
				that information. The Privacy Policy and VelmoRX Professionals
				Notice of Privacy Practices are hereby incorporated into these Terms
				of Use by reference and constitute a part of these Terms of Use.
			</p>

			<h2>Your relationship with VelmoRX</h2>
			<p>
				VelmoRX does not provide any medical services, including via the
				Sites and Services. Rather, VelmoRX provides a technology platform
				for you to access a health care provider employed or contracted with
				Beluga Health, P.A. or similar affiliated professional entities and
				obtain access to additional information, which you may or may not
				choose to utilize in planning your health care and wellness. The
				health and wellness resources made available through our Services
				are not a substitute for direct in-person health care services in
				all cases. The decision to focus on diagnosis, treatment
				recommendations, or both, rests with you and the health care
				provider. You understand that by coordinating and in certain cases
				consulting with a Beluga Health, P.A. or affiliate health care
				provider through the Services, you are not entering into a
				provider-patient relationship with VelmoRX.
			</p>
			<p>
				By accepting the Terms of Use, you agree and consent to VelmoRX,
				VelmoRX affiliates, or health care providers sending you
				disclosures, notices, messages, reports, and other communications.
				It is your responsibility to monitor these communications. You
				acknowledge and agree that you will not hold us or any VelmoRX
				affiliate liable for any loss, injury, or claim of any kind
				resulting from your failure to read these communications or for
				your failure to comply with any treatment recommendations contained
				in these communications.
			</p>

			<h2>Communications by text message and email</h2>
			<p>
				By opting-in to receive text (SMS) messages from VelmoRX or by
				sending VelmoRX an initial text message (an &quot;SMS
				Enrollment&quot;), you consent to receiving text messages regarding
				your VelmoRX account and use of the Sites and Services. These text
				messages may include order confirmations, shipping notifications,
				messages from your healthcare provider, and other transactional
				messages, as well as promotional and marketing notifications, to the
				extent you have opted-in to receive such messages from VelmoRX.
			</p>
			<p>
				With your SMS Enrollment, you represent and understand that: (1) you
				are the owner or authorized user of the mobile device you used in
				order to initiate the SMS Enrollment, (2) you are authorized to
				approve any applicable charges in connection with the text messages
				you send to and receive from VelmoRX, (3) you will be responsible
				for all messaging and other data charges that may apply for any text
				messages sent to you from VelmoRX, or from VelmoRX to you, and (4)
				neither VelmoRX, nor your or VelmoRX&apos;s mobile carriers, will be
				liable for delayed or undelivered messages.
			</p>
			<p>
				Note that access to the Services and the Sites is not conditioned
				upon your consent to receive marketing or promotional text messages
				from VelmoRX, and you can opt-out of any of VelmoRX&apos;s SMS
				services at any time by texting &quot;STOP&quot; to the message
				received, from the mobile device that is subscribed to receive the
				SMS messages. After you send the text message &quot;STOP&quot; to
				us, we may send you one final text message to confirm that you have
				been unsubscribed. If you have opted-in to receive more than one
				type of text message from VelmoRX, you will need to opt-out of each
				VelmoRX SMS service to which you are subscribed. Until you have done
				so, you may continue to receive the types of text messages from
				VelmoRX that you have opted-in to receive but have not unsubscribed
				from.
			</p>
			<p>
				You also understand that while VelmoRX takes your privacy and the
				security of your health and other sensitive information very
				seriously, the transmission of information over the internet and
				mobile networks is not 100% secure. Text messages and emails that
				you send to or receive from VelmoRX are not encrypted, which means
				that it is possible they may be intercepted by third parties. If you
				choose to send or receive information about your health or any
				other sensitive information by text message or email, you do so at
				your own risk. By initiating an SMS Enrollment, you consent to
				sending text messages to VelmoRX, and receiving text messages from
				VelmoRX, that are not encrypted. Likewise, by emailing VelmoRX or
				giving VelmoRX your email, you consent to receiving unencrypted
				email messages from VelmoRX.
			</p>
			<p>
				If you are experiencing any issues with VelmoRX&apos;s text
				messaging or email services, or if you have any concerns about
				sending or receiving any sensitive information through text or
				email, please contact us directly at{' '}
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. If you have
				questions specific to your text or data plan, please contact your
				wireless provider.
			</p>

			<h2>Consultative service</h2>
			<p>
				In some cases, a Beluga Health, P.A. or affiliated health care
				provider may use the Services to provide advice or treatment to you.
				A health care provider consulting with you through the Services may
				not have the benefit of information that would be obtained by
				examining you in person and observing your physical condition, in
				each instance. Therefore, the health care provider may not be aware
				of facts or information that may affect his or her opinion regarding
				a potential diagnosis or treatment recommendation. To reduce the
				risk to you of this limitation, VelmoRX strongly encourages you to
				provide all relevant information and discuss any and all diagnosis
				and treatment options with a health care provider. Moreover, a
				health care provider utilizing VelmoRX may be limited by state law
				in prescribing certain medications to you without first conducting
				an in-person physical examination. By deciding to engage the
				Services, you acknowledge and agree that you are aware of these
				limitations and agree to assume the risk of these limitations.
				Furthermore, you agree and accept that: (i) any diagnosis you may
				receive is limited and, in some cases, provisional; (ii) the health
				care services are not intended, in all cases, to replace a full
				medical evaluation or an in-person visit with a health care
				provider; (iii) a health care provider acting through the Services
				may not have important information that is usually obtained through
				a &quot;hands-on&quot; physical examination; and (iv) the absence of
				a physical examination may affect the health care provider&apos;s
				ability to diagnose any potential condition, disease or injury.
			</p>
			<p>
				For more information regarding the health care services offered by
				health care providers utilizing the Services, please visit{' '}
				<a href='https://velmorx.com/'>https://velmorx.com/</a>.
			</p>

			<h2>Site content</h2>
			<p>
				Except for specific communications received from Beluga Health, P.A.
				or affiliate health care organizations and providers, none of the
				Content you receive through the Sites should be considered medical
				advice.
			</p>

			<h2>Registration and user accounts</h2>
			<p>
				Although certain parts of the Sites are accessible by any
				individual, you are obligated to register with VelmoRX in order to
				access the Services. The Services are available only to users who
				have registered with VelmoRX and to other persons affiliated with
				VelmoRX who have been granted accounts with usernames and passwords
				(&quot;Secure Users&quot;). If you are a Secure User, you agree to
				provide information that is accurate, complete and correct, and to
				accurately maintain and update any information about yourself that
				you have provided to VelmoRX. If you do not maintain such
				information, or VelmoRX has reasonable grounds to suspect as much,
				VelmoRX has the right to suspend or terminate your account and your
				use of the Services. You also agree to immediately notify VelmoRX of
				any unauthorized use of your username, password or any other breach
				of security that you become aware of involving or relating to the
				Services by emailing VelmoRX at{' '}
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. VelmoRX may
				take any and all actions it deems necessary or reasonable to
				maintain the security of the Sites, Services and your Secure User
				account.
			</p>
			<p>
				You agree to keep confidential your username and password and to
				exit from your Secure User account at the end of each session. You
				are responsible for all activities that occur under your account and
				for maintaining the confidentiality of your password. You are
				responsible for changing your password promptly if you think it has
				been compromised. You may not transfer or share your password with
				anyone, or create more than one account. You may not use anyone
				else&apos;s account at any time. VelmoRX explicitly disclaims
				liability for any and all losses and damages arising from your
				failure to comply with this section. You acknowledge and agree
				that: (1) all or any part of the Sites may not be accessible at any
				time, for any period, or for any reason; and (2) VelmoRX will not be
				liable if for any reason all or any part of the Sites are
				unavailable at any time or for any period.
			</p>

			<h2>&quot;Jailbreaking&quot; the mobile operating system</h2>
			<p>
				The App is intended for use only on a mobile phone that runs an
				unmodified manufacturer approved operating system. Using the App on
				a mobile phone with a modified operating system may undermine
				security features that are intended to protect your protected
				health information from unauthorized or unintended disclosure. As a
				result, you may compromise your protected health information if you
				use the App on a mobile phone that has been modified. Use of the App
				on a mobile phone with a modified operating system is a material
				breach of these Terms of Use.
			</p>

			<h2>Access rights and prohibited use</h2>
			<p>
				Subject to your compliance with these Terms of Use, we hereby grant
				to you a personal, limited, revocable, non-exclusive, and
				nontransferable right to view, download, access, and use the Sites
				in the United States and to use the Services solely for your
				personal and non-commercial use and only as permitted under these
				Terms of Use, the Consent to Telehealth, and the Privacy Policy. No
				other right, title, or interest in or to the Sites is transferred to
				you, and all rights not expressly granted are reserved by VelmoRX or
				its licensors. We reserve the right, in our sole discretion, to deny
				or suspend use of the Sites or Services to anyone for any reason.
				You agree that you will not, and will not attempt to: (a)
				impersonate any person or entity or otherwise misrepresent your
				affiliation with a person or entity; (b) use the Sites or Services
				to violate any local, state, national or international law; (c)
				reverse engineer, disassemble, decompile, or translate any software
				or other components of the Sites; (d) distribute, input, upload,
				transmit, or otherwise run or propagate any virus, application,
				Trojan horse, or any other harmful computer code that could damage
				or alter a computer, portable device, computer network,
				communication network, data, or our Sites, or any other system,
				device, or property; (e) access or use the Sites in any manner or
				for any purpose that infringes, misappropriates, or otherwise
				violates any intellectual property right or other right of any
				third party; (f) license, sublicense, sell, resell, transfer,
				assign, distribute or otherwise commercially exploit or make
				available to any third party the Sites, Services or related
				materials in any way; (g) use or access the Sites to create or
				develop competing products or services or for any other purpose
				that is to VelmoRX&apos;s detriment or commercial disadvantage; (h)
				take any action or use the Sites in any manner which could damage,
				destroy, disrupt, disable, impair, overburden, interfere with, or
				otherwise impede or harm in any manner our Sites or any content, in
				whole or in part; (i) disrupt, interfere with, violate the security
				of, or attempt to gain unauthorized access to our Sites or any
				computer network; (j) bypass, breach, avoid, remove, deactivate,
				impair, descramble, or otherwise circumvent any security device,
				protection, or technological measure implemented by VelmoRX or any
				of our service providers to protect our Sites; (k) remove, delete,
				alter, or obscure any trademarks, specifications, warranties, or
				disclaimers, or any copyright, trademark, patent, or other
				intellectual property or proprietary rights notices from our Sites
				or any content made available to you on or through our Sites; (l)
				use any manual process or automated device to monitor or copy any
				content made available on or through our Sites for any unauthorized
				purpose except as permitted by this section; (m) copy, duplicate,
				download, store in a retrieval system, publish, transmit or
				otherwise reproduce, transfer, distribute, store, disseminate,
				aggregate, use as a component of or as the basis for a database or
				otherwise use in any form or by any means any data, text, reports,
				or other materials related to VelmoRX or third-party content from
				the Sites; (n) otherwise use the Sites in any manner that exceeds
				the scope of use granted above; or (o) encourage or enable any
				other individual to do any of the foregoing.
			</p>

			<h2>Ownership of information submitted via the sites</h2>
			<p>
				With the exception of any personal data or information you submit
				maintained in accordance with our Privacy Policy (which may be
				governed by the Health Insurance Portability and Accountability Act
				of 1996, Public Law 104-191, and its related regulations and
				amendments from time to time (collectively, &quot;HIPAA&quot;) or
				related state-specific privacy laws and regulations), you
				understand and agree that any information you provide to VelmoRX on
				or through the Sites or Services, whether by direct entry,
				submission, email or otherwise, including, but not limited to,
				data, questions, comments, forum communications, or suggestions,
				will be treated as non-confidential and non-proprietary and will
				become the property of VelmoRX and/or (i) Beluga Health, P.A., (ii)
				similar affiliated professional entities, or (iii) individual
				health providers utilizing the Services.
			</p>
			<p>
				Such information may be used for any purpose, including, without
				limitation, reproduction, solicitation, disclosure, transmission,
				publication, broadcast, and posting. VelmoRX shall be free to use
				any ideas, concepts, know-how, or techniques contained in any
				communication you send to VelmoRX via the Services or by any other
				means for any purpose whatsoever, including, without limitation,
				developing and marketing products using such information.
			</p>
			<p>
				For any personal data or information subject to the foregoing
				exception, and to the extent permitted by law, you: (1) understand
				and agree that any such information provided by you may be used,
				copied or displayed by VelmoRX, VelmoRX may create derivative works
				of any such data, and VelmoRX may provide such data to our service
				providers, our successors and assigns, Pennsylvania Medical, P.C.
				and affiliated health care providers, and their affiliated
				professional entities, in performance of their services; and (2)
				grant VelmoRX, our service providers, our successors and assigns,
				Beluga Health, P.A. and affiliated health care providers, and their
				affiliated professional entities, the fully transferable and
				sublicenseable right and license to use, reproduce, modify,
				analyze, perform, display, distribute, and otherwise disclose to
				third parties any data or information you submit on or through the
				Sites for the purposes of providing services to you; conducting
				research or analyses of such data; and designing, developing,
				implementing, modifying and/or improving new, current or future
				features, products and services of VelmoRX using such data.
			</p>

			<h2>Ownership of site content</h2>
			<p>
				As between VelmoRX and you, VelmoRX is the sole and exclusive owner
				of all right, title and interest in and to the Sites and their
				content, features and functionality (including, without
				limitation, all information, software, text, displays, images,
				video, audio, design, selection, arrangement and look and feel),
				other Content, and all intellectual property rights therein, and
				any suggestions, ideas or other feedback provided by you. You are
				not permitted to reproduce, publish, distribute, modify, create
				derivative works of, publicly display, publicly perform, republish,
				download, store, transmit, sell or participate in any sale of, or
				exploit in any way, in whole or in part, any of the material on our
				Sites except as generally and ordinarily permitted through the
				Sites according to these Terms of Use. Any copy, modification,
				revision, enhancement, adaptation, translation, or derivative work
				of the Sites or Content shall be owned solely and exclusively by
				VelmoRX or its licensors, including all intellectual property
				rights therein. You may not access or use for any commercial
				purposes any part of the Sites or Content.
			</p>

			<h2>Trademarks</h2>
			<p>
				Certain names, logos, and other materials displayed in and through
				the Sites may constitute trademarks, trade names, service marks or
				logos (&quot;Marks&quot;) of VelmoRX or its affiliates. You are not
				authorized to use any such Marks without the express written
				permission of VelmoRX. Ownership of all such Marks and the goodwill
				associated therewith remains with us or our affiliates.
			</p>

			<h2>Links to third-party hyperlinks and websites</h2>
			<p>
				The Sites may contain hyperlinks or references to other websites
				(&quot;Linked Sites&quot;) operated by third parties. The Linked
				Sites may not be under our control, therefore, we are not
				responsible for the information, products or services described
				thereon, or for the content of any Linked Site, including, without
				limitation, any link contained in a Linked Site, or any changes or
				updates to a Linked Site. We are providing these Linked Sites to
				you only as a convenience, and the inclusion of any link does not
				necessarily imply endorsement of the Linked Site or any association
				with its operators. Your use of these Linked Sites is at your own
				risk, and we are not liable to you in any way, either directly or
				indirectly, for any content, errors, damage or loss caused by or in
				connection with use of or reliance on information contained in or
				provided to Linked Sites.
			</p>
			<p>
				You may have arrived to the Sites through a Linked Site, including a
				Linked Site controlled by a parent, subsidiary or affiliate of
				VelmoRX. You understand and agree that we are not responsible for
				the information, products or services described on those Linked
				Sites and only these Terms of Use will apply to your use of or
				access to the Sites.
			</p>

			<h2>Termination</h2>
			<p>
				The Terms of Use will remain in full force and effect as long as
				you continue to access or use the Sites or Services. You may
				terminate the Terms of Use at any time by discontinuing use of the
				Sites. Your permission to use the Sites automatically terminates if
				you violate these Terms of Use.
			</p>
			<p>
				VelmoRX may terminate or suspend any of the rights granted by these
				Terms of Use and your access to and use of the Sites or Services
				with or without prior notice, for any reason, and at any time. The
				following provisions survive the expiration or termination of these
				Terms of Use for any reason whatsoever: Disclaimer of Warranties;
				Limitation of Liability; Indemnification; Governing Law, Dispute
				Resolution, Arbitration, Venue, Severability of Provisions; No
				Waiver; and Assignment.
			</p>
			<p>
				Subject to applicable law, VelmoRX reserves the right to maintain,
				delete or destroy all communications and materials posted or
				uploaded to the Sites pursuant to its internal record retention
				and/or content destruction policies. After such termination,
				VelmoRX will have no further obligation to provide the Services,
				except to the extent an affiliated professional entity is obligated
				to provide you access to your health records or is required to
				provide you with continuing care under applicable legal, ethical
				and professional obligations to you. You agree that if your use of
				the Services is terminated pursuant to these Terms of Use, you will
				not attempt to use the Services in any way, and further agree that
				if you violate this restriction after such termination, you will
				indemnify and hold VelmoRX harmless from any and all liability that
				VelmoRX may incur therefore.
			</p>

			<h2>Disclaimer of warranties</h2>
			<p>
				YOU EXPRESSLY AGREE THAT USE OF THE SITES IS AT YOUR SOLE RISK. YOU
				ACKNOWLEDGE AND AGREE THAT THE SITES AND ANY SERVICES ARE PROVIDED
				THROUGH THE SITES ON AN &quot;AS IS&quot; AND &quot;AS
				AVAILABLE&quot; BASIS. VELMORX AND ITS AFFILIATES, INCLUDING WITHOUT
				LIMITATION ALL AFFILIATED PROFESSIONAL ENTITIES, AND THEIR
				RESPECTIVE OFFICERS, DIRECTORS, MANAGERS, PARTNERS, MEMBERS,
				EMPLOYEES, AND AGENTS (COLLECTIVELY &quot;RELATED PERSONS&quot;)
				MAKE NO REPRESENTATIONS OR WARRANTIES AND EXPRESSLY DISCLAIM ANY AND
				ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, WITH RESPECT
				TO THE SITES AND SERVICES INCLUDING, BUT NOT LIMITED TO, ANY
				REPRESENTATIONS OR WARRANTIES WITH RESPECT TO MERCHANTABILITY,
				FITNESS FOR A PARTICULAR USE OR PURPOSE, NONINFRINGEMENT, TITLE,
				AVAILABILITY, SECURITY, OPERABILITY, CONDITION, QUIET ENJOYMENT,
				VALUE, ACCURACY OF DATA, FREEDOM FROM VIRUSES OR MALWARE,
				COMPLETENESS, TIMELINESS, FUNCTIONALITY, RELIABILITY, SEQUENCING OR
				SPEED OF DELIVERY OR SYSTEM INTEGRATION. WE MAKE NO WARRANTIES OR
				REPRESENTATIONS THAT YOUR USE OF THE SITES OR SERVICES WILL NOT
				INFRINGE THE RIGHTS OF THIRD PARTIES.
			</p>
			<p>
				TO THE FULLEST EXTENT OF APPLICABLE LAW, NEITHER VELMORX NOR ITS
				RELATED PERSONS WILL BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY YOUR
				RELIANCE ON INFORMATION OBTAINED THROUGH THE SITES. IT IS YOUR
				RESPONSIBILITY TO EVALUATE THE ACCURACY, COMPLETENESS, TIMELINESS,
				RELIABILITY OR USEFULNESS OF THE SITES. FURTHERMORE, VELMORX DOES
				NOT GUARANTEE THAT THE SITES WILL BE UNINTERRUPTED, OR FREE FROM
				ERROR, DEFECT, LOSS, DELAY IN OPERATION, CORRUPTION, CYBER ATTACK,
				VIRUSES, INTERFERENCE, HACKING, MALWARE, OR OTHER SECURITY
				INTRUSION, AND VELMORX DISCLAIMS ANY LIABILITY RELATING THERETO.
			</p>
			<p>
				YOU UNDERSTAND AND AGREE THAT ANY CONTENT, MATERIAL AND/OR
				INFORMATION OBTAINED THROUGH THE USE OF THE SITES ARE USED AT YOUR
				SOLE RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO
				YOUR COMPUTER OR MOBILE PHONE OR LOSS OF DATA THAT RESULTS FROM THE
				DOWNLOAD OF SUCH CONTENT, MATERIAL AND/OR INFORMATION.
			</p>

			<h2>Limitation of liability</h2>
			<p>
				YOU UNDERSTAND THAT TO THE EXTENT PERMITTED UNDER APPLICABLE LAW AND
				EXCEPT AS SET FORTH IN THIS SECTION, IN NO EVENT WILL VELMORX, ITS
				RELATED PERSONS OR LICENSORS BE LIABLE TO YOU OR TO ANY PARTY FOR
				ANY CLAIMS, LIABILITIES, LOSSES, COSTS OR DAMAGES UNDER ANY LEGAL OR
				EQUITABLE THEORY, WHETHER IN TORT (INCLUDING NEGLIGENCE AND STRICT
				LIABILITY), CONTRACT, WARRANTY, STATUTE OR OTHERWISE, INCLUDING, BUT
				NOT LIMITED TO, ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
				PUNITIVE OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES
				FOR LOSS OF REVENUES, PROFITS, GOODWILL, USE OR DATA, SERVICE
				INTERRUPTION, COMPUTER OR MOBILE PHONE DAMAGE, OR SYSTEM FAILURE, OR
				THE COST OF SUBSTITUTE PRODUCTS OR SERVICES, OR FOR ANY DAMAGES FOR
				PERSONAL OR BODILY INJURY OR EMOTIONAL DISTRESS, INCLUDING DEATH,
				ARISING OUT OF OR IN CONNECTION WITH ANY ACCESS, USE OF (OR
				INABILITY TO USE) THE SITES OR ANY SERVICES PROVIDED THROUGH THE
				SITES, OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR RELATED TO YOUR
				USE OF THE SITES. THIS IS TRUE EVEN IF VELMORX OR RELATED PERSONS
				HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES.
			</p>
			<p>
				To the extent that we may not, as a matter of applicable law,
				disclaim any implied warranty or limit liabilities, the scope and
				duration of such warranty and the extent of our liability will be
				the minimum permitted under such applicable law.
			</p>

			<h2>Indemnification</h2>
			<p>
				You agree to indemnify, defend, and hold harmless VelmoRX, its
				affiliates (including without limitation all affiliated
				professional entities), subsidiaries, and their directors,
				officers, employees, contractors, licensors, suppliers,
				representatives, proprietors, partners, shareholders, servants,
				principals, agents, predecessors, successors, assigns, accountants,
				and attorneys harmless from and against any and all third-party
				suits, actions, claims, proceedings, damages, settlements,
				judgments, injuries, liabilities, obligations, losses, risks,
				costs, and expenses (including, without limitation, reasonable
				attorneys&apos; fees, litigation expenses, and accounting fees),
				relating to or arising from, or alleged to arise from, your use of
				materials or features available on the Sites in an unauthorized
				manner, fraud, violation of law, or willful misconduct, or any
				breach by you of these Terms of Use.
			</p>

			<h2>Modifications to the sites</h2>
			<p>
				VelmoRX reserves the right at any time and for any reason to
				modify, or temporarily or permanently discontinue, the Sites or
				Services or any portion thereof, with or without notice. You agree
				that VelmoRX shall not be liable to you or to any third party for
				any modification, suspension, or discontinuance of the Sites or
				Services.
			</p>

			<h2>Pharmacy services</h2>
			<p>
				If you receive a prescription as a result of the Services, you may
				select {COMPANY.legalName} or one of our partner pharmacies
				(collectively, the &quot;VelmoRX Pharmacy Network&quot;) to ship
				your prescription. You give us consent to send and disclose to the
				Bask Pharmacy Network all information provided by you, health care
				records, and other applicable health care information and personal
				information (such as your name, location and demographic
				information) so that you may receive pharmacy services.
			</p>

			<h2>Packaging and fulfillment restrictions</h2>
			<p>
				If you select to use the Bask Pharmacy Network to fulfil any
				prescriptions provided by health care providers through the
				Services, you acknowledge that your medication, if approved, will
				not be shipped in child-resistant packaging and that you must keep
				it out of the reach of children.
			</p>

			<h2>Payment</h2>
			<p>
				You agree to pay all fees due for services requested. You will see
				a prompt for your payment details, such as your credit card
				information and any promotional codes you may have. By entering
				your payment information and submitting your request, you authorize
				us, our affiliates, or our third-party payment processors to charge
				the amount due.
			</p>
			<p>
				You understand and agree that you are responsible for all fees due
				to receive health care services and pharmacy services, including
				any fees charged by the health care organization(s) or
				provider(s). Your payments to VelmoRX may include fees charged by
				health care organization(s) or provider(s) for health care services
				and/or pharmacy services, which VelmoRX collects on their behalf.
				Any health care services or pharmacy services not made available
				through the Services are not included in the payments collected by
				VelmoRX and you may be separately charged by the applicable health
				care providers for such services. In the event that your credit
				card expires or VelmoRX, our affiliates, or our third-party payment
				processors are unable to process your payment, you may receive
				notice for you to provide an alternative payment method. VelmoRX
				and/or the health care organization(s) and/or provider(s) have no
				obligation to provide any health care services or pharmacy services
				unless and until full payment has been received and/or verified.
			</p>

			<h2>Special notice to Medicare and Medicaid beneficiaries</h2>
			<p>
				Federal and state health care programs, such as Medicare and
				Medicaid, do not pay for all health care costs, even for some
				health care services and products that you or your health care
				provider have good reason to think you need. If you are a
				beneficiary of a federal or state health care program, and such
				program does not pay for certain services or products rendered to
				you, you may have to pay for these services and products. As we
				understand it, neither federal nor state health care programs
				currently pay for any of the medical services or products made
				available through the Services performed by affiliated health care
				organizations or providers, at least not in the way such services
				or products are provided (i.e., using telemedicine and bundled
				treatment offerings). By agreeing to use the Services, you
				acknowledge and agree that: (1) you will pay directly for any
				medical services and products provided to you, and (2) neither
				VelmoRX nor any VelmoRX affiliated health care organization or
				provider will bill any federal or state health care program for
				such medical services or products.
			</p>

			<h2>Testosterone health program terms and conditions</h2>
			<p>
				This section describes additional terms and conditions applicable
				to your participation in the Testosterone Health Program (the
				&quot;Program&quot;) offered through VelmoRX and the affiliated
				professional entities that provide services on the VelmoRX
				platform. The Program is designed to provide access to routine and
				necessary services for the management of low testosterone in
				biological males caused by secondary hypogonadism. The Program is a
				membership-based service through which eligible Members can obtain
				limited medical care, including at-home phlebotomy services,
				medication at the discretion of the Member&apos;s provider, and
				pharmacy services for a recurring monthly payment. The Program is
				not health insurance or a substitute for health insurance, does not
				meet any individual health insurance mandate under federal or state
				law, and cannot replace your in-person provider relationships. You
				should keep your existing health insurance coverage while you are
				participating in the Program or obtain health insurance coverage if
				you do not currently have it.
			</p>

			<h3>Eligibility limitations applicable to the Program</h3>
			<p>
				Except in New York, Florida, and Illinois, in order to be eligible
				to participate in the program you must have a commercial health
				insurance benefits plan, including, but not limited to, an
				employer-provided health insurance plan, that may be billed for
				laboratory services. To learn more about billing for laboratory
				services please see the &quot;Laboratory testing services not
				included&quot; section below. You understand and agree that the
				affiliated professional entities, the healthcare professionals
				practicing on the Bask platform, and the pharmacies in the Bask
				Pharmacy Network will not bill your health insurance benefits plan
				for the health care and pharmacy services and products that you
				receive as part of the Program and that such health care and
				pharmacy services and products may not be eligible for
				reimbursement. You understand and agree that you are responsible
				for all fees due to receive health care and pharmacy services and
				products consistent with the &quot;Payment&quot; and &quot;Special
				notice to Medicare and Medicaid beneficiaries&quot; sections above.
			</p>

			<h3>Onboarding and diagnosis</h3>
			<p>
				In order to participate in the Program, you must be evaluated by a
				doctor or nurse practitioner on the VelmoRX platform and, in the
				professional judgment of such health care provider, meet the
				clinical criteria for participation. To be evaluated for
				participation, you must complete an initial onboarding telehealth
				medical assessment (the &quot;Diagnosis Online Visit&quot;) with a
				doctor or nurse practitioner and obtain laboratory blood testing to
				measure your key physiological indicators including, but not
				limited to, your serum testosterone levels. If, following a review
				of the laboratory results and the Diagnosis Online Visit, your
				health care provider determines that you are a good candidate for
				treatment through the Program, he or she may initiate such
				treatment by writing you a prescription.
			</p>
			<p>
				You acknowledge and agree that, even if you do not meet the
				clinical criteria for participation in the Program, you are
				responsible for payment of the cost of the Diagnosis Online Visit
				and any laboratory testing that your health care provider orders
				for you and such cost is not included in the Membership Fee.
			</p>

			<h3>Membership and Additional Services</h3>
			<p>
				Your membership (&quot;Membership&quot;) in the Program, including
				your ability to access the Membership Services and your obligation
				to pay Membership Fees (each as defined below) will commence when
				your health care provider communicates your care plan, risks and
				benefits of treatment, and you acknowledge such and elect to
				proceed with participation in the Program.
			</p>
			<p>The Program includes:</p>
			<ul>
				<li>12 months of Membership</li>
				<li>
					Up to eight (8) discrete medical consults per year with your
					VelmoRX-affiliated health care provider, all of which will be set
					on a pre-scheduled basis according to your personalized care plan.
				</li>
				<li>
					Health care provider services required to order and interpret up
					to eight (8) lab panels per year (Note: the costs of the
					laboratory tests are not included in your Membership and must be
					paid by you separately)
				</li>
				<li>Up to eight (8) at-home blood draws</li>
				<li>
					Secure messaging with your VelmoRX-affiliated healthcare provider
					between discrete medical consults
				</li>
				<li>
					Fulfillment of prescription medication for the treatment of low
					testosterone (as prescribed), if you choose to have your
					prescription filled by the VelmoRX Pharmacy Network, with free
					two-day shipping
				</li>
			</ul>
			<p>
				In certain cases, you or your health care provider may request that
				you complete services (e.g., medical consults, laboratory tests) in
				excess of the Membership Services. For each medical consult after
				the eighth consult, for each at-home blood draw after the eighth
				at-home blood draw, and for each lab result interpretation after
				the eighth lab result interpretation, (the &quot;Additional
				Services&quot;) you will be charged a separate fee (the
				&quot;Additional Services Fee&quot;). You will be charged an
				Additional Services Fee of $15.00 for each additional consult or
				lab result interpretation. You will be charged an Additional
				Services Fee of $125.00 for each additional at-home blood draw. As
				part of your participation in the Program, you agree that any
				Additional Services Fees that you incur can be charged to your
				payment card or PayPal account on file within seven (7) days of the
				date on when such Additional Services are rendered.
			</p>
			<p>
				The Membership Services may change from time to time. You will be
				given thirty (30) days&apos; notice of any such change. You may
				accept the revised Membership Services by continuing in the
				Program or reject them by terminating your Membership.
			</p>

			<h3>At-home phlebotomy services</h3>
			<p>
				In order to participate in the Program, you must periodically
				obtain medically necessary laboratory testing (bloodwork). As part
				of the Membership Services, you will receive up to eight (8)
				at-home blood draws from our partner mobile phlebotomy provider.
				You agree to receive at-home phlebotomy services from our mobile
				phlebotomy partner for any laboratory testing required by your
				VelmoRX-affiliated health care provider as part of the Program.
			</p>

			<h3>Laboratory testing services not included</h3>
			<p>
				In order to participate in the Program, you must periodically
				obtain medically necessary laboratory testing (bloodwork). Your
				blood sample, once collected by our mobile phlebotomy partner, will
				be processed and tested by Quest Diagnostics. You acknowledge and
				agree that your Membership Fee does not include the cost of any
				laboratory services provided by Quest and that VelmoRX is not
				responsible for any such costs. Quest determines the charges for
				its laboratory testing services and may bill you directly for any
				amounts that you owe Quest based on your agreement with Quest. Your
				payment arrangement with Quest is not governed by these Terms of
				Use. Contact Quest directly for more information about pricing and
				payment for laboratory testing services.
			</p>

			<h3>Payment of Membership Fee</h3>
			<p>
				You will have an opportunity to review and agree to the cost of
				Membership (the &quot;Membership Fee&quot;) during the checkout
				process that is part of the Diagnosis Online Visit. You may also
				view the costs associated with Membership on the Program webpage
				located here. Once you begin participation in the Program, your
				Membership Fee will be automatically charged to your payment card
				or PayPal account on file on a recurring, monthly basis
				(approximately every 28-30 days) until your Membership is canceled.
				The initial payment must be made the day your Membership commences.
				Once paid, your Membership Fee is non-refundable. You may cancel
				your Membership at any time by calling us at{' '}
				<a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`}>
					{COMPANY.phone}
				</a>
				, emailing us at{' '}
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>, or logging
				into your Secure User account.
			</p>
			<p>
				If you choose to have your prescription filled at a local pharmacy,
				your Membership Fee will not include the cost of medication and
				pharmacy fulfillment. If you transfer your prescription from a
				local pharmacy to the VelmoRX Pharmacy Network, the cost of
				medication and pharmacy fulfillment will be added to your
				Membership Fee at the beginning of the next billing cycle. You may
				transfer your prescription to a local pharmacy or to the Bask
				Pharmacy Network at any time by calling us at{' '}
				<a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`}>
					{COMPANY.phone}
				</a>{' '}
				or emailing us at{' '}
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
			</p>

			<h3>Canceling your Membership</h3>
			<p>
				You may cancel your Membership at any time by calling us at{' '}
				<a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`}>
					{COMPANY.phone}
				</a>
				, emailing us at{' '}
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>, or logging
				into your Secure User account. Any Membership Fees paid prior to
				the date of cancellation are non-refundable.
			</p>

			<h3>Delaying your Membership</h3>
			<p>
				If you would like to delay your billing date for any reason, you
				may delay by logging into your Secure User account, calling us at{' '}
				<a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`}>
					{COMPANY.phone}
				</a>
				, or emailing us at{' '}
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. You may
				learn more about how to initiate a delay through your Secure User
				account in the FAQs located here. When you delay, you will not be
				charged a Membership Fee until the end of the delay period that you
				have selected. During such period, you will not be eligible to
				receive any Membership Services, except you may still message your
				VelmoRX-affiliated health care professional through VelmoRX&apos;s
				secure messaging application at any time. Delaying could impact
				your ability to adhere to your treatment plan. As a result, at your
				VelmoRX-affiliated health care provider&apos;s discretion, you may
				need to be re-evaluated and undergo additional laboratory testing
				before continuing with treatment (a &quot;Continuation Visit&quot;)
				at the end of a delay period. If you delay for a cumulative period
				of eight (8) consecutive weeks or more without scheduling a
				Continuation Visit, your Membership may be canceled without notice.
			</p>

			<h3>Pausing your Membership</h3>
			<p>
				If you would like to pause your Membership by turning off
				auto-payments (going &quot;On-demand&quot;) for any reason, you may
				do so by logging into your Secure User account, calling us at{' '}
				<a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`}>
					{COMPANY.phone}
				</a>
				, or emailing us at{' '}
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. You may
				learn more about how to go On-demand through your Secure User
				account in the FAQs located here. When you go On-demand, you will
				not be charged any additional monthly Membership Fee payments until
				you initiate a charge by ordering a refill of your medication or
				turning auto-payments back on. You will receive Membership Services
				through the last day of the monthly billing cycle for which you
				have paid the monthly Membership Fee. Thereafter, other than
				messaging your VelmoRX-affiliated health care professional through
				VelmoRX&apos;s secure messaging application, you will not be
				eligible to receive any Membership Services until you initiate
				another charge as described above. Going On-demand could impact
				your ability to adhere to your treatment plan. As a result, at your
				VelmoRX-affiliated health care provider&apos;s discretion, you may
				need to undergo a Continuation Visit before continuing with
				treatment at the end of an On-demand period. If you remain
				On-demand for a cumulative period of eight (8) consecutive weeks or
				more without scheduling a Continuation Visit, your Membership may
				be canceled without notice.
			</p>

			<h3>No Testosterone Replacement Therapy</h3>
			<p>
				The Program is not appropriate for patients seeking testosterone
				replacement therapy (commonly referred to as &quot;TRT&quot;), such
				as testosterone patches, gels, injections, or pellets. Providers
				participating in the Program cannot prescribe TRT by telehealth.
				Please contact your in-person provider to seek TRT options.
			</p>

			<h3>
				No representation, warranty, or guarantee of continued availability
				of the Program
			</h3>
			<p>
				NEITHER VELMORX NOR THE AFFILIATED PROFESSIONAL ENTITIES MAKE ANY
				REPRESENTATIONS, WARRANTIES, OR GUARANTEES REGARDING THE CONTINUED
				AVAILABILITY OF THE PROGRAM. THE PROGRAM MAY BE DISCONTINUED AT ANY
				TIME AT THE SOLE DISCRETION OF VELMORX AND/OR THE AFFILIATED
				PROFESSIONAL ENTITIES. YOU WILL BE GIVEN 30 DAYS&apos; NOTICE OF ANY
				SUCH DISCONTINUATION SO THAT YOU MAY FIND A LOCAL PROVIDER WITH WHOM
				TO CONTINUE TREATMENT.
			</p>

			<h2>
				Governing law; dispute resolution; arbitration; venue;
				severability of provisions
			</h2>
			<p>
				<strong>
					PLEASE READ THIS SECTION CAREFULLY BECAUSE IT REQUIRES YOU AND
					VELMORX TO RESOLVE ALL DISPUTES BETWEEN US THROUGH BINDING
					INDIVIDUAL ARBITRATION AND LIMITS THE MANNER IN WHICH YOU CAN SEEK
					RELIEF FROM VELMORX
				</strong>
			</p>
			<p>
				These Terms of Use and your use of the Sites shall be governed by
				the laws of the State of Delaware, without giving effect to the
				principles of conflict of laws. Any dispute arising under or
				relating in any way to these Terms of Use will be resolved
				exclusively by final and binding arbitration in New York, New York
				under the rules of the American Arbitration Association, except
				that either party may bring a claim related to intellectual
				property rights, or seek temporary and preliminary specific
				performance and injunctive relief, in any court of competent
				jurisdiction. The parties agree that the courts located in New
				York, New York shall have exclusive personal jurisdiction, subject
				matter jurisdiction, and venue for any such claim.
			</p>
			<p>
				All parts of these Terms of Use apply to the maximum extent
				permitted by law. VelmoRX and you both agree that if we cannot
				enforce a part of this contract as written, then that part will be
				replaced with terms that most closely match the intent of the part
				we cannot enforce, to the extent permitted by law. The invalidity
				of part of these Terms of Use will not affect the validity and
				enforceability of the remaining provisions. The section headings
				are for convenience only and do not have any force or effect.
			</p>

			<h2>No waiver</h2>
			<p>
				No waiver by VelmoRX of any term or condition set forth in these
				Terms of Use shall be deemed a further or continuing waiver of such
				term or condition or a waiver of any other term or condition, and
				any failure by VelmoRX to assert a right or provision under these
				Terms of Use shall not constitute a waiver of such right or
				provision.
			</p>

			<h2>No agency relationship</h2>
			<p>
				Neither these Terms of Use, nor any Content, materials or features
				of the Services create any partnership, joint venture, employment,
				or other agency relationship between us and you. You may not enter
				into any contract on our behalf or bind us in any way.
			</p>

			<h2>Remedies</h2>
			<p>
				You agree that any violation, or threatened violation, by you of
				these Terms of Use constitutes an unlawful and unfair business
				practice that will cause us irreparable and unquantifiable harm.
				You also agree that monetary damages would be inadequate for such
				harm and consent to our obtaining any injunctive or equitable
				relief that we deem necessary or appropriate. These remedies are in
				addition to any other remedies we may have at law or in equity.
			</p>

			<h2>Assignment</h2>
			<p>
				You may not assign any of your rights under these Terms of Use, and
				any such attempt will be null and void. Beluga Health, P.A. and
				their affiliates may, in their individual discretion, transfer,
				without further consent or notification, all contractual rights and
				obligations pursuant to these Terms of Use if some or all of the
				business of VelmoRX is transferred to another entity by way of
				merger, sale of its assets or otherwise.
			</p>

			<h2>Digital Millennium Copyright Act</h2>
			<p>
				VelmoRX reserves the right to remove any content or any other
				material or information available on or through our Sites, at any
				time, for any reason. VelmoRX otherwise complies with the
				provisions of the Digital Millennium Copyright Act (&quot;DMCA&quot;)
				applicable to Internet service providers (17 U.S.C. § 512, as
				amended), and responds to clear notices of alleged copyright
				infringement. This Section describes the procedure that should be
				followed to file a notification of alleged copyright infringement
				with VelmoRX.
			</p>
			<p>
				<strong>Notification of Claimed Copyright Infringement.</strong> If
				you have objections to copyrighted content or material made
				available on or through our Sites, you may submit a notification to
				our Designated Agent at the following address:
			</p>
			<address>
				{COMPANY.legalName} d/b/a VelmoRX
				<br />
				{COMPANY.address}
				<br />
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
			</address>
			<p>
				Any notification to VelmoRX under 17 U.S.C. § 512(c) alleging
				copyright infringement must include the following information:
			</p>
			<ul>
				<li>
					An electronic or physical signature of the person authorized to
					act on behalf of the owner of the exclusive right being
					infringed;
				</li>
				<li>
					An identification of the copyrighted work or other intellectual
					property that you claim has been infringed or, if multiple
					copyrighted works are covered by a single notification, a
					representative list of such works;
				</li>
				<li>
					An identification of the content or material that you claim is
					infringing and where it is located on our Sites;
				</li>
				<li>
					Information sufficient for VelmoRX to contact you, such as your
					address, telephone number, and/or email address;
				</li>
				<li>
					A statement by you that you have a good-faith belief that the use
					of the content or material of which you are complaining is not
					authorized by the copyright owner, its agent, or the law; and
				</li>
				<li>
					A signed statement by you that the above information in your
					notice is accurate and that, under penalty of perjury, you are the
					copyright owner or authorized to act on the copyright owner&apos;s
					behalf.
				</li>
			</ul>

			<h2>Asynchronous Telemedicine Informed Consent</h2>
			<p>
				Thank you for choosing Beluga Health, P.A. (&quot;Beluga&quot;)! You
				are viewing this form because you have elected to engage in
				asynchronous telemedicine visits with a Beluga healthcare
				practitioner. Your practitioner is a board-certified physician
				licensed in your state. By clicking &quot;I Agree,&quot; I
				ACKNOWLEDGE I HAVE READ AND UNDERSTAND THE TERMS PRESENTED BELOW,
				AND UNDERSTAND THE RISKS AND BENEFITS OF ASYNCHRONOUS TELEMEDICINE,
				AND BY ACCEPTING THESE TERMS OF USE I HEREBY GIVE MY INFORMED
				CONSENT TO PARTICIPATE IN ASYNCHRONOUS TELEMEDICINE UNDER THESE
				TERMS.
			</p>
			<p>
				<strong>What is Telemedicine?</strong> Telemedicine is the delivery
				of healthcare services, including examination, consultation,
				diagnosis, and treatment, through electronic communication
				technologies when you (the patient) are located in a different
				location than your healthcare practitioner. Beluga allows you to
				receive treatment from a healthcare practitioner without having to
				travel to another location or schedule a separate appointment and
				helps you avoid long wait times that you might otherwise experience
				at an in-person visit.
			</p>
			<p>
				<strong>What is Asynchronous Telemedicine?</strong> Asynchronous
				telemedicine is one way to deliver telemedicine. Asynchronous
				communication is often referred to as &quot;store-and-forward&quot;
				communication, where participants submit and collect data at
				different times. An example of asynchronous communication is a
				telemedicine encounter with a healthcare practitioner that involves
				sending photos, video, or other communications via email or text
				message. &quot;Asynchronous&quot; means &quot;not occurring at the
				same time&quot; and is different from &quot;synchronous&quot;
				telemedicine, which generally includes visits conducted in
				real-time between patients and healthcare practitioners through
				audio or video means (e.g., live phone calls or
				video-conferencing). Healthcare practitioners may use asynchronous
				telemedicine to aid in diagnoses and medical consultations when
				live communication or face-to-face contact is not possible or
				necessary. Beluga&apos;s platform (&quot;Platform&quot;), in
				particular, allows for the following asynchronous telemedicine
				services: 1) text-based healthcare practitioner-patient
				interactions through short message service (&quot;SMS&quot;) and
				multimedia messaging service (&quot;MMS&quot;) communications; and
				2) secure information collection through asynchronous
				store-and-forward patient questionnaires.
			</p>
			<p>
				<strong>
					What are the Possible Risks to Using Asynchronous Telemedicine?
				</strong>{' '}
				As with any medical treatment, there are potential risks associated
				with the use of asynchronous telemedicine. Beluga believes that the
				likelihood of these risks materializing is very low. These risks
				may include, without limitation, the following:
			</p>
			<ul>
				<li>
					Delays in medical evaluation and consultation or treatment may
					occur due to deficiencies or failures of the equipment or the
					Internet, which may include poor data quality, Internet outages,
					or other service interruption issues. You may reschedule the
					visit with your healthcare practitioner should these
					interruptions occur.
				</li>
				<li>
					Security protocols could fail, causing a breach of privacy of
					personal medical information.
				</li>
				<li>
					Because Beluga does not have access to your complete medical
					records, if you do not disclose to your healthcare practitioner a
					full list of your medical history including diagnoses,
					treatments, medications/supplements, and allergies, adverse
					treatment, drug interactions or allergic reactions, or other
					negative outcomes may occur.
				</li>
				<li>
					Asynchronous telemedicine services are NOT emergency services and
					your Personal Data (as defined in the Beluga Privacy Policy) WILL
					NOT BE MONITORED 24/7. If you think you are experiencing a medical
					emergency, CALL 911 IMMEDIATELY.
				</li>
			</ul>
			<p>
				<strong>
					THE CARE YOU RECEIVE WILL BE AT THE SOLE DISCRETION OF THE
					HEALTHCARE PRACTITIONER WHO IS TREATING YOU, WITH NO GUARANTEE OF
					DIAGNOSIS, TREATMENT, OR PRESCRIPTION. THE HEALTHCARE PRACTITIONER
					WILL DETERMINE WHETHER OR NOT THE CONDITION BEING DIAGNOSED
					AND/OR TREATED IS APPROPRIATE FOR THE CARE PROVIDED THROUGH AN
					ASYNCHRONOUS TELEMEDICINE ENCOUNTER VIA THE PLATFORM.
				</strong>
			</p>
			<p>
				<strong>Your Rights and Acknowledgements:</strong>
			</p>
			<ul>
				<li>
					You have the same privacy rights via asynchronous telemedicine
					that you would have during an in-person visit. Dissemination of
					any identifiable images or information from the asynchronous
					telemedicine visit to researchers or other entities will not
					occur without your written consent. For more information about how
					we protect your privacy, please read the Beluga Privacy Policy
					here.
				</li>
				<li>
					Asynchronous telemedicine may involve electronic communication of
					your personal medical information to healthcare practitioners who
					may be located in other areas, including out of state.
				</li>
				<li>
					You understand that you may expect the anticipated benefits from
					the use of asynchronous telemedicine, but that no results can be
					guaranteed or assured.
				</li>
				<li>
					You understand that all information submitted to Beluga via text
					message and entered by your healthcare practitioner in the Beluga
					Platform will be part of your medical record and available to you
					by emailing{' '}
					<a href='mailto:admin@belugahealth.com'>
						admin@belugahealth.com
					</a>
					. This information will have the same restrictions on
					dissemination without your consent.
				</li>
				<li>
					You understand that your healthcare practitioner&apos;s initial
					text message to you will include his/her name and credentials,
					and this will be recorded in the Beluga Platform as part of your
					medical record.
				</li>
				<li>
					You understand you may withdraw your consent and delete your
					patient profile at any time by emailing{' '}
					<a href='mailto:admin@belugahealth.com'>
						admin@belugahealth.com
					</a>
					.
				</li>
				<li>
					You understand that your healthcare information may be shared with
					other individuals in accordance with the Beluga Privacy Policy
					and regulations or laws in state or territory in which you are
					located.
				</li>
				<li>
					You further understand that your healthcare information may be
					shared in the following circumstances:
					<ul>
						<li>When a valid court order is issued for medical records.</li>
						<li>
							Reporting suspected abuse, neglect, or domestic violence.
						</li>
						<li>
							Preventing or reducing a serious threat to anyone&apos;s
							health or safety.
						</li>
					</ul>
				</li>
			</ul>
			<p>
				<strong>Call/Email/Text Messaging Consent:</strong> You expressly
				consent to allow Beluga or its healthcare practitioners to call,
				email, or text you (via SMS and/or MMS) with or regarding Personal
				Data (as defined in the Beluga Privacy Policy), appointments, or
				similar matters related to your telemedicine encounters using the
				contact information you have provided. Any calls or texts to you
				may be placed using an auto-dialer or a pre-recorded or artificial
				voice, even if your number is on a do-not-call list. Your phone
				carrier&apos;s normal rates may apply. This is consent, not a
				condition of purchase. You may revoke this consent at any time by
				emailing us at{' '}
				<a href='mailto:admin@belugahealth.com'>admin@belugahealth.com</a>.
				This Asynchronous Telemedicine Informed Consent is valid during your
				entire treatment with Beluga.
			</p>
		</LegalPage>
	)
}
