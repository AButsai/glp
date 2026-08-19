'use client'

import Image from 'next/image'
import { useState } from 'react'

const BeforeAfter = () => {
	const [position, setPosition] = useState(50)

	return (
		<div className='relative mb-5 md:mb-0 aspect-square w-full overflow-hidden rounded-[28px] bg-white shadow-md'>
			<Image
				src='/after.avif'
				alt='After'
				fill
				className='object-cover'
				sizes='(max-width: 768px) 100vw, 600px'
			/>

			<div
				className='absolute inset-0 z-10 overflow-hidden'
				style={{
					clipPath: `inset(0 ${100 - position}% 0 0)`,
				}}
			>
				<Image
					src='/before.avif'
					alt='Before'
					fill
					className='object-cover'
					sizes='(max-width: 768px) 100vw, 600px'
				/>
			</div>

			<p className='absolute left-4 top-4 z-30 rounded-full bg-[#F5F5F7] px-5 py-2 text-sm font-bold uppercase text-[#1D2433] sm:left-8 sm:top-8 sm:text-lg'>
				Before
			</p>

			<p className='absolute right-4 top-4 z-30 rounded-full bg-[#F5F5F7] px-5 py-2 text-sm font-bold uppercase text-[#1D2433] sm:right-8 sm:top-8 sm:text-lg'>
				After
			</p>

			<div
				className='pointer-events-none absolute bottom-0 top-0 z-20 w-[4px] -translate-x-1/2 bg-white'
				style={{
					left: `${position}%`,
				}}
			/>

			<div
				className='pointer-events-none absolute top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-5'
				style={{
					left: `${position}%`,
				}}
			>
				<span
					className='
						h-0
						w-0
						border-y-[14px]
						border-r-[20px]
						border-y-transparent
						border-r-white
					'
				/>

				<span
					className='
						h-0
						w-0
						border-y-[14px]
						border-l-[20px]
						border-y-transparent
						border-l-white
					'
				/>
			</div>

			<input
				type='range'
				min='0'
				max='100'
				value={position}
				onChange={e => setPosition(Number(e.target.value))}
				aria-label='Compare before and after'
				className='absolute inset-0 z-40 h-full w-full cursor-ew-resize opacity-0'
			/>
		</div>
	)
}

export default BeforeAfter
