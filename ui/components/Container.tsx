'use client'

import { ReactNode, type FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	children: ReactNode
	className?: string
}

const Container: FC<Props> = ({ children, className }) => {
	return (
		<div
			className={twMerge(
				'w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10',
				className,
			)}
		>
			{children}
		</div>
	)
}

export default Container
