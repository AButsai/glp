// 'use client'

// import { useEffect, useState } from 'react'

// interface TimeLeft {
// 	days: number
// 	hours: number
// 	minutes: number
// 	seconds: number
// }

// const STORAGE_KEY = 'countdown_start_date'
// const COUNTDOWN_DAYS = 3

// const getTimeLeft = (targetDate: Date): TimeLeft => {
// 	const target = targetDate.getTime()
// 	const now = Date.now()

// 	const difference = Math.max(target - now, 0)

// 	return {
// 		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// 		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
// 		minutes: Math.floor((difference / (1000 * 60)) % 60),
// 		seconds: Math.floor((difference / 1000) % 60),
// 	}
// }

// const getTargetDate = () => {
// 	const savedStartDate = localStorage.getItem(STORAGE_KEY)

// 	let startDate: Date

// 	if (savedStartDate) {
// 		startDate = new Date(savedStartDate)
// 	} else {
// 		startDate = new Date()

// 		localStorage.setItem(STORAGE_KEY, startDate.toISOString())
// 	}

// 	const targetDate = new Date(startDate)

// 	targetDate.setDate(targetDate.getDate() + COUNTDOWN_DAYS)

// 	return targetDate
// }

// const formatTime = (value: number) => String(value).padStart(2, '0')

// const Countdown = () => {
// 	const [time, setTime] = useState<TimeLeft | null>(null)

// 	useEffect(() => {
// 		const targetDate = getTargetDate()

// 		const updateTimer = () => {
// 			setTime(getTimeLeft(targetDate))
// 		}

// 		updateTimer()

// 		const interval = setInterval(updateTimer, 1000)

// 		return () => clearInterval(interval)
// 	}, [])

// 	if (!time) {
// 		return null
// 	}

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
// 			<span className='text-2xl font-bold leading-none text-[#0F7B5C] md:text-3xl'>
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
// 		<span className='text-2xl font-bold leading-none text-[#0F7B5C] md:text-3xl'>
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

interface CountdownDates {
	startDate: Date
	endDate: Date
}

const START_DATE_KEY = 'countdown_start_date'
const END_DATE_KEY = 'countdown_end_date'

const COUNTDOWN_DAYS = 3

const createCountdownDates = (): CountdownDates => {
	const startDate = new Date()

	const endDate = new Date(startDate)
	endDate.setDate(endDate.getDate() + COUNTDOWN_DAYS)

	localStorage.setItem(START_DATE_KEY, startDate.toISOString())
	localStorage.setItem(END_DATE_KEY, endDate.toISOString())

	return {
		startDate,
		endDate,
	}
}

const getCountdownDates = (): CountdownDates => {
	const savedStartDate = localStorage.getItem(START_DATE_KEY)
	const savedEndDate = localStorage.getItem(END_DATE_KEY)

	if (!savedStartDate || !savedEndDate) {
		return createCountdownDates()
	}

	const startDate = new Date(savedStartDate)
	const endDate = new Date(savedEndDate)

	const isInvalid =
		Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())

	if (isInvalid) {
		return createCountdownDates()
	}

	const now = Date.now()

	// Старый таймер уже закончился
	if (now >= endDate.getTime()) {
		return createCountdownDates()
	}

	// Таймер ещё работает
	return {
		startDate,
		endDate,
	}
}

const getTimeLeft = (endDate: Date): TimeLeft => {
	const difference = Math.max(endDate.getTime() - Date.now(), 0)

	return {
		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / (1000 * 60)) % 60),
		seconds: Math.floor((difference / 1000) % 60),
	}
}

const formatTime = (value: number) => String(value).padStart(2, '0')

const Countdown = () => {
	const [time, setTime] = useState<TimeLeft | null>(null)

	useEffect(() => {
		let { endDate } = getCountdownDates()

		const updateTimer = () => {
			// Если таймер закончился прямо во время
			// нахождения пользователя на странице
			if (Date.now() >= endDate.getTime()) {
				const newDates = createCountdownDates()

				endDate = newDates.endDate
			}

			setTime(getTimeLeft(endDate))
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
