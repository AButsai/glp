import Image from 'next/image'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	className?: string
}

const Logo: FC<Props> = ({ className }) => {
	return (
		<div className={twMerge('w-12 h-12', className)}>
			<Image src={'/brand-peop.png'} width={1254} height={1254} alt='' />
		</div>
	)
}

export default Logo
