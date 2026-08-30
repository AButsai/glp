import { COMPANY, PARTNER_PHARMACY, PROVIDER_GROUP } from './base-constants'

// Кликабельная ссылка на звонок — используется в ответах, где раньше был
// просто текст с номером телефона.
const PHONE_LINK = `<a href="tel:${COMPANY.phone.replace(/[^\d+]/g, '')}" style="color: #0F7B5C; text-decoration: underline;">${COMPANY.phone}</a>`

export type FaqContentBlock =
	| {
			type: 'paragraph'
			text: string
	  }
	| {
			// Как 'paragraph', но text рендерится как HTML —
			// используется точечно, когда нужна кликабельная ссылка (например, tel:).
			type: 'paragraph-html'
			text: string
	  }
	| {
			type: 'ordered-list'
			items: string[]
	  }
	| {
			type: 'unordered-list'
			items: string[]
	  }
	| {
			type: 'subtitle'
			text: string
	  }
	| {
			type: 'note'
			text: string
	  }

export interface FaqItem {
	id: number
	question: string
	image: string
	content: FaqContentBlock[]
}

export const faqItems: FaqItem[] = [
	{
		id: 1,
		question: 'How does VelmoRx work?',
		image: '/question/avatar-1.png',
		content: [
			{
				type: 'paragraph',
				text: "VelmoRx allows you to get prescription weight loss medications such as semaglutide & tirzepatide from the comfort of your home. Your pricing is one simple monthly price and includes medication, supplies, doctor review and shipping. Once you've selected and paid for the first month of your chosen medication, you will need to complete an intake form for the doctor to review and approve your prescription. Once your doctor approves your prescription, our pharmacies will ship out your medication within 2 business days.",
			},
			{
				type: 'paragraph',
				text: 'When you run out of your medication, you simply let your doctor know in your VelmoRx Patient Portal and your Doctor will review your dosage, adjust it if needed, and write you a new prescription that gets delivered next day via UPS or FedEx.',
			},
			{
				type: 'note',
				text: 'If for any reason your prescription is not approved, you will receive a full refund.',
			},
		],
	},
	{
		id: 2,
		question: 'How do I know this is safe?',
		image: '/question/avatar-2.png',
		content: [
			{
				type: 'paragraph',
				text: 'VelmoRx has taken numerous steps to ensure compliance and safety for our patients.',
			},
			{
				type: 'ordered-list',
				items: [
					"All doctors have been properly vetted to ensure they're licensed to prescribe GLP-1 medications in your state.",
					'Pharmacies are US based 503A compounding pharmacies.',
					'VelmoRx has its own medical director who is a practicing physician and has reviewed our doctor and pharmacy network to ensure your safety.',
					"VelmoRx maintains LegitScript certification which is the telemedicine industry's most recognized compliance authority. They have independently verified VelmoRx pharmacies, doctors network and software providers to ensure safety and privacy protection.",
				],
			},
		],
	},
	{
		id: 3,
		question: 'So how does the signup process work?',
		image: '/question/avatar-3.png',
		content: [
			{
				type: 'ordered-list',
				items: [
					'Complete the health qualifier (should only take 5 minutes).',
					'Select your preferred prescription.',
					'Pay for the first month of your prescription.',
					'Complete medical intake form by logging into your VelmoRx patient portal.',
					'Your medical practitioner is expected to review your chart within 24 hrs and often less than 5 hrs.',
					'After a thorough medical evaluation, your provider will determine whether a prescription is appropriate.',
					'If your prescription is approved, our pharmacy will ship your medication using 1-day FedEx or UPS.',
				],
			},
			{
				type: 'note',
				text: 'If for any reason your prescription is not approved, you will receive a full refund.',
			},
		],
	},
	{
		id: 4,
		question: 'What States/Juristictions are eligible?',
		image: '/question/avatar-4.png',
		content: [
			{
				type: 'paragraph',
				text: 'VelmoRx currently provides services to all US States except Louisiana. In Nebraska, services are limited to patients 19 years of age or older.',
			},
			{
				type: 'note',
				text: 'Services are available only in jurisdictions where affiliated medical providers are licensed to practice and where pharmacy partners are authorized to dispense medications. Availability may vary by state and is subject to applicable laws, regulations, and licensure requirements.',
			},
		],
	},
	{
		id: 5,
		question: 'How does the pricing work?',
		image: '/question/avatar-5.png',
		content: [
			{
				type: 'paragraph',
				text: 'VelmoRx partners with licensed doctors and pharmacy to offer competitive pricing on compounded GLP-1 weight loss medications. Our pricing is transparent with no hidden costs or monthly fees.',
			},
			{
				type: 'paragraph',
				text: "Competitors will often charge 'access' or membership fees. VelmoRx does not have those so that pricing is extremely clear and you don't get surprise costs.",
			},
		],
	},
	{
		id: 6,
		question: 'What if I need to cancel?',
		image: '/question/avatar-6.png',
		content: [
			{
				type: 'paragraph-html',
				text: `With VelmoRx there are no contracts for our month to month pricing. We also offer subscribe and save discounts where customers will agree to a subscription length for stated monthly discount. Month to month customers can cancel their shipment anytime by calling us at ${PHONE_LINK}.`,
			},
			{
				type: 'paragraph',
				text: "We want to make sure that our customers love the results of our treatment plans so we offer a patient satisfaction guarantee. If you are unhappy with your results, let us know and we'll make it right.",
			},
		],
	},
	{
		id: 7,
		question: 'Is the medication real semaglutide & tirzepatide?',
		image: '/question/avatar-7.png',
		content: [
			{
				type: 'paragraph',
				text: 'Yes, both of our GLP-1 weight loss medications are real prescription medications that are prescribed by a doctor and compounded by a real US based pharmacy. We offer only the best Semaglutide and Tirzepatide medications for weightloss management for customers that meet the qualifications required for GLP-1 medications. These are the same medications that people are talking about and getting real results with all over social media.',
			},
		],
	},
	{
		id: 8,
		question: "What is the dosage I'll be taking?",
		image: '/question/avatar-8.png',
		content: [
			{
				type: 'paragraph',
				text: 'Our medical practitioner will ultimately decide what is right for you. However, our standard protocol for many patients is:',
			},
			{
				type: 'subtitle',
				text: 'Medication 1',
			},
			{
				type: 'unordered-list',
				items: [
					'0.25mg/week for the first 4 weeks',
					'0.5 mg/week for the next 8 weeks',
					'Dosage will include Ondanestron (brand name Zofran®)',
				],
			},
			{
				type: 'subtitle',
				text: 'Medication 2',
			},
			{
				type: 'unordered-list',
				items: ['10/mg for the first 4 weeks', '20/mg for the next 8 weeks'],
			},
		],
	},
	{
		id: 9,
		question: 'Where do my prescriptions come from?',
		image: '/question/avatar-9.png',
		content: [
			{
				type: 'paragraph',
				text: 'Medications prescribed through VelmoRx are dispensed by U.S.-based 503A compounding pharmacies. These pharmacies prepare medications individually in response to a prescription from a licensed healthcare provider and must follow applicable federal and state compounding regulations, as well as professional standards such as USP 795 and USP 797.',
			},
			{
				type: 'paragraph',
				text: 'Compounded medications are prepared for individual patients when commercially available alternatives are not suitable. They are not FDA-approved, but 503A compounding pharmacies are licensed by state pharmacy boards and operate under federal compounding laws.',
			},
		],
	},
	{
		id: 10,
		question: 'How do I take my medication?',
		image: '/question/avatar-10.png',
		content: [
			{
				type: 'subtitle',
				text: 'For Semaglutide & Tirzepatide Injections:',
			},
			{
				type: 'paragraph',
				text: 'You will be provided with small insulin sized needles along with your medication. Your doctor will explain how and when to take your medication during your telemed visit. You will start with a low dose to begin your treatment once per week as your body gets used to the medication and increase your dose every 4 weeks until you are at your full dosage. Medication will be administered by injecting into the fatty area on your stomach weekly.',
			},
		],
	},
	{
		id: 11,
		question: 'How is it shipped?',
		image: '/question/avatar-11.png',
		content: [
			{
				type: 'paragraph',
				text: "Prescriptions received before 2 pm central time will be shipped the same day. Your prescription will be shipped next-day via UPS in a temperature controlled package. To ensure temperature management and weekend orders (Friday-Sunday) will be shipped Monday. You'll receive a tracking number for every shipment.",
			},
			{
				type: 'paragraph-html',
				text: `Each shipment is fully insured for lost prescriptions. The only exception for insured product replacement is if a patient provides incorrect shipping information. If this occurs, please speak with customer service by calling us at ${PHONE_LINK}.`,
			},
		],
	},
	{
		id: 12,
		question: 'How much weight will I lose?',
		image: '/question/avatar-12.png',
		content: [
			{
				type: 'paragraph',
				text: 'Individual weight-loss is dependent on a number of factors but on average patients using these weight loss medications report an average loss of 1.5% of their body weight per week. Over 12 weeks, it can be as high as 10%. This equates to a weight loss of 10–20 pounds for a 200 pound person.',
			},
		],
	},
	{
		id: 13,
		question: 'How do I contact support?',
		image: '/question/avatar-13.png',
		content: [
			{
				type: 'paragraph-html',
				text: `You can reach our friendly support team by calling us at ${PHONE_LINK}. For faster service, visit our Patient Services page to submit a message, request a refill, or check order status. We're here to help!`,
			},
		],
	},
	{
		id: 14,
		question: 'Who fills and ships my prescription?',
		image: '/question/avatar-9.png',
		content: [
			{
				type: 'paragraph',
				text: `Prescriptions placed through VelmoRx are compounded and dispensed by our partner pharmacy, ${PARTNER_PHARMACY.name}, ${PARTNER_PHARMACY.address}. Phone: ${PARTNER_PHARMACY.phone}. Website: ${PARTNER_PHARMACY.website}.`,
			},
			{
				type: 'paragraph',
				text: `${PARTNER_PHARMACY.name} is licensed by state boards of pharmacy nationwide and supports prescription fulfillment in all 50 U.S. states through affiliated medical providers and pharmacy partners operating in accordance with applicable state licensure requirements.`,
			},
			{
				type: 'note',
				text: 'Please note that certain medications, formulations, or fulfillment options may vary depending on state-specific pharmacy regulations, prescribing requirements, and dispensing restrictions.',
			},
		],
	},
	{
		id: 15,
		question: 'Who are the medical providers reviewing my case?',
		image: '/question/avatar-6.png',
		content: [
			{
				type: 'paragraph',
				text: `Your intake is reviewed by independent, licensed providers affiliated with ${PROVIDER_GROUP.name}, ${PROVIDER_GROUP.address}. Provider website: ${PROVIDER_GROUP.website}. Contact: ${PROVIDER_GROUP.contactEmail}.`,
			},
			{
				type: 'unordered-list',
				items: [`${PROVIDER_GROUP.doctorName} — NPI# ${PROVIDER_GROUP.npi}`],
			},
			{
				type: 'note',
				text: 'Each provider is licensed to practice in, and prescribe to, the state where you are located at the time of your visit.',
			},
		],
	},
]
