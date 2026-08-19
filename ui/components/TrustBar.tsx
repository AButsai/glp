'use client'

import { trustBarItems } from '@/constants/marquee-constants'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const TrustBar = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [transitionEnabled, setTransitionEnabled] = useState(true)

	const sliderItems = [...trustBarItems, ...trustBarItems.slice(0, 2)]

	useEffect(() => {
		const interval = setInterval(() => {
			setTransitionEnabled(true)

			setCurrentIndex(prev => prev + 1)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	const handleTransitionEnd = () => {
		if (currentIndex >= trustBarItems.length) {
			setTransitionEnabled(false)
			setCurrentIndex(0)

			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					setTransitionEnabled(true)
				})
			})
		}
	}

	return (
		<div className='w-full rounded-2xl border border-gray-300 py-4'>
			<div className='overflow-hidden lg:hidden'>
				<ul
					onTransitionEnd={handleTransitionEnd}
					className={`
						trust-slider-track
						flex
						${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''}
					`}
					style={
						{
							'--slide-index': currentIndex,
						} as React.CSSProperties
					}
				>
					{sliderItems.map((item, index) => (
						<li
							key={`${item.id}-${index}`}
							className='
								flex
								shrink-0
								basis-full
								items-center
								justify-center
								gap-2
								px-4
								md:basis-1/2
							'
						>
							<Image
								src={item.href}
								width={24}
								height={24}
								alt=''
								className='shrink-0 h-auto w-auto'
							/>

							<p className='whitespace-nowrap text-sm md:text-base'>
								{item.title}
							</p>
						</li>
					))}
				</ul>
			</div>

			<ul className='hidden grid-cols-4 lg:grid'>
				{trustBarItems.map(item => (
					<li key={item.id} className='flex items-center justify-center gap-2'>
						<Image
							src={item.href}
							width={24}
							height={24}
							alt=''
							className='shrink-0 h-auto w-auto'
						/>

						<p className='whitespace-nowrap'>{item.title}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TrustBar
