import { LINK_QUIZ } from './base-constants'

export const products = [
	{
		id: 1,
		title: 'Compounded Semaglutide',
		subtitle:
			'Includes telehealth consultations, personalized care plan, and Compounded Semaglutide if prescribed by your provider',
		image: '/product-2.png',
		price:
			'Starting at <span class="line-through decoration-2 opacity-60">$199</span> $89',
		badge: 'Get Started',
		href: LINK_QUIZ,
	},
	{
		id: 2,
		title: 'Compounded Tirzepatide',
		subtitle:
			'Includes telehealth consultations, personalized care plan, and Compounded Tirzepatide if prescribed by your provider',
		image: '/product-1.png',
		price:
			'Starting at <span class="line-through decoration-2 opacity-60">$399</span> $149',
		badge: 'Get Started',
		href: LINK_QUIZ,
	},
]
