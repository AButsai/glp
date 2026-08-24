'use client'

import { LINK_QUIZ } from '@/constants/base-constants'
import Link from 'next/link'
import { type FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	title: string
	className?: string
}

const LinkQuiz: FC<Props> = ({ title, className }) => {
	return (
		<Link
			href={LINK_QUIZ}
			className={twMerge(
				'py-1 px-3 text-sm bg-[#0F7B5C] text-center text-white rounded-xl transition duration-200',
				className,
			)}
		>
			{title}
		</Link>
	)
}

export default LinkQuiz
