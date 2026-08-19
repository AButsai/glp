'use client'

import Image from 'next/image'
import { type FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	src: string
	className: string
	classNameImg?: string
}

const HelpYouImage: FC<Props> = ({ src, className, classNameImg }) => {
	return (
		<div
			className={twMerge(
				'absolute w-[80px] h-[170px] lg:w-[120px] lg:h-auto',
				className,
			)}
		>
			<Image
				src={src}
				width={486}
				height={1100}
				alt=''
				className={twMerge('block w-full h-full', classNameImg)}
			/>
		</div>
	)
}

export default HelpYouImage
