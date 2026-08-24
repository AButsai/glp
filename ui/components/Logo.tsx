import Image from 'next/image'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	className?: string
}

const Logo: FC<Props> = ({ className }) => {
	return (
		<div className={twMerge('w-30 md:w-44 md:h-9', className)}>
			<Image src={'/logo.png'} width={1318} height={269} alt='' />
		</div>
	)
}

export default Logo
