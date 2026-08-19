'use client'

import type { VideoTestimonial } from '@/constants/video-testimonials'
import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import VideoPlayer from './VideoPlayer'

interface Props {
	items: VideoTestimonial[]
}

const VideoTestimonialsSlider = ({ items }: Props) => {
	const sliderRef = useRef<HTMLDivElement>(null)

	const [currentIndex, setCurrentIndex] = useState(0)

	const [visibleItems, setVisibleItems] = useState(1)

	const [activeVideoId, setActiveVideoId] = useState<number | null>(null)

	/*
	 * Определяем количество карточек
	 */
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth

			if (width >= 1280) {
				setVisibleItems(4)
				return
			}

			if (width >= 768) {
				setVisibleItems(2)
				return
			}

			setVisibleItems(1)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const maxIndex = Math.max(0, items.length - visibleItems)

	/*
	 * Переход к определенному слайду
	 */
	const scrollToIndex = (index: number) => {
		const slider = sliderRef.current

		if (!slider) return

		const nextIndex = Math.max(0, Math.min(index, maxIndex))

		const slides = Array.from(slider.children) as HTMLElement[]

		const targetSlide = slides[nextIndex]

		if (!targetSlide) return

		slider.scrollTo({
			left: targetSlide.offsetLeft,
			behavior: 'smooth',
		})

		setCurrentIndex(nextIndex)

		// Останавливаем видео при смене слайда
		setActiveVideoId(null)
	}

	const nextSlide = () => {
		if (currentIndex >= maxIndex) {
			scrollToIndex(0)
			return
		}

		scrollToIndex(currentIndex + 1)
	}

	const prevSlide = () => {
		if (currentIndex <= 0) {
			scrollToIndex(maxIndex)
			return
		}

		scrollToIndex(currentIndex - 1)
	}

	/*
	 * Отслеживаем обычный swipe/scroll.
	 *
	 * Пользователь пальцем двигает native scroll,
	 * а мы после движения определяем,
	 * какой элемент сейчас активный.
	 */
	useEffect(() => {
		const slider = sliderRef.current

		if (!slider) return

		let timeout: ReturnType<typeof setTimeout> | undefined

		const handleScroll = () => {
			if (timeout) {
				clearTimeout(timeout)
			}

			timeout = setTimeout(() => {
				const slides = Array.from(slider.children) as HTMLElement[]

				if (!slides.length) return

				let closestIndex = 0
				let closestDistance = Infinity

				slides.forEach((slide, index) => {
					const distance = Math.abs(slide.offsetLeft - slider.scrollLeft)

					if (distance < closestDistance) {
						closestDistance = distance

						closestIndex = index
					}
				})

				const normalizedIndex = Math.min(closestIndex, maxIndex)

				setCurrentIndex(normalizedIndex)

				/*
				 * Если пользователь свайпнул,
				 * выключаем воспроизводящееся видео.
				 */
				setActiveVideoId(null)
			}, 100)
		}

		slider.addEventListener('scroll', handleScroll, {
			passive: true,
		})

		return () => {
			if (timeout) {
				clearTimeout(timeout)
			}

			slider.removeEventListener('scroll', handleScroll)
		}
	}, [maxIndex])

	/*
	 * Если размер окна изменился
	 * и старый index стал невозможен.
	 */
	useEffect(() => {
		if (currentIndex <= maxIndex) return

		scrollToIndex(maxIndex)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [maxIndex])

	return (
		<div className='relative w-full min-w-0 max-w-full mt-10'>
			{/* Slider */}
			<div
				ref={sliderRef}
				className='
					flex
					w-full
					min-w-0
					snap-x
					snap-mandatory
					gap-4
					overflow-x-auto
					overscroll-x-contain
					scroll-smooth

					[scrollbar-width:none]

					[&::-webkit-scrollbar]:hidden
				'
			>
				{items.map(item => (
					<div
						key={item.id}
						className='
							min-w-0
							shrink-0
							snap-start

							basis-full

							md:basis-[calc(50%_-_8px)]

							xl:basis-[calc(25%_-_12px)]
						'
					>
						<div
							className='
								relative
								aspect-[9/16]
								w-full
								overflow-hidden
								rounded-[24px]
								bg-black
							'
						>
							<VideoPlayer
								item={item}
								active={activeVideoId === item.id}
								onPlay={() => setActiveVideoId(item.id)}
							/>
						</div>
					</div>
				))}
			</div>

			{/* Previous */}
			<button
				type='button'
				onClick={prevSlide}
				aria-label='Previous videos'
				className='
					absolute
					left-2
					top-1/2
					z-30
					flex
					size-10
					-translate-y-1/2
					items-center
					justify-center
					rounded-full
					bg-black/60
					text-white
					backdrop-blur-sm
					transition
					duration-300
					hover:bg-black/80
				'
			>
				<FaChevronLeft className='size-4' />
			</button>

			{/* Next */}
			<button
				type='button'
				onClick={nextSlide}
				aria-label='Next videos'
				className='
					absolute
					right-2
					top-1/2
					z-30
					flex
					size-10
					-translate-y-1/2
					items-center
					justify-center
					rounded-full
					bg-black/60
					text-white
					backdrop-blur-sm
					transition
					duration-300
					hover:bg-black/80
				'
			>
				<FaChevronRight className='size-4' />
			</button>

			{/* Pagination */}
			<div className='mt-4 flex w-full items-center justify-center gap-2'>
				{Array.from({
					length: maxIndex + 1,
				}).map((_, index) => (
					<button
						key={index}
						type='button'
						onClick={() => scrollToIndex(index)}
						aria-label={`Go to slide ${index + 1}`}
						className={`
							h-2
							rounded-full
							transition-all
							duration-300

							${currentIndex === index ? 'w-6 bg-[#0F7B5C]' : 'w-2 bg-gray-300'}
						`}
					/>
				))}
			</div>
		</div>
	)
}

export default VideoTestimonialsSlider
