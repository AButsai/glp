'use client'

import { ReactNode, type FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	children: ReactNode
	id?: string
	className?: string
}

const Section: FC<Props> = ({ children, id, className }) => {
	return (
		<section id={id} className={twMerge('py-5', className)}>
			{children}
		</section>
	)
}

export default Section
