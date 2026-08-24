import { ReactNode } from 'react'
import { IconType } from 'react-icons'
import { FaCheckCircle } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

interface BenefitProps {
	children: ReactNode
	Icon?: IconType
	className?: string
	classNameIcon?: string
}

const Benefit = ({
	Icon = FaCheckCircle,
	children,
	className,
	classNameIcon,
}: BenefitProps) => {
	return (
		<p
			className={twMerge(
				'flex items-center gap-2 text-md leading-tight sm:text-lg',
				className,
			)}
		>
			<Icon
				className={twMerge(
					'size-4 shrink-0 text-[#0F7B5C] sm:size-5',
					classNameIcon,
				)}
			/>
			<span className='flex items-center gap-1'>{children}</span>
		</p>
	)
}

export default Benefit
