'use client'

import GuaranteeBar from './GuaranteeBar'
import LinkQuiz from './LinkQuiz'
import TrustRating from './TrustRating'

const ButtonRatingBlock = ({}) => {
	return (
		<>
			<div className='mt-8 flex items-stretch justify-center gap-4'>
				<LinkQuiz
					title='Get started'
					className='bg-[#0F7B5C] text-white shadow-lg inset-shadow-sm inset-shadow-green-300 rounded-4xl px-4 py-3 text-lg hover:bg-[#0b5b44] lg:w-50'
				/>
				<LinkQuiz
					title='See pricing'
					className='bg-white text-black rounded-4xl px-4 py-3 text-lg border border-gray-300 hover:bg-[#0F7B5C] lg:w-50 hover:text-white shadow-lg inset-shadow-sm hover:inset-shadow-green-300'
				/>
			</div>
			<div className='my-5'>
				<GuaranteeBar />
			</div>
			<TrustRating />
		</>
	)
}

export default ButtonRatingBlock
