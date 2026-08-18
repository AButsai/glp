import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	className?: string
}

const Logo: FC<Props> = ({ className }) => {
	return (
		<div className={twMerge('', className)}>
			<p>Logo</p>
		</div>
	)
}

export default Logo
