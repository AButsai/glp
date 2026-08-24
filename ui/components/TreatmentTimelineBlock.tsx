import { LuSquareCheckBig } from 'react-icons/lu'

const timelineItems = [
	{
		id: 1,
		label: 'Today',
		title: 'Get $200 Off Semaglutide & $250 Off Tirzepatide Today!',
		labelClassName: 'text-[#D8B18C]',
	},
	{
		id: 2,
		label: 'In 1 day',
		title: 'Provider writes an Rx',
		labelClassName: 'text-[#B99C73]',
	},
	{
		id: 3,
		label: 'Within 1 day',
		title: 'Your order ships from our licensed US pharmacies',
		labelClassName: 'text-[#C79BCB]',
	},
	{
		id: 4,
		label: 'Free & Discreet 1-2 Day Delivery',
		title: 'Get your medication',
		labelClassName: 'text-[#E993D7]',
	},
	{
		id: 5,
		label: 'On-going care & support with VelmoRx Nursing Staff',
		title: 'Begin treatment',
		labelClassName: 'text-[#C86ED8]',
	},
]

const TreatmentTimelineBlock = () => {
	return (
		<div className='w-full'>
			{timelineItems.map((item, index) => (
				<div
					key={item.id}
					className={`
						py-3
						${index === 0 ? 'pt-0' : ''}
					`}
				>
					<p
						className={`
							mb-1
							text-[13px]
							font-semibold
							leading-none

							sm:text-sm
							md:text-[15px]
							lg:text-base

							${item.labelClassName}
						`}
					>
						{item.label}
					</p>

					<div className='flex items-start gap-1'>
						<LuSquareCheckBig
							className='
								mt-[1px]
								size-[18px]
								shrink-0
								stroke-[2.2]
								text-[#32B329]

								sm:size-5
								md:size-[22px]
							'
						/>

						<p
							className='
								min-w-0
								text-lg
								font-semibold
								leading-[1.2]
								tracking-[-0.015em]
								text-[#111827]

								
							'
						>
							{item.title}
						</p>
					</div>

					<div className='mt-1 h-px w-full bg-black/80 sm:mt-4' />
				</div>
			))}
		</div>
	)
}

export default TreatmentTimelineBlock
