import Footer from '@/ui/sections/Footer'
import Header from '@/ui/sections/Header'
import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import Script from 'next/script'

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
			<Script id='gtm-script' strategy='afterInteractive'>
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-NCWKWCPL');`}
			</Script>
			<body className='flex min-h-full flex-col'>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-NCWKWCPL'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				<Marquee
					items={itemsTopHeader}
					mode='text'
					className='border-b border-b-gray-200 bg-green-500/10'
					isIcon
				/>
				<Marquee
					items={itemsTopHeaderSecond}
					mode='text'
					className='bg-yellow-300 underline font-semibold'
					isIcon={false}
				/>
				<Header />

				<main className='flex-1'>{children}</main>

				<Footer />
			</body>
		</html>
	)
}
