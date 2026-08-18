import { FaStar } from 'react-icons/fa'

interface Props {
	percent?: number
}

const PartialStar = ({ percent = 50 }: Props) => {
	return (
		<div className='relative h-4 w-4 sm:w-5 sm:h-5'>
			<FaStar className='absolute inset-0 h-full w-full text-gray-300 ' />

			<div
				className='absolute inset-y-0 left-0 overflow-hidden'
				style={{ width: `${percent}%` }}
			>
				<FaStar className='h-4 w-4 min-w-4 text-[#F5B832] sm:w-5 sm:h-5' />
			</div>
		</div>
	)
}

export default PartialStar
