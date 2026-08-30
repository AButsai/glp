'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
	days: number
	hours: number
	minutes: number
	seconds: number
}

// Конец акции — 30 сентября 2026, 23:59 (по местному времени браузера).
// Дата фиксированная, при продлении/переносе акции поменять вручную.
const TARGET_DATE = new Date(2026, 8, 30, 23, 59, 0)

const getTimeLeft = (): TimeLeft | null => {
	const difference = TARGET_DATE.getTime() - Date.now()

	if (difference <= 0) {
		return null
	}

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
		const updateTimer = () => {
			setTime(getTimeLeft())
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
