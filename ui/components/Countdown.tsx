// 'use client'

// import { useEffect, useState } from 'react'

// interface TimeLeft {
// 	days: number
// 	hours: number
// 	minutes: number
// 	seconds: number
// }

// const getTimeLeft = (targetDate: string | Date): TimeLeft => {
// 	const target = new Date(targetDate).getTime()
// 	const now = Date.now()

// 	const difference = Math.max(target - now, 0)

// 	return {
// 		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// 		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
// 		minutes: Math.floor((difference / (1000 * 60)) % 60),
// 		seconds: Math.floor((difference / 1000) % 60),
// 	}
// }

// const formatTime = (value: number) => String(value).padStart(2, '0')

// const Countdown = ({}) => {
// 	const targetDate = '2026-08-21T07:42:36+03:00'
// 	const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(targetDate))

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setTime(getTimeLeft(targetDate))
// 		}, 1000)

// 		return () => clearInterval(interval)
// 	}, [targetDate])

// 	return (
// 		<div className='w-fit'>
// 			<p className='mb-1 text-center text-lg leading-none text-black'>
// 				Price increases in
// 			</p>

// 			<div className='flex items-start'>
// 				<TimeItem value={formatTime(time.days)} label='Days' />

// 				<Separator />

// 				<TimeItem value={formatTime(time.hours)} label='Hrs' />

// 				<Separator />

// 				<TimeItem value={formatTime(time.minutes)} label='Mins' />

// 				<Separator />

// 				<TimeItem value={formatTime(time.seconds)} label='Sec' />
// 			</div>
// 		</div>
// 	)
// }

// const TimeItem = ({ value, label }: { value: string; label: string }) => {
// 	return (
// 		<div className='flex min-w-[42px] flex-col items-center'>
// 			<span className='text-2xl md:text-3xl font-bold leading-none text-[#0F7B5C]'>
// 				{value}
// 			</span>

// 			<span className='mt-1 text-[14px] leading-none text-[#0F7B5C]'>
// 				{label}
// 			</span>
// 		</div>
// 	)
// }

// const Separator = () => {
// 	return (
// 		<span className='text-2xl md:text-3xl  font-bold leading-none text-[#0F7B5C]'>
// 			:
// 		</span>
// 	)
// }

// export default Countdown

'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
	days: number
	hours: number
	minutes: number
	seconds: number
}

const STORAGE_KEY = 'countdown_start_date'
const COUNTDOWN_DAYS = 3

const getTimeLeft = (targetDate: Date): TimeLeft => {
	const target = targetDate.getTime()
	const now = Date.now()

	const difference = Math.max(target - now, 0)

	return {
		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / (1000 * 60)) % 60),
		seconds: Math.floor((difference / 1000) % 60),
	}
}

const getTargetDate = () => {
	const savedStartDate = localStorage.getItem(STORAGE_KEY)

	let startDate: Date

	if (savedStartDate) {
		startDate = new Date(savedStartDate)
	} else {
		startDate = new Date()

		localStorage.setItem(STORAGE_KEY, startDate.toISOString())
	}

	const targetDate = new Date(startDate)

	targetDate.setDate(targetDate.getDate() + COUNTDOWN_DAYS)

	return targetDate
}

const formatTime = (value: number) => String(value).padStart(2, '0')

const Countdown = () => {
	const [time, setTime] = useState<TimeLeft | null>(null)

	useEffect(() => {
		const targetDate = getTargetDate()

		const updateTimer = () => {
			setTime(getTimeLeft(targetDate))
		}

		updateTimer()

		const interval = setInterval(updateTimer, 1000)

		return () => clearInterval(interval)
	}, [])

	if (!time) {
		return null
	}

	return (
		<div className='w-fit'>
			<p className='mb-1 text-center text-lg leading-none text-black'>
				Price increases in
			</p>

			<div className='flex items-start'>
				<TimeItem value={formatTime(time.days)} label='Days' />

				<Separator />

				<TimeItem value={formatTime(time.hours)} label='Hrs' />

				<Separator />

				<TimeItem value={formatTime(time.minutes)} label='Mins' />

				<Separator />

				<TimeItem value={formatTime(time.seconds)} label='Sec' />
			</div>
		</div>
	)
}

const TimeItem = ({ value, label }: { value: string; label: string }) => {
	return (
		<div className='flex min-w-[42px] flex-col items-center'>
			<span className='text-2xl font-bold leading-none text-[#0F7B5C] md:text-3xl'>
				{value}
			</span>

			<span className='mt-1 text-[14px] leading-none text-[#0F7B5C]'>
				{label}
			</span>
		</div>
	)
}

const Separator = () => {
	return (
		<span className='text-2xl font-bold leading-none text-[#0F7B5C] md:text-3xl'>
			:
		</span>
	)
}

export default Countdown
