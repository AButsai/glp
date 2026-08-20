import Footer from '@/ui/sections/Footer'
import Header from '@/ui/sections/Header'
import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'

import {
	itemsTopHeader,
	itemsTopHeaderSecond,
} from '@/constants/marquee-constants'
import Marquee from '@/ui/components/Marquee'
import './globals.css'

export const serif = DM_Serif_Display({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-serif',
})

export const sans = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'VelmoRx',
	description: 'VelmoRx',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang='en'
			className={`${serif.variable} ${sans.variable} h-full scroll-smooth antialiased`}
			data-scroll-behavior='smooth'
		>
			<body className='flex min-h-full flex-col'>
				<Marquee
					items={itemsTopHeader}
					mode='text'
					className='bg-white'
					isIcon
				/>
				<Marquee
					items={itemsTopHeaderSecond}
					mode='text'
					className='bg-white underline font-semibold'
					isIcon={false}
				/>
				<Header />

				<main className='flex-1'>{children}</main>

				<Footer />
			</body>
		</html>
	)
}
