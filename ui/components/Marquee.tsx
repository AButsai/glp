import { FC } from 'react'
import { FaCheck } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

interface Props {
	items: string[]
	mode: 'img' | 'text'
	className?: string
}

const Marquee: FC<Props> = ({ items, mode, className }) => {
	return (
		<div className={twMerge('w-full overflow-hidden  py-3', className)}>
			<div className='flex w-max animate-marquee'>
				{Array.from({ length: 6 }).map((_, groupIndex) => (
					<div
						key={groupIndex}
						aria-hidden={groupIndex !== 0}
						className='flex shrink-0 items-center gap-10 pr-10'
					>
						{items.map(item =>
							mode === 'text' ? (
								<div
									key={`${groupIndex}-${item}`}
									className='flex shrink-0 items-center gap-2 whitespace-nowrap text-sm md:text-base'
								>
									<FaCheck className='size-4 shrink-0 text-[#0F7B5C]' />

									<span>{item}</span>
								</div>
							) : (
								<div
									key={`${groupIndex}-${item}`}
									className='h-[50px] w-[100px] bg-gray-400 transition-colors duration-300 hover:bg-[#0F7B5C]'
									style={{
										WebkitMaskImage: `url(${item})`,
										maskImage: `url(${item})`,
										WebkitMaskRepeat: 'no-repeat',
										maskRepeat: 'no-repeat',
										WebkitMaskPosition: 'center',
										maskPosition: 'center',
										WebkitMaskSize: 'contain',
										maskSize: 'contain',
									}}
								/>
							),
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Marquee
