import { COMPANY } from '@/constants/base-constants'
import LegalPage from '@/ui/components/LegalPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Privacy Policy | VelmoRx',
	description:
		'VelmoRx Privacy Policy describing how we collect, use, and share your information.',
}

const EFFECTIVE_DATE = 'August 31, 2026'

export default function PrivacyPolicyPage() {
	return (
		<LegalPage title='Privacy Policy' effectiveDate={EFFECTIVE_DATE}>
			<h2>Introduction</h2>
			<p>
				This Privacy Policy (&quot;Privacy Policy&quot;) describes the data
				protection practices of {COMPANY.legalName} and its affiliates,
				including, but not limited to, VelmoRX (collectively,
				&quot;VelmoRX&quot;, &quot;we&quot;, &quot;our&quot;, or
				&quot;us&quot;), including when you visit any VelmoRX website that
				links to this Privacy Policy (including{' '}
				<a href='https://velmorx.com/'>https://velmorx.com/</a> and{' '}
				<a href='https://start.velmorx.com/'>
					https://start.velmorx.com/
				</a>
				) (collectively, our &quot;Websites&quot;), use any affiliated mobile
				applications (the &quot;Apps&quot;), or otherwise provide data to
				VelmoRX. We refer to the Websites, Apps, and other services
				provided by VelmoRX together in this Privacy Policy as the
				&quot;Services.&quot; This Privacy Policy is incorporated into our
				Terms of Use. All capitalized terms used in this Privacy Policy but
				not defined herein have the meanings assigned to them in the Terms
				of Use.
			</p>
			<p>
				<strong>
					PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND HOW WE
					HANDLE YOUR INFORMATION. IF YOU DO NOT AGREE TO THIS PRIVACY
					POLICY, PLEASE DO NOT USE THE SERVICES.
				</strong>
			</p>
			<p>This Privacy Policy contains the following sections:</p>
			<ul>
				<li>The Information We Collect and the Sources of Such Information</li>
				<li>Purposes for How We Use Your Information</li>
				<li>Online Analytics and Advertising</li>
				<li>How We Share and Disclose Your Information</li>
				<li>Your Marketing Choices</li>
				<li>Third Party Services and Notice About Health Information</li>
				<li>How We Protect Your Information</li>
				<li>Privacy Information for California Residents</li>
				<li>Privacy Information for Nevada Residents</li>
				<li>Retention of Your Information</li>
				<li>Revisions to Our Privacy Policy</li>
				<li>Contacting Us</li>
			</ul>

			<h2>The Information We Collect and the Sources of Such Information</h2>
			<p>
				We obtain information about you through the means discussed below
				when you use the Services. Please note that we need certain types
				of information so that we can provide the Services to you. If you
				do not provide us with such information, or ask us to delete it,
				you may no longer be able to access or use part or all of our
				Services.
			</p>

			<h3>1. Information You Provide to Us</h3>
			<p>
				We collect a variety of information that you provide directly to
				us. For example, we collect information from you through:
			</p>
			<ul>
				<li>Account and product registration and administration of your account</li>
				<li>Processing your orders and requests for treatment</li>
				<li>Questions, communications, or feedback you submit to us via forms or email</li>
				<li>Your participation in research and surveys</li>
				<li>
					Requests for customer support and technical assistance, including
					through online chat functionalities
				</li>
				<li>Uploads or posts to the Services</li>
				<li>Employment applications you submit</li>
			</ul>
			<p>
				The specific types of information we collect will depend upon the
				Services you use, how you use them, and the information you choose
				to provide. The types of data we collect directly from you
				includes:
			</p>
			<ul>
				<li>Name, address, telephone number, date of birth, and email address</li>
				<li>
					Information about your medical conditions, treatment options,
					physician referrals, prescriptions, and lab results or other
					related health information, such as your physical and emotional
					characteristics
				</li>
				<li>Log-in credentials, if you create an account</li>
				<li>
					Billing information, such as shipping address, credit or debit
					card number, verification number, expiration date, and identity
					verification information, collected by our payment processors on
					our behalf
				</li>
				<li>Information about purchases or other transactions with us</li>
				<li>Information about your customer service and maintenance interactions with us</li>
				<li>Demographic information such as your gender and age</li>
				<li>User-generated content you post in public online forums on our Services</li>
				<li>
					Any other information you choose to directly provide to us in
					connection with your use of the Services.
				</li>
			</ul>

			<h3>2. Information We Collect Through Automated Means</h3>
			<p>
				We collect certain information about your use of the Services and
				the devices you use to access the Services, as described in this
				Section. As discussed further below, we and our service providers
				(which are third party companies that work on our behalf), may use
				a variety of technologies, including cookies and similar tools, to
				assist in collecting this information.
			</p>
			<p>
				<strong>Our Websites.</strong> When you use our Websites, we
				collect and analyze information such as your IP address, browser
				types, browser language, operating system, the state or country
				from which you accessed the Services, software and hardware
				attributes (including device IDs) referring and exit pages and
				URLs, platform type, the number of clicks, files you download,
				domain names, landing pages, pages viewed and the order of those
				pages, the amount of time spent on particular pages, the terms you
				use in searches on our sites, the date and time you used the
				Services, error logs, and other similar information.
			</p>
			<p>
				<strong>Our Apps.</strong> When you use our Apps, we automatically
				receive certain information about the mobile phone, tablet, or
				computer used to access the Apps, including a mobile device
				identifier, IP address, operating system, version, Internet service
				provider, browser type, domain name and other similar information,
				whether and when you update the Apps, date and time of use, and how
				you use the Apps, including time spent in different portions of the
				Apps.
			</p>
			<p>
				<strong>Location Information.</strong> When you use the Services, we
				and our service providers may automatically collect general
				location information (e.g., IP address, city/state and or postal
				code associated with an IP address) from your computer or mobile
				device. This information allows us to enable access to content that
				varies based on a user&apos;s general location (e.g., to provide
				you with accurate sales tax information and to deliver content
				customized to your location).
			</p>
			<p>
				We will ask your permission before collecting your precise GPS
				location information. In such instances, we will use your precise
				geo-location information to provide customized services, content,
				promotional offers and other information that may be of interest
				to you. If you no longer wish for us and our service providers to
				collect and use GPS location information, you may disable the
				location features on your device. Please see your device
				manufacturer settings.
			</p>
			<p>
				<strong>Our Use of Cookies and Similar Online Tools.</strong> To
				collect the information discussed in this Section, we and our
				service providers use web server logs, cookies, tags, SDKs,
				tracking pixels, and other similar tracking technologies. We use
				these technologies to offer you a more tailored experience.
			</p>
			<ul>
				<li>A web server log is a file where website activity is stored.</li>
				<li>
					An SDK is a set of tools and/or code that we embed in our Apps and
					software to allow third parties to collect information about how
					users interact with the Services.
				</li>
				<li>
					A cookie is a small text file that is placed on your computer or
					mobile device when you visit a site, that enables us to: (i)
					recognize your computer/device; (ii) store your preferences and
					settings; (iii) understand the parts of the Services you have
					visited and used; (iv) enhance your user experience by delivering
					and measuring the effectiveness of content and advertising
					tailored to your interests; (v) perform searches and analytics;
					and (vi) assist with security and administrative functions.
				</li>
				<li>
					Tracking pixels (sometimes referred to as web beacons or clear
					GIFs) are tiny electronic tags with a unique identifier embedded in
					websites, online ads and/or email that are designed to: (1)
					collect usage information like ad impressions or clicks and email
					open rates; (2) measure popularity of the Services and associated
					advertising; and (3) access user cookies.
				</li>
			</ul>
			<p>As we adopt additional technologies, we may also gather information through other methods.</p>
			<p>
				Please note that you can change your settings to notify you when a
				cookie is being set or updated, or to block cookies altogether.
				Please consult the &quot;Help&quot; section of your browser for
				more information (e.g.,{' '}
				<a
					href='https://support.microsoft.com/en-us/microsoft-edge'
					target='_blank'
					rel='noopener'
				>
					Microsoft Edge
				</a>
				;{' '}
				<a
					href='https://support.google.com/chrome/answer/95647'
					target='_blank'
					rel='noopener'
				>
					Google Chrome
				</a>
				;{' '}
				<a
					href='https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer'
					target='_blank'
					rel='noopener'
				>
					Mozilla Firefox
				</a>
				; or{' '}
				<a
					href='https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac'
					target='_blank'
					rel='noopener'
				>
					Apple Safari
				</a>
				). Please note that by blocking, disabling, or managing any or all
				cookies, you may not have access to certain features or offerings of
				the Services.
			</p>

			<h3>3. Information We Collect From Social Media and Other Content Platforms</h3>
			<p>
				When you &quot;like&quot; or &quot;follow&quot; us on Facebook,
				Instagram, X, or other social media sites, we may collect some
				information from you including your name, email address, and any
				comments or content you post relevant to us. We also collect your
				information if you sign up for one of our promotions or submit
				information to us through social media sites.
			</p>

			<h3>4. Information We Receive From Other Sources</h3>
			<p>
				We work closely with third parties (including, for example, third
				party intermediaries, such as the physicians, medical
				professionals, and pharmacies with whom we partner to provide you
				with the Services and their health care services, sub-contractors
				in technical, advertising networks, analytics providers, and search
				information providers). Such third parties will sometimes provide
				us with additional information about you.
			</p>

			<h2>Purposes for How We Use Your Information</h2>
			<p>
				In connection with providing you with the Services, we may use
				your information for our business purposes to:
			</p>
			<ul>
				<li>
					Carry out, improve, and manage the Services and, as applicable,
					facilitate the provision of health care services to you by
					physicians or other health care providers and ensure that the
					physicians or health care providers have the services and support
					necessary for health care operations.
				</li>
				<li>
					Engage in internal research to understand the effectiveness of our
					Services, improve our Services, and better understand our user
					base. If we publish or provide the results of this research to
					others, such research will be presented in a de-identified and
					aggregate form such that individual users cannot be identified.
				</li>
				<li>
					Communicate with you about the Services, your use of the
					Services, or your inquiries related to the Services and send you
					communications on behalf of physicians or other health care
					providers utilizing the Services to meet your needs.
				</li>
				<li>
					Communicate with you by email, postal mail, or phone about
					surveys, promotions, special events or our products and Services
					and those of our subsidiaries, affiliates, and parent companies
					and any of their related businesses and those of our third-party
					partners.
				</li>
				<li>Provide you with technical support and customer service.</li>
				<li>
					Verify your identity and administer your account, including
					processing your payments and fulfilling your orders.
				</li>
				<li>
					Ensure that content from our Services is presented in the most
					effective manner for you and for your computer or device, allow
					you to participate in interactive features of our Services (when
					you choose to do so), and as part of our efforts to keep our
					Services safe and secure.
				</li>
				<li>
					Measure or understand the effectiveness of advertising and
					content we serve to you and others, and to deliver and customize
					relevant advertising and content to you.
				</li>
				<li>
					Help us better understand your interests and needs, such as by
					engaging in analysis and research regarding use of the Services.
				</li>
				<li>
					Comply in good faith with any procedures, laws, and regulations
					which apply to us where it is necessary for our legitimate
					interests or the legitimate interests of others.
				</li>
				<li>
					Establish, exercise, or defend our legal rights where it is
					necessary for our legitimate interests or the legitimate
					interests of others.
				</li>
			</ul>
			<p>
				<strong>Combined Information.</strong> For the purposes discussed in
				this Privacy Policy, we may combine the information that we collect
				through the Services with information that we receive from other
				sources, both online and offline, and use and share such combined
				information in accordance with this Privacy Policy.
			</p>
			<p>
				<strong>Aggregate/De-Identified Data.</strong> We may aggregate
				and/or de-identify any information collected through the Services
				so that such information can no longer be linked to you or your
				device (&quot;Aggregate/De-Identified Information&quot;). We may
				use Aggregate/De-Identified Information for any purpose, including
				for research and marketing purposes, and may also share such data
				with any third parties, including advertisers, promotional
				partners, and sponsors.
			</p>

			<h2>Online Analytics and Advertising</h2>
			<h3>1. Online Analytics</h3>
			<p>
				We may use third-party web analytics services (such as those of
				Google Analytics (including Google Signals, Google User-ID, and
				other Google Analytics features)) on our Services to collect and
				analyze usage information through cookies and similar tools; engage
				in auditing, research, or reporting; assist with fraud prevention;
				try to locate the same unique users across multiple browsers or
				devices to better tailor services and features; and provide certain
				features to you. If you have a Google account with personalized
				advertising enabled, through Google Signals, Google will also be
				able to gather for us analytics and engagement information from
				across the various devices you use to access the Services. To
				prevent Google from using your information for analytics
				(including cross-device tracking for personalization purposes),
				you may install the{' '}
				<a
					href='https://tools.google.com/dlpage/gaoptout'
					target='_blank'
					rel='noopener'
				>
					Google Analytics Opt-out Browser Add-on
				</a>
				. And to opt out of Google Signals, please open your
				&quot;Settings&quot; app, locate and tap &quot;Google,&quot; select
				&quot;Ads,&quot; and turn ON &quot;Opt out of Ads
				Personalization.&quot; You may also be able to disable cross-device
				tracking through your Android or Apple device-based settings.
			</p>
			<p>
				If you receive email from us, we may use certain analytics tools,
				such as clear GIFs to capture data such as when you open our
				message or click on any links or banners our email contains. This
				data allows us to gauge the effectiveness of our communications and
				marketing campaigns.
			</p>

			<h3>2. Online Advertising</h3>
			<p>
				The Services may integrate third-party advertising technologies
				(e.g., ad networks and ad servers such as Meta, Google Ads and
				others) that use cookies and other technologies to deliver relevant
				content and advertising for VelmoRX products on the Services, as
				well as on other websites you visit and other applications you
				use. The ads may be based on various factors such as the content of
				the page you are visiting, information you enter such as your
				searches, demographic data, and other information we collect from
				you. These ads may be based on your current activity or your
				activity over time and across other websites and online services.
			</p>
			<p>
				We sometimes provide our customer information (such as email
				addresses) to service providers, who may &quot;match&quot; this
				information in de-identified form to cookies (or mobile ad
				identifiers) and other proprietary IDs, in order to provide you
				with more relevant ads when you visit other websites and mobile
				applications.
			</p>
			<p>
				We neither have access to, nor does this Privacy Policy govern, the
				use of cookies or other tracking technologies that may be placed on
				your device you use to access the Services by non-affiliated third
				party advertising network services. If you are interested in more
				information about tailored browser advertising and how you can
				generally control cookies from being put on your computer to
				deliver tailored advertising, you may visit the{' '}
				<a
					href='https://optout.networkadvertising.org/'
					target='_blank'
					rel='noopener'
				>
					Network Advertising Initiative&apos;s Consumer Opt-Out
				</a>{' '}
				link, the{' '}
				<a
					href='https://optout.aboutads.info/'
					target='_blank'
					rel='noopener'
				>
					Digital Advertising Alliance&apos;s Consumer Opt-Out
				</a>{' '}
				link, or{' '}
				<a
					href='https://www.youronlinechoices.com/'
					target='_blank'
					rel='noopener'
				>
					Your Online Choices
				</a>{' '}
				to opt-out of receiving tailored advertising from companies that
				participate in those programs. To opt out of Google Analytics for
				display advertising or customize Google display network ads, visit
				the{' '}
				<a
					href='https://myadcenter.google.com/'
					target='_blank'
					rel='noopener'
				>
					Google Ads Settings
				</a>{' '}
				page. We do not control these opt-out links or whether any
				particular company chooses to participate in these opt-out
				programs. We are not responsible for any choices you make using
				these mechanisms or the continued availability or accuracy of these
				mechanisms.
			</p>
			<p>
				Please note that if you exercise the opt out choices above, you
				will still see advertising when you use the Services, but it will
				not be tailored to you based on your online behavior over time.
			</p>

			<h3>3. Mobile Advertising</h3>
			<p>
				When using mobile applications from us or others, you may also
				receive tailored in-application advertisements. We may use
				third-party service providers to deliver advertisements on mobile
				applications or for mobile application analytics. Each operating
				system, iOS for Apple phones, Android for Android devices, and
				Windows for Microsoft devices provides its own instructions on how
				to prevent the delivery of tailored in-application advertisements.
				We do not control how the applicable platform operator allows you
				to control receiving personalized in-application advertisements;
				thus, you should contact the platform provider for further details
				on opting out of tailored in-application advertisements. You may
				review the support materials and/or the device settings for the
				respective operating systems to opt-out of tailored in-app
				advertisements.
			</p>

			<h3>4. Notice Concerning Do Not Track</h3>
			<p>
				Do Not Track (&quot;DNT&quot;) is a privacy preference that users
				can set in certain web browsers. We are committed to providing you
				with meaningful choices about the information collected on our
				website for third party purposes, and that is why we provide the
				variety of opt-out mechanisms listed above. However, we do not
				currently recognize or respond to browser-initiated DNT signals. To
				learn more about Do Not Track, you can do so{' '}
				<a href='https://allaboutdnt.com/' target='_blank' rel='noopener'>
					here
				</a>
				.
			</p>

			<h2>How We Share and Disclose Your Information</h2>
			<p>We may share your information for our business purposes in the following ways:</p>
			<p>
				<strong>Affiliates and Subsidiaries.</strong> We may share
				information we collect within any VelmoRX member or group (i.e.,
				our subsidiaries and affiliates, including our ultimate holding
				company and its subsidiaries) to deliver products and services to
				you, ensure a consistent level of service across our products and
				services, and enhance our products, services, and your customer
				experience.
			</p>
			<p>
				<strong>Health Care Providers and Services.</strong> We share your
				information with health care providers: (i) to schedule and
				fulfill appointments and provide health care services as part of
				the Services, (ii) to whom you send messages through our Services,
				and (iii) for other treatment, payment or health care operations
				purposes, including pharmacy services, upon your request.
			</p>
			<p>
				<strong>Service Providers.</strong> We provide access to or share
				your information with select third parties who use the information
				to perform services on our behalf. They provide a variety of
				services to us, including billing, sales, marketing, advertising,
				analytics, research, customer service, shipping and fulfillment,
				data storage, IT and security, fraud prevention, payment
				processing, and auditing and legal services. These entities may
				also include health care organizations, pharmacies, and other
				third parties we use to support our business or in connection with
				the administration and support of the Services.
			</p>
			<p>
				<strong>Protection of VelmoRX and Others.</strong> By using the
				Services, you acknowledge and agree that we may access, retain and
				disclose the information we collect and maintain about you if
				required to do so by law or in a good faith belief that such
				access, retention or disclosure is reasonably necessary to: (a)
				comply with legal process (e.g. a subpoena or court order); (b)
				enforce our Terms of Use, this Privacy Policy, or other contracts
				with you, including investigation of potential violations thereof;
				(c) respond to claims that any content violates the rights of
				third parties; (d) respond to your requests for customer service;
				and/or (e) protect the rights, property or personal safety of
				VelmoRX, its agents and affiliates, its users and/or the public.
				This includes exchanging information with other companies and
				organizations for fraud protection, and spam/malware prevention,
				and similar purposes.
			</p>
			<p>
				<strong>Business Transfers.</strong> As we continue to develop our
				business, we may buy, merge, or partner with other companies. In
				such transactions, (including in contemplation of such
				transactions) user information may be among the transferred
				assets. If a portion or all of our assets are sold or transferred
				to a third-party, customer information (including your email
				address) would likely be one of the transferred business assets.
				If such transfer is subject to additional mandatory restrictions
				under applicable laws, we will comply with such restrictions.
			</p>
			<p>
				<strong>Public Forums.</strong> Certain features of our Services
				make it possible for you to share comments publicly with other
				users. Any information that you submit through such features is
				not confidential, and we may use it for any purpose (including in
				testimonials or other marketing materials). For example, if you
				submit a product review on one of our sites, we may display your
				review (along with the name provided, if any) on other VelmoRX
				websites and on third-party websites. Any information you post
				openly in these ways will be available to the public at large and
				potentially accessible through third-party search engines.
				Accordingly, please take care when using these features.
			</p>
			<p>
				<strong>Consent.</strong> We may also disclose your information in
				other ways you direct us to and when we have your consent.
			</p>
			<p>
				<strong>Aggregate/De-Identified Information.</strong> We reserve the
				right to create Aggregate/De-Identified Data from the information
				we collect through the Services and our sharing of such
				Aggregate/De-Identified Data is in our discretion.
			</p>

			<h2>Your Marketing Choices</h2>
			<p>
				You may instruct us not to use your contact information to contact
				you by email, postal mail, or phone regarding products, services,
				promotions and special events that might appeal to your interests
				by contacting us using the information below. In commercial email
				messages, you can also opt out by following the instructions
				located at the bottom of such emails. Please note that, regardless
				of your request, we may still use and share certain information as
				permitted by this Privacy Policy or as required by applicable law.
				For example, you may not opt out of certain operational emails,
				such as those reflecting our relationship or transactions with
				you.
			</p>

			<h2>Third Party Services and Notice About Health Information</h2>
			<p>
				This Privacy Policy does not address, and we are not responsible
				for, the privacy, information, or other practices, including data
				privacy and security process and standards of any third parties,
				including physicians and other health care providers using the
				Services, the manufacturer of your mobile device and other IT
				hardware and software, and any other third party mobile
				application, website, or service to which our Services may
				contain a link. These third parties may at times gather
				information from or about you. We have no control over the privacy
				practices of these third parties. The collection, use, and
				disclosure of your information will be subject to the privacy
				policies of the third-party websites or services, and not this
				Privacy Policy. We urge you to read the privacy and security
				policies of these third parties.
			</p>

			<h2>How We Protect Your Information</h2>
			<p>
				VelmoRX takes a variety of technical and organizational security
				measures to protect your information against accidental or
				unlawful destruction or accidental loss, alteration, unauthorized
				disclosure or access. However, no method of transmission over the
				Internet, and no means of electronic or physical storage, is
				absolutely secure. As such, you acknowledge and accept that we
				cannot guarantee the security of your information transmitted to,
				through, or on our Services or via the Internet and that any such
				transmission is at your own risk.
			</p>
			<p>
				Where we have given you (or where you have chosen) a password that
				enables you to access the Services, you are responsible for
				keeping this password confidential. We ask you not to share your
				password with anyone. The information you share in public areas
				may be viewed by any user of the Services.
			</p>

			<h2>Privacy Information for California Residents</h2>
			<p>
				If you are a California resident, California law requires us to
				provide you with some additional information regarding how we
				collect, use, and share your &quot;personal information&quot; (as
				defined in the California Consumer Privacy Act (&quot;CCPA&quot;)).
			</p>
			<p>
				<strong>
					Categories of personal information we collect and disclose.
				</strong>{' '}
				Throughout this Policy, we discuss in detail the specific pieces of
				personal information we collect from and about our users. Under
				the CCPA, we are also required to provide you with the
				&quot;categories&quot; of personal information we collect and the
				categories of third parties to which we disclose personal
				information. Please note that some of the information we collect
				through the Services (e.g., medical information), is subject to
				various health data privacy laws, and is therefore not subject to
				the CCPA. See the following chart to understand more about the
				categories of personal information we collect that are subject to
				the CCPA and the third parties to which we disclose it:
			</p>
			<div className='overflow-x-auto'>
				<table className='w-full border-collapse text-sm'>
					<thead>
						<tr>
							<th className='border border-[#E4E9F1] p-2 text-left'>
								Category of Personal Information
							</th>
							<th className='border border-[#E4E9F1] p-2 text-left'>
								Categories of Third Parties to Which we Disclose
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='border border-[#E4E9F1] p-2'>
								Identifiers and contact information (e.g., name, address,
								email address, account names)
							</td>
							<td className='border border-[#E4E9F1] p-2'>
								Service providers; our affiliates; health care providers and
								services; entities for legal and fraud prevention
							</td>
						</tr>
						<tr>
							<td className='border border-[#E4E9F1] p-2'>
								Commercial and transactional information (e.g., information
								about your purchases)
							</td>
							<td className='border border-[#E4E9F1] p-2'>
								Service providers; our affiliates; health care providers and
								services; entities for legal and fraud prevention
							</td>
						</tr>
						<tr>
							<td className='border border-[#E4E9F1] p-2'>
								Financial information (e.g., credit card info collected by our
								payment processors)
							</td>
							<td className='border border-[#E4E9F1] p-2'>
								Payment processors; service providers; our affiliates;
								entities for legal and fraud prevention
							</td>
						</tr>
						<tr>
							<td className='border border-[#E4E9F1] p-2'>
								Internet or other network or device activity (e.g., IP
								address, browsing history, app usage)
							</td>
							<td className='border border-[#E4E9F1] p-2'>
								Service providers; our affiliates; entities for legal and
								fraud prevention
							</td>
						</tr>
						<tr>
							<td className='border border-[#E4E9F1] p-2'>
								Geolocation information (e.g., general location and precise
								location, with your permission)
							</td>
							<td className='border border-[#E4E9F1] p-2'>
								Service providers; our affiliates; entities for legal and
								fraud prevention
							</td>
						</tr>
						<tr>
							<td className='border border-[#E4E9F1] p-2'>
								Demographic and statistical data (e.g., your gender, interests
								based on products and services you use)
							</td>
							<td className='border border-[#E4E9F1] p-2'>
								Service providers; our affiliates; entities for legal and
								fraud prevention
							</td>
						</tr>
						<tr>
							<td className='border border-[#E4E9F1] p-2'>
								Physical characteristics (e.g., photos of you)
							</td>
							<td className='border border-[#E4E9F1] p-2'>
								Service providers; our affiliates
							</td>
						</tr>
						<tr>
							<td className='border border-[#E4E9F1] p-2'>
								User-generated content (e.g., information you choose to post
								in our online forums)
							</td>
							<td className='border border-[#E4E9F1] p-2'>
								Service providers; our affiliates; entities for legal and
								fraud prevention
							</td>
						</tr>
						<tr>
							<td className='border border-[#E4E9F1] p-2'>
								Customer service data (e.g., information you provide through a
								chat or call with VelmoRX&apos;s Care Team)
							</td>
							<td className='border border-[#E4E9F1] p-2'>
								Service providers; our affiliates; health care providers and
								services; entities for legal and fraud prevention
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				The business purposes for which we use the personal information we
				collect are: manage, facilitate, and improve the Services;
				research, marketing, and analytics; communicate with users;
				technical support and customer service; security and fraud
				prevention; and legal compliance and defense. For more detailed
				information about how we use and share your personal information,
				please see the &quot;Purposes for How We Use Your
				Information&quot; and &quot;How We Share and Disclose Your
				Information&quot; sections of this Policy above.
			</p>

			<h3>Your California Privacy Rights</h3>
			<p>
				<strong>CCPA Rights Disclosure.</strong> If you are a California
				resident, the CCPA allows you to make certain requests about your
				personal information. Specifically, the CCPA allows you to
				request us to:
			</p>
			<ul>
				<li>
					Inform you about the categories of personal information we
					collect or disclose about you; the categories of sources of such
					information; the business or commercial purpose for collecting
					your personal information; and the categories of third parties
					with whom we share/disclose personal information.
				</li>
				<li>Provide access to and/or a copy of certain information we hold about you.</li>
				<li>Delete certain information we have about you.</li>
			</ul>
			<p>
				The CCPA further provides you with the right to not be
				discriminated against (as provided for in applicable law) for
				exercising your rights.
			</p>
			<p>
				Please note that certain information may be exempt from such
				requests under California law. For example, we need certain
				information in order to provide the Services to you. We also will
				take reasonable steps to verify your identity before responding to
				a request.
			</p>
			<p>
				If you are a California resident and you would like to exercise
				any of your data rights under California law, please email us at{' '}
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
			</p>
			<p>
				Please include your full name, email address and residential
				address associated with your use of our Services, along with the
				rights you would like to exercise, so that we can process your
				request in an efficient manner. If you would like to receive a
				copy of your medical record in connection with your request,
				please indicate that in your email message. By requesting your
				medical record in this way, you are agreeing to receive your
				medical record in an unencrypted email message.
			</p>
			<p>
				<strong>Sale of Personal Information.</strong>
			</p>
			<p>
				VelmoRX does not, and will not, sell information that identifies
				you such as your name, email address, phone number, or postal
				address. Like many companies with an internet presence, we do work
				with third parties that provide marketing and advertising
				services to us, including interest-based advertising services, and
				these third parties may place tags, pixels, cookies, beacons, and
				other similar tracking mechanisms on our Website and App and
				collect your online identifiers. Because of the CCPA&apos;s broad
				definitions of &quot;sale&quot; and &quot;personal
				information,&quot; making certain online identifiers available to
				these companies so that they can provide marketing and advertising
				services to VelmoRX may be considered a &quot;sale&quot; under the
				CCPA. To opt out of sharing your information with participating
				third parties for interest-based advertising, please visit the{' '}
				<a
					href='https://optout.networkadvertising.org/'
					target='_blank'
					rel='noopener'
				>
					Network Advertising Initiative&apos;s Consumer Opt-Out
				</a>{' '}
				link, the{' '}
				<a
					href='https://optout.aboutads.info/'
					target='_blank'
					rel='noopener'
				>
					Digital Advertising Alliance&apos;s Consumer Opt-Out
				</a>{' '}
				link, and{' '}
				<a
					href='https://www.youronlinechoices.com/'
					target='_blank'
					rel='noopener'
				>
					Your Online Choices
				</a>
				. Please note that these opt-outs are device and browser based, so
				you will need to opt out on each of your devices and browsers. For
				more information, see the Online Analytics and Advertising Section
				above.
			</p>
			<p>
				<strong>Shine the Light Disclosure.</strong> The California
				&quot;Shine the Light&quot; law gives residents of California the
				right under certain circumstances to request information from us
				regarding the manner in which we share certain categories of
				personal information (as defined in the Shine the Light law) with
				third parties for their direct marketing purposes. We do not share
				your personal information with third parties for their own direct
				marketing purposes.
			</p>

			<h2>Privacy Information for Nevada Residents</h2>
			<p>
				Under Nevada law, certain Nevada consumers may opt out of the sale
				of &quot;personally identifiable information&quot; for monetary
				consideration (as such terms are defined under Nevada law) to a
				person for that person to license or sell such information to
				additional persons. We do not engage in such activity; however, if
				you are a Nevada resident who has purchased services from us, you
				may submit a request to opt out of any potential future sales
				under Nevada law by emailing us at{' '}
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Please
				note we will take reasonable steps to verify your identity and the
				authenticity of the request. Once verified, we will maintain your
				request in the event our practices change.
			</p>

			<h2>Retention of Your Information</h2>
			<p>
				We keep your information for no longer than necessary for the
				purposes for which it is processed. The length of time for which
				we retain information depends on the purposes for which we
				collected and use it and/or as required to comply with applicable
				laws.
			</p>

			<h2>Revisions to Our Privacy Policy</h2>
			<p>
				We reserve the right to change this Privacy Policy at any time to
				reflect changes in the law, our data collection and use
				practices, the features of our Services, or advances in
				technology. We will make the revised Privacy Policy accessible
				through the Services, so you should review it periodically. The
				date this Privacy Policy was last revised is identified at the top
				of the document. You are responsible for periodically monitoring
				and reviewing any updates to the Privacy Policy. If we make a
				material change to the Privacy Policy, we will provide you with
				appropriate notice in accordance with legal requirements. Your
				continued use of our Websites or Apps after such amendments (and
				notice, where applicable) will be deemed your acknowledgment of
				these changes to this Privacy Policy.
			</p>

			<h2>Contacting Us</h2>
			<p>
				If you have any questions about this Privacy Policy or
				VelmoRX&apos;s privacy practices, please contact us at:
			</p>
			<address>
				{COMPANY.legalName} d/b/a VelmoRX
				<br />
				{COMPANY.address}
				<br /><br />
				<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
				<br />
				<a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`}>
					{COMPANY.phone}
				</a>
			</address>
		</LegalPage>
	)
}
