'use client'

import { type FC, useState } from 'react'

interface Props {
	minWeight?: number
	maxWeight?: number
	initialWeight?: number
}

const WeightLossCalculator: FC<Props> = ({
	minWeight = 100,
	maxWeight = 600,
	initialWeight = 100,
}) => {
	const [weight, setWeight] = useState(initialWeight)

	const lossWeight = Math.round(weight * 0.2)

	const progress = ((weight - minWeight) / (maxWeight - minWeight)) * 100

	return (
		<div className='rounded-4xl bg-white px-6 pb-6 pt-8'>
			<h2 className='font-roboto text-[32px] font-bold leading-[1.1] tracking-[0.24px]    text-center'>
				{"Let's See How much weight can you shed by next spring?"}
			</h2>

			<div className='my-8 h-px w-full bg-black/80' />

			<p className='mb-4 text-center text-[22px] font-bold text-black'>
				Your current weight:
			</p>

			<div className='mx-auto flex h-16 w-44 items-center justify-center rounded-full border border-[#d5d5d5]'>
				<span className='text-4xl font-normal leading-none text-black'>
					{weight}
				</span>
			</div>

			<div className='relative mt-12 h-16 w-full'>
				<div className='absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 bg-[#0F7B5C]' />

				<div
					className='pointer-events-none absolute top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fafafa] shadow-sm'
					style={{
						left: `calc(32px + ${progress} * (100% - 64px) / 100)`,
					}}
				>
					<div className='flex gap-1'>
						<span className='h-5 w-px bg-[#999]' />
						<span className='h-5 w-px bg-[#999]' />
						<span className='h-5 w-px bg-[#999]' />
					</div>
				</div>

				<input
					type='range'
					min={minWeight}
					max={maxWeight}
					value={weight}
					onChange={e => setWeight(Number(e.target.value))}
					aria-label='Current weight'
					className='absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0'
				/>
			</div>

			{/* Result */}
			<div className='mt-5 flex min-h-20 items-center justify-center gap-8 rounded-full bg-linear-to-r from-[#0F7B5C] via-[#15aa80] to-[#0F7B5C] px-8 py-4 text-white'>
				<p className=' text-center text-lg font-bold leading-[1.15]'>
					You could lose:
				</p>

				<div className='flex items-baseline gap-2'>
					<span className='text-4xl font-bold leading-none'>{lossWeight}</span>

					<span className='text-3xl font-bold leading-none'>lbs</span>
				</div>
			</div>
			<p className='mt-6 max-w-[640px] text-center text-[12px]/[18px] text-[#6b7280]'>
				This calculator provides an estimate only and is not a prediction of
				your individual results. Actual weight loss depends on multiple clinical
				factors and is determined in consultation with your healthcare provider.
			</p>
		</div>
	)
}

export default WeightLossCalculator
