export type FaqContentBlock =
	| {
			type: 'paragraph'
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
		question: 'How does Embody work?',
		image: '/question/avatar-1.png',
		content: [
			{
				type: 'paragraph',
				text: 'Embody allows you to get prescription weight loss medications such as semaglutide & tirzepatide from the comfort of your home. Your pricing is one simple monthly price and includes medication, supplies, doctor review and shipping.',
			},
			{
				type: 'paragraph',
				text: "Once you've selected and paid for the first month of your chosen medication, you will need to complete an intake form for the doctor to review and approve your prescription. Once your doctor approves your prescription, our pharmacies will ship out your medication within 2 business days.",
			},
			{
				type: 'paragraph',
				text: 'When you run out of your medication, you simply let your doctor know in your Embody Patient Portal and your doctor will review your dosage, adjust it if needed, and write you a new prescription that gets delivered next day via UPS or FedEx.',
			},
			{
				type: 'note',
				text: '*If for any reason your prescription is not approved, you will receive a full refund.',
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
				text: 'Embody has taken numerous steps to ensure compliance and safety for our patients.',
			},
			{
				type: 'ordered-list',
				items: [
					"All doctors have been properly vetted to ensure they're licensed to prescribe GLP-1 medications in your state.",
					'Pharmacies are US based 503A compounding pharmacies.',
					'Embody has its own medical director who is a practicing physician and has reviewed our doctor and pharmacy network to ensure your safety.',
					"Embody maintains LegitScript certification which is the telemedicine industry's most recognized compliance authority. They have independently verified Embody pharmacies, doctors network and software providers to ensure safety and privacy protection.",
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
					'Pay for the first month of your prescription.*',
					'Complete medical intake form by logging into your Embody patient portal.',
					'Your medical practitioner is expected to review your chart within 24 hrs and often less than 5 hrs.',
					'After a thorough medical evaluation, your provider will determine whether a prescription is appropriate.',
					'If your prescription is approved, our pharmacy will ship your medication using 1-day FedEx or UPS.',
				],
			},
			{
				type: 'note',
				text: '*If for any reason your prescription is not approved, you will receive a full refund.',
			},
		],
	},
	{
		id: 4,
		question: 'What States/Jurisdictions are eligible?',
		image: '/question/avatar-6.png',
		content: [
			{
				type: 'paragraph',
				text: 'Embody currently provides services to all US States!',
			},
		],
	},
	{
		id: 5,
		question: 'How do I take my medication?',
		image: '/question/avatar-7.png',
		content: [
			{
				type: 'subtitle',
				text: 'For Semaglutide & Tirzepatide Injections:',
			},
			{
				type: 'paragraph',
				text: 'You will be provided with small insulin sized needles along with your medication. Your doctor will explain how and when to take your medication during your telemed visit. You will start with a low dose to begin your treatment once per week as your body gets used to the medication and increase your dose every 4 weeks until you are at your full dosage. Medication will be administered by injecting into the fatty area on your stomach weekly.',
			},
			{
				type: 'paragraph',
				text: "For our non-injectable options, it's important to follow the correct steps to ensure proper absorption and effectiveness:",
			},
			{
				type: 'subtitle',
				text: 'For Compounded Semaglutide & Tirzepatide Medicated Gum:',
			},
			{
				type: 'paragraph',
				text: 'Place one piece of gum in your mouth and chew slowly until the liquid core releases. Continue chewing for 10–15 minutes to allow the medication to absorb through the oral tissues. Use the gum as prescribed by your healthcare provider (commonly once daily), with higher dosing options available if recommended as your treatment progresses.',
			},
			{
				type: 'paragraph',
				text: 'For best absorption, avoid eating or drinking for at least 15 minutes before and after chewing the gum. Following these instructions will help you get the most out of your GLP-1 treatment. If you have any questions, please contact our support team for assistance.',
			},
		],
	},
	{
		id: 6,
		question: "What happens if my prescription isn't approved?",
		image: '/question/avatar-8.png',
		content: [
			{
				type: 'paragraph',
				text: 'If for any reason your prescription is not approved, you will receive a full refund.',
			},
		],
	},
]
