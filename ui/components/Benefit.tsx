import { ReactNode } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

interface BenefitProps {
	children: ReactNode
}

const Benefit = ({ children }: BenefitProps) => {
	return (
		<p className='flex items-center gap-2 text-xs leading-tight sm:text-sm'>
			<FaCheckCircle className='size-4 shrink-0 text-[#0F7B5C] sm:size-5' />
			<span>{children}</span>
		</p>
	)
}

export default Benefit
