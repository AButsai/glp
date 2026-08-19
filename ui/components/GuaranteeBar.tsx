import { BsCheckCircle, BsSlashCircle } from 'react-icons/bs'

const GuaranteeBar = () => {
	return (
		<div
			className='
				grid
				grid-cols-2
				items-center
				gap-x-3
				gap-y-3
				text-[#111827]

				md:flex
				md:justify-center
				md:gap-10
			'
		>
			<div className='flex items-center justify-center gap-2 whitespace-nowrap'>
				<BsSlashCircle className='size-5 shrink-0' />
				<span className='text-base md:text-lg'>No Hidden Fees</span>
			</div>

			<div className='flex items-center justify-center gap-2 whitespace-nowrap'>
				<BsSlashCircle className='size-5 shrink-0' />
				<span className='text-base md:text-lg'>No Monthly Membership</span>
			</div>

			<div
				className='
					col-span-2
					flex
					items-center
					justify-center
					gap-2
					whitespace-nowrap

					md:col-auto
				'
			>
				<BsCheckCircle className='size-5 shrink-0' />
				<span className='text-base md:text-lg'>Cancel Anytime</span>
			</div>
		</div>
	)
}

export default GuaranteeBar
