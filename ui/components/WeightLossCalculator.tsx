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
		<section className='w-full bg-[#f4f5f7] px-4 py-6'>
			<div className='mx-auto max-w-107'>
				<div className='rounded-4xl bg-white px-6 pb-6 pt-8'>
					<h2 className='mx-auto max-w-90 text-center text-[34px] font-bold leading-[1.1] text-[#111827]'>
						{"Let's See How much weight can you shed by next spring?"}
					</h2>

					<div className='my-8 h-px w-full bg-black/80' />

					<p className='mb-4 text-center text-[22px] font-bold text-black'>
						Your current weight:
					</p>

					<div className='mx-auto flex h-16 w-44 items-center justify-center rounded-full border border-[#d5d5d5]'>
						<span className='text-[40px] font-normal leading-none text-black'>
							{weight}
						</span>
					</div>

					<div className='relative mt-12 h-16 w-full'>
						<div className='absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 bg-[#234d82]' />

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
					<div className='mt-5 flex min-h-28 items-center justify-center gap-8 rounded-full bg-linear-to-r from-[#267889] to-[#37a99c] px-8 py-4 text-white'>
						<p className='max-w-32 text-center text-[24px] font-bold leading-[1.15]'>
							You could easily lose:
						</p>

						<div className='flex items-baseline gap-2'>
							<span className='text-[48px] font-bold leading-none'>
								{lossWeight}
							</span>

							<span className='text-[42px] font-bold leading-none'>lbs</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WeightLossCalculator
