'use client'

import { reviews } from '@/constants/reviews'
import { useEffect, useRef } from 'react'
import { FaStar } from 'react-icons/fa'

const Reviews = () => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const currentIndexRef = useRef(0)
	const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const sliderItems = [...reviews, ...reviews]

	useEffect(() => {
		const slider = sliderRef.current

		if (!slider) return

		const moveToSlide = (
			index: number,
			behavior: ScrollBehavior = 'smooth',
		) => {
			const slide = slider.children[index] as HTMLElement | undefined

			if (!slide) return

			const sliderRect = slider.getBoundingClientRect()
			const slideRect = slide.getBoundingClientRect()

			const left = slider.scrollLeft + slideRect.left - sliderRect.left

			slider.scrollTo({
				left,
				behavior,
			})
		}

		const interval = setInterval(() => {
			currentIndexRef.current += 1

			moveToSlide(currentIndexRef.current)

			if (currentIndexRef.current === reviews.length) {
				resetTimeoutRef.current = setTimeout(() => {
					currentIndexRef.current = 0

					slider.scrollTo({
						left: 0,
						behavior: 'auto',
					})
				}, 700)
			}
		}, 3000)

		return () => {
			clearInterval(interval)

			if (resetTimeoutRef.current) {
				clearTimeout(resetTimeoutRef.current)
			}
		}
	}, [])

	return (
		<div className='w-full overflow-hidden'>
			<div
				ref={sliderRef}
				className='
					flex
					w-full
					gap-4
					overflow-x-hidden
					scroll-smooth
				'
			>
				{sliderItems.map((review, index) => (
					<div
						key={`${review.id}-${index}`}
						aria-hidden={index >= reviews.length}
						className='
							shrink-0

							basis-full

							md:basis-[calc((100%_-_32px)/3)]

							lg:basis-[calc((100%_-_64px)/5)]
						'
					>
						<ReviewCard review={review} />
					</div>
				))}
			</div>
		</div>
	)
}

interface ReviewCardProps {
	review: (typeof reviews)[number]
}

const ReviewCard = ({ review }: ReviewCardProps) => {
	return (
		<article
			className='
				flex
				h-full
				min-h-[270px]
				flex-col
				rounded-xl
				bg-white
				p-5
				shadow-md

				md:min-h-[290px]
			'
		>
			<div className='mb-5 flex justify-center gap-[2px]'>
				{Array.from({
					length: review.rating,
				}).map((_, index) => (
					<FaStar key={index} className='size-4 text-[#FFC400]' />
				))}
			</div>

			<h3 className='mb-2 text-[18px] font-medium leading-tight text-[#111827]'>
				{review.title}
			</h3>

			<p className='flex-1 text-sm leading-[1.5] text-[#475467]'>
				{review.text}
			</p>

			<p className='mt-5 text-sm font-medium text-[#667085]'>
				— {review.author}, {review.location}
			</p>
		</article>
	)
}

export default Reviews
