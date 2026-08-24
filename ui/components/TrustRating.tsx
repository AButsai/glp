import { FaStar } from 'react-icons/fa'

interface TrustRatingProps {
	rating?: number
	customers?: string
}

const TrustRating = ({
	rating = 4.8,
	customers = '125,000+',
}: TrustRatingProps) => {
	const maxRating = 5

	return (
		<div
			className='flex items-center gap-2 justify-center'
			aria-label={`${rating} out of ${maxRating}, ${customers} happy customers`}
		>
			<p className='shrink-0 font-bold leading-none'>Excellent {rating}</p>

			<div className='flex shrink-0 gap-0.5'>
				{Array.from({ length: maxRating }).map((_, index) => {
					const fill = Math.max(0, Math.min(1, rating - index))

					return (
						<div
							key={index}
							className='relative flex size-5 items-center justify-center overflow-hidden bg-gray-300'
						>
							<div
								className='absolute inset-y-0 left-0 bg-[#0F7B5C]'
								style={{
									width: `${fill * 100}%`,
								}}
							/>

							<FaStar className='relative z-10 size-[16px] text-white' />
						</div>
					)
				})}
			</div>

			<div className='shrink-0 leading-none'>
				<p className='text-base font-bold leading-none'>{customers}</p>

				<p className='text-sm leading-none'>happy customers</p>
			</div>
		</div>
	)
}

export default TrustRating
